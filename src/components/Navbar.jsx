import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { links } from '../data/links'
import { useAuth } from '../context/AuthContext'
import { LogOut, User } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hide main Navbar on specialized dashboard routes as they have their own navs
  // Moved after hooks to prevent "Fewer hooks than expected" error
  const isDashboard = location.pathname.includes('/dashboard')
  if (isDashboard) return null

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 py-3 shadow-sm backdrop-blur-md border-b border-transparent' 
          : 'bg-white/50 py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 font-sans">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-lg transition-transform group-hover:scale-105">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">AfyaCare</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {links.nav.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => 
                `text-sm font-semibold leading-6 px-4 py-2 transition-all rounded-full ${
                  isActive 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Auth Actions */}
        <div className="hidden lg:flex lg:items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link 
                to={`/${user.role}/dashboard`}
                className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-600 transition"
              >
                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <User className="h-4 w-4" />
                </div>
                Portal
              </Link>
              <button 
                onClick={logout}
                className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-red-50 hover:text-red-600 transition"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <Link
              to={links.login}
              className="rounded-lg bg-emerald-600 px-6 py-2 text-sm font-bold text-white transition hover:bg-emerald-700 shadow-sm transform active:scale-95"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            type="button"
            className="rounded-lg p-2.5 text-slate-700 active:bg-slate-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="w-6 h-6 flex flex-col justify-between p-1">
               <div className="h-0.5 bg-current w-full"></div>
               <div className="h-0.5 bg-current w-full"></div>
               <div className="h-0.5 bg-current w-full"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 lg:hidden animate-in fade-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">A</div>
              <span className="text-lg font-bold">AfyaCare</span>
            </div>
            <button 
              className="p-2 text-slate-600 active:bg-slate-100 rounded-lg text-2xl font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="mt-12 space-y-6">
            {links.nav.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href} 
                className={({ isActive }) => 
                  `block text-xl font-bold ${isActive ? 'text-emerald-600' : 'text-slate-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <hr className="border-slate-100" />
            {user ? (
               <>
                 <Link
                   to={`/${user.role}/dashboard`}
                   className="block w-full text-center rounded-xl bg-emerald-50 py-4 text-lg font-bold text-emerald-700"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                   My Dashboard
                 </Link>
                 <button
                   onClick={() => { logout(); setMobileMenuOpen(false); }}
                   className="block w-full text-center rounded-xl bg-red-50 py-4 text-lg font-bold text-red-600"
                 >
                   Logout
                 </button>
               </>
            ) : (
              <Link
                to={links.login}
                className="block w-full text-center rounded-xl bg-emerald-600 py-4 text-lg font-bold text-white shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar