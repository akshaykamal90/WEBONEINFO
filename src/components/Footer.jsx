import React from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    Products: [
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Demo', to: '/contact' },
      { label: 'Platform Details', to: '/products' },
    ],
    Company: [
      { label: 'Services', to: '/services' },
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  }

  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/weboneinfo/?hl=en', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-950 border-t border-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-8 border-b border-gray-800">

          {/* Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link 
              to="/" 
              className="inline-block group"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <img 
                src="/logo.jpeg" 
                alt="Weboneinfo Logo" 
                className="h-10 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-200"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Empowering educational institutions with intelligent, AI-driven management solutions for academics, learning, and alumni networks.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
Operational Office: WebOne Info(p) Ltd,Elamkulam, Vytilla, Kochi, Kerala 682019                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-sm text-gray-400">
                  +91 93872 14741
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-sm text-gray-400">
                  mail@weboneinfo.com
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="lg:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter / Social */}
          <div className="lg:col-span-1 border-t md:border-t-0 pt-6 md:pt-0 border-gray-800">
             <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Connect
              </h3>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-primary-400 hover:border-gray-700 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-gray-900 border border-gray-800 text-gray-300 text-sm px-3 py-2 rounded-l-lg w-full focus:outline-none focus:border-primary-500"
                />
                <button className="bg-primary-600 text-white px-3 py-2 rounded-r-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Web One Info (P) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">
              Built natively for education
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
