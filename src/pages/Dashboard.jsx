import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import StatCard from '../components/StatCard'
import {
  Users,
  Calendar,
  Briefcase,
  TrendingUp,
  Search,
  Filter,
  MoreVertical,
  MapPin,
  ChevronRight,
} from 'lucide-react'

const Dashboard = () => {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')

  const stats = {
    admin: [
      { title: 'Total Alumni', value: '2,847', icon: <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+12%', changeType: 'positive' },
      { title: 'Active Events', value: '24', icon: <Calendar className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+8%', changeType: 'positive' },
      { title: 'Jobs Posted', value: '156', icon: <Briefcase className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+23%', changeType: 'positive' },
      { title: 'Active Users', value: '1,423', icon: <TrendingUp className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+18%', changeType: 'positive' },
    ],
    alumni: [
      { title: 'Profile Views', value: '234', icon: <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+5%', changeType: 'positive' },
      { title: 'Events Attended', value: '12', icon: <Calendar className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+2', changeType: 'positive' },
      { title: 'Mentorship Hours', value: '48', icon: <TrendingUp className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+15%', changeType: 'positive' },
      { title: 'Connections', value: '89', icon: <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+7%', changeType: 'positive' },
    ],
    student: [
      { title: 'Mentors Found', value: '15', icon: <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+3', changeType: 'positive' },
      { title: 'Events Registered', value: '8', icon: <Calendar className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+2', changeType: 'positive' },
      { title: 'Jobs Applied', value: '12', icon: <Briefcase className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+4', changeType: 'positive' },
      { title: 'Profile Views', value: '45', icon: <TrendingUp className="h-5 w-5 text-primary-600 dark:text-primary-400" />, change: '+12%', changeType: 'positive' },
    ],
  }

  const alumniData = [
    { id: 1, name: 'Sarah Johnson', batch: '2015', job: 'Senior Software Engineer', company: 'Google', location: 'San Francisco, CA' },
    { id: 2, name: 'Michael Chen', batch: '2018', job: 'Product Manager', company: 'Microsoft', location: 'Seattle, WA' },
    { id: 3, name: 'Emily Davis', batch: '2012', job: 'Marketing Director', company: 'Apple', location: 'Cupertino, CA' },
    { id: 4, name: 'James Wilson', batch: '2016', job: 'Data Scientist', company: 'Amazon', location: 'New York, NY' },
    { id: 5, name: 'Lisa Anderson', batch: '2019', job: 'UX Designer', company: 'Meta', location: 'Menlo Park, CA' },
    { id: 6, name: 'Robert Taylor', batch: '2014', job: 'Senior Consultant', company: 'Deloitte', location: 'Chicago, IL' },
  ]

  const upcomingEvents = [
    { id: 1, title: 'Alumni Networking Night', date: 'Dec 15, 2024', attendees: 45, type: 'Networking' },
    { id: 2, title: 'Career Fair 2024', date: 'Dec 20, 2024', attendees: 120, type: 'Career' },
    { id: 3, title: 'Tech Innovation Summit', date: 'Jan 10, 2025', attendees: 85, type: 'Conference' },
    { id: 4, title: 'Mentorship Programme Launch', date: 'Jan 15, 2025', attendees: 30, type: 'Programme' },
  ]

  const recentJobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'TechCorp', location: 'Remote', posted: '2 days ago' },
    { id: 2, title: 'Product Marketing Manager', company: 'StartupXYZ', location: 'San Francisco', posted: '3 days ago' },
    { id: 3, title: 'Data Engineer', company: 'DataTech', location: 'New York', posted: '5 days ago' },
    { id: 4, title: 'UX Researcher', company: 'DesignHub', location: 'Seattle', posted: '1 week ago' },
  ]

  const quickActions = {
    admin: [
      { label: 'Add New Alumni', color: 'text-primary-600 bg-primary-50 dark:bg-primary-950 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900' },
      { label: 'Create Event', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900' },
      { label: 'Post Job', color: 'text-amber-600 bg-amber-50 dark:bg-amber-950 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900' },
    ],
    alumni: [
      { label: 'Update Profile', color: 'text-primary-600 bg-primary-50 dark:bg-primary-950 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900' },
      { label: 'Become a Mentor', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900' },
      { label: 'Post Opportunity', color: 'text-amber-600 bg-amber-50 dark:bg-amber-950 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900' },
    ],
    student: [
      { label: 'Find Mentors', color: 'text-primary-600 bg-primary-50 dark:bg-primary-950 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900' },
      { label: 'Browse Jobs', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900' },
      { label: 'Join Events', color: 'text-amber-600 bg-amber-50 dark:bg-amber-950 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900' },
    ],
  }

  const currentStats = stats[user?.role] || stats.admin
  const currentActions = quickActions[user?.role] || quickActions.admin

  const filteredAlumni = alumniData.filter(
    (a) => !searchTerm || a.name.toLowerCase().includes(searchTerm.toLowerCase()) || a.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const initials = (name) => name.split(' ').map((n) => n[0]).join('')

  const badgeColors = ['from-primary-400 to-primary-600', 'from-emerald-400 to-emerald-600', 'from-amber-400 to-amber-600', 'from-rose-400 to-rose-600', 'from-violet-400 to-violet-600', 'from-sky-400 to-sky-600']

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back, <span className="text-primary-600">{user?.name}</span>!
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Here's what's happening with your alumni network today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {currentStats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alumni Table */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-gray-900 dark:text-white">
              {user?.role === 'admin' ? 'Recent Alumni' : 'Fellow Alumni'}
            </h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-2 text-xs border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all w-40"
                />
              </div>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Batch</th>
                  <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Position</th>
                  <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">Location</th>
                  <th className="py-2.5 px-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {filteredAlumni.map((alumni, idx) => (
                  <tr key={alumni.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${badgeColors[idx % badgeColors.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {initials(alumni.name)}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{alumni.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 hidden sm:table-cell">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{alumni.batch}</span>
                    </td>
                    <td className="py-3 px-3">
                      <p className="text-sm text-gray-800 dark:text-gray-200 truncate max-w-[140px]">{alumni.job}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{alumni.company}</p>
                    </td>
                    <td className="py-3 px-3 hidden md:table-cell">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{alumni.location}</span>
                    </td>
                    <td className="py-3 px-3">
                      <button className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredAlumni.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-sm text-gray-400 dark:text-gray-500">
                      No alumni match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Upcoming Events */}
          {user?.role !== 'student' && (
            <div className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{event.title}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{event.date}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-gray-400 dark:text-gray-500">{event.attendees} attending</span>
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400">{event.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Jobs */}
          {user?.role !== 'admin' && (
            <div className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Recent Jobs</h3>
              <div className="space-y-3">
                {recentJobs.map((job) => (
                  <div key={job.id} className="group flex items-start justify-between gap-2 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 truncate">{job.title}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{job.company}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-gray-500">
                          <MapPin className="h-3 w-3" />{job.location}
                        </div>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500">• {job.posted}</span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-300 dark:text-gray-600 group-hover:text-primary-500 transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Quick Actions</h3>
            <div className="space-y-2">
              {currentActions.map(({ label, color }) => (
                <button
                  key={label}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${color}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
