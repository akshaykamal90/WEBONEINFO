import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CTA = ({ title, subtitle, buttonText, to }) => {
  return (
    <section className="relative overflow-hidden bg-primary-600 dark:bg-primary-700">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-primary-100 mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>
        <Link
          to={to}
          className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-3.5 rounded-xl font-semibold text-sm
                     hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {buttonText}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export default CTA
