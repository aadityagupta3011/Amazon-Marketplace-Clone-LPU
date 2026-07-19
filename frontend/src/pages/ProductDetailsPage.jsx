import { useState } from 'react';
import { FaCheck, FaHeart, FaMinus, FaPlus, FaShareNodes, FaShieldHalved, FaTruckFast } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import Rating from '../components/common/Rating';
import { getProductById, products } from '../data/products';

function ProductDetailsPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="page-shell py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-5 inline-block rounded-md bg-amazon-yellow px-5 py-2.5 font-bold text-slate-900">Browse products</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <div className="page-shell py-6 sm:py-10">
      <nav className="mb-6 text-sm text-slate-600">
        <Link to="/" className="hover:text-blue-700 hover:underline">Home</Link> <span className="mx-1">/</span>
        <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-blue-700 hover:underline">{product.category}</Link> <span className="mx-1">/</span>
        <span className="text-slate-400">{product.name}</span>
      </nav>

      <section className="grid gap-8 rounded-2xl bg-white p-5 shadow-card sm:p-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_260px]">
        <div className="overflow-hidden rounded-xl bg-slate-50">
          <img src={product.image} alt={product.name} className="h-full min-h-[320px] w-full object-cover lg:min-h-[470px]" />
        </div>

        <div>
          <p className="text-sm font-semibold text-amber-700">{product.brand}</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">{product.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-4">
            <Rating rating={product.rating} reviews={product.reviews} />
            <span className="h-4 border-l border-slate-300" />
            <span className="text-sm text-blue-700">{product.reviews.toLocaleString()} ratings</span>
          </div>
          <div className="border-b border-slate-200 py-5">
            <p className="text-sm text-slate-500">M.R.P.: <span className="line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span></p>
            <div className="mt-1 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-bold text-slate-900">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="font-semibold text-emerald-700">Save {product.discount}%</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">Inclusive of all taxes</p>
          </div>
          <p className="py-5 text-sm leading-6 text-slate-700">{product.description}</p>
          <div>
            <h2 className="font-bold text-slate-900">About this item</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {product.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><FaCheck className="mt-1 shrink-0 text-emerald-600" />{highlight}</li>)}
            </ul>
          </div>
        </div>

        <aside className="h-fit rounded-xl border border-slate-200 p-5">
          <p className="text-lg font-bold text-slate-900">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="mt-2 text-sm font-medium text-emerald-700">{product.delivery}</p>
          <p className="mt-3 text-sm text-slate-700">In stock</p>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-sm font-semibold">Qty:</span>
            <div className="flex items-center rounded-md border border-slate-300">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} disabled={quantity === 1} className="focus-ring grid h-8 w-8 place-items-center text-xs disabled:text-slate-300" aria-label="Decrease quantity"><FaMinus /></button>
              <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((current) => current + 1)} className="focus-ring grid h-8 w-8 place-items-center text-xs" aria-label="Increase quantity"><FaPlus /></button>
            </div>
          </div>
          <button type="button" onClick={() => setAdded(true)} className="focus-ring mt-5 w-full rounded-md bg-amazon-yellow px-4 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-amber-300">
            {added ? 'Added to cart' : 'Add to cart'}
          </button>
          <button type="button" className="focus-ring mt-3 w-full rounded-md bg-amazon-orange px-4 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-amber-400">Buy now</button>
          {added && <p className="mt-3 text-center text-xs font-medium text-emerald-700">{quantity} item{quantity > 1 ? 's' : ''} ready in your cart.</p>}
          <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-xs text-slate-600">
            <p className="flex items-center gap-2"><FaTruckFast className="text-blue-700" /> Fast and reliable delivery</p>
            <p className="flex items-center gap-2"><FaShieldHalved className="text-blue-700" /> Secure payment options</p>
            <button type="button" className="focus-ring flex items-center gap-2 rounded text-blue-700 hover:underline"><FaHeart /> Save for later</button>
            <button type="button" className="focus-ring flex items-center gap-2 rounded text-blue-700 hover:underline"><FaShareNodes /> Share this product</button>
          </div>
        </aside>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mt-12">
          <div className="mb-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">You may also like</p>
            <h2 className="section-heading">More in {product.category}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedProducts.map((relatedProduct) => <ProductCard key={relatedProduct.id} product={relatedProduct} />)}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetailsPage;
