import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import ConsultationBooking from "./pages/ConsultationBooking/ConsultationBooking";


const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consultation" element={<ConsultationBooking />} />
      </Routes>
    </Router>
  );
}

export default App;