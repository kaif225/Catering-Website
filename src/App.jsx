import React, { useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './pages/herosection';
import LuxuryServices from './pages/LuxuryServices';
import Footer from './components/Footer';
import Event from './pages/Event';
import AboutSection from './pages/AboutSection';
import CapturedMoment from './pages/CapturedMoment';
import Checkout from './components/Checkout';
import Custom404Page from './pages/NotFound';
import LocomotiveScroll from 'locomotive-scroll';
import { initGA, logPageView } from "./analytics";

const locomotiveScroll = new LocomotiveScroll();

const MetaTags = () => {
  const location = useLocation();
  const path = location.pathname;

  const getMetaData = () => {
    switch(path) {
      case '/':
        return {
          title: 'Rukn Al Dyafa - Luxury Catering Services',
          description: 'Premium catering and hospitality services in UAE. Experience luxury event planning and exclusive hospitality solutions.',
        };
      case '/event-planning-services/':
        return {
          title: 'Event Planning Services - Rukn Al Dyafa',
          description: 'Professional event planning services in UAE. From corporate events to weddings, we create unforgettable experiences.',
        };
      case '/about-rukn-al-dyafa/':
        return {
          title: 'About Rukn Al Dyafa - Our Story',
          description: 'Learn about Rukn Al Dyafa, UAE\'s premier luxury catering and hospitality service provider.',
        };
      case '/luxury-hospitality-services/':
        return {
          title: 'Luxury Hospitality Services - Rukn Al Dyafa',
          description: 'Exclusive hospitality services for luxury events and corporate functions in UAE.',
        };
      case '/hospitality-services-memories/':
        return {
          title: 'Our Portfolio - Rukn Al Dyafa',
          description: 'View our gallery of successful events and luxury catering services across UAE.',
        };
      case '/checkout/':
        return {
          title: 'Book Our Services - Rukn Al Dyafa',
          description: 'Book our premium catering and hospitality services for your next event.',
        };
      default:
        return {
          title: 'Rukn Al Dyafa - Luxury Catering & Hospitality',
          description: 'Premium catering and hospitality services in UAE.',
        };
    }
  };

  const metadata = getMetaData();
  const canonicalUrl = `https://ruknaldyafa.ae${path}`;

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  return (
    <HelmetProvider>
      <div className="bg-white">
        <BrowserRouter>
          <MetaTags />
          <Navbar language={language} toggleLanguage={toggleLanguage} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          <Routes>
            <Route path="/" element={<HeroSection language={language}/>} />
            <Route path="/event-planning-services/" element={<Event language={language} />} />
            <Route path="/about-rukn-al-dyafa/" element={<AboutSection language={language}/>} />
            <Route path="/luxury-hospitality-services/" element={<LuxuryServices language={language} />} />
            <Route path="/hospitality-services-memories/" element={<CapturedMoment language={language} />} />
            <Route path="/checkout/" element={<Checkout language={language} />} />    
            <Route path="*" element={<Custom404Page />} />
          </Routes>
          <Footer language={language} />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}