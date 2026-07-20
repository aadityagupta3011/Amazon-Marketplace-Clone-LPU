import { useEffect, useMemo, useState } from 'react';
import { FaSliders } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';
import FilterSidebar from '../components/catalog/FilterSidebar';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';

const emptyFilters = { category: '', rating: '', maxPrice: '' };

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    rating: searchParams.get('rating') || '',
    maxPrice: searchParams.get('maxPrice') || '',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    setFilters({
      category: searchParams.get('category') || '',
      rating: searchParams.get('rating') || '',
      maxPrice: searchParams.get('maxPrice') || '',
    });
  }, [searchParams]);

  const visibleProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    const filteredProducts = products.filter((product) => {
      const matchesSearch = !query || [product.name, product.brand, product.category].join(' ').toLowerCase().includes(query);
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesRating = !filters.rating || product.rating >= Number(filters.rating);
      const matchesPrice = !filters.maxPrice || product.price <= Number(filters.maxPrice);
      return matchesSearch && matchesCategory && matchesRating && matchesPrice;
    });

    return [...filteredProducts].sort((firstProduct, secondProduct) => {
      if (sortBy === 'price-low') return firstProduct.price - secondProduct.price;
      if (sortBy === 'price-high') return secondProduct.price - firstProduct.price;
      if (sortBy === 'rating') return secondProduct.rating - firstProduct.rating;
      return Number(secondProduct.featured) - Number(firstProduct.featured) || secondProduct.reviews - firstProduct.reviews;
    });
  }, [filters, searchQuery, sortBy]);

  const activeFilters = [
    filters.category && { key: 'category', label: filters.category },
    filters.rating && { key: 'rating', label: `${filters.rating}+ stars` },
    filters.maxPrice && { key: 'maxPrice', label: `Under ₹${Number(filters.maxPrice).toLocaleString('en-IN')}` },
  ].filter(Boolean);

  const updateFilter = (name, value) => {
    const nextFilters = { ...filters, [name]: value };
    setFilters(nextFilters);
    const nextParams = new URLSearchParams(searchParams);

    Object.entries(nextFilters).forEach(([key, filterValue]) => {
      if (filterValue) nextParams.set(key, filterValue);
      else nextParams.delete(key);
    });

    setSearchParams(nextParams);
  };

  const clearFilters = () => {
    setFilters(emptyFilters);
    const nextParams = new URLSearchParams(searchParams);
    Object.keys(emptyFilters).forEach((key) => nextParams.delete(key));
    setSearchParams(nextParams);
  };

  const heading = searchQuery ? `Results for “${searchQuery}”` : filters.category || 'All products';
  const subheading = searchQuery
    ? 'Refine your search with filters or sorting to find what you need faster.'
    : 'Shop top picks and new arrivals from a variety of vendors.';

  return (
    <div className="page-shell py-8 sm:py-10">
      <div className="mb-6 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 px-6 py-8 text-white shadow-2xl sm:px-8">
        <p className="mb-2 text-sm uppercase tracking-[0.28em] text-slate-400">Home / Products</p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{heading}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{subheading}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="hidden lg:block">
          <FilterSidebar filters={filters} onChange={updateFilter} onClear={clearFilters} />
        </div>

        <div className="min-w-0">
          <div className="mb-5 rounded-[1.75rem] bg-white p-4 shadow-card sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500">
                  Showing <span className="font-semibold text-slate-900">{visibleProducts.length}</span> products
                </p>
                <p className="text-sm text-slate-500">
                  {activeFilters.length ? 'Refine your results with active filters.' : 'No active filters. Explore the full catalog.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 lg:hidden"
                >
                  <FaSliders /> Filters
                </button>

                <label className="sr-only" htmlFor="sort-products">Sort products</label>
                <select
                  id="sort-products"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="focus-ring rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => updateFilter(filter.key, '')}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-100"
                  >
                    {filter.label}
                    <span aria-hidden="true">×</span>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="focus-ring rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white transition hover:bg-slate-800"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {visibleProducts.length ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] bg-white px-6 py-16 text-center shadow-card">
              <h2 className="text-xl font-bold text-slate-900">No products matched your filters</h2>
              <p className="mt-2 text-sm text-slate-600">Try removing a filter or browsing a different category.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="focus-ring mt-6 rounded-full bg-amazon-yellow px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 p-4 lg:hidden">
          <div className="mx-auto flex max-w-sm flex-col gap-4 rounded-[2rem] bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Refine results</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="focus-ring rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700"
              >
                Close
              </button>
            </div>
            <FilterSidebar mobile filters={filters} onChange={updateFilter} onClear={clearFilters} onClose={() => setMobileFiltersOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
