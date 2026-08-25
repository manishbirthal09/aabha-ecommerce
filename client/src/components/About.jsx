import USPSection from "./USPSection";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-charcoal/60 mb-3">
            Our Story
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal leading-tight">
            Handpoured With Care, Since Day One
          </h1>
        </div>
      </section>

      {/* Story + Image */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <img
          src="/images/alogo.jpg"
          alt="Candle making process"
          className="w-full h-[300px] md:h-[450px] object-cover  rounded"
        />
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal mb-4">
            Scented Candles
          </h2>
          <p className="font-body text-sm md:text-base text-charcoal/70 leading-relaxed mb-8">
            Each of our candle is hand poured in small batches and are
            Pinterest Inspired. We offer a wide range of scented candles,
            designer candles, & unique candles. Our candles are not only
            scented and aesthetic but are also ethically created with 100%
            natural soy wax.
          </p>

          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal mb-4">
            Made With Love
          </h2>
          <p className="font-body text-sm md:text-base text-charcoal/70 leading-relaxed">
            Our candles are full of all things good! Besides being
            environment-friendly, our 100% vegan soy wax gives a clean burn.
            Our fragrances are subtle and no toxins, carcinogens or
            pollutants. Light a candle, and brighten up your surroundings
            today!
          </p>
        </div>
      </section>

      <USPSection />

      
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal mb-4">
          Ready to Light Up Your Space?
        </h2>
        <a
          href="/products"
          className="inline-block border border-charcoal text-charcoal font-body text-sm px-5 py-1.5  hover:opacity-90 transition-opacity"
        >
          Shop Our Collection
        </a>
      </section>
    </>
  );
};

export default About;