
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudy from "./components/CaseStudy";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import StatsBar from "./components/StatsBar";
import Testimonials from "./components/Testimonials";
import Trusted from "./components/Trusted";


const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Projects />
      <CaseStudy />
      <Trusted />
      <Testimonials />
      <CTA />
      <Footer/>
    </>
  );
}


export default Portfolio;