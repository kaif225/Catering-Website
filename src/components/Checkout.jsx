import React, { useState } from "react";
import Cart from "./Cart";
import PackShowcase2 from "./Packages";
import { motion } from "framer-motion";

const Checkout = ({ language }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackagePrice, setSelectedPackagePrice] = useState(null);

  const handlePackageSelection = (title, price) => {
    setSelectedPackage(title);
    setSelectedPackagePrice(price);
  };

  const scrollToCart = () => {
    document.getElementById("cart")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-black h-[30rem] px-4 sm:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/74/fa/f7/74faf76a2616f4f776cf157c18a09d77.jpg"
            alt={language === "english" ? "Hero" : "الصورة الرئيسية"}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        {/* Content */}
        <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {language === "english"
              ? "Experience Our Services"
              : "تجربة خدماتنا"}
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {language === "english"
              ? "At Rukn Al Dyafa, we deliver the elegance of traditional hospitality through luxurious catering."
              : "في ركن الضيافة، نقدم أناقة الضيافة التقليدية من خلال تقديم خدمات الضيافة الفاخرة."}
          </motion.p>
        </div>
      </div>

      <PackShowcase2 onSelectPackage={handlePackageSelection} language={language} />

      {/* Cart Section */}
      <Cart
        selectedPackage={selectedPackage}
        selectedPackagePrice={selectedPackagePrice}
        language={language}
      />

      {/* Floating Button */}
      {selectedPackage && (
        <button
          onClick={scrollToCart}
          className="fixed bottom-4 right-4 bg-gray-900 text-white text-xl p-4 rounded-full h-16 w-16 flex items-center justify-center 
          shadow-lg hover:bg-gray-800 focus:outline-none 
          focus:ring-2 focus:ring-slate-100 focus:ring-opacity-50"
          aria-label="Go to Cart"
        >
          🛒
        </button>
      )}
    </div>
  );
};

export default Checkout;
