import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";

const images = ["/san-euphoria.png", "/SAN2.png", "/SAN3.png"];

const features = [
  "Premium Gated Community",
  "VMRDA Approved Venture",
  "40 Feet Black Top Roads",
  "Underground Electricity",
  "24/7 Water Facility",
  "Avenue Plantation",
  "Compound Wall",
  "Drainage System",
  "Clear Title",
  "Spot Registration",
  "Children Play Area",
  "Future Growth Location",
];

const advantages = [
  "Near NH-16 Highway",
  "Close to Schools & Hospitals",
  "Fast Growing Residential Zone",
  "Excellent Appreciation Potential",
  "Peaceful Green Environment",
  "Prime Connectivity",
  "Investment Friendly Location",
  "Luxury Lifestyle Opportunity",
];

const investReasons = [
  "High Appreciation",
  "Premium Location",
  "Safe Investment",
  "Luxury Living",
  "Future Growth",
];

export default function SanEuphoria() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  const goToContact = () => {
    navigate("/#contact");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goBackToProjects = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="bg-[#f9fafb] text-gray-900 overflow-x-hidden">

      {/* GLOW */}
      {/* BACKGROUND GLOW (orange/yellow only) */}
<div className="fixed inset-0 -z-10">
  <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#ff7b00]/10 blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#ffd60a]/10 blur-[120px]" />
</div>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <motion.img
          key={index}
          src={images[index]}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay (reduced for clarity) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* back */}
        <div className="absolute top-5 left-5 z-20">
          <button
            onClick={goBackToProjects}
            className="glass px-4 py-2 rounded-full text-white flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        {/* content */}
        <div className="absolute bottom-10 md:bottom-16 left-5 md:left-16 z-20 max-w-3xl">

          <span className="px-5 py-2 rounded-full text-xs tracking-[0.3em] uppercase font-semibold
bg-[#ff7b00]/10 border border-[#ff7b00]/20 text-[#ff7b00]">
  Premium Venture
</span>

          <h1 className="mt-5 text-4xl md:text-6xl font-serif font-bold leading-tight text-white">
  San{" "}
  <span className="bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] bg-clip-text text-transparent italic">
    Euphoria
  </span>
</h1>

          <p className="mt-3 flex items-center gap-2 text-white/90">
            <MapPin size={16} />
            Near Narsipatnam, Andhra Pradesh
          </p>

          <p className="mt-5 text-white/80 text-sm md:text-lg leading-7 max-w-xl">
            A premium gated plotted development for luxury living and long-term investment growth.
          </p>

          {/* buttons */}
          <div className="flex gap-3 mt-6 flex-wrap">

            <button
              onClick={prev}
              className="glass w-11 h-11 rounded-full flex items-center justify-center text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={next}
              className="glass w-11 h-11 rounded-full flex items-center justify-center text-white"
            >
              <ArrowRight size={18} />
            </button>

            <button
  onClick={goToContact}
  className="px-6 py-3 rounded-full font-semibold text-white 
  bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] 
  shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
>
  <span>Book Site Visit</span>
</button>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-4">

  {[
    ["70+", "Acres"],
    ["VMRDA", "Approved"],
    ["Premium", "Layouts"],
    ["100%", "Clear Title"],
  ].map(([v, l]) => (
    <div key={l} className="luxury-card p-6 text-center">

      <div className="text-2xl md:text-4xl font-serif font-bold bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] bg-clip-text text-transparent">
        {v}
      </div>

      <p className="text-xs mt-2 uppercase tracking-widest text-gray-500">
        {l}
      </p>

    </div>
  ))}
</section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-5 py-10">
        <div className="luxury-card p-8 md:p-12">

          <span className="section-tag text-[#ff7b00] border-[#ff7b00]/20 bg-[#ff7b00]/10">
  About
</span>

          <h2 className="mt-4 text-3xl md:text-5xl font-serif">
            Crafted for{" "}
            <span className="italic bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] bg-clip-text text-transparent">
  Future Growth
</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            San Euphoria is designed for investors and families seeking luxury lifestyle and strong appreciation.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-5 py-14">

        <span className="section-tag">Features</span>

        <h2 className="mt-4 text-3xl md:text-5xl font-serif">
          Premium Amenities
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          {features.map((f) => (
            <div key={f} className="luxury-card p-6">

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] flex items-center justify-center text-white">
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

      {/* ADVANTAGES */}
      <section className="max-w-6xl mx-auto px-5 py-14">

        <span className="section-tag">Location</span>

        <h2 className="mt-4 text-3xl md:text-5xl font-serif">
          Advantages
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          {advantages.map((a) => (
            <div key={a} className="luxury-card p-6 flex gap-4">

              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] flex items-center justify-center text-white">
  <CheckCircle2 size={16} />
</div>
               

              <div>
                <h3 className="font-serif text-lg">{a}</h3>
                <p className="text-sm text-gray-500">
                  Strong growth potential location
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* INVEST */}
      <section className="max-w-6xl mx-auto px-5 py-14">

        <span className="section-tag">Investment</span>

        <h2 className="mt-4 text-3xl md:text-5xl font-serif">
          Why Invest?
        </h2>

        <div className="grid md:grid-cols-5 gap-4 mt-8">

          {investReasons.map((r) => (
            <div key={r} className="luxury-card p-6 text-center">

              <p className="font-serif">{r}</p>

            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-5 py-14">

        <span className="section-tag">Location</span>

        <h2 className="mt-4 text-3xl md:text-5xl font-serif">
          Prime Connectivity
        </h2>

        <div className="mt-6 overflow-hidden rounded-3xl luxury-card">
          <iframe
            src="https://maps.google.com/maps?q=Anakapalli&t=&z=13&output=embed"
            className="w-full h-[300px] md:h-[300px]"
          />
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-5 pb-20">

        <div className="bg-gradient-to-r from-[#ff7b00] to-[#ffd60a] text-white rounded-3xl p-10 text-center">

          <h2 className="text-3xl md:text-5xl font-serif">
            Secure Your Premium Plot Today
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