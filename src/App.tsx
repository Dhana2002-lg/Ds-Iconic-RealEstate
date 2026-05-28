import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import LoadingGate from "./components/LoadingGate";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Gallery from "./components/Gallery";

import SaiDurga from "./pages/SaiDurga";
import SanEuphoria from "./pages/SanEuphoria";
import SandyBeach from "./pages/SandyBeach";
import SriSai from "./pages/SriSai";
import Prakruthi from "./pages/Prakruthi";
import Indraprasta from "./pages/Indraprasta";

/* ================= HOME PAGE ================= */
function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why">
        <WhyChooseUs />
      </section>

      <section id="locations">
        <Locations />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
        <Testimonials />
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

/* ================= ROUTE HANDLER (HASH SCROLL FIX) ================= */
function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const scrollToSection = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        setTimeout(scrollToSection, 200);
      }
    };

    // wait for LoadingGate + DOM render
    setTimeout(scrollToSection, 600);
  }, [location]);

  return (
    <LoadingGate>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* PROJECT PAGES */}
        <Route path="/sai-durga" element={<SaiDurga />} />
        <Route path="/san-euphoria" element={<SanEuphoria />} />
        <Route path="/sandy-beach" element={<SandyBeach />} />
        <Route path="/sri-sai" element={<SriSai />} />
        <Route path="/prakruthi" element={<Prakruthi />} />
        <Route path="/indraprasta" element={<Indraprasta />} />
      </Routes>
    </LoadingGate>
  );
}

/* ================= APP ROOT ================= */
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}