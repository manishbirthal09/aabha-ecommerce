const WHATSAPP_NUMBER = ''; // update with actual number
const WHATSAPP_MESSAGE = "Hi, I'd like to enquire about a custom candle";

const CustomCandleBanner = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className=" py-14 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-charcoal mb-4">
          Want Something Personal?
        </h2>
        <p className="font-body text-sm md:text-base text-charcoal/70 mb-8">
          Choose your scent, jar, and label — we'll pour it just for you.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-charcoal text-background font-body text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Enquire Now
        </a>
      </div>
    </section>
  );
};

export default CustomCandleBanner;