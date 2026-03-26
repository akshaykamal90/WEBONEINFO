import React from 'react'
import Sidebar from '../components/Sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
