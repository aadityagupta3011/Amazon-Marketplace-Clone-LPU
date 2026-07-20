import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

function CategoryGrid() {
  return (
    <section className="page-shell py-10 sm:py-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-600">Start exploring</p>
          <h2 className="section-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Shop popular categories
          </h2>
        </div>
        <Link
          to="/products"
          className="hidden items-center gap-1 text-sm font-semibold text-blue-700 hover:text-amber-600 hover:underline sm:flex"
        >
          View all products
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            to={`/products?category=${encodeURIComponent(category.name)}`}
            key={category.name}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-28 overflow-hidden sm:h-32">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              {/* subtle gradient overlay on hover, Amazon-style */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Label */}
            <div className="border-t border-slate-100 bg-white p-3 text-center">
              <p className="truncate text-sm font-bold text-slate-800 transition-colors group-hover:text-amber-600">
                {category.name}
              </p>
              <span className="mt-0.5 block text-xs font-medium text-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Shop now
              </span>
            </div>

            {/* corner accent badge */}
            <span className="absolute left-2 top-2 rounded-full bg-amber-400/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-900 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
              New
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;