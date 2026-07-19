import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

function CategoryGrid() {
  return (
    <section className="page-shell py-10 sm:py-14">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">Start exploring</p>
          <h2 className="section-heading">Shop popular categories</h2>
        </div>
        <Link to="/products" className="hidden text-sm font-semibold text-blue-700 hover:underline sm:block">View all products</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            to={`/products?category=${encodeURIComponent(category.name)}`}
            key={category.name}
            className="group overflow-hidden rounded-xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="h-28 overflow-hidden sm:h-32">
              <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            </div>
            <p className="p-3 text-center text-sm font-bold text-slate-800 group-hover:text-amber-700">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
