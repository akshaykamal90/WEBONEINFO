import React from 'react'
import { GraduationCap, BarChart, Users, Target, Eye, CheckCircle } from 'lucide-react'

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl pb-4">
            About Us
          </h1>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-gray-800 dark:text-white">Web One Info (P) Ltd</span>, we are redefining education through intelligent, AI-driven software solutions. Our platform <span className="font-semibold text-primary-600 dark:text-primary-400">iMentor</span> empowers institutions to enhance academic performance, streamline management, and create meaningful learning experiences.
          </p>
        </div>

        {/* What We Do */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">What We Do</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-200 group">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <BarChart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Academic Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Monitor, analyze, and improve academic performance with real-time dashboards, attendance tracking, and data-driven insights for smarter decision-making.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-200 group">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Learning Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Enable smart classrooms with organized learning materials, digital content management, and seamless access for students and educators.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-200 group">
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Alumni Network
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Build strong alumni communities with networking, event management, job opportunities, and career support through a centralized system.
              </p>
            </div>

          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 lg:p-12 text-white shadow-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
            <Target className="w-40 h-40 absolute -right-8 -bottom-8 text-white/10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
            <h2 className="text-3xl font-bold mb-6 relative z-10">
              Our Mission
            </h2>
            <p className="text-primary-50 text-xl leading-relaxed relative z-10">
              To transform education through technology by delivering intelligent systems that enhance learning, improve efficiency, and empower institutions with data-driven insights.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 lg:p-12 text-white shadow-lg overflow-hidden relative group hover:-translate-y-1 transition-transform duration-300">
            <Eye className="w-40 h-40 absolute -right-8 -bottom-8 text-white/5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
            <h2 className="text-3xl font-bold mb-6 relative z-10">
              Our Vision
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed relative z-10">
              To become a leading provider of innovative educational software solutions, enabling institutions worldwide to achieve excellence through digital transformation.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AI-Driven Solutions",
              "Centralized Management",
              "Role-Based Access",
              "Real-Time Analytics",
              "Secure & Scalable",
              "Comprehensive Ecosystem"
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About