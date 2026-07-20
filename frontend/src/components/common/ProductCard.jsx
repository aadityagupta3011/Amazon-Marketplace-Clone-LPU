import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function ProductCard({ product, compact = false }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-200 hover:shadow-xl">
      {/* Discount badge */}
      {product.discount > 0 && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
          -{product.discount}%
        </span>
      )}

      <button
        type="button"
        aria-label={`Save ${product.name} to wishlist`}
        className="focus-ring absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-500 shadow-sm backdrop-blur-sm transition-all hover:scale-110 hover:text-rose-500"
      >
        <FaRegHeart className="group-hover:hidden" />
        <FaHeart className="hidden text-rose-500 group-hover:block" />
      </button>

      <Link to={`/products/${product.id}`} className="block overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${compact ? 'h-40' : 'h-52'}`}
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">{product.brand}</p>
        <Link to={`/products/${product.id}`} className="focus-ring rounded-sm">
          <h3 className="line-clamp-2 min-h-12 text-sm font-semibold leading-6 text-slate-800 transition-colors group-hover:text-amber-600">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3">
          <Rating rating={product.rating} reviews={product.reviews} />
        </div>

        <div className="mt-3 flex flex-wrap items-end gap-x-2 gap-y-1">
          <span className="text-xl font-extrabold text-slate-900">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-slate-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
        </div>

        <p className="mt-1 text-xs font-bold text-emerald-600">{product.discount}% off</p>

        {!compact && (
          <p className="mt-auto flex items-center gap-1 pt-3 text-xs font-medium text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {product.delivery}
          </p>
        )}
      </div>
    </article>
  );
}

export default ProductCard;