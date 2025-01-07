import React, { useState, useEffect } from "react";

// Import images manually (static imports work universally)
import IMG1 from "../assets/Images/1.jpg";
import IMG2 from "../assets/Images/2.jpg";
import IMG3 from "../assets/Images/3.jpg";
import IMG4 from "../assets/Images/4.jpg";
import IMG5 from "../assets/Images/5.jpg";
import IMG6 from "../assets/Images/6.jpg";
import IMG7 from "../assets/Images/7.jpg";
import IMG8 from "../assets/Images/8.jpg";
import IMG9 from "../assets/Images/9.jpg";
import IMG10 from "../assets/Images/10.jpg";
import IMG11 from "../assets/Images/11.jpg";
import IMG12 from "../assets/Images/12.jpg";
import IMG13 from "../assets/Images/13.jpg";
import IMG14 from "../assets/Images/14.jpg";
import IMG15 from "../assets/Images/15.jpg";
import IMG16 from "../assets/Images/16.jpg";
import IMG17 from "../assets/Images/17.jpg";
import IMG18 from "../assets/Images/18.jpg";
import IMG19 from "../assets/Images/19.jpg";
import IMG20 from "../assets/Images/20.jpg";
import IMG21 from "../assets/Images/21.jpg";
import IMG22 from "../assets/Images/22.jpg";
import IMG23 from "../assets/Images/23.jpg";
import IMG24 from "../assets/Images/24.jpg";
import IMG25 from "../assets/Images/25.jpg";
import IMG26 from "../assets/Images/26.jpg";
import IMG27 from "../assets/Images/27.jpg";
import IMG28 from "../assets/Images/28.jpg";
import IMG29 from "../assets/Images/29.jpg";
import IMG30 from "../assets/Images/30.jpg";
import IMG31 from "../assets/Images/31.jpg";
import IMG32 from "../assets/Images/32.jpg";
import IMG33 from "../assets/Images/33.jpg";
import IMG34 from "../assets/Images/34.jpg";
import IMG35 from "../assets/Images/35.jpg";
import IMG36 from "../assets/Images/36.jpg";
import IMG37 from "../assets/Images/37.jpg";
import IMG38 from "../assets/Images/38.jpg";
import IMG39 from "../assets/Images/39.jpg";
import IMG40 from "../assets/Images/40.jpg";
import IMG41 from "../assets/Images/41.jpg";
import IMG42 from "../assets/Images/42.jpg";
import IMG43 from "../assets/Images/43.jpg";
import IMG44 from "../assets/Images/44.jpg";
import IMG45 from "../assets/Images/45.jpg";
import IMG46 from "../assets/Images/46.jpg";
import IMG47 from "../assets/Images/47.jpg";
import IMG48 from "../assets/Images/48.jpg";
import IMG49 from "../assets/Images/49.jpg";
import IMG50 from "../assets/Images/50.jpg";
import IMG51 from "../assets/Images/51.jpg";

const importedImages = [
  { src: IMG1, alt: "Team Member 1" },
  { src: IMG2, alt: "Team Member 2" },
  { src: IMG3, alt: "Team Member 3" },
  { src: IMG4, alt: "Team Member 4" },
  { src: IMG5, alt: "Team Member 5" },
  // { src: IMG6, alt: "Team Member 6" },
  // { src: IMG7, alt: "Team Member 7" },
  { src: IMG8, alt: "Team Member 8" },
  { src: IMG9, alt: "Team Member 9" },
  { src: IMG10, alt: "Team Member 10" },
  { src: IMG11, alt: "Team Member 11" },
  { src: IMG12, alt: "Team Member 12" },
  { src: IMG13, alt: "Team Member 13" },
  { src: IMG14, alt: "Team Member 14" },
  { src: IMG15, alt: "Team Member 15" },
  { src: IMG16, alt: "Team Member 16" },
  { src: IMG17, alt: "Team Member 17" },
  // { src: IMG18, alt: "Team Member 18" },
  { src: IMG19, alt: "Team Member 19" },
  // { src: IMG20, alt: "Team Member 20" },
  { src: IMG21, alt: "Team Member 21" },
  // { src: IMG22, alt: "Team Member 22" },
  // { src: IMG23, alt: "Team Member 23" },
  // { src: IMG24, alt: "Team Member 24" },
  { src: IMG25, alt: "Team Member 25" },
  // { src: IMG26, alt: "Team Member 26" },
  // { src: IMG27, alt: "Team Member 27" },
  // { src: IMG28, alt: "Team Member 28" },
  { src: IMG29, alt: "Team Member 29" },
  // { src: IMG30, alt: "Team Member 30" },
  { src: IMG31, alt: "Team Member 31" },
  { src: IMG32, alt: "Team Member 32" },
  { src: IMG33, alt: "Team Member 33" },
  { src: IMG34, alt: "Team Member 34" },
  { src: IMG35, alt: "Team Member 35" },
  { src: IMG36, alt: "Team Member 36" },
  { src: IMG37, alt: "Team Member 37" },
  { src: IMG38, alt: "Team Member 38" },
  { src: IMG39, alt: "Team Member 39" },
  { src: IMG40, alt: "Team Member 40" },
  // { src: IMG41, alt: "Team Member 41" },
  { src: IMG42, alt: "Team Member 42" },
  { src: IMG43, alt: "Team Member 43" },
  { src: IMG44, alt: "Team Member 44" },
  // { src: IMG45, alt: "Team Member 45" },
  { src: IMG46, alt: "Team Member 46" },
  { src: IMG47, alt: "Team Member 47" },
  { src: IMG48, alt: "Team Member 48" },
  { src: IMG49, alt: "Team Member 49" },
  { src: IMG50, alt: "Team Member 50" },
  // { src: IMG51, alt: "Team Member 51" },
];

const ImageGallery = ({ language = "english" }) => {
  const translations = {
    english: {
      heading: "Gallery",
    },
    arabic: {
      heading: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631",
    },
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto slide every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const container = document.getElementById("image-gallery-container");
  //     if (container) {
  //       const maxScrollLeft = container.scrollWidth - container.clientWidth;
  //       const newScrollPosition = scrollPosition + 330;

  //       if (newScrollPosition >= maxScrollLeft) {
  //         container.scrollTo({ left: 0, behavior: "smooth" });
  //         setScrollPosition(0);
  //       } else {
  //         container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  //         setScrollPosition(newScrollPosition);
  //       }
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, [scrollPosition]);

  return (
    <div className="pb-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        {translations[language].heading}
      </h2>
      <div
        id="image-gallery-container"
        className="overflow-x-scroll p-4 mx-auto flex gap-4"
        style={{ whiteSpace: "nowrap" }}
      >
        {importedImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="max-w-sm w-80 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
