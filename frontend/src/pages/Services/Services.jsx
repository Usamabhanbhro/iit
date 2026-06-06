import CTA from "./components/CTA";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Value from "./components/Value";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
const Services =()=> {
  return (
<>
    <Navbar/>
    <Hero />
      <ServicesSection />
      <Process />
      <Value />
      <Industries />
      <CTA />
    <Footer/>
</>
  );
}


export default Services;