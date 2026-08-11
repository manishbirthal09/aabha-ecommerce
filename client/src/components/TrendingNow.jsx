import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { trendingProducts } from '../data/dummyProducts';

const TrendingNow = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal">
          Trending Now
        </h2>
        <Link
          to="/shop"
          className="font-body text-sm font-semibold text-charcoal/60 hover:text-charcoal transition-colors"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
      
    </section>
  );
};

export default TrendingNow;