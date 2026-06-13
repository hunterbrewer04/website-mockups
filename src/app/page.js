import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import ServiceArea from "../components/ServiceArea";
import CTABand from "../components/CTABand";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{
      fontFamily: "var(--font-body)",
      color: "var(--color-text)",
      background: "var(--color-bg)",
      WebkitFontSmoothing: "antialiased",
      overflowX: "hidden"
    }}>
      <Navbar />
      <Hero />
      <TrustStrip />
      <div style={{ height: 88, background: "linear-gradient(180deg, #0E2235, #F7F5F1)" }} />
      <Services />
      <About />
      <Process />
      <Gallery />
      <Reviews />
      <ServiceArea />
      <div style={{ height: 96, background: "linear-gradient(180deg, #F7F5F1, #0B1C2C)" }} />
      <CTABand />
      <div style={{ height: 96, background: "linear-gradient(180deg, #0B1C2C, #F7F5F1)" }} />
      <Contact />
      <div style={{ height: 90, background: "linear-gradient(180deg, #F7F5F1, #0E2235)" }} />
      <Footer />
    </div>
  );
}
