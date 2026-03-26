import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Briefcase, 
  Settings,
  LogOut,
  Home
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Sidebar = () => {
  const location = useLocation()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', roles: ['admin', 'alumni', 'student'] },
    { path: '/dashboard/alumni', icon: Users, label: 'Alumni', roles: ['admin'] },
    { path: '/dashboard/events', icon: Calendar, label: 'Events', roles: ['admin', 'alumni', 'student'] },
    { path: '/dashboard/jobs', icon: Briefcase, label: 'Jobs', roles: ['admin', 'alumni', 'student'] },
    { path: '/dashboard/settings', icon: Settings, label: 'Settings', roles: ['admin', 'alumni', 'student'] },
  ]

  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(user?.role)
  )

  const isActivePath = (path) => location.pathname === path

  return (
    <div className="w-64 bg-gray-900 text-white h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <Home className="h-8 w-8 text-primary-400" />
          <span className="text-xl font-bold">iMentor</span>
        </div>

        <div className="mb-8">
          <p className="text-sm text-gray-400 mb-2">Welcome back,</p>
          <p className="font-semibold">{user?.name}</p>
          <p className="text-xs text-primary-400 capitalize">{user?.role}</p>
        </div>

        <nav className="space-y-2">
          {filteredMenuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActivePath(item.path)
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
