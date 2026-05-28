import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MapPin,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

const images = ["/sai-durga.png", "/2.png", "/3.jpg"];

const features = [
  "50 Acres Premium Layout",
  "VMRDA Approved Project",
  "RERA Approved",
  "Gated Community",
  "40 Feet Wide Roads",
  "24/7 Water Supply",
  "24/7 Electricity Supply",
  "Drainage System",
  "Compound Wall",
  "Bank Loan Facility",
];

export default function SaiDurga() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  const goToContact = () => navigate("/#contact");
  const goBackToProjects = () => navigate("/#projects");

  return (
    <div className="bg-[#f9fafb] text-gray-900 overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00883d]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#fb111f]/10 blur-[100px]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative h-[100vh] overflow-hidden">

        {/* IMAGE */}
        <motion.img
  key={index}
  src={images[index]}
  initial={{ opacity: 0.6, scale: 1 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
  className="absolute inset-0 w-full h-full object-cover object-center"
/>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* BACK BUTTON */}
        <div className="absolute top-5 left-5 z-30">
          <button
            onClick={goBackToProjects}
            className="glass px-4 py-2 rounded-full text-white flex items-center gap-2 text-sm"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-10 md:bottom-16 left-5 md:left-16 right-5 md:right-auto z-20 max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >

            <span className="section-tag">
              Premium VMRDA Venture
            </span>

            <h1 className="mt-6 font-serif text-4xl md:text-7xl font-bold leading-[1.05] text-white">
              Sai Durga{" "}
              <span className="gradient-text italic">Venture</span>
            </h1>

            <p className="mt-4 flex items-center gap-2 text-white/90 text-sm md:text-lg">
              <MapPin size={16} />
              Narsipatnam, Andhra Pradesh
            </p>

            <p className="mt-5 text-white/80 text-sm md:text-lg leading-7">
              Premium gated community crafted for secure investment and future appreciation.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-8">

              <button
                onClick={prev}
                className="glass w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={next}
                className="glass w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white"
              >
                <ArrowRight size={18} />
              </button>

              <button
                onClick={goToContact}
                className="btn-brand px-6 py-3 rounded-full text-sm md:text-base"
              >
                <span>Book Site Visit</span>
              </button>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {[
            ["50+", "Acres"],
            ["1000+", "Plots"],
            ["VMRDA", "Approved"],
            ["70%", "Loan Facility"],
          ].map(([v, l]) => (
            <div key={l} className="luxury-card p-5 text-center">

              <div className="text-2xl md:text-4xl font-serif font-bold gradient-text">
                {v}
              </div>

              <p className="text-xs md:text-sm text-gray-500 mt-2 uppercase tracking-widest">
                {l}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-5xl mx-auto px-5 py-10">

        <div className="luxury-card p-6 md:p-12">

          <span className="section-tag">About Project</span>

          <h2 className="mt-5 font-serif text-3xl md:text-5xl">
            Crafted for{" "}
            <span className="gradient-text italic">Future Growth</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-7 text-sm md:text-base">
            Sai Durga Venture is a premium plotted development designed for modern families and investors seeking long-term appreciation in a fast-growing location.
          </p>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-6xl mx-auto px-5 py-16">

        <span className="section-tag">Features</span>

        <h2 className="mt-4 font-serif text-3xl md:text-6xl">
          Premium Amenities
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          {features.map((f) => (
            <div key={f} className="luxury-card p-6">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00883d] to-[#fb111f] flex items-center justify-center text-white">
                <CheckCircle2 size={18} />
              </div>

              <h3 className="mt-4 font-serif text-lg md:text-xl">
                {f}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Premium infrastructure for luxury living
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="max-w-6xl mx-auto px-5 py-16">

        <span className="section-tag">Location</span>

        <h2 className="mt-4 font-serif text-3xl md:text-5xl">
          Prime Connectivity
        </h2>

        <div className="mt-8 rounded-3xl overflow-hidden luxury-card">
  <iframe
    src="https://www.google.com/maps?q=St.%20Ann's%20School%20Narsipatnam&output=embed"
    className="w-full h-[300px]"
  />
</div>

      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-5 pb-20">

        <div className="bg-gradient-to-r from-[#00883d] to-[#fb111f] text-white rounded-3xl p-10 text-center">

          <h2 className="font-serif text-3xl md:text-5xl">
            Book Your Plot Today
          </h2>

          <button
            onClick={goToContact}
            className="mt-6 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold"
          >
            Contact Now
          </button>

        </div>

      </section>

      <WhatsAppFloat />
      <Footer />

    </div>
  );
}