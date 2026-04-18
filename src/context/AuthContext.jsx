import React, { createContext, useContext, useState, useEffect } from 'react'
import { loginUser } from '../services/api'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Restore persisted session
    const storedUser = localStorage.getItem('mediassist_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Returns { success, error }
  const login = async (email, password) => {
    try {
      const { data } = await loginUser(email, password)
      if (data.success) {
        const userData = { ...data.data, lastLogin: new Date().toISOString() }
        setUser(userData)
        localStorage.setItem('mediassist_user', JSON.stringify(userData))
        localStorage.setItem('mediassist_token', data.token)
        return { success: true, user: userData }
      }
      return { success: false, error: data.message || 'Login failed' }
    } catch (err) {
      const message = err.response?.data?.message || 'Unable to connect to server'
      return { success: false, error: message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('mediassist_user')
    localStorage.removeItem('mediassist_token')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
