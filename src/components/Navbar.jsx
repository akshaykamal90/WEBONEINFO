import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isAuthenticated, logout, user } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isActivePath = (path) => location.pathname === path

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/product-details', label: 'Products' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200/80 dark:border-gray-800/80 shadow-sm'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img
              src="/logo.jpeg"
              alt="Brand Logo"
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105 rounded-xl transition-all duration-300 shadow-sm"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={
                  isActivePath(link.to)
                    ? 'nav-link-active'
                    : 'nav-link'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <div
              className="flex items-center justify-center p-1.5 rounded-xl text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200 group"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <Expand
                duration={750}
                toggled={isDark}
                toggle={toggleTheme}
                reversed
                className="text-xl"
              />
            </div>

            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">{user?.name?.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{user?.name}</span>
                </div>
                {user?.role === 'admin' && (
                  <Link to="/dashboard" className="btn-primary text-sm px-4 py-2">
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="btn-ghost text-sm px-4 py-2"
                >
                  Sign out
                </button>
              </>
            ) : (
              <></>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <div
              className="flex items-center justify-center p-1.5 rounded-xl text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200 group"
            >
              <Expand
                duration={750}
                toggled={isDark}
                toggle={toggleTheme}
                reversed
                className="text-lg"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200 group"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${isActivePath(link.to)
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-2">
              {isAuthenticated ? (
                <>
                  {user?.role === 'admin' && (
                    <Link
                      to="/dashboard"
                      className="block w-full text-center px-4 py-3 rounded-xl bg-primary-600 text-white text-sm font-semibold"
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => { handleLogout(); setIsMenuOpen(false) }}
                    className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-all duration-150"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
