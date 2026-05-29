import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'

export default function SocialFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const footer = document.getElementById('footer')

      const footerTop = footer
        ? footer.getBoundingClientRect().top + window.scrollY
        : Infinity

      const nearFooter =
        scrollY + window.innerHeight > footerTop - 100

      setVisible(scrollY > 300 && !nearFooter)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])

  const socialLinks = [
    {
      href: 'https://wa.me/919398634198?text=Hi, I am interested in your properties at DS Iconic Real Estate.',
      icon: <FaWhatsapp className="w-6 h-6" />,
      bg: '#25D366',
    },
    {
      href: 'https://www.instagram.com/satyanarayana_devada_/',
      icon: <FaInstagram className="w-5 h-5" />,
      bg: 'linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)',
    },
    {
      href: 'https://www.facebook.com/satya.devada.9/',
      icon: <FaFacebookF className="w-5 h-5" />,
      bg: '#1877F2',
    },
  ]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl text-white"
              style={{ background: item.bg }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}