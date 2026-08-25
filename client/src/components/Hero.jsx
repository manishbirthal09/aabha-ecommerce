
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center md:pb-0">
      
      <img
        src="/images/aahomeimage.png"
        alt="Handpoured candle"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background/30 via-background/10 md:via-background/30 to-background/20 md:to-transparent" />

      {/* Text content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-7 md:pt-0 pb-10 md:py-0">
        <div className="max-w-lg text-left">
          <p className="font-serif text-xs md:text-base tracking-[0.15em] md:tracking-[0.2em] uppercase text-charcoal/80 mb-3 md:mb-4">
            Handpoured With Love ♡
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-charcoal leading-tight mb-4 md:mb-6">
            Crafted for Moments <br />
            <span className="italic">That Matter</span>
          </h1>
          <p className="font-body text-base md:text-base text-charcoal/70 leading-relaxed mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
            Handcrafted soy candles and hampers made in small batches to
            bring warmth, calm and beauty to your everyday.
          </p>
          <div className="flex flex-col items-start gap-3 max-w-3xs   md:max-w-none md:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center  bg-charcoal text-background font-body text-sm  px-6 md:px-8 py-2 md:py-4  hover:opacity-90 transition-opacity"
            >
              Shop Candles <span>→</span>
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-1 border border-charcoal text-charcoal font-body text-sm  px-6 md:px-8 py-2 md:py-4  hover:bg-charcoal hover:text-background transition-colors"
            >
              Explore Collections <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
//       {/* Background image */}
//       <img
//         src="/images/ahero.png"
//         alt="Handpoured candle"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay for text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />

//       {/* Text content */}
//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
//         <div className="max-w-lg">
//           <p className="font-serif text-sm md:text-base tracking-[0.2em] uppercase text-charcoal mb-4">
//             Handpoured With Love ♡
//           </p>
//           <h1 className="font-serif text-4xl md:text-6xl font-medium text-charcoal leading-tight mb-6">
//             Crafted for Moments <br />
//             <span className="italic">That Matter</span>
//           </h1>
//           <p className="font-body text-sm md:text-base text-charcoal/70 leading-relaxed mb-8 max-w-md">
//             Handcrafted soy candles and hampers made in small batches to
//             bring warmth, calm and beauty to your everyday.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3">
//             <Link
//               to="/shop"
//               className="inline-flex items-center justify-center gap-2 bg-charcoal text-background font-body text-sm px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
//             >
//               Shop Candles <span>→</span>
//             </Link>
//             <Link
//               to="/shop"
//               className="inline-flex items-center justify-center gap-2 border border-charcoal text-charcoal font-body text-sm px-8 py-4 rounded-lg hover:bg-charcoal hover:text-background transition-colors"
//             >
//               Explore Collections <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// // import { Link } from 'react-router-dom';

// // const Hero = () => {
// //   return (
// //     <section className="bg-secondary">
// //       <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-0 grid md:grid-cols-2 items-center gap-8 md:gap-0 min-h-[70vh]">
        
// //         {/* Text content */}
// //         <div className="order-2 md:order-1 text-center md:text-left">
// //           <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-charcoal/60 mb-3">
// //             Handpoured. Soy Wax. Slow Burn.
// //           </p>
// //           <h1 className="font-heading text-3xl md:text-5xl font-semibold text-charcoal leading-tight mb-5">
// //             Light Up Your <br className="hidden md:block" /> Everyday Moments
// //           </h1>
// //           <p className="font-body text-sm md:text-base text-charcoal/70 mb-8 max-w-md mx-auto md:mx-0">
// //             Discover our collection of hand-poured candles, crafted with natural
// //             soy wax and clean-burning fragrances.
// //           </p>
// //           <Link
// //             to="/shop"
// //             className="inline-block bg-charcoal text-background font-body text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
// //           >
// //             Shop Now
// //           </Link>
// //         </div>

// //         {/* Image */}
// //         <div className="order-1 md:order-2">
// //           <img
// //             src="/images/ahome.png"
// //             alt="Handpoured candle"
// //             className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;