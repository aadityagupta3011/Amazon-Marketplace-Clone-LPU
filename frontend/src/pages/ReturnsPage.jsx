import { Link } from 'react-router-dom';

function ReturnsPage() {
  return (
    <div className="page-shell py-10 sm:py-12">
      <div className="rounded-[2rem] bg-white p-6 shadow-card sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amazon-orange">Returns</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Returns center</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">Manage returns, review your return history, and get step-by-step support for your recent purchases.</p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-xl font-semibold text-slate-900">No return requests yet</p>
          <p className="mt-3 text-sm text-slate-600">When you request a return for an order, the details will appear here with the next steps.</p>
          <Link to="/orders" className="focus-ring mt-6 inline-flex rounded-full bg-amazon-yellow px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300">
            View orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReturnsPage;
