import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const footer = document.getElementById('footer')
      const footerTop = footer ? footer.getBoundingClientRect().top + window.scrollY : Infinity
      const nearFooter = scrollY + window.innerHeight > footerTop - 100

      setVisible(scrollY > 300 && !nearFooter)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/919398634198?text=Hi, I'm interested in your properties at DS Iconic Real Estate."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl wa-pulse"
          style={{ background: '#25D366' }}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7 text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
