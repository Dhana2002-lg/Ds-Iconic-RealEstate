import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Maximize2, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
const projects = [
  {
    name: 'Sai Durga',
    image: '/sai-durga.png',
    location: 'Narsipatnam',
    acres: '50 Acres',
    tag: 'Selling Fast',
    tagColor: '#fb111f',
  },
  {
    name: 'San Euphoria',
    image: '/san-euphoria.png',
    location: 'Anakapalli, Thalapalem',
    acres: '70 Acres',
    tag: 'Best Seller',
    tagColor: '#00883d',
  },
  {
    name: 'Sri Sai',
    image: '/sri-sai.png',
    location: 'Adduroddu',
    acres: '15 Acres',
    tag: 'Popular',
    tagColor: '#fb111f',
  },
  
 {
    name: 'Prakruthi',
    image: '/prakruthi.png',
    location: 'Pendurthi',
    acres: '25 Acres',
    tag: 'Premium',
    tagColor: '#00883d',
  },
  {
    name: 'Sandy Beach',
    image: '/sandy-beach.png',
    location: 'Bhogapuram',
    acres: '50 Acres',
    tag: 'Selling Fast',
    tagColor: '#fb111f',
  },
  {
    name: 'Indraprasta',
    image: '/indraprasta.png',
    location: 'Bhogapuram',
    acres: '70 Acres',
    tag: 'Popular',
    tagColor: '#00883d',
  },
  {
  name: 'Sandy Castle',
  image: '/sandycastle.png',
  location: 'Kancheru, Bhogapuram',
  acres: 'Fully Furnished Studio Apartments',
  tag:'Rental Returns',
  tagColor: '#fb111f',
},
{
  name: 'Vaarahi Airport Residences',
  image: '/vaarahi-airport-residences.png',
  location: 'Bhogapuram',
  acres: '60 Acres Mega Layout',
  tag: 'Airport Project',
  tagColor: '#00883d',
},
{
  name: 'Vaarahi Ainada Township',
  image: '/vaarahi-ainada-township.png',
  location: 'Anandapuram',
  acres: 'Premium Township',
  tag: 'Investment Hotspot',
  tagColor: '#fb111f',
},
  
 
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 bg-[#f9fafb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4">Our Projects</div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Landmark{' '}
            <span className="gradient-text italic">Developments</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-xl mx-auto text-base">
            Each project is meticulously planned with VMRDA approval, clear documentation, and prime locations.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="project-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="card-image w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* VMRDA Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Award className="w-3.5 h-3.5 text-brand-green" />
                  <span className="font-sans text-[10px] font-bold text-brand-green tracking-wider uppercase">VMRDA</span>
                </div>

                {/* Tag */}
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-white font-sans text-[10px] font-bold tracking-wider uppercase"
                  style={{ backgroundColor: project.tagColor }}
                >
                  {project.tag}
                </div>

                {/* Project name overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-2xl font-bold text-white">{project.name}</h3>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 text-brand-green flex-shrink-0" />
                    <span className="font-sans text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-gray-600">
                    <Maximize2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="font-sans text-sm font-medium">{project.acres}</span>
                  </div>
                  
                </div>

                <Link
  to={
    project.name === 'Sai Durga'
      ? '/sai-durga'
      : project.name === 'San Euphoria'
      ? '/san-euphoria'
      : project.name === 'Sandy Beach'
      ? '/sandy-beach'
      : project.name === 'Sri Sai'
      ? '/sri-sai'
      : project.name === 'Prakruthi'
      ? '/prakruthi'
      : project.name === 'Indraprasta'
      ? '/indraprasta'
      : project.name === 'Sandy Castle'
      ? '/sandy-castle'
      : project.name === 'Vaarahi Airport Residences'
? '/vaarahi-airport-residences'
: project.name === 'Vaarahi Ainada Township'
? '/vaarahi-ainada-township'
      : '/'
  }
  className="btn-brand w-full block text-center py-3 rounded-xl text-sm"
>
  <span>View Details</span>
</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
