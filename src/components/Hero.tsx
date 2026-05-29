import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Award } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "500+", label: "Happy Families" },
    { value: "1000+", label: "Plots Sold" },
    { value: "10+", label: "Years Experience" },
    
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Locations", id: "locations" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url('/hero.jpg')`,
        }}
      />

      {/* OVERLAY (LIGHT - IMPORTANT FOR CLEAR IMAGE) */}
      <div className="absolute inset-0 bg-black/25" />

      {/* TOP COLOR STRIP */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, #00883d, #d4af37, #fb111f)",
        }}
      />

      {/* ================= NAVBAR ================= */}
<nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
  <div className="w-full max-w-7xl">
    <div
      className={`flex items-center justify-between px-4 md:px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-500 ${
        scrolled
          ? "bg-white/90 border-gray-200 shadow-2xl"
          : "bg-white/10 border-white/20"
      }`}
    >
      {/* LOGO */}
      <div className="flex items-center gap-3 shrink-0">
        <img
          src="/logo.jpg"
          alt="DS Logo"
          className={`w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 transition-all duration-500 ${
            scrolled ? "border-gray-300" : "border-white/40"
          }`}
        />

        <div className="leading-none">
          <div className="text-sm font-semibold">
            <span className="text-[#fb111f]">DS</span>{" "}
            <span className="text-[#00883d]">Iconic</span>
          </div>

          <div
            className={`text-[10px] tracking-widest uppercase transition-all duration-500 ${
              scrolled ? "text-gray-600" : "text-white/80"
            }`}
          >
            Real Estate
          </div>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-sm font-medium tracking-wide transition duration-300 ${
              scrolled
                ? "text-gray-700 hover:text-[#00883d]"
                : "text-white/90 hover:text-[#d4af37]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* RIGHT SIDE ACTIONS */}
      <div className="flex items-center gap-3">
        {/* CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden sm:block px-4 md:px-5 py-2.5 rounded-full text-white text-xs md:text-sm font-medium shadow-md hover:shadow-lg transition-all"
          style={{
            background: "linear-gradient(90deg, #00883d, #fb111f)",
          }}
        >
          Book Site Visit
        </button>

        {/* HAMBURGER */}
        <button
  className={`md:hidden text-2xl leading-none transition-colors duration-300 ${
    scrolled ? "text-gray-800" : "text-white"
  }`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
      </div>
    </div>
  </div>
</nav>

{/* ================= MOBILE MENU ================= */}
{menuOpen && (
  <div className="md:hidden fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border p-6 z-50">
    <div className="flex flex-col gap-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            scrollTo(item.id);
            setMenuOpen(false);
          }}
          className="text-gray-700 font-medium hover:text-[#00883d] text-left"
        >
          {item.label}
        </button>
      ))}

      {/* CTA inside mobile menu */}
      <button
        onClick={() => {
          scrollTo("contact");
          setMenuOpen(false);
        }}
        className="mt-3 px-4 py-3 rounded-xl text-white text-sm font-medium"
        style={{
          background: "linear-gradient(90deg, #00883d, #fb111f)",
        }}
      >
        Book Site Visit
      </button>
    </div>
  </div>
)}

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 px-6 md:px-16 pt-32 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-4xl text-white"
        >
          {/* BADGE */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#d4af37]/30">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span className="text-white/90 text-xs tracking-widest uppercase">
                VMRDA Approved Layouts
              </span>
            </div>
          </div>

          {/* TITLE */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
            Premium{" "}
            <span className="italic text-[#d4af37]">Open Plot</span>
            <br />
            Communities
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
           VMRDA approved layouts across Andhra Pradesh — thoughtfully designed for trusted investments and long-term value.
          </p>

          {/* LOCATION */}
          <div className="flex items-center gap-2 mb-10 text-white/80">
            <MapPin className="w-4 h-4 text-[#00883d]" />
            <span className="text-sm">
              Narsipatnam & surrounding regions, Andhra Pradesh
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-4 rounded-full text-sm font-semibold text-white"
              style={{
                background:
                  "linear-gradient(90deg, #00883d, #fb111f)",
              }}
            >
              Explore Projects
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 rounded-full text-sm font-semibold text-white"
              style={{
                background:
                  "linear-gradient(90deg, #00883d, #fb111f)",
              }}
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* ================= STATS ================= */}
        {/* ================= STATS ================= */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="mt-16 w-full flex justify-center"
>
  <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 px-4">

    {stats.map((stat) => (
      <div
        key={stat.label}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-6 text-center hover:scale-105 transition"
      >
        <div className="text-2xl md:text-3xl font-bold text-[#d4af37]">
          {stat.value}
        </div>

        <div className="text-white/70 text-[10px] md:text-xs mt-2 uppercase tracking-wide px-2 leading-tight">
          {stat.label}
        </div>
      </div>
    ))}

  </div>
</motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      
    </section>
  );
}