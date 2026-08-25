// const ProductCard = ({ product }) => {
//   const { name, price, mrp, image, tag } = product;

//   return (
//     <div className="group cursor-pointer">
//       <div className="relative overflow-hidden rounded bg-secondary aspect-square mb-3">
//         {tag && (
//           <span className="absolute top-3 left-3 bg-primary text-charcoal text-[10px] font-body font-medium tracking-wide px-2 py-1 rounded-full z-10">
//             {tag}
//           </span>
//         )}
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         <button className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-charcoal text-background text-xs font-body px-5 py-2 rounded-full whitespace-nowrap">
//           Quick Add
//         </button>
//       </div>
//       <h3 className="font-body text-sm text-charcoal mb-1">{name}</h3>
//       <div className="flex items-center gap-2">
//         <span className="font-body text-sm font-semibold text-charcoal">
//           ₹{price}
//         </span>
//         {mrp && (
//           <span className="font-body text-xs text-charcoal/40 line-through">
//             ₹{mrp}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const imageUrl = product.images?.[0]?.url || product.images?.[0] || "/placeholder.jpg";

  const handleAddToCart = async (e) => {
    e.preventDefault();
    await addToCart(product._id, 1);
  };

  const handleBuyNow = async (e) => {
    e.preventDefault();
    await addToCart(product._id, 1);
    navigate("/checkout");
  };

  return (
    <div className="group">
      <Link to={`/products/${product._id}`}>
        <div className="aspect-4/5.5 overflow-hidden  bg-brand-border">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="pt-3">
        <h3 className="font-serif text-base text-brand-text">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">₹{product.price.toLocaleString("en-IN")}</p>
        <div className="flex gap-2 mt-3 min-w-0">
          <button  className="flex-1 min-w-0 whitespace-nowrap px-2 text-[10px] sm:text-xs border border-charcoal" onClick={handleAddToCart}>
  Add to Cart
</button>
<button className="flex-1 min-w-0 whitespace-nowrap px-2 text-[10px] sm:text-xs bg-charcoal text-white" onClick={handleBuyNow}>
  Buy Now
</button>
        </div>
      </div>
    </div>
  );
}
// function ProductCard({ product }) {
//   return (
//     <div className="group min-w-0">
//       {/* Image — kept clean of overlaid text; all content sits below */}
//       <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory">
//         <img
//           src={product.image}
//           alt={product.name}
//           loading="lazy"
//           className="h-full w-full object-cover object-center transition-transform duration-[700ms] ease-in-out group-hover:scale-105"
//         />
//         <WishlistButton productName={product.name} />
//       </div>

//       {/* Content block */}
//       <div className="mt-5">
//         <h3 className="font-serif text-lg font-normal leading-snug tracking-[-0.01em] text-black sm:text-xl">
//           {product.name}
//         </h3>

//         <p className="mt-1.5 text-sm leading-relaxed text-charcoal">
//           {product.description}
//         </p>

//         <p className="mt-3 text-sm font-medium text-black">{product.price}</p>

//         {/* Compact CTAs — smaller than site-wide primary sizing on purpose */}
//         <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 min-w-0">
//           <button
//             type="button"
//             className="border border-charcoal px-5 py-2 text-[10px] font-medium uppercase tracking-label text-charcoal transition-colors duration-300 ease-in-out hover:border-#3F010C hover:bg-charcoal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-#3F010C focus-visible:ring-offset-2"
//           >
//             Add to Cart
//           </button>

//           <button
//             type="button"
//             className="group/cta relative text-[10px] font-medium uppercase tracking-label text-charcoal transition-colors duration-300 ease-in-out hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-#3F010C focus-visible:ring-offset-2"
//           >
//             View Details
//             <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 ease-in-out group-hover/cta:w-full" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard