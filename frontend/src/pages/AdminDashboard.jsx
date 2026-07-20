import { FiPackage, FiUserCheck, FiUserPlus, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageHeader from '../components/dashboard/PageHeader';
import StatCard from '../components/dashboard/StatCard';
import StatusPill from '../components/dashboard/StatusPill';
import { adminSummary, pendingSellers } from '../data/dashboardData';

function AdminDashboard() {
  const cards = [
    { icon: FiUsers, label: 'Registered users', value: adminSummary.users.toLocaleString('en-IN'), helper: 'Across all roles', tone: 'sky' },
    { icon: FiUserCheck, label: 'Approved sellers', value: adminSummary.sellers, helper: '4 approved this month', tone: 'emerald' },
    { icon: FiUserPlus, label: 'Seller approvals', value: adminSummary.pendingSellers, helper: 'Need review', tone: 'amber' },
    { icon: FiPackage, label: 'Listed products', value: adminSummary.products, helper: '18 added this week', tone: 'violet' },
  ];

  return (
    <>
      <PageHeader eyebrow="Admin dashboard" title="Marketplace control center" description="Manage seller onboarding, catalog quality and marketplace activity." />
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{cards.map((card) => <StatCard key={card.label} {...card} />)}</section>
      <section className="mt-7 rounded-2xl border border-slate-200 bg-white shadow-card">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5 sm:px-6"><div><h2 className="font-bold text-slate-900">Pending seller approvals</h2><p className="mt-1 text-sm text-slate-500">Review requests before sellers can publish products.</p></div><Link to="/admin/sellers" className="text-sm font-bold text-amazon-blue hover:underline">Manage sellers</Link></div>
        <div className="divide-y divide-slate-100">{pendingSellers.map((seller) => <div key={seller.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"><div><p className="font-bold text-slate-800">{seller.storeName}</p><p className="mt-1 text-sm text-slate-500">{seller.owner} · {seller.category}</p></div><StatusPill status="Pending" /></div>)}</div>
      </section>
    </>
  );
}

export default AdminDashboard;
