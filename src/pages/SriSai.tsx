import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";

const images = ["/sri-sai.png", "/SRISAI2.png", "/SRISAI3.png"];

const features = [
  "15 Acres Premium Layout",
  "VMRDA & RERA Approved Layout",
  "Premium Gated Community",
  "Construction Completed Venture",
  "40 Feet Black Top Roads",
  "Grand Entrance Arch",
  "Compound Wall Around Venture",
  "Avenue Plantation",
  "24/7 Water Facility",
  "24/7 Electricity Facility",
  "Clear Title & Spot Registration",
  "Ready for Immediate Investment",
];

const advantages = [
  "Main Road Connectivity",
  "Fast Developing Area",
  "Excellent Future Growth Location",
  "Peaceful & Green Environment",
  "Easy Transportation Facility",
  "Near Residential & Developing Zones",
  "Best Location for Future Appreciation",
];

const nearby = [
  { place: "Main Road", dist: "500 Mtrs" },
  { place: "Bus Stop", dist: "700 Mtrs" },
  { place: "School", dist: "1.5 KM" },
  { place: "Hospital", dist: "2.5 KM" },
  { place: "Market", dist: "1.8 KM" },
  { place: "Petrol Bunk", dist: "2.0 KM" },
  { place: "Temple", dist: "1.2 KM" },
  { place: "Railway Station", dist: "6.0 KM" },
];

const amenities = [
  "Wide Internal Roads",
  "Avenue Plantation",
  "Street Light Provision",
  "Electricity Facility",
  "Water Facility",
  "Children's Play Area",
  "Open & Green Spaces",
  "Secure Compound Wall",
];

const investment = [
  "Best Investment Opportunity",
  "Safe Investment",
  "High Returns",
  "Secure Future",
];

export default function SriSai() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

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
    <div className="bg-[#f9fafb] text-gray-900 overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#6d28d9]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#e879f9]/15 blur-[120px]" />
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={goBackToProjects}
            className="px-5 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 text-white flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        <div className="absolute bottom-16 left-6 md:left-16 z-20 max-w-4xl">

          <span className="px-5 py-2 rounded-full bg-white/20 text-white text-xs tracking-[0.3em] uppercase">
            Future Investment
          </span>

          <h1 className="mt-6 text-4xl md:text-7xl font-serif text-white">
            Sri{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d28d9] to-[#e879f9]">
              Sai
            </span>
          </h1>

          <p className="mt-4 flex items-center gap-2 text-white/90">
            <MapPin size={18} />
            Adduroad, Andhra Pradesh
          </p>

          <p className="mt-6 text-white/80 max-w-2xl leading-7">
            Crafted for secure future with premium gated community,
            excellent connectivity and high appreciation potential.
          </p>

          <div className="flex gap-3 mt-8">
            <button onClick={prev} className="p-3 rounded-full bg-white/20 text-white">
              <ArrowLeft />
            </button>

            <button onClick={next} className="p-3 rounded-full bg-white/20 text-white">
              <ArrowRight />
            </button>

            <button
              onClick={goToContact}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#e879f9] text-white font-semibold"
            >
              Book Site Visit
            </button>
          </div>
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

      <div className="text-2xl md:text-4xl font-serif font-bold bg-gradient-to-r from-[#6d28d9] to-[#e879f9] bg-clip-text text-transparent">
        {v}
      </div>

      <p className="text-xs mt-2 uppercase tracking-widest text-gray-500">
        {l}
      </p>

    </div>
  ))}
</section>

      {/* FUTURE INVESTMENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-10 border">
          <h2 className="text-3xl md:text-5xl font-serif">
            Crafted For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d28d9] to-[#e879f9]">
              Secure Future
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Sri Sai is a premium gated community located at Adduroad offering
            excellent connectivity, peaceful environment, and high appreciation
            potential for modern investors and families.
          </p>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-5xl font-serif">Advantages</h2>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {advantages.map((a) => (
            <div key={a} className="p-6 rounded-2xl bg-white shadow border hover:shadow-lg transition">
              <h3 className="text-[#6d28d9] font-serif text-lg">{a}</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Strategic location advantage for future appreciation.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEARBY */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-5xl font-serif">Nearby Attractions</h2>

        <div className="grid md:grid-cols-4 gap-5 mt-10">
          {nearby.map((n) => (
            <div key={n.place} className="p-5 rounded-2xl bg-white border shadow text-center">
              <p className="text-[#6d28d9] font-semibold">{n.place}</p>
              <p className="text-sm text-gray-500 mt-2">{n.dist}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-5xl font-serif">Amenities</h2>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {amenities.map((a) => (
            <div key={a} className="p-6 rounded-2xl bg-white shadow border">
              <CheckCircle2 className="text-[#e879f9]" />
              <h3 className="mt-3 font-serif text-lg">{a}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-5xl font-serif">Investment</h2>

        <div className="grid md:grid-cols-4 gap-5 mt-10">
          {investment.map((i) => (
            <div
              key={i}
              className="p-6 text-center rounded-2xl bg-gradient-to-r from-[#6d28d9] to-[#e879f9] text-white"
            >
              {i}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-5xl font-serif">Premium Features</h2>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {features.map((f) => (
            <div key={f} className="p-6 rounded-2xl bg-white border shadow">
              <CheckCircle2 className="text-[#6d28d9]" />
              <h3 className="mt-3 font-serif">{f}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* MAP */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-10">
          <p className="text-[#6d28d9] uppercase tracking-[0.3em] text-xs">
            Location
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-display">
            Easy Connectivity
          </h2>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-black/10 bg-white/70 backdrop-blur-xl shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?q=Adduroad&t=&z=13&output=embed"
            className="w-full h-[300px]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="rounded-[30px] p-10 md:p-20 bg-gradient-to-r from-[#6d28d9] to-[#e879f9] text-white text-center">
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