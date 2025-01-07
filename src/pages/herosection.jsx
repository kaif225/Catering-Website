import React, { useEffect, useState } from "react";
import Plans from '../components/Plans';
import BlogSection from '../components/BlogSection';
import About from '../components/About';
import VideoBackground from '../components/VideoBackground';
import PromoBanner from '../components/PromoBanner';
import Form from "../components/ContactForm";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaSnapchat } from "react-icons/fa";
import FeaturedArtworks from "../components/HeroGallery";
import { Helmet } from "react-helmet-async";

import IMG2 from "../assets/Images/2.jpg";
import IMG51 from "../assets/Images/51.jpg";
import IMG48 from "../assets/Images/49.jpg";
import IMG10 from "../assets/Images/10.jpg";
import IMG50 from "../assets/About.jpg";
import IMG01 from "../assets/home.jpg";
import IMG43 from "../assets/Images/43.jpg";
import FAQs from "../components/FAQs";

const CateringHeroSection = ({ language }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Define images array
  const images = [
    // "https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg",
    // "https://i.pinimg.com/736x/5d/c5/b4/5dc5b454033a9ffc56cc4297a25d2309.jpg",
    // "https://i.pinimg.com/736x/2a/75/40/2a75408e842265f495bebb58cec55be0.jpg",
    IMG2,
    IMG50,
    IMG51,
    IMG48,
    IMG10,
    IMG01,
    IMG43,
    // Add more images as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const translations = {
    english: {
      heading: "Flavors that tell stories, \n and hospitality that inspires moments.",
      paragraph:
        "At Rukn Al Dyafa, we deliver the elegance of traditional hospitality through luxurious catering, crafting unforgettable experiences with exquisite beverages for every occasion.",
      bookNow: "Book Now",
      SideQuote: "Every season there is a set for two-tours",
      SideDesc: "Exclusive arrangements, and immersive experiences for beverage services."
    },
    arabic: {
      heading: "نكهات تروي القصص، \nوضيافة تلهم اللحظات.",
      paragraph:
        "في ركن الضيافة، نقدم أناقة الضيافة التقليدية من خلال خدمات الضيافة الفاخرة، ونصنع تجارب لا تُنسى مع مشروبات راقية لكل مناسبة.",
      bookNow: "احجز الآن",
      SideQuote: "في كل موسم هناك مجموعة لجولتين",
      SideDesc: "ترتيبات حصرية وتجارب غامرة لخدمات المشروبات"
    },
  };

  const t = translations[language];

  return (
    <div className="">
    <Helmet>
      <title>{language === "english" ? "Rukn Al Dyafa - Luxury Catering Services" : "ركن الضيافة - خدمات الضيافة الفاخرة"}</title>
      <meta name="description" content={language === "english" ? 
        "Premium catering and hospitality services in UAE. Luxury event planning, corporate catering, and exclusive hospitality solutions." : 
        "خدمات الضيافة والتموين الفاخرة في الإمارات. تخطيط الفعاليات الفاخرة وخدمات الضيافة للشركات وحلول الضيافة الحصرية."} 
      />
      <meta name="keywords" content="luxury catering, event planning, hospitality services, UAE catering, corporate events, luxury hospitality" />
      <meta property="og:title" content={language === "english" ? "Rukn Al Dyafa - Luxury Catering Services" : "ركن الضيافة - خدمات الضيافة الفاخرة"} />
      <meta property="og:description" content={language === "english" ? 
        "Premium catering and hospitality services in UAE" : 
        "خدمات الضيافة والتموين الفاخرة في الإمارات"} 
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ruknaldyafa.ae" />
      <link rel="canonical" href="https://ruknaldyafa.ae" />
      <link data-rh="true" href="https://www.ruknaldyafa.ae/" rel="canonical"/>
      <link rel="icon" type="image/png" href="https://i.pinimg.com/originals/46/65/46/466546a84dbb58e61e1eafc5ee4864b6.png"/>
      <meta name="author" content="Rukn Al Dyafa Team" />

    {/* Social Media Meta Tags (Open Graph) */}
     <meta property="og:title" content="Rukn Al Dyafa - Premium Catering Services" />
     <meta property="og:description" content="Discover luxury catering and beverage services for weddings, corporate events, and private gatherings in the UAE." />
     <meta property="og:image" content="https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg" />
     <meta property="og:url" content="https://www.ruknaldyafa.ae/" />
     <meta property="og:type" content="website" />

  {/* Twitter Card Meta Tags */}
     <meta name="twitter:card" content="summary_large_image" />
     {/* <meta name="twitter:site" content="@RuknAlDyafa" /> */}
     <meta name="twitter:title" content="Rukn Al Dyafa - Premium Catering Services" />
     <meta name="twitter:description" content="Experience luxurious catering services in the UAE. From bespoke drinks to customized experiences for any event." />
     <meta name="twitter:image" content="https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg" />
    </Helmet>

      <div className="relative bg-black h-screen px-4 sm:px-8">

        {/* Background Marquee for Mobile View */}
        <div className="absolute inset-0 md:hidden overflow-hidden bg-black opacity-70">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100 " : "opacity-0 "}`}>
              <img src={src}
                alt="Luxury hospitality services in UAE"
                className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-arabic-tea-coffee-service-golden-cups-ramadan-holidays-decoration-image_15567931.png"
            alt="Catering Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
          
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl  font-bold leading-tight max-w-4xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.heading}
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.paragraph}
          </motion.p>

          {/* Animated Button */}
          <a href="luxury-hospitality-services">
            <motion.button
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {t.bookNow}
            </motion.button>
          </a>
        </div>

        {/* Social Media and Additional Section */}
        <section className="relative -mt-36 px-4 sm:px-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Social Media Icons */}
          <motion.div
            className="flex gap-4 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="" data-size="">
            <a href="https://www.instagram.com/rukn_aldyafa/" rel="noreferrer" target="_blank" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaInstagram />
            </a>
            </div>
            <a href="https://wa.me/+917045992776" target="_blank" rel="noreferrer" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaWhatsapp />
            </a>
            <a href="https://www.snapchat.com/add/ruknaldyafa?sender_web_id=f7b1dbb5-c3c0-48c6-a15b-058b0e4429dc&device_type=desktop&is_copy_url=true" target="_blank" rel="noreferrer" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
              <FaSnapchat />
            </a>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="hidden md:block text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold max-w-[260px]">
              {t.SideQuote}
            </h2>
            <div className="flex items-start justify-start gap-4 mt-3">
              <div className="flex relative gap-2">
                <img
                  src="https://i.pinimg.com/736x/9b/ab/8c/9bab8cbbd116aeef9f73df374ed5ae4a.jpg"
                  alt="Luxury hospitality services in UAE"
                  className="w-10 h-10 rounded-full object-cover border border-white"
                />
                <img
                  src="https://i.pinimg.com/736x/c3/18/cf/c318cff66485cf5034448bdf3e48f253.jpg"
                  alt="Luxury hospitality services in UAE"
                  className="w-10 h-10 rounded-full object-cover border border-white"
                  style={{ marginLeft: "-15px" }}
                />
              </div>
              <p className="text-xs sm:text-sm -mt-2 max-w-[180px]">
                {t.SideDesc}
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      <About language={language} />
      <VideoBackground language={language} />
      <Plans language={language} />
      <BlogSection language={language} />
      <FeaturedArtworks language={language} />
      {/* <Testimonial language={language} /> */}
      <Form language={language} />      
      <FAQs language={language} />
      {/* <PromoBanner language={language} /> */}
    </div>
  );
};

export default CateringHeroSection;
