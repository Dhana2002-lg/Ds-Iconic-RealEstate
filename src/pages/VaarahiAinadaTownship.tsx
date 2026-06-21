import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";

const images = [
  "/vaarahi-ainada-township.png",
  "/ainada2.jpeg",
  "/ainada3.jpeg",
];

const features = [
  "Adjacent to NH-16",
  "20 KM from Anandapuram",
  "5 KM from Vizianagaram",
  "30 Minutes to Airport",
  "30 Minutes to Beach Corridor",
  "Near Educational Institutions",
  "Residential Ready Location",
  "Investment Friendly Zone",
  "Black Top Roads",
  "Avenue Plantation",
  "Clear Title Property",
  "Spot Registration",
];

const advantages = [
  "NH-16 Highway Facing",
  "20 KM from Anandapuram",
  "5 KM from Vizianagaram",
  "30 Minutes to International Airport",
  "30 Minutes to Beach Corridor",
  "5 Minutes from Bus Stop",
  "Near Engineering Colleges",
  "Near International Schools",
];

const nearby = [
  { place: "Vizianagaram", dist: "5 KM" },
  { place: "Anandapuram", dist: "20 KM" },
  { place: "International Airport", dist: "30 Min" },
  { place: "Beach Corridor", dist: "30 Min" },
  { place: "Bus Stop", dist: "5 Min" },
  { place: "Engineering Colleges", dist: "Nearby" },
  { place: "International Schools", dist: "Nearby" },
  { place: "NH-16 Highway", dist: "Adjacent" },
];

const amenities = [
  "NH-16 Road Access",
  "Black Top Roads",
  "Avenue Plantation",
  "Street Lights",
  "Water Facility",
  "Electricity Facility",
  "Clear Title",
  "Spot Registration",
];

const investment = [
  "Highway Investment",
  "Future Growth",
  "Residential Ready",
  "High Appreciation",
];

export default function VaarahiAinadaTownship() {
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
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#00883d]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#00c853]/15 blur-[120px]" />
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

          <span className="px-5 py-2 rounded-full bg-[#3D0F17]/85 text-[#D4AF37] text-xs tracking-[0.3em] uppercase border border-[#D4AF37]/30">
  Premium Township Investment
</span>

          <h1 className="mt-6 text-4xl md:text-7xl font-serif text-white">
  Vaarahi{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D0F17] to-[#D4AF37]">
    Ainada Township
  </span>
</h1>

          <p className="mt-4 flex items-center gap-2 text-white/90">
            <MapPin size={18} />
            Anandapuram, Andhra Pradesh
          </p>

          <p className="mt-6 text-white/80 max-w-2xl leading-7">
            Strategically located beside NH-16 and just 20 KM from Anandapuram.
Only 5 KM from Vizianagaram with excellent connectivity to the
International Airport, Beach Corridor, educational institutions
and major growth corridors. An ideal destination for both
residential living and long-term investment.
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
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3D0F17] to-[#D4AF37] text-white font-semibold"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      </section>
      {/* STATS */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-4">

  {[
  ["NH-16", "Road Facing"],
  ["5 KM", "Vizianagaram"],
  ["30 Min", "Airport"],
  ["100%", "Clear Title"],
].map(([v, l]) => (
    <div key={l} className="luxury-card p-6 text-center">

      <div className="text-2xl md:text-4xl font-serif font-bold bg-gradient-to-r from-[#3D0F17] to-[#D4AF37] bg-clip-text text-transparent">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D0F17] to-[#D4AF37]">
              Smart Living & Investment
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8">Vaarahi Ainada Township is a strategically located residential
development situated adjacent to NH-16 and just 20 KM from
Anandapuram. With Vizianagaram only 5 KM away and seamless
access to the International Airport and Beach Corridor within
30 minutes, the project offers outstanding connectivity and
future growth potential. Surrounded by engineering colleges,
international schools and essential infrastructure, it is an
ideal location for immediate home construction and secure
long-term investment.
          </p>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl md:text-5xl font-serif">Advantages</h2>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {advantages.map((a) => (
            <div key={a} className="p-6 rounded-2xl bg-white shadow border hover:shadow-lg transition">
              <h3 className="text-[#D4AF37] font-semibold">{a}</h3>
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
              <p className="text-[#D4AF37] font-semibold">{n.place}</p>
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
              <CheckCircle2 className="text-[#D4AF37]" />
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
              className="p-6 text-center rounded-2xl bg-gradient-to-r from-[#3D0F17] to-[#D4AF37] text-white"
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
              <CheckCircle2 className="text-[#D4AF37]" />
              <h3 className="mt-3 font-serif">{f}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* MAP */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="mb-10">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs">
            Location
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-display">
            Easy Connectivity
          </h2>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-black/10 bg-white/70 backdrop-blur-xl shadow-2xl">
          <iframe
            src="https://maps.google.com/maps?q=Anandapuram&t=&z=13&output=embed"
            className="w-full h-[300px]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="rounded-[30px] p-10 md:p-20 bg-gradient-to-r from-[#3D0F17] to-[#D4AF37] text-white text-center">
          <h2 className="text-3xl md:text-5xl font-serif">
            Invest Near The Future International Airport
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