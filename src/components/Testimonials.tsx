import { motion } from "framer-motion";

const testimonials = [
  {
    img: "/testimonial-1.jpg",
    name: "Ramesh & Family",
    role: "Plot Owner — Sai Durga",
    text: "From the first site visit to the registration day, DS Iconic handled every step with absolute clarity. Our plot in Narsipatnam already feels like a family heirloom.",
  },
  {
    img: "/testimonial-2.jpg",
    name: "Suresh Babu",
    role: "Investor — Sandy Beach",
    text: "I've worked with several developers across Vizag. None match DS Iconic on legal cleanliness and follow-through. The Bhogapuram corridor is the right bet, and they made it effortless.",
  },
  {
    img: "/testimonial-3.jpg",
    name: "Lakshmi Priya",
    role: "Plot Owner — Prakruthi",
    text: "Director Satyanarana garu personally walked us through every approval. Buying land has never felt this transparent. Our family is already planning the second purchase.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">

  <div className="section-tag mb-4">
    Testimonials
  </div>

  <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
    What Our{" "}
    <span className="gradient-text italic">Clients Say</span>
  </h2>

  <p className="font-sans text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
    Real experiences from our valued customers who trusted DS Iconic for their dream property investment.
  </p>

</div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="luxury-card p-8"
            >

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#00883d]"
                />

                <div>
                  <h4 className="font-semibold font-serif">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {t.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-7 font-sans">
                "{t.text}"
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}