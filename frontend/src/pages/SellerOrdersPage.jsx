import { useMemo, useState } from 'react';
import PageHeader from '../components/dashboard/PageHeader';
import StatusPill from '../components/dashboard/StatusPill';
import { sellerOrders } from '../data/dashboardData';

function SellerOrdersPage() {
  const [status, setStatus] = useState('All');
  const visibleOrders = useMemo(() => status === 'All' ? sellerOrders : sellerOrders.filter((order) => order.status === status), [status]);

  return (
    <>
      <PageHeader eyebrow="Seller fulfillment" title="Orders" description="Review customer purchases and keep fulfillment moving." />
      <div className="mb-5 flex flex-wrap gap-2">{['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((item) => <button key={item} type="button" onClick={() => setStatus(item)} className={`focus-ring rounded-full px-3 py-2 text-sm font-bold ${status === item ? 'bg-amazon-navy text-white' : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`}>{item}</button>)}</div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Order</th><th className="px-5 py-4">Customer</th><th className="px-5 py-4">Items</th><th className="px-5 py-4">Total</th><th className="px-5 py-4">Order date</th><th className="px-5 py-4">Status</th></tr></thead><tbody className="divide-y divide-slate-100">{visibleOrders.map((order) => <tr key={order.id}><td className="px-5 py-4 font-bold text-slate-900">{order.id}</td><td className="px-5 py-4 text-slate-700">{order.customer}</td><td className="px-5 py-4 text-slate-700">{order.items}</td><td className="px-5 py-4 font-bold text-slate-800">₹{order.total.toLocaleString('en-IN')}</td><td className="px-5 py-4 text-slate-600">{order.date}</td><td className="px-5 py-4"><StatusPill status={order.status} /></td></tr>)}</tbody></table></div>{!visibleOrders.length && <p className="p-8 text-center text-sm text-slate-500">No orders match this status.</p>}</div>
    </>
  );
}

export default SellerOrdersPage;
