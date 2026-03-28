import React from 'react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import {
  Users,
  Database,
  Calendar,
  Briefcase,
  BarChart3,
  UserCheck,
  MessageSquare,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Lock
} from 'lucide-react'

const Features = () => {
  const coreFeatures = [
    {
      icon: <UserCheck className="h-8 w-8 text-primary-600" />,
      title: "Alumni Registration",
      description: "Streamlined onboarding process with custom fields, document uploads, and profile verification.",
      benefits: ["Custom registration forms", "Document verification", "Batch import capabilities", "Social media integration"]
    },
    {
      icon: <Database className="h-8 w-8 text-primary-600" />,
      title: "Alumni Database",
      description: "Comprehensive database with advanced search, filtering, and segmentation capabilities.",
      benefits: ["Advanced search filters", "Custom fields and tags", "Data export tools", "Duplicate detection"]
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: "Event Management",
      description: "Complete event lifecycle management from creation to post-event analytics and feedback.",
      benefits: ["Event creation tools", "RSVP management", "Ticketing system", "Automated reminders"]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary-600" />,
      title: "Placement Support",
      description: "Connect students with job opportunities and career guidance from your alumni network.",
      benefits: ["Job posting board", "Career counseling", "Resume reviews", "Interview preparation"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary-600" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into alumni engagement, event performance, and program effectiveness.",
      benefits: ["Real-time metrics", "Custom reports", "Data visualization", "Trend analysis"]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary-600" />,
      title: "Communication Tools",
      description: "Multi-channel communication system including email, SMS, and in-app messaging.",
      benefits: ["Email campaigns", "SMS notifications", "In-app messaging", "Newsletter management"]
    }
  ]

  const advancedFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Security & Privacy",
      description: "Enterprise-grade security with role-based access control and data encryption."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: "Automation",
      description: "Smart workflows for onboarding, event reminders, and engagement campaigns."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: "Multi-language Support",
      description: "Support for multiple languages to serve diverse alumni communities globally."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary-600" />,
      title: "Mobile App",
      description: "Native mobile applications for iOS and Android to engage alumni on the go."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary-600" />,
      title: "API Access",
      description: "RESTful API for integration with your existing systems and third-party applications."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-primary-600"> Modern Institutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to build, manage, and grow a thriving alumni community
          </p>
          <Link to="/demo" className="btn-primary">
            Explore Features
          </Link>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tools that power successful alumni management programs
            </p>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <div className="bg-primary-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <svg className="h-5 w-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="bg-gray-300 rounded-full w-16 h-16 mx-auto mb-3"></div>
                        <p>Feature Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade features for large-scale alumni programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="bg-primary-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrates With Your Favorite Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless integration with the tools you already use and love
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Google Workspace', 'Microsoft 365', 'LinkedIn', 'Facebook', 'Twitter', 'Instagram', 'WhatsApp', 'Slack', 'Zoom', 'Salesforce', 'Mailchimp', 'Calendly'].map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-24">
                <span className="text-gray-600 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Experience These Features?"
        subtitle="See how iMentor can transform your alumni management"
        buttonText="Start Free Trial"
        to="/register"
      />
    </div>
  )
}

export default Features
