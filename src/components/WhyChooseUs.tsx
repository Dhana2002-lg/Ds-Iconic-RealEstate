import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, FileCheck, Award, MapPin, Heart, BarChart3 } from 'lucide-react'

const cards = [
  {
    icon: TrendingUp,
    title: 'Trusted Investments',
    description: 'Every plot is a secure, appreciating asset backed by legal approval and market-driven pricing.',
    color: '#00883d',
  },
  {
    icon: FileCheck,
    title: 'Legal Documentation',
    description: 'Fully transparent process — clear title deeds, registered layouts, and hassle-free paperwork.',
    color: '#d4af37',
  },
  {
    icon: Award,
    title: 'VMRDA Approved',
    description: 'All our projects are officially approved by VMRDA, ensuring regulatory compliance and buyer safety.',
    color: '#fb111f',
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    description: 'Strategically chosen sites near highways, schools, hospitals, and growing township zones.',
    color: '#00883d',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: '500+ happy families trust us. Our after-sale support and transparency make us their first choice.',
    color: '#d4af37',
  },
  {
    icon: BarChart3,
    title: 'Long-term Value',
    description: 'Land prices in our regions have shown consistent growth — a smart, future-proof investment.',
    color: '#fb111f',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left sticky */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="md:sticky md:top-24 self-start"
          >
            <div className="section-tag mb-4">Why Choose Us</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Thousands{' '}
              <span className="gradient-text italic">Trust DS Iconic</span>
            </h2>
            <p className="font-sans text-gray-500 text-base leading-relaxed mb-8">
              More than a real estate company — we are partners in your journey to owning land that grows with you. Our commitment goes beyond the sale.
            </p>

            {/* Decorative element */}
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Trust and reliability"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-serif text-white text-2xl font-bold">"Your Land, Our Legacy"</div>
                <div className="font-sans text-white/70 text-sm mt-1">— DS Iconic Real Estate</div>
              </div>
            </div>

            {/* Gold divider */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-0.5 flex-1 rounded" style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
              <span className="font-sans text-[#d4af37] text-xs tracking-widest uppercase">Trusted Partner</span>
            </div>
          </motion.div>

          {/* Right: Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-400 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed">{card.description}</p>
                  <div
                    className="mt-4 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
