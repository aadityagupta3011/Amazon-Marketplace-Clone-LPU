import { FiArrowUpRight, FiBox, FiDollarSign, FiPackage, FiShoppingBag } from 'react-icons/fi';
import DashboardSidebar from '../components/DashboardSidebar';

const statItems = [
  { key: 'revenue', label: 'Total revenue', icon: FiDollarSign, prefix: '₹' },
  { key: 'orders', label: 'Orders received', icon: FiShoppingBag },
  { key: 'products', label: 'Active products', icon: FiPackage },
  { key: 'stock', label: 'Low stock items', icon: FiBox },
];

function SellerDashboard({ sellerName = 'Seller', stats = {}, recentOrders = [] }) {
  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <DashboardSidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Seller dashboard</p>
            <h1 className="text-2xl font-bold text-slate-900">Welcome back, {sellerName}</h1>
          </div>
          <a
            href="/seller/products/new"
            className="focus-ring inline-flex w-fit items-center rounded-lg bg-amazon-orange px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-500"
          >
            Add product
          </a>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statItems.map(({ key, label, icon: Icon, prefix = '' }) => (
            <article key={key} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {prefix}{Number(stats[key] || 0).toLocaleString('en-IN')}
                  </p>
                </div>
                <span className="rounded-lg bg-amber-100 p-2.5 text-amber-800">
                  <Icon className="text-xl" />
                </span>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h2 className="font-bold text-slate-900">Recent orders</h2>
              <p className="text-sm text-slate-500">Latest customer purchases</p>
            </div>
            <a href="/seller/orders" className="inline-flex items-center gap-1 text-sm font-semibold text-amazon-blue hover:underline">
              View all <FiArrowUpRight />
            </a>
          </div>

          {recentOrders.length ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Order</th>
                    <th className="px-5 py-3 font-semibold">Customer</th>
                    <th className="px-5 py-3 font-semibold">Amount</th>
                    <th className="px-5 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentOrders.map((order) => (
                    <tr key={order._id || order.id} className="text-slate-700">
                      <td className="px-5 py-4 font-medium text-slate-900">#{order.orderNumber || order._id}</td>
                      <td className="px-5 py-4">{order.customerName}</td>
                      <td className="px-5 py-4">₹{Number(order.totalAmount || 0).toLocaleString('en-IN')}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900">
                          {order.status || 'Pending'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="px-5 py-10 text-center text-sm text-slate-500">No recent orders yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default SellerDashboard;
