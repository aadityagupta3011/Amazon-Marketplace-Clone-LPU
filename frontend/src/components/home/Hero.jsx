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

      {/* decorative glow blobs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="page-shell relative grid min-h-[420px] items-center py-16 sm:min-h-[490px] sm:py-20">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex animate-pulse items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-sm font-semibold text-amber-200 shadow-sm shadow-amber-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Mid-year savings are live
          </p>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight drop-shadow-sm sm:text-5xl lg:text-6xl">
            Everyday finds, delivered with a{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              little delight.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-200 sm:text-lg">
            Discover quality picks from trusted sellers across fashion, electronics, home, beauty and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="focus-ring group inline-flex items-center gap-2 rounded-md bg-amazon-yellow px-6 py-3 font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-500/30"
            >
              Shop all deals
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/products?category=Electronics"
              className="focus-ring rounded-md border border-white/80 px-6 py-3 font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:text-slate-900"
            >
              Explore electronics
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-100">
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              <FaTruckFast className="text-amazon-orange" /> Fast delivery
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              <FaShieldHeart className="text-amazon-orange" /> Secure checkout
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;