import React from "react";
import { Helmet } from "react-helmet-async";

const headerImage = 'https://i.pinimg.com/736x/c0/88/59/c0885989e1a17079e0e8ec5d5c5138df.jpg';

const events = [
  {
    img: 'https://i.pinimg.com/736x/a3/ca/be/a3cabe4c70a37cedb8d0b7bea049e3ea.jpg',
    title: {
      english: 'Elegant Wedding Catering',
      arabic: 'خدمة الطعام في حفلات الزفاف الفاخرة',
    },
    description: {
      english: 'Our wedding catering service offers a sophisticated touch to your special day. From gourmet appetizers to elegant main courses, we create custom menus to suit every taste. Let us take care of the details while you enjoy your celebration with family and friends.',
      arabic: 'تقدم خدمة الطعام لحفلات الزفاف لدينا لمسة راقية في يومك الخاص. من المقبلات الفاخرة إلى الأطباق الرئيسية الأنيقة، نقوم بإعداد قوائم طعام مخصصة تناسب جميع الأذواق. دعنا نعتني بالتفاصيل بينما تستمتع بالاحتفال مع عائلتك وأصدقائك.',
    },
  },
  {
    img: 'https://i.pinimg.com/736x/44/81/e4/4481e418327fce6c08836aa105d64634.jpg',
    title: {
      english: 'Corporate Luncheons',
      arabic: 'غداء الشركات',
    },
    description: {
      english: 'Impress your clients and colleagues with a professional and delicious corporate luncheon experience. We offer a variety of menus tailored to your business needs, from light bites to full meals. Perfect for meetings, presentations, or corporate events, our catering ensures a seamless dining experience that enhances your professional gatherings.',
      arabic: 'قم بإثارة إعجاب عملائك وزملائك بتجربة غداء شركي مهنية ولذيذة. نقدم مجموعة متنوعة من القوائم المصممة لتلبية احتياجات عملك، من الوجبات الخفيفة إلى الوجبات الكاملة. مثالي للاجتماعات والعروض التقديمية أو الفعاليات الشركاتية، يضمن طعامنا تجربة تناول طعام سلسة تعزز لقاءاتك المهنية.',
    },
  },
  {
    img: 'https://i.pinimg.com/736x/ba/86/3c/ba863cd8d8826ca92df16ad7605c79c2.jpg',
    title: {
      english: 'Gala Dinner Service',
      arabic: 'خدمة عشاء الحفل',
    },
    description: {
      english: 'Elevate your event with a luxurious gala dinner service that includes a selection of exquisite dishes and impeccable presentation. Whether it\'s a charity event, awards ceremony, or celebration, we ensure a memorable dining experience that reflects your event\'s elegance.',
      arabic: 'رفعوا حدثكم مع خدمة عشاء الحفل الفاخرة التي تضم مجموعة من الأطباق الرائعة والعرض الفاخر. سواء كان الحدث خيريًا، أو حفل توزيع جوائز، أو احتفالاً، فإننا نضمن لك تجربة تناول طعام لا تُنسى تعكس أناقة حدثك.',
    },
  }
];

function Eventpg({ language }) {
  return (
    <div className="bg-gray-100 min-h-screen" id="ExploreMoment">
      <Helmet>
        <title>Rukn Al Dyafa - Premium Event Planning & Management Services in UAE</title>
        <meta name="description" 
        content="From weddings to corporate events, we provide bespoke catering and beverage solutions in the UAE. Tailored to perfection for any occasion."/>
        <meta name="keywords" content="birthday party beverage services UAE, wedding beverage catering Dubai, corporate event drink services UAE, event catering UAE, luxury event drinks catering Dubai, engagement party beverage setup UAE, wedding catering UAE, corporate beverage services" />
        <link rel="canonical" href="https://www.ruknaldyafa.ae/events" />
        <link rel="icon" type="image/png" href="https://i.pinimg.com/originals/46/65/46/466546a84dbb58e61e1eafc5ee4864b6.png"/>
        <meta name="author" content="Rukn Al Dyafa Team" />

         {/* Social Media Meta Tags (Open Graph and Twitter Cards) */}
         <meta property="og:title" content="Rukn Al Dyafa - Events" />
        <meta property="og:description" content="Discover exquisite catering services for every occasion in the UAE. From luxury weddings to corporate events and gala dinners, we provide custom menus and premium beverages designed to elevate your events and delight your guests." />
        <meta property="og:image" content="https://i.pinimg.com/736x/c0/88/59/c0885989e1a17079e0e8ec5d5c5138df.jpg" />
        <meta property="og:url" content="https://www.ruknaldyafa.ae/events" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rukn Al Dyafa - Events" />
        <meta name="twitter:description" content="Discover exquisite catering services for every occasion in the UAE. From luxury weddings to corporate events and gala dinners, we provide custom menus and premium beverages designed to elevate your events and delight your guests." />
        <meta name="twitter:image" content="https://i.pinimg.com/736x/c0/88/59/c0885989e1a17079e0e8ec5d5c5138df.jpg" />
        <meta name="twitter:url" content="http://localhost:5173/" />
        
      </Helmet>


      {/* Header */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'english'
              ? 'Our services offer exquisite beverages for your events'
              : 'خدماتنا تقدم مشروبات رائعة لفعالياتك'}
          </h2>
          <p className="text-lg">
            {language === 'english'
              ? 'From grand gatherings to intimate celebrations, we transform every occasion into something truly special.'
              : 'من التجمعات الكبيرة إلى الاحتفالات الحميمة، نحن نعيد تحويل كل مناسبة إلى شيء مميز حقًا.'}
          </p>
        </div>
      </section>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <h2 className="text-center text-3xl font-bold mb-8 sm:text-2xl">
          {language === 'english' ? 'Featured Catering Events' : 'فعاليات تقديم الطعام المميزة'}
        </h2>
        {events.map((event, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start rounded-lg p-4 mb-8">
            {/* Event Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={event.img}
                alt={event.title[language]}
                className="w-full h-48 rounded-lg object-cover"
              />
            </div>
            {/* Event Text */}
            <div className="flex flex-col bg-white rounded-lg shadow-md p-4 justify-between w-full md:ml-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{event.title[language]}</h3>
                <p className="text-base text-gray-600 mt-1 line-clamp-2 md:line-clamp-3">{event.description[language]}</p>
              </div>
              <a href="/luxury-hospitality-services">
                <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
                  {language === 'english' ? 'Savor the Experience' : 'تذوق التجربة'}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventpg;