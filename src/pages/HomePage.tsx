import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Locations from "../components/Locations";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      
      <Services />
      <WhyChooseUs />
      <Locations />
      <Gallery />

      <section id="contact">
        <Contact />
        <Testimonials />
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}