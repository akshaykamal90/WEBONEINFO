import React from "react";
import { 
  BarChart, GraduationCap, Users, Shield, Zap, BookOpen, 
  Settings, Bell, Calendar, CheckCircle, MonitorPlay, Network 
} from "lucide-react";

const ProductDetails = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          All-in-One Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Education Platform</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          AI-powered system to manage academics, learning, and alumni in one place. 
          Smart, secure, and data-driven solutions for modern institutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            Get Demo
          </button>
          <button className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* PRODUCT MODULES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid md:grid-cols-3 gap-8">
        
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <BarChart className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Academic Analytics</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Monitor performance with dashboards, attendance tracking, and real-time insights to improve academic outcomes.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Learning Management</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Organize content, enable smart classes, and provide seamless access to learning resources for students.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Alumni System</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Manage alumni networks, events, and career opportunities through a centralized platform.
          </p>
        </div>

      </section>

      {/* ROLE BASED ACCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl mb-4">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Role-Based Access System
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-center">
          {[
            { role: "Admin", icon: Settings },
            { role: "Teacher", icon: BookOpen },
            { role: "Student", icon: GraduationCap },
            { role: "Academic Admin", icon: Shield },
            { role: "Alumni", icon: Users }
          ].map(({ role, icon: Icon }) => (
            <div key={role} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center gap-3 hover:border-primary-500/50 hover:shadow-md transition-all duration-200">
              <Icon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
              <span className="font-semibold text-gray-800 dark:text-gray-200">{role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SMART FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Smart Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Performance Insights", icon: BarChart, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
            { title: "Management Tools", icon: Settings, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
            { title: "Instant Notifications", icon: Bell, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
            { title: "Leave Approval", icon: Calendar, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
          ].map((feature) => (
            <div key={feature.title} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center shrink-0`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">{feature.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LMS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-800 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6">
              <MonitorPlay className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Learning Management System</h2>
            <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
              {[
                "Organize learning materials",
                "Upload and manage content",
                "Easy student access",
                "Smart class integration"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-950/50 h-80 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center relative overflow-hidden group">
            <img 
              src="/lmspreviewimg.png" 
              alt="LMS Interface Preview" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ALUMNI SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-800 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-gray-50 dark:bg-gray-950/50 h-80 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center relative overflow-hidden group">
            <img 
              src="/alumnipreviewimg.png" 
              alt="Alumni Portal Preview" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <Network className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Alumni Management</h2>
            <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
              {[
                "Alumni registration & database",
                "Event and networking tools",
                "Placement integration",
                "Career support system"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Core Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Alumni Registration", icon: Users },
            { title: "Information System", icon: BarChart },
            { title: "Event Management", icon: Calendar },
            { title: "Placement Integration", icon: Zap },
            { title: "Database Management", icon: Settings },
            { title: "Networking & Collaboration", icon: Network },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-start gap-4 hover:border-primary-500/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 transition-colors">
                <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Comprehensive tools designed specifically for institutional growth.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-10">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-[2.5rem] p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 relative z-10">
            Transform Your Institution with Smart Technology
          </h2>
          <p className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto relative z-10">
            Join hundreds of institutions already using our platform to streamline their operations and boost academic performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              Book Demo
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 bg-white/10 backdrop-blur-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetails;