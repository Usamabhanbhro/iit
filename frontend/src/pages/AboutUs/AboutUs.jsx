import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Button, Card } from "@heroui/react";
import WhoWeAre from "./components/WhoWeAre";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Expertise from "./components/Expertise";
import Industries from "./components/Industries";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Hero from "./components/Hero";

// ─── DATA ─────────────────────────────────────────────────────────────────────



const AboutUs = () => {
 

    return (
   <>
       <Navbar/>
      {/* Hero section */}
<Hero/>
{/* Who We are Section */}
            <WhoWeAre/>
    {/* Why US Section */}

<WhyUs/>
{/* Team Section */}
<Team/>
{/* Expertise Section  */}
<Expertise/>
{/* Indutries Section */}
<Industries/>

{/* Journey section */}
<Journey/>
 
    {/* Testimonials Section */}
 <Testimonials/>
    {/* CTA Section */}
<CTA/>
    <Footer/>
   </>
  );
};

export default AboutUs;





// // ─── HERO ─────────────────────────────────────────────────────────────────────

// function HeroSection() {
//   return (
    
//   );
// }

// // ─── WHO WE ARE ───────────────────────────────────────────────────────────────

// function WhoWeAreSection() {
//   return (
   
//   );
// }

// // ─── WHY US ───────────────────────────────────────────────────────────────────

// function WhyUsSection() {
//   return (
    
//   );
// }

// // ─── TEAM ─────────────────────────────────────────────────────────────────────

// function TeamSection() {
//   return (
    
//   );
// }

// // ─── EXPERTISE ────────────────────────────────────────────────────────────────

// function ExpertiseSection() {
//   return (
    
//   );
// }

// // ─── INDUSTRIES ───────────────────────────────────────────────────────────────

// function IndustriesSection() {
//   return (
    
//   );
// }

// // ─── JOURNEY / TIMELINE ───────────────────────────────────────────────────────

// function JourneySection() {
//   return (
   
//   );
// }

// // ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

// function TestimonialsSection() {

//   return (
   
//   );
// }

// // ─── CTA ──────────────────────────────────────────────────────────────────────

// function CTASection() {
//   return (
  
//   );
// }

// // ─── MAIN PAGE ────────────────────────────────────────────────────────────────

//  const AboutUs = () =>{
//   return (
//     <main className="font-sans">
//       <HeroSection />
//       <WhoWeAreSection />
//       <WhyUsSection />
//       <TeamSection />
//       <ExpertiseSection />
//       <IndustriesSection />
//       <JourneySection />
//       <TestimonialsSection />
//       <CTASection />
//     </main>
//   );
// }

// export default AboutUs;