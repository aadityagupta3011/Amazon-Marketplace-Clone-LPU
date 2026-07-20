import { FiCheckCircle, FiPackage, FiUsers, FiUserPlus } from 'react-icons/fi';
import DashboardSidebar from '../components/DashboardSidebar';

const metrics = [
  { key: 'users', label: 'Registered users', icon: FiUsers },
  { key: 'sellers', label: 'Approved sellers', icon: FiCheckCircle },
  { key: 'pendingSellers', label: 'Seller approvals', icon: FiUserPlus },
  { key: 'products', label: 'Listed products', icon: FiPackage },
];

function AdminDashboard({ dashboardData = {}, pendingSellers = [] }) {
  return (
    <div className="min-h-screen bg-slate-100 md:flex">
      <DashboardSidebar role="admin" />

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mb-7">
          <p className="text-sm font-medium text-slate-500">Administration</p>
          <h1 className="text-2xl font-bold text-slate-900">Marketplace overview</h1>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map(({ key, label, icon: Icon }) => (
            <article key={key} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="inline-flex rounded-lg bg-sky-100 p-2.5 text-sky-700">
                <Icon className="text-xl" />
              </span>
              <p className="mt-4 text-sm font-medium text-slate-500">{label}</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {Number(dashboardData[key] || 0).toLocaleString('en-IN')}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-7 rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="font-bold text-slate-900">Pending seller approvals</h2>
            <p className="text-sm text-slate-500">Review seller requests before they can list products.</p>
          </div>

          {pendingSellers.length ? (
            <div className="divide-y divide-slate-100">
              {pendingSellers.map((seller) => (
                <div key={seller._id || seller.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{seller.storeName}</p>
                    <p className="text-sm text-slate-500">{seller.ownerName} · {seller.email}</p>
                  </div>
                  <a
                    href={`/admin/sellers/${seller._id || seller.id}`}
                    className="focus-ring w-fit rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Review request
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="px-5 py-10 text-center text-sm text-slate-500">There are no seller approvals waiting.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
