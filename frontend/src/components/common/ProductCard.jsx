import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function ProductCard({ product, compact = false }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <button
        type="button"
        aria-label={`Save ${product.name} to wishlist`}
        className="focus-ring absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-500 shadow-sm transition hover:text-rose-500"
      >
        <FaRegHeart className="group-hover:hidden" />
        <FaHeart className="hidden text-rose-500 group-hover:block" />
      </button>

      <Link to={`/products/${product.id}`} className="block overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${compact ? 'h-40' : 'h-52'}`}
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{product.brand}</p>
        <Link to={`/products/${product.id}`} className="focus-ring rounded-sm">
          <h3 className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-slate-800 hover:text-amber-700">
            {product.name}
          </h3>
        </Link>
        <div className="mt-3">
          <Rating rating={product.rating} reviews={product.reviews} />
        </div>
        <div className="mt-3 flex flex-wrap items-end gap-x-2 gap-y-1">
          <span className="text-xl font-bold text-slate-900">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-slate-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
        </div>
        <p className="mt-1 text-xs font-medium text-emerald-700">{product.discount}% off</p>
        {!compact && <p className="mt-auto pt-3 text-xs text-slate-500">{product.delivery}</p>}
      </div>
    </article>
  );
}

export default ProductCard;
