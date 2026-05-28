import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";

const images = [
  "/prakruthi.png",
  "/PRAKRUTHI2.png",
  "/PRAKRUTHI3.png",
];

const features = [
  "25 Acres Premium Layout",
  "VMRDA & RERA Approved",
  "National Highway Based Project",
  "Premium Gated Community",
  "Construction Completed Venture",
  "40 Feet Black Top Roads",
  "Grand Entrance Arch",
  "Compound Wall Around Layout",
  "24/7 Water Facility",
  "24/7 Electricity Facility",
  "Clear Title & Spot Registration",
];

const amenities = [
  "Exclusive Clubhouse",
  "Swimming Pool",
  "Landscaped Parks & Open Spaces",
  "Butterfly Theme Street Lighting",
  "Jogging / Walking Track",
  "Underground Electricity Distribution System",
  "Scientifically Designed Open Drainage System",
  "24/7 Security Monitoring",
];

const investment = ["Safe Investment", "High Returns", "Future Growth"];

export default function Prakruti() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const goToContact = () => {
  navigate("/");
  setTimeout(() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }, 300);
};

const goBackToProjects = () => {
  navigate("/");
  setTimeout(() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  }, 300);
};


  return (
    <div className="bg-[#f8faf8] text-gray-900 overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#16a34a]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#14532d]/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <motion.img
          key={index}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* BACK BUTTON (CENTER FIX LATER) */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={goBackToProjects}
            className="flex items-center gap-2 bg-white/60 px-5 py-3 rounded-full backdrop-blur-xl border border-white/20 shadow-lg"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        {/* HERO CONTENT */}
        <div className="absolute bottom-16 left-6 md:left-16 z-20 max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <span className="px-5 py-2 rounded-full bg-white/70 text-[#16a34a] text-xs tracking-[0.3em] uppercase">
              Premium Gated Community
            </span>

            {/* FIXED FONT (GLOBAL H1 STYLE WILL APPLY) */}
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight text-white">
              Prakruti
            </h1>

            <p className="mt-5 flex items-center gap-2 text-white/90 text-lg">
              <MapPin size={18} />
              Pendurthi, Andhra Pradesh
            </p>

            <p className="mt-6 text-white/90 text-lg md:text-xl leading-8 max-w-3xl">
              Premium gated community crafted for luxury living and future appreciation.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-4 mt-8">

              {/* ARROWS FIXED CENTER */}
              <button
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white"
              >
                <ArrowLeft />
              </button>

              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white"
              >
                <ArrowRight />
              </button>

              <button
                onClick={goToContact}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#22c55e] to-[#065f46] text-white font-semibold"
              >
                Book Site Visit
              </button>

            </div>
          </motion.div>
        </div>
      </section>
      {/* STATS */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-4">

  {[
    ["25+", "Acres"],
    ["VMRDA", "Approved"],
    ["Premium", "Layouts"],
    ["100%", "Clear Title"],
  ].map(([v, l]) => (
    <div key={l} className="luxury-card p-6 text-center">

      <div className="text-2xl md:text-4xl font-serif font-bold bg-gradient-to-r from-[#16a34a] to-[#14532d] bg-clip-text text-transparent">
        {v}
      </div>

      <p className="text-xs mt-2 uppercase tracking-widest text-gray-500">
        {l}
      </p>

    </div>
  ))}
</section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl md:text-5xl mb-10">
          Premium Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((f) => (
            <div key={f} className="p-6 bg-white/70 rounded-2xl border shadow">

              <CheckCircle2 className="text-[#16a34a]" />

              <h3 className="mt-3 text-lg">
                {f}
              </h3>

            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-4xl mb-10">
          Amenities
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {amenities.map((a) => (
            <div key={a} className="p-6 rounded-2xl bg-gradient-to-br from-[#16a34a] to-[#14532d] text-white text-center">
              {a}
            </div>
          ))}
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl mb-10">
          Investment
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {investment.map((i) => (
            <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-[#22c55e] to-[#065f46] text-white text-center">
              {i}
            </div>
          ))}
        </div>
      </section>
      {/* MAP */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-10">
          <p className="text-[#22c55e] uppercase tracking-[0.3em] text-xs">
            Location
          </p>

          <h2 className="mt-3 text-5xl md:text-7xl font-display leading-[0.95] tracking-[-0.03em]">
            Prime Connectivity
          </h2>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-black/10 bg-white/70 backdrop-blur-xl shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?q=Pendurthi&t=&z=13&output=embed"
            className="w-full h-[300px]"
          />
        </div>
      </section>
      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="rounded-[30px] p-10 md:p-20 bg-gradient-to-r from-[#22c55e] to-[#065f46] text-white text-center">
          <h2 className="text-3xl md:text-5xl font-serif">
            Secure Your Future Today
          </h2>

          <p className="mt-5 text-white/80">
            High appreciation investment opportunity in fast developing zone.
          </p>

          <button
            onClick={goToContact}
            className="mt-8 px-8 py-4 bg-white text-black rounded-full font-semibold"
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