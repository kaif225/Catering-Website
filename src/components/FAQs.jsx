import { useRef, useState } from "react";

const FaqsCard = ({ item, language }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(state ? "0px" : `${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-gray-700 font-medium">
        {item.q[language]}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500 text-sm">{item.a[language]}</p>
        </div>
      </div>
    </div>
  );
};

const FAQs = ({language}) => {
//   const [language, setLanguage] = useState("english");

  const translations = {
    english: {
      title: "Frequently Asked Questions",
      Subheading: "Answered all frequently asked questions. Still confused? Feel free to contact us."
    },
    arabic: {
      title: "الأسئلة الشائعة",
      Subheading: "أجاب على جميع الأسئلة الشائعة. هل ما زلت مرتبكًا؟ لا تتردد في الاتصال بنا"
    },
  };
  
  const t = translations[language];

  return (
    <section className="leading-relaxed bg-gray-100 p-4  px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className=" text-gray-800 text-4xl font-bold mb-4">
            {t.title}          
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
            {t.Subheading}
        </p>
      </div>
      <div className="mt-14 max-w-2xl px-4 pb-4 mx-auto">
        <FaqsCard
          item={{
            q: {
              english: "What is the best catering service in the UAE?",
              arabic: "ما هي أفضل خدمة تقديم الطعام في الإمارات؟",
            },
            a: {
              english:
                "Rukn Al-Dyafa is one of the best catering services in the UAE, offering luxury catering, custom menus, and exceptional service.",
              arabic:
                "ركن الضيافة هي واحدة من أفضل خدمات تقديم الطعام في الإمارات، حيث تقدم تقديم طعام فاخر وقوائم مخصصة وخدمة استثنائية.",
            },
          }}
          language={language}/>
        <FaqsCard
          item={{
            q: {
              english: "How to hire beverage caterers for events in UAE?",
              arabic: "كيفية استئجار خدمات تقديم المشروبات للمناسبات في الإمارات العربية المتحدة؟",
            },
            a: {
              english:
                "Contact Rukn Al-Dyafa to provide premium beverage catering for any event, including coffee, mocktails, and juices.",
              arabic:
                "اتصل بركن الضيافة لتقديم خدمات تقديم مشروبات مميزة لأي فعالية، بما في ذلك القهوة، الكوكتيلات، والعصائر.",
            },
          }}
          language={language}/>
           <FaqsCard
          item={{
            q: {
          english: "How to organize a luxury wedding in the UAE?",
          arabic: "كيفية تنظيم حفل زفاف فاخر في الإمارات العربية المتحدة؟"
        },
            a: {
              english:
                "Rukn Al-Dyafa can help you plan and cater luxury weddings with custom menus, elegant setups, and flawless service.",
               arabic:
                "يمكن أن تساعدك ركن الضيافة في التخطيط وتقديم الطعام لحفلات الزفاف الفاخرة بقوائم مخصصة وإعدادات أنيقة وخدمة لا تشوبها شائبة.",
            },
          }}
          language={language}/>
        <FaqsCard
          item={{
            q: {
              english: "Can I book catering for small gatherings?",
              arabic: "هل يمكنني حجز خدمة تقديم الطعام للتجمعات الصغيرة؟",
            },
            a: {
              english:
                "Yes, we provide catering for all event sizes, including intimate gatherings and family celebrations.",
              arabic:
                "نعم، نحن نقدم خدمات تقديم الطعام لجميع أحجام المناسبات، بما في ذلك التجمعات الحميمة والاحتفالات العائلية.",
            },
          }}
          language={language}/>
           <FaqsCard
          item={{
            q: {
              english: "How much does catering cost in Dubai?",
              arabic: "كم تكلفة تقديم الطعام في دبي؟",
            },
            a: {
              english:
                "The cost depends on the menu, event size, and services required. Contact us for a tailored quote.",
              arabic:
                "تعتمد التكلفة على القائمة وحجم الحدث والخدمات المطلوبة. اتصل بنا للحصول على عرض أسعار مخصص.",
            },
          }}
          language={language}/>
      </div>
    </section>
  );
};

export default FAQs;
