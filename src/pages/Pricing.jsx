import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import { Check, Star, Users, Building, GraduationCap } from 'lucide-react'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small schools and pilot programs',
      icon: <Users className="h-8 w-8" />,
      price: billingCycle === 'monthly' ? 99 : 990,
      yearlyPrice: 990,
      features: [
        'Up to 500 alumni profiles',
        'Basic alumni database',
        'Event management (5 events/year)',
        'Email communication',
        'Basic analytics',
        'Mobile app access',
        'Email support'
      ],
      excludedFeatures: [
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing educational institutions',
      icon: <Building className="h-8 w-8" />,
      price: billingCycle === 'monthly' ? 299 : 2990,
      yearlyPrice: 2990,
      features: [
        'Up to 5,000 alumni profiles',
        'Advanced alumni database',
        'Unlimited events',
        'Multi-channel communication',
        'Advanced analytics & reports',
        'Mobile app with branding',
        'Priority support',
        'Mentorship program tools',
        'Job board functionality'
      ],
      excludedFeatures: [
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large institutions',
      icon: <GraduationCap className="h-8 w-8" />,
      price: billingCycle === 'monthly' ? 799 : 7990,
      yearlyPrice: 7990,
      features: [
        'Unlimited alumni profiles',
        'Enterprise database features',
        'Unlimited everything',
        'Advanced communication suite',
        'Custom analytics & BI',
        'White-label mobile app',
        '24/7 phone support',
        'Advanced mentorship tools',
        'Premium job board',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'On-site training'
      ],
      excludedFeatures: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees for any of our plans. Enterprise plans may include optional on-site training for an additional fee.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'Do you offer discounts for educational institutions?',
      answer: 'Yes, we offer special pricing for non-profit educational institutions. Contact our sales team for more information.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use industry-standard encryption and comply with GDPR and other data protection regulations.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="text-primary-600"> Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your institution. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Yearly
              <span className="text-primary-600 text-sm ml-1">(Save 17%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                <div className={`card h-full ${plan.popular ? 'border-primary-600 border-2' : ''}`}>
                  <div className="text-center mb-8">
                    <div className="bg-primary-50 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-600">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    <Link
                      to={plan.name === 'Enterprise' ? '/demo' : '/register'}
                      className={`w-full block py-3 px-6 rounded-lg font-semibold transition-colors ${plan.popular
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {plan.excludedFeatures.length > 0 && (
                      <div className="pt-4 border-t border-gray-200">
                        <div className="space-y-3 opacity-50">
                          {plan.excludedFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <svg className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-gray-500">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison of all features across plans
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Alumni Profiles', starter: '500', professional: '5,000', enterprise: 'Unlimited' },
                    { feature: 'Events per Year', starter: '5', professional: 'Unlimited', enterprise: 'Unlimited' },
                    { feature: 'Email Campaigns', starter: '1,000/month', professional: '10,000/month', enterprise: 'Unlimited' },
                    { feature: 'Mobile App', starter: 'Basic', professional: 'Branded', enterprise: 'White-label' },
                    { feature: 'Analytics', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom BI' },
                    { feature: 'Support', starter: 'Email', professional: 'Priority', enterprise: '24/7 Phone' },
                    { feature: 'API Access', starter: '❌', professional: '❌', enterprise: '✅' },
                    { feature: 'Custom Integrations', starter: '❌', professional: '❌', enterprise: '✅' },
                    { feature: 'Dedicated Manager', starter: '❌', professional: '❌', enterprise: '✅' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.starter}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.professional}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started?"
        subtitle="Join hundreds of institutions already using iMentor"
        buttonText="Start Your Free Trial"
        to="/register"
      />
    </div>
  )
}

export default Pricing
