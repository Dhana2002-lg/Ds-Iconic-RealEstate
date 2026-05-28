import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0b0b]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Animated rings */}
      <div className="relative flex items-center justify-center mb-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-brand-green"
            initial={{ width: 60, height: 60, opacity: 0.8 }}
            animate={{ width: 60 + i * 60, height: 60 + i * 60, opacity: 0 }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
        {/* Logo circle */}
        <motion.div
          className="relative w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #00883d, #fb111f)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <span className="text-white font-serif font-bold text-2xl absolute">DS</span>
        </motion.div>
      </div>

      {/* Brand name */}
      <motion.h1
        className="shimmer font-serif text-4xl md:text-5xl font-bold tracking-wide text-center mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        DS Iconic
      </motion.h1>
      <motion.p
        className="text-[#d4af37] font-sans text-sm tracking-[6px] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Real Estate
      </motion.p>

      {/* Progress bar */}
      <motion.div
        className="mt-12 w-48 h-[2px] rounded-full overflow-hidden bg-white/10"
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00883d, #d4af37, #fb111f)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.p
        className="mt-4 text-white/30 font-sans text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Premium Properties Await
      </motion.p>
    </motion.div>
  )
}
