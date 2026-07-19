import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';

function FeaturedProducts({ products }) {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="page-shell">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">Picked for you</p>
            <h2 className="section-heading">Featured deals</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-blue-700 hover:underline">See more</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} compact />)}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
