import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet-async";

// Correctly import each image from its respective file
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

// Lazy Image Component
const LazyImage = ({ src, alt, className }) => (
  <LazyLoadImage src={src} alt={alt} effect="blur" className={className} />
);

const Gallery = ({ language = "english" }) => {
  // Translations for dual language support
  const translations = {
    english: {
      header: "Capture the joy of every sip",
      description: "Preserving your most cherished moments, one event at a time. Let us bring your celebrations to life with exquisite catering and attention to detail.",
      sectionTitle: "Catering Experience",
      sectionDescription: "Explore a dynamic showcase of our culinary artistry, where each beverage tells a story, and every event is designed to offer a flavorful, memorable journey. Dive into the world of taste and creativity, and let us bring your next celebration to life with our personalized catering services."
    },
    arabic: {
      header: "التقط فرحة كل رشفة",
      description: "نحن نحفظ لحظاتك الثمينة، حدثًا تلو الآخر. دعونا نجعل احتفالاتك حية مع خدمة تقديم الطعام الفاخرة والاهتمام بالتفاصيل.",
      sectionTitle: "تجربة تقديم الطعام",
      sectionDescription: "استكشف عرضًا ديناميكيًا لفن الطهي لدينا، حيث تروي كل مشروب قصة، وكل حدث مصمم لتقديم رحلة لذيذة ولا تُنسى. اغمر في عالم النكهة والإبداع، ودعنا نجعل احتفالك القادم ينبض بالحياة مع خدمات تقديم الطعام المخصصة لدينا."
    }
  };

  // Create an array of imported images
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10,
    IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG17, IMG18, IMG19, IMG20,
    IMG21, IMG22, IMG23, IMG24, IMG25, IMG26, IMG27, IMG28, IMG29, IMG30, 
    IMG31, IMG32, IMG33, IMG34, IMG35, IMG36, IMG37, IMG38, IMG39, IMG40,
    IMG41, IMG42, IMG43, IMG44, IMG45, IMG46, IMG47, IMG48, IMG49, IMG50, IMG51
  ];

  // Map over the array to create gallery image objects
  const galleryImages = images.map((src, index) => ({
    id: index + 1,
    src,
    title: `${translations[language].sectionTitle} ${index + 1}`,
    description: `Description for Project ${index + 1}`
  }));

  return (
    <div className="bg-gray-100 min-h-screen">
     <Helmet>
        <title>Rukn Al Dyafa - Luxury Event Planning & Management Services for guests</title>
        <meta name="description" 
        content="Celebrate life’s precious moments with our elegant catering and beverage services in the UAE. Perfect for weddings, parties, and special events." />
        <meta name="keywords" content="cluxury catering UAE, premium beverage services for weddings UAE, premium catering services, wedding catering UAE, special events catering, bespoke catering UAE, party catering UAE, corporate event catering, birthday party catering services" /> 
        <meta name="author" content="Rukn Al Dyafa Team" />
        <link rel="icon" type="image/png" href="https://i.pinimg.com/originals/46/65/46/466546a84dbb58e61e1eafc5ee4864b6.png"/>
        <link rel="canonical" href="https://www.ruknaldyafa.ae/capture-moments" />

          {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Luxury Catering UAE | Rukn Al Dyafa" />
        <meta property="og:description" content="Explore our gallery showcasing premium catering services, perfect for weddings and luxury events. Capture unforgettable moments with world-class hospitality." />
        <meta property="og:image" content="https://i.pinimg.com/736x/c0/dc/49/c0dc498d4b9c855c8e299498ea2b2ea4.jpg" />
        <meta property="og:url" content="https://www.ruknaldyafa.ae/capture-moments" />
        <meta property="og:type" content="website" />

  {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Rukn Al Dyafa - Premium Catering" />
        <meta name="twitter:description" content="Experience bespoke catering services in UAE for all your special events and weddings. View our gallery of stunning culinary displays." />
        <meta name="twitter:image" content="https://i.pinimg.com/736x/c0/dc/49/c0dc498d4b9c855c8e299498ea2b2ea4.jpg" />
        <meta name="twitter:card" content="summary_large_image" />


        <link rel="canonical" href="http://localhost:5173/" />
      </Helmet>


      {/* Header */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/c0/dc/49/c0dc498d4b9c855c8e299498ea2b2ea4.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">{translations[language].header}</h2>
          <p className="text-lg">{translations[language].description}</p>
        </div>
      </section>

      {/* Header */}
      <header className="flex flex-col items-center justify-center text-center text-gray-800 pt-14 pb-8">
        <h1 className="text-3xl font-bold mb-2">{translations[language].sectionTitle}</h1>
        <h2 className="px-2 text-sm max-w-3xl lg:text-md text-gray-600">
          {translations[language].sectionDescription}
        </h2>
      </header>

      {/* Image Gallery */}
      <div className="pb-12 px-4 lg:px-32 container mx-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-5 gap-3" id="Gallery">
        {galleryImages.map((image) => (
          <div key={image.id} className="mb-4 break-inside-avoid rounded-lg overflow-hidden">
            <a href={image.src} target="_blank" rel="noopener noreferrer">
              <LazyLoadImage
                src={image.src}
                alt={image.title}
                className="w-full rounded-lg hover:shadow-lg hover:opacity-90 transition-all"
              />
            </a>
            {/* Optional description */}
            {/* <div className="text-left text-gray-800 text-sm mt-2">
              <span className="font-medium text-lg">{image.title}</span> <br />
              <span className="text-gray-500 truncate-description">{image.description}</span> 
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;