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

  return (
    <div className="page-shell py-7 sm:py-10">
      <div className="mb-6 rounded-xl bg-white px-5 py-5 shadow-card sm:px-7">
        <p className="mb-1 text-sm text-slate-500">Home / Products</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h1>
        <p className="mt-2 text-sm text-slate-600">Discover products from independent sellers and popular brands.</p>
      </div>

      <div className="flex gap-6">
        <FilterSidebar filters={filters} onChange={updateFilter} onClear={clearFilters} />

        <div className="min-w-0 flex-1">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-4 shadow-card">
            <p className="text-sm text-slate-600"><strong className="text-slate-900">{visibleProducts.length}</strong> products found</p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setMobileFiltersOpen(true)} className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold lg:hidden">
                <FaSliders /> Filters
              </button>
              <label className="text-sm text-slate-600" htmlFor="sort-products">Sort by</label>
              <select id="sort-products" value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="focus-ring rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {visibleProducts.length ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="rounded-xl bg-white px-6 py-16 text-center shadow-card">
              <h2 className="text-xl font-bold">No products matched your filters</h2>
              <p className="mt-2 text-sm text-slate-600">Try removing a filter or searching for a different item.</p>
              <button type="button" onClick={clearFilters} className="focus-ring mt-5 rounded-md bg-amazon-yellow px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-amber-300">Clear filters</button>
            </div>
          )}
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/40 p-4 lg:hidden">
          <div className="mx-auto mt-10 max-w-sm">
            <FilterSidebar mobile filters={filters} onChange={updateFilter} onClear={clearFilters} onClose={() => setMobileFiltersOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
