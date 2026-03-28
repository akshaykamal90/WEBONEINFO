import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    services: '',
    email: ''
  })

  const inputClass = "w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.services) {
      alert("Please fill in the required fields (*)")
      return
    }

    const message = `*New Application from Website*\n\n*Name:* ${formData.name}\n*Phone number:* ${formData.phone}\n*Services required:* ${formData.services}\n*Email ID:* ${formData.email}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919387214741&text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-300 dark:text-gray-600 mb-4 tracking-tight">
            Contact Us
          </h1>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">

          {/* Form Section (3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                <p className="text-sm text-red-500 font-medium">* Indicates required question</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className={`${inputClass} border-t-0 border-l-0 border-r-0 rounded-none bg-transparent !px-0 focus:ring-0`}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 mt-8">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className={`${inputClass} border-t-0 border-l-0 border-r-0 rounded-none bg-transparent !px-0 focus:ring-0`}
                    required
                  />
                </div>

                {/* Services */}
                <div>
                  <label htmlFor="services" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 mt-8">
                    Service you would like to have <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className={`${inputClass} border-t-0 border-l-0 border-r-0 rounded-none bg-transparent !px-0 focus:ring-0`}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 mt-8">
                    Email id <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className={`${inputClass} border-t-0 border-l-0 border-r-0 rounded-none bg-transparent !px-0 focus:ring-0`}
                    required
                  />
                </div>

                {/* Submit button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-semibold rounded-xl text-white bg-[#25D366] hover:bg-[#128C7E] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] dark:focus:ring-offset-gray-900 shadow-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347l-.001-.001Z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.765.456 3.428 1.259 4.881L2 22l5.302-1.203C8.68 21.579 10.3 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18.286c-1.558 0-3.045-.397-4.34-1.144L7.332 19l-3.088.7.712-3.004-.15-.246A8.204 8.204 0 0 1 3.714 12c0-4.57 3.716-8.286 8.286-8.286 4.57 0 8.286 3.716 8.286 8.286 0 4.57-3.716 8.286-8.286 8.286Z" /></svg>
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details (2 columns) */}
          <div className="lg:col-span-2 space-y-10 pt-4">

            {/* Email */}
            <div>
              <h3 className="text-[1.35rem] font-bold text-gray-900 dark:text-white mb-2">Email</h3>
              <div className="space-y-1">
                <a href="mailto:info@webone.in" className="block text-gray-700 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                  info@webone.in
                </a>
                <a href="mailto:support@webone.in" className="block text-gray-700 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                  support@webone.in
                </a>
              </div>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-[1.35rem] font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-400 font-medium">
                <p>+91 93872 14741 (Registered Office)</p>
                <p>+91 85479 77700 (Operations Office)</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-[1.35rem] font-bold text-gray-900 dark:text-white mb-2">Address</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-400 font-medium text-base leading-relaxed">
                <p>
                  Registered Office: WebOne Info(p) Ltd, Techno Villa, T.V Puram Vaikom, PIN- 686 606
                </p>
                <p>
                  Operational Office: WebOne Info(p) Ltd, Webone office, Vytilla, Kochi, Kerala 682019
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
