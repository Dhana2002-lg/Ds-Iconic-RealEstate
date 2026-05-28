import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Shield, Sun } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Real Estate',
    subtitle: 'Open Plot Communities',
    description:
      'VMRDA approved open plots and layout developments across prime locations in Andhra Pradesh. Clear documentation, transparent pricing, and prime connectivity.',
    color: '#00883d',
    features: ['VMRDA Approved', 'Clear Title Deeds', 'Prime Connectivity', 'Investment Support'],
  },
  {
    icon: Shield,
    title: 'LIC Services',
    subtitle: 'Life Insurance Solutions',
    description:
      'Comprehensive life insurance and financial planning services to secure your family\'s future while building long-term wealth and stability.',
    color: '#d4af37',
    features: ['Life Insurance', 'Term Plans', 'Endowment Plans', 'Wealth Plans'],
  },
  {
    icon: Sun,
    title: 'Solar Solutions',
    subtitle: 'Green Energy for Homes',
    description:
      'End-to-end solar panel installation and maintenance services for residential and commercial properties — save on electricity while going green.',
    color: '#fb111f',
    features: ['Residential Solar', 'Commercial Solar', 'Subsidy Assistance', 'Maintenance Support'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0b0b0b 0%, #111 100%)' }}
    >
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00883d, transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #d4af37, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-[#d4af37]/30 mb-4">
            <span className="font-sans text-[#d4af37] text-xs tracking-[4px] uppercase font-semibold">What We Offer</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Our{' '}
            <span className="italic" style={{ color: '#d4af37' }}>Services</span>
          </h2>
          <p className="font-sans text-white/50 max-w-xl mx-auto text-base">
            Beyond real estate — a complete suite of services to secure and grow your assets.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="glass-dark rounded-3xl p-8 group"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
                >
                  <Icon className="w-7 h-7" style={{ color: service.color }} />
                </div>

                <div className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: service.color }}>
                  {service.subtitle}
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="font-sans text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 font-sans text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div
                  className="mt-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
