import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";

const images = [
  "/indraprasta.png",
  "/indraprasta2.png",
  "/indraprasta3.png",
];

const features = [
  "Grand Entrance Arch",
  "Premium Gated Community",
  "100 Feet Main Road",
  "40 Feet Internal Roads",
  "Underground Electricity",
  "Street Lighting",
  "Water Pipeline Connection",
  "Avenue Plantation",
  "Landscaped Parks",
  "Children Play Area",
  "Clear Title & Spot Registration",
  "24/7 Security",
];

const advantages = [
  "Near Bhogapuram International Airport",
  "Near S.Kota Railway Station",
  "Quick Access To NH-16",
  "Fast Developing Bhogapuram Corridor",
  "Close To Beach Connectivity",
  "High Appreciation Investment Zone",
  "Near Resorts & Tourism Development",
  "Excellent Future Growth Potential",
];

const investReasons = [
  "Prime Location",
  "Airport Connectivity",
  "Luxury Lifestyle",
  "Future Appreciation",
  "Secure Investment",
];

export default function Indraprasta() {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((p) => (p + 1) % images.length);
  };

  const prev = () => {
    setIndex((p) => (p - 1 + images.length) % images.length);
  };

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
    <div className="bg-[#faf6f0] text-[#3e2c23] overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#d6b98c]/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#6f4e37]/10 blur-[120px]" />

      </div>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <motion.img
          key={index}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3e2c23]/90 via-[#3e2c23]/40 to-black/10" />

        {/* BACK BUTTON */}
        <div className="absolute top-6 left-6 z-20">

          <button
            onClick={goBackToProjects}
            className="glass px-5 py-3 rounded-full flex items-center gap-2 text-white"
          >
            <ArrowLeft size={16} />
            Back
          </button>

        </div>

        {/* HERO CONTENT */}
        <div className="absolute bottom-16 left-6 md:left-16 z-20 max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="section-tag !bg-[#d6b98c]/20 !border-[#d6b98c]/30 !text-[#fff3df]">
              Luxury Premium Venture
            </div>

            <h1 className="font-serif mt-6 text-5xl md:text-7xl font-bold leading-tight text-white">

              Indraprasta{" "}

              <span className="bg-gradient-to-r from-[#d6b98c] to-[#fff3df] bg-clip-text text-transparent italic">
                Bhogapuram
              </span>

            </h1>

            <p className="mt-5 flex items-center gap-2 text-white/90 text-base md:text-lg">

              <MapPin size={18} />

              Near S.Kota Railway Station & Bhogapuram Airport

            </p>

            <p className="mt-6 text-white/80 text-sm md:text-lg leading-8 max-w-3xl">

              Experience luxurious plotted development with iconic architecture,
              premium infrastructure, and excellent connectivity near
              Bhogapuram International Airport and S.Kota Railway Station.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mt-10">

              <button
                onClick={prev}
                className="glass w-12 h-12 rounded-full flex items-center justify-center text-white"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={next}
                className="glass w-12 h-12 rounded-full flex items-center justify-center text-white"
              >
                <ArrowRight size={18} />
              </button>

              <button
                onClick={goToContact}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6f4e37] to-[#3e2c23] text-white font-semibold shadow-2xl hover:scale-105 transition"
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
    ["70+", "Acres"],
    ["VMRDA", "Approved"],
    ["Premium", "Layouts"],
    ["100%", "Clear Title"],
  ].map(([v, l]) => (
    <div key={l} className="luxury-card p-6 text-center">

      <div className="text-2xl md:text-4xl font-serif font-bold bg-gradient-to-r from-[#6f4e37] to-[#d6b98c] bg-clip-text text-transparent">
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

        <div className="glass rounded-[40px] p-8 md:p-14 hero-shadow bg-white/60">

          <div className="flex items-center gap-3 text-[#6f4e37]">


            <p className="uppercase tracking-[0.3em] text-xs">
              Grand Lifestyle Destination
            </p>

          </div>

          <h2 className="font-serif mt-5 text-3xl md:text-5xl leading-tight">

            Crafted For{" "}

            <span className="bg-gradient-to-r from-[#6f4e37] to-[#d6b98c] bg-clip-text text-transparent italic">
              Elite Living
            </span>

          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-sm md:text-base">

            Indraprasta Bhogapuram offers premium plotted developments
            designed for luxurious living and long-term appreciation.
            Strategically located near S.Kota Railway Station and
            Bhogapuram International Airport.

          </p>

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="font-serif text-3xl md:text-5xl mb-10">

          Premium Amenities

        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {features.map((f) => (

            <div
              key={f}
              className="luxury-card p-7 bg-white/80"
            >

              <CheckCircle2 className="text-[#6f4e37]" />

              <h3 className="mt-4 text-xl font-semibold text-[#3e2c23]">
                {f}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* LOCATION ADVANTAGES */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="font-serif text-3xl md:text-5xl mb-10">

          Location Advantages

        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {advantages.map((a) => (

            <div
              key={a}
              className="luxury-card p-6 bg-white/80"
            >

              <h3 className="text-[#6f4e37] text-xl font-semibold">
                {a}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Strategic investment advantage
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CONNECTIVITY */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="font-serif text-3xl md:text-5xl mb-10">

          Prime Connectivity

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="luxury-card p-8 bg-white/80">


            <h3 className="mt-5 text-2xl font-semibold">
              Bhogapuram Airport
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              Quick access to Bhogapuram International Airport with
              excellent future growth opportunities.
            </p>

          </div>

          <div className="luxury-card p-8 bg-white/80">

            <h3 className="mt-5 text-2xl font-semibold">
              S.Kota Railway Station
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              Seamless railway connectivity for easy travel and
              accessibility to nearby cities.
            </p>

          </div>

        </div>

      </section>

      {/* INVESTMENT */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="font-serif text-3xl md:text-5xl mb-10">

          Why Invest?

        </h2>

        <div className="grid md:grid-cols-5 gap-5">

          {investReasons.map((i) => (

            <div
              key={i}
              className="rounded-[28px] p-6 text-center bg-gradient-to-br from-[#6f4e37] to-[#3e2c23] text-white"
            >

              <h3 className="text-base font-semibold">
                {i}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="font-serif text-3xl md:text-5xl mb-10">

          Project Location

        </h2>

        <div className="rounded-[35px] overflow-hidden border border-[#d6b98c]/20 shadow-2xl">

          <iframe
            src="https://maps.google.com/maps?q=Bhogapuram&t=&z=13&output=embed"
            className="w-full h-[400px]"
          />

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] p-12 text-center bg-gradient-to-r from-[#6f4e37] to-[#3e2c23] text-white">

          <h2 className="font-serif text-3xl md:text-5xl">

            Own A Landmark Investment

          </h2>

          <p className="mt-5 text-white/80 text-sm md:text-base">

            Reserve your premium plot in Indraprasta Bhogapuram today.

          </p>

          <button
            onClick={goToContact}
            className="mt-8 px-8 py-4 rounded-full bg-[#fff3df] text-[#3e2c23] font-semibold hover:scale-105 transition"
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