import { FaArrowRight, FaShieldHeart, FaTruckFast } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85"
        alt="A bright retail display"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/20" />
      <div className="page-shell relative grid min-h-[420px] items-center py-16 sm:min-h-[490px] sm:py-20">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-sm font-semibold text-amber-200">
            Mid-year savings are live
          </p>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Everyday finds, delivered with a little delight.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-200 sm:text-lg">
            Discover quality picks from trusted sellers across fashion, electronics, home, beauty and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="focus-ring inline-flex items-center gap-2 rounded-md bg-amazon-yellow px-6 py-3 font-bold text-slate-900 transition hover:bg-amber-300">
              Shop all deals <FaArrowRight />
            </Link>
            <Link to="/products?category=Electronics" className="focus-ring rounded-md border border-white/80 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900">
              Explore electronics
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-100">
            <span className="flex items-center gap-2"><FaTruckFast className="text-amazon-orange" /> Fast delivery</span>
            <span className="flex items-center gap-2"><FaShieldHeart className="text-amazon-orange" /> Secure checkout</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
