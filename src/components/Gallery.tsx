import { motion } from "framer-motion";

const images = [
  "/sai-durga.png",
  "/2.png",
  "/3.jpg",
  "/san-euphoria.png",
  "/SAN2.png",
  "/SAN3.png",
  "/sri-sai.png",
  "/SRISAI2.png",
  "/SRISAI3.png",
  "/prakruthi.png",
  "/PRAKRUTHI2.png",
  "/PRAKRUTHI3.png",
  "/sandy-beach.png",
  "/sandy2.png",
  "/sandy3.png",
  "/indraprasta.png",
  "/indraprasta2.png",
  "/indraprasta3.png",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-28 bg-[#f8faf8] overflow-hidden"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-tag">
            Cinematic Gallery
          </p>

          <h2 className="mt-4 font-serif text-5xl md:text-7xl font-bold text-gray-900 leading-[0.95] tracking-[-0.03em]">
  Land In{" "}
  <span className="gradient-text italic">
    Motion
  </span>
</h2>
        </motion.div>
      </div>

      {/* Scrolling Images */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 marquee-track w-max">
          {[...images, ...images].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="relative h-[420px] w-[560px] shrink-0 rounded-[32px] overflow-hidden shadow-2xl group"
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}