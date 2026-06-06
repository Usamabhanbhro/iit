

import { useState } from "react";
import { Button, Card } from "@heroui/react";
import Offerings from "./components/Offerings";
import Bookings from "./components/Bookings";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Consultation from "./components/Consultation";
import Hero from "./components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ConsultationBooking = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Offerings />
      <Bookings />
      <Consultation/>
      <Process />
      <Testimonials />
      <CTA />
      <Footer/>
    </>
    
  );
}

export default ConsultationBooking;