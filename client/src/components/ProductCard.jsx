import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const imageUrl = product.images?.[0]?.url || product.images?.[0] || "/placeholder.jpg";

  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  const handleViewProduct = (e) => {
    e.preventDefault();
    navigate(`/products/${product._id}`);
  };

  return (
    <div className="group">
      <Link to={`/products/${product._id}`}>
        <div className="relative aspect-[4/5.5] overflow-hidden bg-brand-border">
          <img
            src={imageUrl}
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              isOutOfStock ? "opacity-50" : ""
            }`}
          />
          {isOutOfStock && (
            <span className="absolute top-2 left-2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded">
              Out of Stock
            </span>
          )}
          {!isOutOfStock && isLowStock && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-1 rounded">
              Only {product.stock} left
            </span>
          )}
        </div>
      </Link>
      <div className="pt-3">
        <h3 className="font-serif text-base text-brand-text line-clamp-2 min-h-12">{product.name}</h3>

        {(() => {
          const hasDiscount = product.discountPrice && product.discountPrice < product.price;
          const displayPrice = product.discountPrice || product.price;
          const discountPct = hasDiscount
            ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
            : 0;

          return (
            <div className="flex items-center gap-2 flex-wrap">
              {hasDiscount && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
              )}
              <span className="text-sm text-brand-text font-medium">
                ₹{displayPrice.toLocaleString("en-IN")}
              </span>
              {hasDiscount && (
                <span className="text-xs font-medium text-green-700">
                  {discountPct}% OFF
                </span>
              )}
            </div>
          );
        })()}

        <div className="mt-3">
          <button
            disabled={isOutOfStock}
            className={`w-full px-2 py-2 text-xs sm:text-sm bg-charcoal text-white ${
              isOutOfStock ? "opacity-40 cursor-not-allowed" : ""
            }`}
            onClick={handleViewProduct}
          >
            {isOutOfStock ? "Out of Stock" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}