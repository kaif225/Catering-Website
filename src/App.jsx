import React, { useState } from 'react';
import Navbar from '/src/components/Navbar';
import CateringHeroSection from '/src/pages/Herosection.jsx';
import LuxuryServices from '/src/pages/LuxuryServices';
import Footer from '/src/components/Footer';
import Event from '/src/pages/Event';
import AboutSection from '/src/pages/AboutSection';
import CapturedMoment from '/src/pages/CapturedMoment';
import Checkout from '/src/components/Checkout';
import Custom404Page  from '/src/pages/NotFound';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initGA, logPageView } from "/src/analytics";

const locomotiveScroll = new LocomotiveScroll();

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  return (
    <div className="bg-white">
      <BrowserRouter>
      <Navbar language={language} toggleLanguage={toggleLanguage} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <Routes>
          <Route path="/" element={<CateringHeroSection language={language}/>} />
          <Route path="/event-planning-services" element={<Event  language={language} />} />
          <Route path="/about-rukn-al-dyafa" element={<AboutSection language={language}/>} />
          <Route path="/luxury-hospitality-services" element={<LuxuryServices language={language} />} />
          <Route path="/hospitality-services-memories" element={<CapturedMoment language={language} />} />
          <Route path="/checkout" element={<Checkout language={language} />} />    
          <Route path="*" element={<Custom404Page  />} />
        </Routes>
        <Footer language={language} />
      </BrowserRouter>
    </div>
  );
}