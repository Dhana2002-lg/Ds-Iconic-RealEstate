import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";

const images = [
  "/sandycastle.png",
  "/sandycastle2.png",
  "/sandycastle3.png",
];

const features = [
  "Fully Furnished Studio Apartments",
  "Assured Rental Income",
  "Premium Resort Style Living",
  "Grand Entrance with Clubhouse",
  "Swimming Pool Access",
  "CCTV Security",
  "100% Power Backup",
  "Premium Wooden Flooring",
  "Designer False Ceiling",
  "Luxury Interiors",
  "Near Beach",
  "Near Bhogapuram International Airport",
];

const advantages = [
  "Near Bhogapuram International Airport",
  "Near Coastal Corridor",
  "Close to NH-16 Highway",
  "Near Sunray Resorts",
  "Near Miracle Software Park",
  "High Rental Demand Area",
  "Fast Growing Investment Zone",
  "Near IT & Tourism Hubs",
];

const investReasons = [
  "Rental Income",
  "Luxury Living",
  "Future Growth",
  "Airport Corridor",
  "Tourism Growth",
];

export default function SandyCastle() {
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
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goBackToProjects = () => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="bg-[#faf7f2] text-gray-900 overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0f766e]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1f1f1f]/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <motion.img
          key={index}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

        {/* BACK BUTTON */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={goBackToProjects}
            className="bg-white/60 backdrop-blur-xl px-5 py-3 rounded-full flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        {/* HERO CONTENT */}
        <div className="absolute bottom-16 left-6 md:left-16 z-20 max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="px-5 py-2 rounded-full bg-white/70 text-[#0f766e] text-xs tracking-[0.3em] uppercase">
              Luxury Studio Apartments
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl leading-tight text-white">
              Sandy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#134e4a]">
                Castle
              </span>
            </h1>

            <p className="mt-4 flex items-center gap-2 text-white/95 text-base md:text-lg">
              <MapPin size={18} />
              Kancheru, Bhogapuram
            </p>

            <p className="mt-5 text-white/90 text-sm md:text-base leading-7 max-w-3xl">
              Premium fully furnished studio apartments designed for luxury
              resort living with assured rental income and future appreciation.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">

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
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0f766e] to-[#134e4a]from-[#0f766e] to-[#134e4a] text-white font-semibold"
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
          ["675", "Sq.ft"],
          ["Luxury", "Interiors"],
          ["Rental", "Income"],
          ["Near", "Airport"],
        ].map(([v, l]) => (
          <div key={l} className="luxury-card p-6 text-center">

            <div className="text-2xl md:text-4xl font-serif font-bold bg-gradient-to-r from-[#0f766e] to-[#134e4a] bg-clip-text text-transparent">
              {v}
            </div>

            <p className="text-xs mt-2 uppercase tracking-widest text-gray-500">
              {l}
            </p>

          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-white/70 backdrop-blur-xl border rounded-[30px] p-8 md:p-12 shadow-xl">

          <p className="text-[#0f766e] uppercase tracking-[0.3em] text-xs">
            Resort Style Living
          </p>

          <h2 className="mt-3 text-2xl md:text-4xl">
            Crafted For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f766e] to-[#134e4a]">
              Luxury Lifestyle
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-7 text-sm md:text-base">
            Sandy Castle offers premium fully furnished studio apartments
            surrounded by modern amenities, resort ambience, and strong future
            investment potential near Bhogapuram Airport.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-3xl md:text-5xl mb-8">
          Premium Amenities
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {features.map((f) => (
            <div
              key={f}
              className="p-6 rounded-[25px] bg-white/70 shadow border"
            >

              <CheckCircle2 className="text-[#0f766e]" />

              <h3 className="mt-3 text-base md:text-lg font-semibold">
                {f}
              </h3>

            </div>
          ))}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-3xl md:text-5xl mb-8">
          Location Advantages
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {advantages.map((a) => (
            <div
              key={a}
              className="p-5 rounded-[20px] bg-white shadow border"
            >

              <h3 className="text-[#0f766e] text-base md:text-lg font-semibold">
                {a}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Strategic investment advantage
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-3xl md:text-5xl mb-8">
          Why Invest?
        </h2>

        <div className="grid md:grid-cols-5 gap-4">

          {investReasons.map((i) => (
            <div
              key={i}
              className="p-5 rounded-[25px] text-white bg-gradient-to-r from-[#0f766e] to-[#134e4a] text-center"
            >
              <h3 className="text-sm md:text-base font-semibold">
                {i}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl md:text-5xl mb-8">
          Prime Connectivity
        </h2>

        <div className="rounded-[30px] overflow-hidden border shadow">
          <iframe
            src="https://maps.google.com/maps?q=Bhogapuram&t=&z=13&output=embed"
            className="w-full h-[350px]"
          />
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">

        <div className="rounded-[30px] p-10 text-center bg-gradient-to-r from-[#0f766e] to-[#134e4a] text-white">

          <h2 className="text-2xl md:text-4xl">
            Own Your Luxury Studio Apartment Today
          </h2>

          <p className="mt-4 text-sm md:text-base">
            Experience resort living with premium investment benefits.
          </p>

          <button
            onClick={goToContact}
            className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold"
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