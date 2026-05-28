import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

const locations = [
  {
    name: "Narsipatnam",
    project: "Sai Durga Layout",
    x: 50,
    y: 48,
    primary: true,
  },
  {
    name: "Thalapalem",
    project: "San Euphoria",
    x: 38,
    y: 38,
    primary: false,
  },
  {
    name: "Adduroddu",
    project: "Sri Sai Layout",
    x: 66,
    y: 56,
    primary: false,
  },
  {
    name: "Pendurthi",
    project: "Prakruthi Layout",
    x: 30,
    y: 70,
    primary: false,
  },
  {
    name: "Bhogapuram",
    project: "Sandy Beach Layout",
    x: 62,
    y: 28,
    primary: false,
  },
]
const lines = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3 },
  { from: 0, to: 4 },
]

export default function Locations() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="locations" className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0b0b0b 0%, #111827 100%)' }}>
      {/* Glow bg */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00883d, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-[#d4af37]/30 mb-4">
            <span className="font-sans text-[#d4af37] text-xs tracking-[4px] uppercase font-semibold">Coverage Area</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Our{' '}
            <span className="italic" style={{ color: '#d4af37' }}>Locations</span>
          </h2>
          <p className="font-sans text-white/50 max-w-xl mx-auto text-base">
            Strategically placed projects across Visakhapatnam district and surrounding regions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Map visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="md:col-span-2 relative"
          >
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
                height: '420px',
                background: 'linear-gradient(135deg, #0d1f17 0%, #0a1628 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Grid dots */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, #00883d 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }} />

              {/* SVG lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {lines.map((line, i) => {
                  const from = locations[line.from]
                  const to = locations[line.to]
                  return (
                    <motion.line
                      key={i}
                      x1={from.x} y1={from.y}
                      x2={to.x} y2={to.y}
                      stroke="#00883d"
                      strokeWidth="0.3"
                      strokeDasharray="2 2"
                      opacity="0.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
                      transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                    />
                  )
                })}
              </svg>

              {/* Location points */}
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  className="absolute"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 200 }}
                >
                  {/* Pulse ring */}
                  <div
                    className={`absolute inset-0 rounded-full ping-slow ${loc.primary ? 'bg-brand-green' : 'bg-brand-gold'}`}
                    style={{ backgroundColor: loc.primary ? '#00883d' : '#d4af37' }}
                  />
                  {/* Dot */}
                  <div
                    className="relative w-4 h-4 rounded-full flex items-center justify-center border-2 border-white/50 shadow-lg"
                    style={{ backgroundColor: loc.primary ? '#00883d' : '#d4af37' }}
                  >
                    {loc.primary && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  {/* Label */}
                  <div
                    className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md text-center"
                    style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
                  >
                    <div className="text-white text-[10px] font-semibold">
  {loc.project}
</div>
<div className="text-white/40 text-[9px]">
  {loc.name}
</div>
                  </div>
                </motion.div>
              ))}

              {/* Compass */}
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                <span className="text-white/40 font-sans text-xs font-bold">N↑</span>
              </div>

              {/* AP label */}
              <div className="absolute top-4 left-4">
                <span className="font-sans text-white/20 text-xs tracking-widest uppercase">Andhra Pradesh</span>
              </div>
            </div>
          </motion.div>

          {/* Location list */}
          <div className="space-y-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
                whileHover={{ x: -4 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-300 cursor-default"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: loc.primary ? '#00883d20' : '#d4af3720' }}
                >
                  <MapPin
                    className="w-4 h-4"
                    style={{ color: loc.primary ? '#00883d' : '#d4af37' }}
                  />
                </div>
                <div>
                  <div className="font-serif text-white font-semibold text-base">{loc.name}</div>
                  <div className="font-sans text-white/40 text-xs">{loc.project}</div>
                </div>
                {loc.primary && (
                  <div className="ml-auto">
                    <span className="text-[10px] font-sans font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">HQ</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
