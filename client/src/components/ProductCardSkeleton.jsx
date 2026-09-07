const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-[4/5.5] w-full bg-charcoal/10 rounded-xl" />
      <div className="mt-3 h-4 w-3/4 bg-charcoal/10 rounded" />
      <div className="mt-2 h-4 w-1/2 bg-charcoal/10 rounded" />
      <div className="mt-2 h-4 w-1/4 bg-charcoal/10 rounded" />
    </div>
  );
};

export default ProductCardSkeleton;