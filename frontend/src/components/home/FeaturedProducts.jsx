import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';

function FeaturedProducts({ products }) {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="page-shell">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-600">Picked for you</p>
            <h2 className="section-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Featured deals
            </h2>
          </div>
          <Link
            to="/products"
            className="flex items-center gap-1 text-sm font-semibold text-blue-700 transition-colors hover:text-amber-600 hover:underline"
          >
            See more
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <ProductCard product={product} compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;