import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
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
  Building,
  Play,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react'

const Demo = () => {
  const [activeDemo, setActiveDemo] = useState('dashboard')

  const demoStats = [
    { title: 'Total Alumni', value: '2,847', icon: <Users className="h-6 w-6 text-primary-600" />, change: '+12%', changeType: 'positive' },
    { title: 'Active Events', value: '24', icon: <Calendar className="h-6 w-6 text-primary-600" />, change: '+8%', changeType: 'positive' },
    { title: 'Jobs Posted', value: '156', icon: <Briefcase className="h-6 w-6 text-primary-600" />, change: '+23%', changeType: 'positive' },
    { title: 'Active Users', value: '1,423', icon: <TrendingUp className="h-6 w-6 text-primary-600" />, change: '+18%', changeType: 'positive' }
  ]

  const demoAlumni = [
    { id: 1, name: 'Sarah Johnson', batch: '2015', job: 'Senior Software Engineer', company: 'Google', location: 'San Francisco, CA', avatar: 'SJ' },
    { id: 2, name: 'Michael Chen', batch: '2018', job: 'Product Manager', company: 'Microsoft', location: 'Seattle, WA', avatar: 'MC' },
    { id: 3, name: 'Emily Davis', batch: '2012', job: 'Marketing Director', company: 'Apple', location: 'Cupertino, CA', avatar: 'ED' },
    { id: 4, name: 'James Wilson', batch: '2016', job: 'Data Scientist', company: 'Amazon', location: 'New York, NY', avatar: 'JW' },
    { id: 5, name: 'Lisa Anderson', batch: '2019', job: 'UX Designer', company: 'Meta', location: 'Menlo Park, CA', avatar: 'LA' },
    { id: 6, name: 'Robert Taylor', batch: '2014', job: 'Senior Consultant', company: 'Deloitte', location: 'Chicago, IL', avatar: 'RT' }
  ]

  const demoEvents = [
    { id: 1, title: 'Alumni Networking Night', date: 'Dec 15, 2024', attendees: 45, type: 'Networking', status: 'upcoming' },
    { id: 2, title: 'Career Fair 2024', date: 'Dec 20, 2024', attendees: 120, type: 'Career', status: 'upcoming' },
    { id: 3, title: 'Tech Innovation Summit', date: 'Jan 10, 2025', attendees: 85, type: 'Conference', status: 'upcoming' },
    { id: 4, title: 'Homecoming 2024', date: 'Nov 28, 2024', attendees: 200, type: 'Reunion', status: 'completed' },
    { id: 5, title: 'Mentorship Program Launch', date: 'Jan 15, 2025', attendees: 30, type: 'Program', status: 'upcoming' }
  ]

  const demoJobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'TechCorp', location: 'Remote', posted: '2 days ago', applicants: 23 },
    { id: 2, title: 'Product Marketing Manager', company: 'StartupXYZ', location: 'San Francisco', posted: '3 days ago', applicants: 18 },
    { id: 3, title: 'Data Engineer', company: 'DataTech', location: 'New York', posted: '5 days ago', applicants: 31 },
    { id: 4, title: 'UX Researcher', company: 'DesignHub', location: 'Seattle', posted: '1 week ago', applicants: 12 },
    { id: 5, title: 'Backend Developer', company: 'CloudTech', location: 'Austin', posted: '1 week ago', applicants: 27 }
  ]

  const features = [
    { id: 'dashboard', name: 'Dashboard', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'alumni', name: 'Alumni Database', icon: <Users className="h-5 w-5" /> },
    { id: 'events', name: 'Event Management', icon: <Calendar className="h-5 w-5" /> },
    { id: 'jobs', name: 'Job Board', icon: <Briefcase className="h-5 w-5" /> }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Director of Alumni Relations',
      institution: 'Stanford University',
      content: 'iMentor has transformed how we engage with our alumni. The platform is intuitive and powerful.',
      rating: 5
    },
    {
      name: 'John Martinez',
      role: 'Alumni Coordinator',
      institution: 'MIT',
      content: 'The best investment we made for our alumni program. Engagement has increased by 300%.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      role: 'Career Services Director',
      institution: 'Harvard University',
      content: 'Our students now have direct access to amazing mentors and job opportunities through iMentor.',
      rating: 5
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience iMentor
              <span className="text-primary-600"> in Action</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our comprehensive alumni management platform with this interactive demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Video Tour
              </button>
              <Link to="/register" className="btn-secondary inline-flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Platform Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click through different features to see how iMentor works
            </p>
          </div>

          {/* Feature Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveDemo(feature.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeDemo === feature.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {feature.icon}
                <span>{feature.name}</span>
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="bg-gray-50 rounded-xl p-8">
            {/* Dashboard Demo */}
            {activeDemo === 'dashboard' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Analytics Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {demoStats.map((stat, index) => (
                    <StatCard
                      key={index}
                      title={stat.title}
                      value={stat.value}
                      icon={stat.icon}
                      change={stat.change}
                      changeType={stat.changeType}
                    />
                  ))}
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <TrendingUp className="h-12 w-12 mx-auto mb-3" />
                      <p>Interactive Analytics Chart</p>
                      <p className="text-sm">Real-time engagement metrics and trends</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Alumni Database Demo */}
            {activeDemo === 'alumni' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Alumni Database</h3>
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Alumni Directory</h4>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search alumni..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <button className="p-2 text-gray-600 hover:text-primary-600">
                        <Filter className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Name</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Batch</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Job</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Location</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-700"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {demoAlumni.map((alumni) => (
                          <tr key={alumni.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-primary-600 text-xs font-medium">{alumni.avatar}</span>
                                </div>
                                <span className="font-medium text-gray-900">{alumni.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{alumni.batch}</td>
                            <td className="py-3 px-4">
                              <div>
                                <div className="text-gray-900">{alumni.job}</div>
                                <div className="text-sm text-gray-500">{alumni.company}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{alumni.location}</td>
                            <td className="py-3 px-4">
                              <button className="text-gray-400 hover:text-gray-600">
                                <MoreVertical className="h-5 w-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Events Demo */}
            {activeDemo === 'events' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {demoEvents.map((event) => (
                    <div key={event.id} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.status === 'completed' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                        </span>
                        <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium">
                          {event.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-gray-600 mb-4">{event.date}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-sm">{event.attendees} attending</span>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Jobs Demo */}
            {activeDemo === 'jobs' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Job Board</h3>
                <div className="space-y-4">
                  {demoJobs.map((job) => (
                    <div key={job.id} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-1" />
                              {job.company}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <span>{job.posted}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500">{job.applicants} applicants</span>
                            <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                              View Job →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Institutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers have to say about iMentor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary-600">{testimonial.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed for modern alumni management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Alumni Registration & Profiles',
              'Advanced Search & Filtering',
              'Event Management System',
              'Job Board & Career Services',
              'Mentorship Programs',
              'Analytics & Reporting',
              'Mobile App Access',
              'Email & SMS Communications',
              'API Integration',
              'Role-based Access Control',
              'Data Import/Export',
              '24/7 Customer Support'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Transform Your Alumni Network?"
        subtitle="Start your free 14-day trial today. No credit card required."
        buttonText="Start Free Trial"
        to="/register"
      />
    </div>
  )
}

export default Demo
