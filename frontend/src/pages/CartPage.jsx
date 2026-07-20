import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

function CartPage() {
  return (
    <div className="page-shell py-10 sm:py-12">
      <div className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amazon-orange">Your cart</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Shopping bag</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">Save items here and continue to checkout when you are ready.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
            <FaCartShopping className="text-lg text-amazon-orange" /> 0 items in cart
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-xl font-semibold text-slate-900">Your cart is empty</p>
          <p className="mt-3 text-sm text-slate-600">Browse products and add items to your bag to see them appear here.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/products" className="focus-ring inline-flex rounded-full bg-amazon-yellow px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300">
              Browse products
            </Link>
            <Link to="/checkout" className="focus-ring inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-400 hover:bg-slate-100">
              Add payment method
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
