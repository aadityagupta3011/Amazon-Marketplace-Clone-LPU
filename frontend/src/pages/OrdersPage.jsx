import { Link } from 'react-router-dom';

function OrdersPage() {
  return (
    <div className="page-shell py-10 sm:py-12">
      <div className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amazon-orange">Orders</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Your orders</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">Check order status, review past purchases, and track shipments.</p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-xl font-semibold text-slate-900">No orders yet</p>
          <p className="mt-3 text-sm text-slate-600">Once you place an order, it will appear here with tracking details.</p>
          <Link to="/products" className="focus-ring mt-6 inline-flex rounded-full bg-amazon-yellow px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300">
            Start shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
