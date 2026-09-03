import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../context/CartContext";
import Accordion from "../components/Accordion";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedScent, setSelectedScent] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/products/${id}`).then(({ data }) => {
      const p = data.product || data;
      setProduct(p);
      if (p.sizes?.length > 0) setSelectedSize(p.sizes[0]);
      if (p.scents?.length > 0) setSelectedScent(p.scents[0]);
      if (p.colors?.length > 0) setSelectedColor(p.colors[0]);
      setActiveImage(0);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div className="max-w-6xl mx-auto px-6 py-20 text-center text-gray-500">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-gray-500 mb-4">Product not found.</p>
        <Link to="/products" className="text-charcoal underline">Back to Shop</Link>
      </div>
    );
  }

  const images = product.images?.length > 0 ? product.images : [{ url: "/placeholder.jpg" }];
  const displayPrice = product.discountPrice ?? product.price;
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  const buildSelection = () => ({
    size: selectedSize,
    scent: selectedScent,
    color: selectedColor,
  });

 const handleAddToCart = async () => {
  setAdding(true);
  await addToCart(product._id, quantity, buildSelection());
  setAdding(false);
};

const handleBuyNow = async () => {
  setAdding(true);
  await addToCart(product._id, quantity, buildSelection());
  setAdding(false);
  navigate("/checkout");
};

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-3">
            <img
              src={images[activeImage]?.url || images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 rounded overflow-hidden border-2 ${
                    activeImage === i ? "border-charcoal" : "border-transparent"
                  }`}
                >
                  <img src={img.url || img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-serif text-charcoal mb-2">{product.name}</h1>

          {isOutOfStock && (
            <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded mb-2">
              Out of Stock
            </span>
          )}
          {!isOutOfStock && isLowStock && (
            <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mb-2">
              Only {product.stock} left
            </span>
          )}

          {product.category?.name && (
            <p className="text-sm text-gray-500 mb-4">{product.category.name}</p>
          )}

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-semibold text-charcoal">
              ₹{displayPrice.toLocaleString("en-IN")}
            </span>
            {hasDiscount && (
              <>
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-sm font-medium text-green-600">
                  {discountPercent}% off
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-gray-600 mb-6 leading-relaxed">{product.description}</p>

        
          {product.sizes?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-charcoal mb-2">Size</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      selectedSize === s
                        ? "border-charcoal bg-charcoal text-white"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          
          {product.scents?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-charcoal mb-2">Scent</h3>
              <div className="flex gap-2 flex-wrap">
                {product.scents.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedScent(s)}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      selectedScent === s
                        ? "border-charcoal bg-charcoal text-white"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

      
          {product.colors?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-charcoal mb-2">
                Color{selectedColor ? `: ${selectedColor}` : ""}
              </h3>
              <div className="flex gap-3 flex-wrap">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    title={c}
                    className={`w-9 h-9 rounded-full border-2 ${
                      selectedColor === c ? "border-charcoal" : "border-transparent"
                    }`}
                    style={{ backgroundColor: c.toLowerCase() }}
                  />
                ))}
              </div>
            </div>
          )}
{product.quantityPresets?.length > 0 && (
  <div className="mb-6">
    <h3 className="text-sm font-medium text-charcoal mb-2">Quantity</h3>
    <div className="flex gap-2 flex-wrap">
      {product.quantityPresets.map((q) => (
        <button
          key={q}
          onClick={() => setQuantity(Math.min(q, product.stock))}
          disabled={q > product.stock}
          className={`px-4 py-2 rounded-full border text-sm ${
            quantity === q
              ? "border-charcoal bg-charcoal text-white"
              : "border-gray-300 text-gray-700"
          } ${q > product.stock ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          {q === 1 ? "1 piece" : `${q} pieces`}
        </button>
      ))}
    </div>
  </div>
)}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-charcoal mb-2">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 border border-gray-300 rounded"
              >
                −
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                disabled={quantity >= product.stock}
                className="w-8 h-8 border border-gray-300 rounded disabled:opacity-40 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={adding || isOutOfStock}
              className="flex-1 border border-charcoal text-charcoal py-3 text-sm font-medium hover:bg-charcoal hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
            <button
              onClick={handleBuyNow}
              disabled={adding || isOutOfStock}
              className="flex-1 bg-charcoal text-white py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isOutOfStock ? "Out of Stock" : "Buy Now"}
            </button>
          </div>

          <div className="mt-8">
           <Accordion title="Good to Know">
    <h4 className="font-semibold text-charcoal">Beautifully One of a Kind</h4>
    <p>
      We put real care into our product photography to make sure that every
      image on our website is captured with the intention of showing you
      exactly what you'll receive.
    </p>
    <p>
      Each candle is lovingly handcrafted. However, colours may appear
      slightly different depending on your screen and photography lighting.
    </p>
    <p>Your piece will always be just as beautiful in person.</p>
  </Accordion>

  <Accordion title="Care & Maintenance">
    <p>
      Each piece is crafted to last and pretty things deserve to be taken
      care of. We encourage you to refer to the care instructions included
      with each item, designed to help you have a good experience with your
      purchase. Your candle will thank you!
    </p>
    <h4 className="font-semibold text-charcoal">How to Care for Your Candle</h4>
    <ul className="list-disc pl-5 space-y-1">
      <li>Always place sculptural candles on a heat-resistant tray to catch any wax drips.</li>
      <li>Trim the wick to 1/4" before lighting.</li>
      <li>For Sculptural candles, burn in short sessions of 30 mins – 2 hours.</li>
      <li>For Jar Candles, burn for at least 2 hours on the first use, then never more than 4 hours at once.</li>
      <li>Keep away from children and pets when lit.</li>
      <li>Burn on a stable, heat-safe surface, away from flammable objects.</li>
      <li>To prevent tunneling in Jar candles, allow the wax to melt to the edge of the vessel.</li>
      <li>Stop use when only 1/4 of wax remains.</li>
      <li>Too pretty to burn? Just enjoy it as a beautiful decor!</li>
    </ul>
  </Accordion>
   <Accordion title="Return and Exchange">

    <p>
      Since each of our candle is made specially for  you in your chosen color and fragreance , we're unable to offer return or exchange.
    </p>
    <p>
      We do accept replacement if:
    </p>
    <p>-Your candle arrives broken/damaged (please share an uncut opening video as proof).

-You receive a wrong item by mistake.

In such cases, just let us know within 2 days of delivery, and we'll happily make it right for you.</p>
  </Accordion>
   <Accordion title="General Information :">
<ul className="list-disc pl-5 space-y-1">
    <li>
      Large quantity orders may require additional processing time
    </li>
    <li>
      Premium photo messages and sticker messages can be added
    </li>
    <li>
      As each piece is handcrafted, slight variations in color and texture may occur
    </li>
    <li>
      For Hampers, Bulk or Custom orders,  <Link to="https://wa.me/919142918584?text=Hi%2C%20I%27m%20interested%20in%20bulk%20orders">Contact us</Link>
    </li>
    <li>
      Unboxing video is mandatory to claim refund under any damage condition
    </li>
  </ul>
  </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}