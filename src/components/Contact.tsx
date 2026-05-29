import { useState, useRef } from 'react'
import type React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Phone, MapPin, Send, CheckCircle} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { toast } from "sonner"
const projects = [
  'San Euphoria',
  'Sandy Beach',
  'Sai Durga',
  'Sri Sai',
  'Prakruthi',
  'Indraprasta',
  'Sandy Castle',
  'General Inquiry',
]

interface FormState {
  name: string
  phone: string
  email: string
  project: string
  message: string
}

const emptyForm: FormState = { name: '', phone: '', email: '', project: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormState>(emptyForm)
  const [submitted] = useState(false)

  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const errs: Partial<FormState> = {}
    if (!form.name.trim() || !/^[a-zA-Z\s]+$/.test(form.name)) errs.name = 'Enter a valid name (letters only)'
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) errs.phone = 'Enter a valid 10-digit phone number'
    if (
  form.email.trim() &&
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
) {
  errs.email = 'Enter a valid email'
}
    if (!form.project) errs.project = 'Please select a project'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    let val = value
    if (name === 'name') {
  val = value.replace(/[^a-zA-Z\s]/g, '')
}
    if (name === 'phone') val = value.replace(/\D/g, '').slice(0, 10)
    setForm((prev) => ({ ...prev, [name]: val }))
    if (errors[name as keyof FormState]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (!validate()) return

  const msg = encodeURIComponent(
    `New Lead - DS Iconic Real Estate\n\n` +
    `Name: ${form.name}\n` +
    `Phone: ${form.phone}\n` +
    `${form.email ? `Email: ${form.email}\n` : ''}` +
    `Project: ${form.project}\n` +
    `Message: ${form.message || 'Not provided'}`
  )

  // 1. show toast FIRST
  toast.success("Message sent successfully")

  // 2. small delay then open WhatsApp
  setTimeout(() => {
    window.open(`https://wa.me/919398634198?text=${msg}`, "_blank")
  }, 300)

  setForm(emptyForm)
}

  const inputClass = (field: keyof FormState) =>
    `w-full bg-gray-50 border ${errors[field] ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 font-sans text-gray-800 text-sm placeholder-gray-400 focus:border-brand-green transition-colors duration-200`

  return (
    <section id="contact" className="py-24 bg-[#f9fafb] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00883d, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4">Get In Touch</div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Let's Find Your{' '}
            <span className="gradient-text italic">Dream Plot</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-xl mx-auto text-base">
            Fill the form and we'll connect with you on WhatsApp instantly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-brand-green mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="font-sans text-gray-500 text-sm">
                    We've opened WhatsApp with your details. Our team will respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass('name')}
                      style={{ textTransform: 'capitalize' }}
                    />
                    {errors.name && <p className="font-sans text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="font-sans text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="font-sans text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1.5">Interested Project *</label>
                    <select
                      name="project"
                      value={form.project}
                      onChange={handleChange}
                      className={inputClass('project')}
                    >
                      <option value="">Select a project</option>
                      {projects.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.project && <p className="font-sans text-red-500 text-xs mt-1">{errors.project}</p>}
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1.5">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className={inputClass('message')}
                    />
                    {errors.message && <p className="font-sans text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="btn-brand w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 space-y-5">
              <h3 className="font-serif text-2xl font-bold text-gray-900">Reach Us Directly</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <div className="font-sans font-semibold text-gray-700 text-sm">Our Office</div>
                  <div className="font-sans text-gray-500 text-sm leading-relaxed mt-0.5">
                    Opp. Reliance Smart, Bank Colony,<br />Narsipatnam – 531116,<br />Andhra Pradesh
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <div className="font-sans font-semibold text-gray-700 text-sm">Phone</div>
                  <a
                    href="tel:9398634198"
                    className="font-sans text-brand-green text-sm font-semibold hover:underline"
                  >
                    +91 93986 34198
                  </a>
                </div>
              </div>

              <a
  href="https://wa.me/919398634198?text=Hi, I'm interested in your properties."
  target="_blank"
  rel="noopener noreferrer"
  className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl text-white font-sans text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
  style={{ background: '#25D366' }}
>
  <FaWhatsapp className="w-5 h-5 flex-shrink-0" />
  <span>Chat on WhatsApp</span>
</a>

              <div className="font-sans text-gray-400 text-xs">
                Director: D. Satyanarayana, M.Com
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-64">
              <iframe
                src="https://www.google.com/maps?q=Opp.+Reliance+Smart,+Bank+Colony,+Narsipatnam+–+531116,+Andhra+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DS Iconic Real Estate Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
