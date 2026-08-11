const ProductCard = ({ product }) => {
  const { name, price, mrp, image, tag } = product;

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded bg-secondary aspect-square mb-3">
        {tag && (
          <span className="absolute top-3 left-3 bg-primary text-charcoal text-[10px] font-body font-medium tracking-wide px-2 py-1 rounded-full z-10">
            {tag}
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-charcoal text-background text-xs font-body px-5 py-2 rounded-full whitespace-nowrap">
          Quick Add
        </button>
      </div>
      <h3 className="font-body text-sm text-charcoal mb-1">{name}</h3>
      <div className="flex items-center gap-2">
        <span className="font-body text-sm font-semibold text-charcoal">
          ₹{price}
        </span>
        {mrp && (
          <span className="font-body text-xs text-charcoal/40 line-through">
            ₹{mrp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;