import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, Compass, Briefcase, BarChart3, 
  ArrowRight, CheckCircle, Shield, Zap,
  MessageSquare, GraduationCap, Target, LineChart
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: "Parents Subscription Model",
      icon: Users,
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-50 dark:bg-blue-900/30",
      description: "A specialized portal for parents to stay connected with their child's educational journey, providing real-time updates and engagement tools.",
      features: [
        "Real-time attendance & progress alerts",
        "Direct communication with faculty",
        "Fee payment & receipt management",
        "Event & holiday notifications"
      ]
    },
    {
      title: "Career Guidance",
      icon: Compass,
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-50 dark:bg-purple-900/30",
      description: "Expert-led and AI-driven career counseling to help students identify their strengths and choose the right professional path.",
      features: [
        "Aptitude & personality assessments",
        "One-on-one counseling sessions",
        "Industry trend analysis",
        "Pathfinding for higher education"
      ]
    },
    {
      title: "Placement Cell",
      icon: Briefcase,
      iconColor: "text-green-600 dark:text-green-400",
      iconBg: "bg-green-50 dark:bg-green-900/30",
      description: "Bridging the gap between academia and industry by connecting students with top-tier employers and preparation programs.",
      features: [
        "Campus recruitment drives",
        "Resume building & mock interviews",
        "Soft skills & technical training",
        "Internship opportunity tracking"
      ]
    },
    {
      title: "Academic Performance Analytics",
      icon: BarChart3,
      iconColor: "text-amber-600 dark:text-amber-400",
      iconBg: "bg-amber-50 dark:bg-amber-900/30",
      description: "Deep-dive data analytics to track student progress, identify learning gaps, and improve overall institutional outcomes.",
      features: [
        "Subject-wise performance trends",
        "Comparative student analytics",
        "Predictive learning outcomes",
        "Automated report generation"
      ]
    }
  ]

  const highlightStats = [
    { label: "Active Institutions", value: "500+", icon: Shield },
    { label: "Student Success Rate", value: "94%", icon: Target },
    { label: "Partner Companies", value: "200+", icon: Zap },
    { label: "Parent Satisfaction", value: "4.8/5", icon: MessageSquare },
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6 border border-primary-100 dark:border-primary-800">
          <GraduationCap className="w-4 h-4" />
          Our Services
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Empowering Institutions with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Intelligent Solutions</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Weboneinfo provides a comprehensive suite of services designed to streamline educational management and drive student success through technology.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className={`w-16 h-16 ${service.iconBg} ${service.iconColor} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-sm text-gray-600 dark:text-gray-500">
                        <CheckCircle className="w-4 h-4 text-primary-500 mr-2 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold hover:gap-3 transition-all duration-200"
                  >
                    Learn More 
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-primary-600 dark:bg-primary-700 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-900/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            {highlightStats.map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-black">{stat.value}</div>
                <div className="text-primary-100 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-12">
        <div className="text-center bg-gray-900 dark:bg-gray-900 rounded-3xl p-12 lg:p-16 border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to transform your institution?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of schools and colleges that are already benefiting from our integrated educational management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary py-4 px-8 rounded-xl font-bold text-lg">
                Book a Free Demo
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-200">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
