import { FaXmark } from 'react-icons/fa6';
import { categories } from '../../data/products';

const priceOptions = [
  { label: 'Under ₹1,000', value: 1000 },
  { label: 'Under ₹2,000', value: 2000 },
  { label: 'Under ₹3,500', value: 3500 },
  { label: 'Under ₹5,000', value: 5000 },
];

function FilterSidebar({ filters, onChange, onClear, mobile, onClose }) {
  return (
    <aside className={mobile ? 'rounded-xl bg-white p-5 shadow-card' : 'hidden w-60 shrink-0 rounded-xl bg-white p-5 shadow-card lg:block'}>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold">Filters</h2>
        {mobile ? (
          <button type="button" onClick={onClose} className="focus-ring rounded p-1 text-lg text-slate-600" aria-label="Close filters"><FaXmark /></button>
        ) : (
          <button type="button" onClick={onClear} className="focus-ring rounded text-xs font-bold text-blue-700 hover:underline">Clear all</button>
        )}
      </div>

      <div className="border-b border-slate-200 pb-5">
        <h3 className="mb-3 text-sm font-bold">Category</h3>
        <div className="space-y-2.5">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
            <input type="radio" name={`category-${mobile ? 'mobile' : 'desktop'}`} checked={!filters.category} onChange={() => onChange('category', '')} className="accent-slate-900" />
            All categories
          </label>
          {categories.map((category) => (
            <label key={category.name} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input type="radio" name={`category-${mobile ? 'mobile' : 'desktop'}`} checked={filters.category === category.name} onChange={() => onChange('category', category.name)} className="accent-slate-900" />
              {category.name}
            </label>
          ))}
        </div>
      </div>

      <div className="border-b border-slate-200 py-5">
        <h3 className="mb-3 text-sm font-bold">Customer rating</h3>
        <div className="space-y-2.5">
          {[4, 3, 2].map((rating) => (
            <label key={rating} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input type="radio" name={`rating-${mobile ? 'mobile' : 'desktop'}`} checked={Number(filters.rating) === rating} onChange={() => onChange('rating', String(rating))} className="accent-slate-900" />
              {rating}★ & above
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
            <input type="radio" name={`rating-${mobile ? 'mobile' : 'desktop'}`} checked={!filters.rating} onChange={() => onChange('rating', '')} className="accent-slate-900" />
            Any rating
          </label>
        </div>
      </div>

      <div className="pt-5">
        <h3 className="mb-3 text-sm font-bold">Price</h3>
        <div className="space-y-2.5">
          {priceOptions.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input type="radio" name={`price-${mobile ? 'mobile' : 'desktop'}`} checked={Number(filters.maxPrice) === option.value} onChange={() => onChange('maxPrice', String(option.value))} className="accent-slate-900" />
              {option.label}
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
            <input type="radio" name={`price-${mobile ? 'mobile' : 'desktop'}`} checked={!filters.maxPrice} onChange={() => onChange('maxPrice', '')} className="accent-slate-900" />
            Any price
          </label>
        </div>
      </div>

      {mobile && <button type="button" onClick={() => { onClear(); onClose(); }} className="focus-ring mt-6 w-full rounded-md border border-slate-300 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50">Clear filters</button>}
    </aside>
  );
}

export default FilterSidebar;
