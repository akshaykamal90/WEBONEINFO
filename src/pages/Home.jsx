import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CTA from '../components/CTA'
import {
  Users,
  Database,
  Calendar,
  Briefcase,
  BarChart3,
  UserCheck,
  AlertCircle,
  Search,
  TrendingUp,
  Award,
  Clock,
  Star,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Globe
} from 'lucide-react'

// ─── Reusable Section Wrapper ───────────────────────────────────────────────
const Section = ({ children, className = '' }) => (
  <section className={`py-24 ${className}`}>{children}</section>
)

const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="text-center mb-16">
    {badge && (
      <div className="section-badge mb-4">
        {badge}
      </div>
    )}
    <h2 className="section-title mb-4">{title}</h2>
    {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
  </div>
)

// ─── Home ────────────────────────────────────────────────────────────────────
const Home = () => {

  const problems = [
    { icon: AlertCircle, title: 'Disconnected Systems', description: 'Separate tools for alumni, LMS, and student management create costly data silos and extra admin work.' },
    { icon: Database, title: 'Inefficient Course Management', description: 'Teachers spend hours uploading syllabi and creating test papers across multiple platforms.' },
    { icon: Calendar, title: 'Scattered Student Data', description: 'Student profiles are fragmented across departments, making reporting slow and error-prone.' },
    { icon: Search, title: 'No Unified Platform', description: 'Students, faculty, and alumni use different tools, creating a disconnected experience.' },
  ]

  const features = [
    { icon: UserCheck, title: 'Alumni Management', description: 'Build a thriving alumni network with mentorship programs, events, and career opportunities.' },
    { icon: Database, title: 'Learning Management', description: 'Teachers can upload syllabi, create tests, and manage courses from one place.' },
    { icon: Calendar, title: 'Student Administration', description: 'Complete student lifecycle management with records, performance tracking, and comms.' },
    { icon: Briefcase, title: 'Career Services', description: 'Connect students with job opportunities and career guidance from your alumni network.' },
    { icon: BarChart3, title: 'Analytics Dashboard', description: 'Unified analytics for student performance, alumni engagement, and institutional metrics.' },
    { icon: Globe, title: 'Unified Platform', description: 'One integrated solution for every educational management need — no more context switching.' },
  ]

  const benefits = [
    {
      audience: 'For Schools & Institutions',
      icon: Award,
      color: 'text-primary-600',
      bg: 'bg-primary-50 dark:bg-primary-950',
      points: [
        'Unified educational management platform',
        'Streamlined administrative workflows',
        'Enhanced student engagement and success',
        'Comprehensive alumni network management',
      ],
    },
    {
      audience: 'For Teachers & Faculty',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 dark:bg-emerald-950',
      points: [
        'Easy syllabus and course material uploads',
        'Automated test paper generation',
        'Student performance tracking per module',
        'Integrated communication tools',
      ],
    },
    {
      audience: 'For Students',
      icon: Clock,
      color: 'text-amber-600',
      bg: 'bg-amber-50 dark:bg-amber-950',
      points: [
        'Centralized learning platform',
        'Access to course materials anytime',
        'Career opportunities through alumni',
        'Seamless academic journey experience',
      ],
    },
  ]

  const howItWorks = [
    { step: '01', title: 'Setup Your Platform', description: 'Configure modules for alumni, LMS, and student management in minutes.' },
    { step: '02', title: 'Import & Organise Data', description: 'Migrate existing student, alumni, and course data into the centralised system.' },
    { step: '03', title: 'Launch & Train', description: 'Get your team up to speed with our guided onboarding and training resources.' },
    { step: '04', title: 'Engage & Grow', description: 'Watch your educational ecosystem thrive with unified engagement tools.' },
  ]

  const showcase = [
    { id: 1, title: 'Main Dashboard', description: 'Real-time analytics and alumni metrics', image: './WhatsApp Image 2026-03-19 at 6.45.42 AM.jpeg', tags: ['Analytics', 'Alumni'] },
    { id: 2, title: 'Advanced Analytics', description: 'Deep insights into alumni behavior and growth', image: './WhatsApp Image 2026-03-19 at 6.45.42 AM (1).jpeg', tags: ['Reports', 'Trends'] },
    { id: 3, title: 'User Management', description: 'Role-based access and comprehensive profiles', image: './WhatsApp Image 2026-03-19 at 6.45.43 AM.jpeg', tags: ['Roles', 'Profiles'] },
    { id: 4, title: 'Event Management', description: 'Event lifecycle with RSVP tracking', image: './WhatsApp Image 2026-03-19 at 6.45.43 AM (1).jpeg', tags: ['Calendar', 'RSVP'] },
    { id: 5, title: 'Mobile First', description: 'Seamless access across all devices', image: './WhatsApp Image 2026-03-19 at 6.45.45 AM.jpeg', tags: ['Responsive', 'Mobile'] },
    { id: 6, title: 'Integration Hub', description: 'Connect with third-party services seamlessly', image: './WhatsApp Image 2026-03-19 at 6.45.46 AM.jpeg', tags: ['API', 'Sync'] },
  ]

  return (
    <div className="bg-white dark:bg-gray-950">
      <Hero />

      {/* ── Product Showcase ────────────────────────────────────────────── */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={<><Star className="h-3.5 w-3.5" /> Product Showcase</>}
            title="See iMentor in Action"
            subtitle="Real screenshots of the platform — explore every feature at a glance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcase.map((item) => (
              <div key={item.id} className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:-translate-y-0.5 transition-all duration-200" style={{ boxShadow: '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)' }}>
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to="/product-details" className="bg-white text-primary-700 px-4 py-2 rounded-xl text-sm font-semibold">
                      View Details →
                    </Link>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.description}</p>
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/product-details" className="btn-secondary px-6 py-3 text-sm">
              View Full Product Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Problems ─────────────────────────────────────────────────────── */}
      <Section className="bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Educational Management Challenges"
            subtitle="Managing multiple systems shouldn't be this complicated."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900 hover:shadow-soft transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{p.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* ── Solution ─────────────────────────────────────────────────────── */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-badge mb-5">
                <Zap className="h-3.5 w-3.5" /> The Solution
              </div>
              <h2 className="section-title mb-5">The iMentor Unified Solution</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                iMentor brings together all the tools you need for comprehensive educational management. From alumni networks and learning management to student administration — one login, all the power.
              </p>
              <ul className="space-y-4">
                {[
                  'Centralised alumni management & engagement',
                  'Automated communication and notification tools',
                  'Powerful analytics and institutional insights',
                  'Role-based access for all stakeholders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary-600" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Institutions', icon: Shield, color: 'from-primary-500 to-primary-600' },
                { value: '50K+', label: 'Active Users', icon: Users, color: 'from-emerald-500 to-emerald-600' },
                { value: '98%', label: 'Satisfaction', icon: Star, color: 'from-amber-500 to-amber-600' },
                { value: '24/7', label: 'Support', icon: Clock, color: 'from-rose-500 to-rose-600' },
              ].map(({ value, label, icon: Icon, color }) => (
                <div key={label} className="card text-center group hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <Section className="bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Features"
            title="Powerful Features for Modern Institutions"
            subtitle="Everything you need to build and maintain a thriving educational ecosystem."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div key={i} className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-soft transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-all duration-200">
                    <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.description}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/features" className="btn-primary px-6 py-3 text-sm">
              Explore all features <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Live Demo Preview ─────────────────────────────────────────────── */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Experience iMentor Live"
            subtitle="Jump into an interactive demo and see the full power of the platform yourself."
          />
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft overflow-hidden">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 px-10 py-16 text-center text-white">
              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Interactive Demo</h3>
              <p className="text-primary-100 mb-8 text-sm max-w-md mx-auto">
                Explore the full platform capabilities with our hands-on demo environment.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-7 py-3 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-all duration-200 shadow-lg"
              >
                Try Live Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: BarChart3, title: 'Real-time Analytics', desc: 'Track engagement and growth metrics live.' },
                  { icon: Users, title: 'Smart Matching', desc: 'AI-powered mentorship connections.' },
                  { icon: Calendar, title: 'Event Management', desc: 'Seamless event planning and execution.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <Section className="bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Benefits for Everyone"
            subtitle="iMentor creates real value for every stakeholder in your educational ecosystem."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="card group hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className={`w-12 h-12 rounded-2xl ${b.bg} flex items-center justify-center mb-5`}>
                    <Icon className={`h-6 w-6 ${b.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">{b.audience}</h3>
                  <ul className="space-y-3">
                    {b.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How It Works"
            subtitle="Get started with iMentor in four simple steps."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

            {howItWorks.map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center mx-auto mb-5 text-sm font-bold shadow-md shadow-primary-500/20 relative z-10">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTA
        title="Ready to Transform Your Alumni Network?"
        subtitle="Join hundreds of institutions already building stronger communities with iMentor."
        buttonText="Book a Free Demo"
        to="/demo"
      />
    </div>
  )
}

export default Home
