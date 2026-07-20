import { FiBox, FiDollarSign, FiPackage, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageHeader from '../components/dashboard/PageHeader';
import RevenueChart from '../components/dashboard/RevenueChart';
import StatCard from '../components/dashboard/StatCard';
import StatusPill from '../components/dashboard/StatusPill';
import { revenueData, sellerOrders, sellerSummary } from '../data/dashboardData';

function SellerDashboard() {
  const cards = [
    { icon: FiDollarSign, label: 'Total revenue', value: `₹${sellerSummary.revenue.toLocaleString('en-IN')}`, helper: `↑ ${sellerSummary.revenueChange}% from last month`, tone: 'amber' },
    { icon: FiShoppingBag, label: 'Orders received', value: sellerSummary.orders, helper: '12 awaiting dispatch', tone: 'sky' },
    { icon: FiPackage, label: 'Active products', value: sellerSummary.products, helper: '2 drafts saved', tone: 'emerald' },
    { icon: FiBox, label: 'Low stock items', value: sellerSummary.lowStock, helper: 'Restock recommended', tone: 'violet' },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Seller dashboard"
        title="Good morning, Adarsh"
        description="Track product performance, revenue and fulfillment activity from one place."
        action={<Link to="/seller/products/new" className="focus-ring rounded-xl bg-amazon-orange px-4 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-amber-400">Add product</Link>}
      />
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{cards.map((card) => <StatCard key={card.label} {...card} />)}</section>
      <section className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.8fr)]">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div className="mb-5 flex items-center justify-between"><div><h2 className="font-bold text-slate-900">Revenue overview</h2><p className="mt-1 text-sm text-slate-500">Last six months</p></div><span className="rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">₹1,28,450 total</span></div>
          <RevenueChart data={revenueData} />
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-center justify-between"><div><h2 className="font-bold text-slate-900">Order snapshot</h2><p className="mt-1 text-sm text-slate-500">Today&apos;s fulfillment queue</p></div><Link to="/seller/orders" className="text-sm font-bold text-amazon-blue hover:underline">View all</Link></div>
          <div className="mt-5 space-y-4">{sellerOrders.slice(0, 3).map((order) => <div key={order.id} className="flex items-center justify-between gap-3"><div><p className="text-sm font-bold text-slate-800">{order.id}</p><p className="mt-1 text-xs text-slate-500">{order.customer} · ₹{order.total.toLocaleString('en-IN')}</p></div><StatusPill status={order.status} /></div>)}</div>
        </article>
      </section>
    </>
  );
}

export default SellerDashboard;
