import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Briefcase, Code, Megaphone, MapPin, 
  Clock, ArrowRight, CheckCircle, Heart, 
  Laptop, Coffee, Zap 
} from 'lucide-react'

const Careers = () => {
  const jobs = [
    {
      title: "React Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Kochi, Kerala / Remote",
      icon: Code,
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-50 dark:bg-blue-900/30",
      description: "We are looking for an experienced React Developer to build and maintain high-quality user interfaces for our flagship educational platform.",
      requirements: [
        "Strong proficiency in React.js and modern JavaScript",
        "Experience with Tailwind CSS and responsive design",
        "Ability to integrate RESTful APIs seamlessly",
        "Strong problem-solving and state management skills"
      ]
    },
    {
      title: "Digital Marketer",
      department: "Marketing",
      type: "Full-time",
      location: "Kochi, Kerala",
      icon: Megaphone,
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-50 dark:bg-purple-900/30",
      description: "Join our marketing team to drive brand awareness and digital growth. You will manage campaigns across multiple platforms representing Weboneinfo.",
      requirements: [
        "Proven experience in SEO, SEM, and Social Media Marketing",
        "Ability to analyze metrics and optimize campaign ROI",
        "Experience with content creation and email campaigns",
        "Creative mindset with strong communication skills"
      ]
    },
    {
      title: "Sales Executive",
      department: "Sales",
      type: "Full-time",
      location: "Kochi, Kerala",
      icon: Briefcase,
      iconColor: "text-green-600 dark:text-green-400",
      iconBg: "bg-green-50 dark:bg-green-900/30",
      description: "We are seeking a driven Sales Executive to expand our B2B client base, specifically targeting schools, colleges, and educational institutions.",
      requirements: [
        "Experience in B2B sales, preferably in Ed-Tech or SaaS",
        "Strong lead generation and client relationship skills",
        "Excellent presentation and negotiation abilities",
        "Track record of meeting and exceeding sales targets"
      ]
    }
  ]

  const benefits = [
    {
      title: "Flexible Work",
      description: "Hybrid and remote options for a healthy work-life balance.",
      icon: Laptop,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health coverage for you and your family.",
      icon: Heart,
      color: "text-red-500",
      bg: "bg-red-50 dark:bg-red-900/20"
    },
    {
      title: "Learning Budget",
      description: "Annual allowance for courses, books, and conferences.",
      icon: Zap,
      color: "text-yellow-500",
      bg: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      title: "Great Culture",
      description: "Inclusive, fun environment with regular team building events.",
      icon: Coffee,
      color: "text-orange-500",
      bg: "bg-orange-50 dark:bg-orange-900/20"
    }
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6 border border-primary-100 dark:border-primary-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          We are hiring!
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Help us shape the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Education</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Join <span className="font-semibold text-gray-800 dark:text-white">Web One Info (P) Ltd</span> and work alongside passionate people building intelligent, AI-driven software solutions for institutions.
        </p>
      </section>

      {/* OPEN POSITIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Open Positions</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 group flex flex-col h-full">
              
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${job.iconBg} ${job.iconColor} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <job.icon className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {job.department}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {job.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-1.5 opacity-70" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-1.5 opacity-70" />
                  {job.type}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                {job.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase mb-4">Requirements</h4>
                <ul className="space-y-3">
                  {job.requirements.map((req, reqIdx) => (
                    <li key={reqIdx} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to="/contact" 
                className="btn-primary w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN US / PERKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Perks & Benefits
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-16 h-16 ${benefit.bg} rounded-full flex items-center justify-center mx-auto mb-6 shrink-0`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Careers
