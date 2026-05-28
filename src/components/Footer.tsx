import { MapPin, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Why Choose Us', id: 'why' },
  { label: 'Locations', id: 'locations' },
  { label: 'Contact', id: 'contact' },
]

const projectLinks = [
  { name: 'Sai Durga', path: '/sai-durga' },
  { name: 'San Euphoria', path: '/san-euphoria' }, 
  { name: 'Sri Sai', path: '/sri-sai' },
  { name: 'Prakruthi', path: '/prakruthi' },
  { name: 'Sandy Beach', path: '/sandy-beach' },
]

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer id="footer" style={{ background: '#0b0b0b' }} className="relative overflow-hidden">
      {/* Top gold strip */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #00883d, #d4af37, #fb111f)' }} />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #00883d, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
  <img
    src="/logo.jpg"
    alt="DS Iconic Logo"
    className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-lg"
  />

  <div>
    <div
      className="text-white font-semibold text-xl leading-none"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      DS Iconic
    </div>

    <div className="text-[#d4af37] text-[10px] font-sans tracking-[0.25em] uppercase mt-1">
      Real Estate
    </div>
  </div>
</div>
            <p className="font-sans text-white/40 text-sm leading-relaxed mb-5">
              Premium VMRDA approved open plot communities across Andhra Pradesh.
            </p>
            {/* Social */}
            <a
              href="https://wa.me/919398634198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-sans font-semibold transition-opacity hover:opacity-90"
              style={{ background: '#25D366' }}
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-[#d4af37] font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-sans text-white/50 hover:text-[#d4af37] text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          {/* Projects */}
<div>
  <h4 className="font-serif text-[#d4af37] font-semibold text-lg mb-5">
    Our Projects
  </h4>

  <ul className="space-y-3">
    {projectLinks.map((project) => (
      <li key={project.name}>
        <Link
  to={project.path}
  className="font-sans text-white/50 hover:text-[#d4af37] text-sm transition-colors duration-200"
>
  {project.name}
</Link>
      </li>
    ))}
  </ul>
</div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-[#d4af37] font-semibold text-lg mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                <span className="font-sans text-white/50 text-sm leading-relaxed">
  Opp. Reliance Smart, Bank Colony, Narsipatnam – 531116, Andhra Pradesh
</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a href="tel:9398634198" className="font-sans text-white/50 hover:text-[#d4af37] text-sm transition-colors">
                  +91 93986 34198
                </a>
              </li>
              
            </ul>
            <div className="mt-5 text-white/30 font-sans text-xs">
              Director: D. Satyanarayana, M.Com
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/25 text-sm text-center">
            © {new Date().getFullYear()} DS Iconic Real Estate. All rights reserved.
          </p>
          <p className="font-sans text-white/20 text-xs text-center">
            VMRDA Approved Layouts | Your Trusted Partner | Narsipatnam, AP
          </p>
        </div>
      </div>
    </footer>
  )
}
