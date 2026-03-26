import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Sparkles, CheckCircle2 } from 'lucide-react'

const Hero = () => {
  const highlights = [
    'Alumni Management',
    'Learning Management System',
    'Student Administration',
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-950 border border-primary-100 dark:border-primary-900 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by 500+ Educational Institutions
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              The Complete{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Education
              </span>{' '}
              Platform
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Manage alumni, deliver courses, and administer students — all in one beautifully unified platform designed for modern institutions.
            </p>

            {/* Feature highlights */}
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/demo"
                className="btn-primary px-7 py-3.5 text-base rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30"
              >
                Book a Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/product-details"
                className="btn-secondary px-7 py-3.5 text-base rounded-xl"
              >
                <Play className="h-4 w-4" />
                Watch overview
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['A', 'B', 'C', 'D', 'E'].map((l, i) => (
                  <div
                    key={l}
                    className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-950 flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: ['#6366f1','#8b5cf6','#ec4899','#f97316','#10b981'][i],
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-400">
                  {[1,2,3,4,5].map((i) => <span key={i} className="text-sm">★</span>)}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">2,847+ happy institutions</p>
              </div>
            </div>
          </div>

          {/* Right – Visual Dashboard card */}
          <div className="relative hidden lg:block">
            {/* Main dashboard preview card */}
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-md w-48 mx-auto" />
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Total Alumni', value: '2,847', color: 'bg-primary-50 dark:bg-primary-950', text: 'text-primary-700 dark:text-primary-300' },
                    { label: 'Events Active', value: '24', color: 'bg-emerald-50 dark:bg-emerald-950', text: 'text-emerald-700 dark:text-emerald-300' },
                    { label: 'Jobs Posted', value: '156', color: 'bg-amber-50 dark:bg-amber-950', text: 'text-amber-700 dark:text-amber-300' },
                  ].map((stat) => (
                    <div key={stat.label} className={`${stat.color} rounded-xl p-3`}>
                      <p className={`text-xl font-bold ${stat.text}`}>{stat.value}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="bg-gray-50 dark:bg-gray-800/60 rounded-xl p-4 mb-4">
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 45, 80, 60, 90, 75, 95, 70, 85, 100, 78].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-primary-400 dark:bg-primary-500 opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Alumni engagement — last 12 months</p>
                </div>

                {/* Recent alumni list */}
                <div className="space-y-2.5">
                  {[
                    { name: 'Sarah Johnson', role: 'Google · SWE', badge: 'Active' },
                    { name: 'Michael Chen', role: 'Microsoft · PM', badge: 'Mentor' },
                    { name: 'Emily Davis', role: 'Apple · Design', badge: 'New' },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-bold">
                          {a.name[0]}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">{a.name}</p>
                          <p className="text-[10px] text-gray-400 dark:text-gray-500">{a.role}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300">
                        {a.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-4 animate-float">
              <p className="text-2xl font-extrabold text-primary-600">98%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Satisfaction Rate</p>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-4 animate-float" style={{ animationDelay: '3s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">Platform live</p>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">50K+ users active now</p>
            </div>
          </div>
        </div>

        {/* Stats row at bottom */}
        <div className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            {[
              { value: '500+', label: 'Institutions' },
              { value: '50K+', label: 'Active Users' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
