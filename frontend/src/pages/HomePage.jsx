import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Hero from '../components/home/Hero';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';

function HomePage() {
  const featuredProducts = products.filter((product) => product.featured);
  const recentProducts = products.filter((product) => !product.featured).slice(0, 4);

  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts products={featuredProducts} />

      <section className="page-shell py-10 sm:py-14">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#e7f5f1] p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-teal-800">Home refresh</p>
            <h2 className="mt-2 max-w-sm text-3xl font-extrabold leading-tight text-slate-900">Small changes, a home you love coming back to.</h2>
            <a href="/products?category=Home%20%26%20Kitchen" className="mt-6 inline-block rounded-md bg-teal-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-900">Shop home essentials</a>
          </div>
          <div className="overflow-hidden rounded-2xl bg-[#fff1dc] p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-800">Move your way</p>
            <h2 className="mt-2 max-w-sm text-3xl font-extrabold leading-tight text-slate-900">Gear up for every step, stretch and sprint.</h2>
            <a href="/products?category=Sports" className="mt-6 inline-block rounded-md bg-amber-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-amber-800">Explore sports picks</a>
          </div>
        </div>
      </section>

      <section className="page-shell pb-4 sm:pb-8">
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">New in store</p>
          <h2 className="section-heading">More worth discovering</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {recentProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  );
}

export default HomePage;
