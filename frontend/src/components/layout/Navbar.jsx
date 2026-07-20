import { useEffect, useState } from 'react';
import { FaBars, FaCartShopping, FaLocationDot, FaMagnifyingGlass, FaXmark } from 'react-icons/fa6';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { categories } from '../../data/products';

function Navbar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get('q') || '');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setSearchText(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = searchText.trim();
    navigate(searchValue ? `/products?q=${encodeURIComponent(searchValue)}` : '/products');
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 shadow-sm">
      <div className="bg-amazon-navy text-white">
        <div className="page-shell flex min-h-16 flex-wrap items-center gap-3 py-2">
          <button
            type="button"
            className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded border border-transparent text-xl hover:border-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>

          <Link to="/" className="focus-ring shrink-0 rounded px-1 py-1 text-xl font-extrabold tracking-tight sm:text-2xl">
            shop<span className="text-amazon-orange">kart</span>
          </Link>

          <div className="hidden shrink-0 items-center gap-2 border border-transparent px-2 py-1 text-xs leading-4 hover:border-white lg:flex">
            <FaLocationDot className="text-lg" />
            <span className="text-slate-300">Deliver to<br /><strong className="text-sm text-white">India</strong></span>
          </div>

          <form onSubmit={handleSearch} className="order-last flex w-full basis-full items-stretch sm:order-none sm:basis-auto sm:flex-1">
            <input
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') handleSearch(event);
              }}
              placeholder="Search products, brands and more"
              className="h-10 min-w-0 flex-1 rounded-l-md border-0 px-4 text-sm text-slate-800 outline-none ring-2 ring-transparent focus:ring-amazon-orange"
              aria-label="Search products"
            />
            <button
              type="submit"
              className="focus-ring grid w-11 place-items-center rounded-r-md bg-amazon-orange text-slate-900 hover:bg-amber-400"
              aria-label="Search"
            >
              <FaMagnifyingGlass />
            </button>
          </form>

          <div className="hidden items-center gap-4 text-xs md:flex">
            <Link to="/login" className="focus-ring rounded px-1 text-left hover:text-amazon-orange">
              <span className="text-slate-300">Hello, sign in</span><br />
              <strong className="text-sm">Account & Lists</strong>
            </Link>
            <Link to="/returns" className="focus-ring rounded px-1 text-left hover:text-amazon-orange">
              <span className="text-slate-300">Returns</span><br />
              <strong className="text-sm">& Orders</strong>
            </Link>
          </div>

          <Link to="/cart" className="focus-ring flex shrink-0 items-center gap-1 rounded px-1 py-1 text-sm font-bold hover:text-amazon-orange" aria-label="View shopping cart">
            <FaCartShopping className="text-xl" />
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>

      <nav className="bg-amazon-blue text-sm text-white">
        <div className="page-shell hidden h-10 items-center gap-5 overflow-x-auto whitespace-nowrap md:flex">
          <Link to="/products" className="focus-ring rounded font-semibold hover:text-amazon-orange">All Products</Link>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="focus-ring rounded hover:text-amazon-orange"
            >
              {category.name}
            </Link>
          ))}
          <Link to="/checkout" className="focus-ring rounded font-semibold hover:text-amazon-orange">Payment</Link>
          <span className="ml-auto font-semibold text-amazon-orange">Great Indian Deals</span>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            <Link to="/products" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-slate-100">All Products</Link>
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                onClick={() => setMenuOpen(false)}
                className="rounded px-3 py-2 hover:bg-slate-100"
              >
                {category.name}
              </Link>
            ))}
            <Link to="/checkout" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-slate-100">Payment</Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-slate-100">Cart</Link>
            <Link to="/orders" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-slate-100">Orders</Link>
            <Link to="/returns" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 hover:bg-slate-100">Returns</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
