import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock, LogIn, ArrowLeft, Stethoscope } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    setIsLoading(true)
    const result = await login(email, password)
    setIsLoading(false)

    if (result.success) {
      const role = result.user?.role
      if (role === 'admin') navigate('/dashboard')
      else if (role === 'doctor') navigate('/dashboard')
      else navigate('/')
    } else {
      setError(result.error || 'Invalid credentials.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 flex items-center justify-center px-4 py-16 font-sans">

      {/* Decorative blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
        className="relative w-full max-w-lg"
      >
        {/* Card */}
        <div className="rounded-[40px] border border-white/70 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/60 px-10 py-12">

          {/* Logo & Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 260 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-[24px] bg-gradient-to-br from-emerald-600 to-emerald-500 shadow-xl shadow-emerald-500/30 mb-6 rotate-3"
            >
              <Stethoscope className="w-10 h-10 text-white -rotate-3" />
            </motion.div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">AfyaCare</h1>
            <p className="text-slate-500 font-medium">Sign in to your account</p>
          </div>

          <form className="space-y-5" onSubmit={handleSignIn}>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl bg-red-50 border border-red-100 px-5 py-4 text-sm font-semibold text-red-600"
              >
                {error}
              </motion.div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@hospital.com"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pl-12 pr-5 font-medium text-slate-700 outline-none shadow-inner transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pl-12 pr-5 font-medium text-slate-700 outline-none shadow-inner transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:from-emerald-700 hover:to-emerald-600 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-base"
              >
                <LogIn className="h-5 w-5" />
                {isLoading ? 'Signing in…' : 'Sign In'}
              </button>
            </div>

            {/* Footer links */}
            <div className="pt-2 text-center space-y-3">
              <p className="text-sm font-medium text-slate-500">
                Don't have an account?{' '}
                <Link to="/signup" className="font-bold text-emerald-600 hover:underline">
                  Register
                </Link>
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>

          </form>
        </div>

        {/* Bottom badge */}
        <p className="text-center text-xs font-semibold text-slate-400 mt-6 tracking-wide uppercase">
          AfyaCare Rwanda · Secure Login
        </p>
      </motion.div>
    </div>
  )
}

export default Login
