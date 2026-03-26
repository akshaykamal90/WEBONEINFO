import React from 'react'
import { TrendingUp } from 'lucide-react'

const StatCard = ({ title, value, icon, change, changeType }) => {
  return (
    <div className="stat-card">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center">
          {icon}
        </div>
        {change && (
          <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            changeType === 'positive'
              ? 'text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950'
              : 'text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-950'
          }`}>
            <TrendingUp className="h-3 w-3" />
            {change}
          </span>
        )}
      </div>
      <p className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">{value}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
    </div>
  )
}

export default StatCard
