import { useState, useEffect } from "react";

const messages = [
  <>🎁 FREE Set of 2 Mini Candles on orders above ₹1999 </>,
  <>🎁 FREE Scented Wax Sachet on orders above ₹2999</>,
  // <>Every piece handpoured, just for you</>,
  // <>Explore our candles and gifting collections</>,
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-charcoal text-center text-xs md:text-sm py-2 tracking-wide font-body overflow-hidden h-8 flex items-center justify-center">
      <div key={index} className="animate-[fadeSlide_0.5s_ease]">
        {messages[index]}
      </div>
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;