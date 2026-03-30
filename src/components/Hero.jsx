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
                to="/contact"
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

          {/* Right – Visual Image Banner */}
          <div className="relative mt-12 lg:mt-0">
            {/* Main banner image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                <img 
                  src="/webone banner.jpeg" 
                  alt="Webone Education Platform" 
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating stat cards - Hidden on mobile for clarity */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-4 animate-float">
              <p className="text-2xl font-extrabold text-primary-600">98%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Satisfaction Rate</p>
            </div>

            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-4 animate-float" style={{ animationDelay: '3s' }}>
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
