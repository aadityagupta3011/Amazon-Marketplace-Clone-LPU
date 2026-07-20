import { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import PageHeader from '../components/dashboard/PageHeader';
import StatusPill from '../components/dashboard/StatusPill';
import { pendingSellers as initialSellers } from '../data/dashboardData';

function AdminSellersPage() {
  const [sellers, setSellers] = useState(initialSellers.map((seller) => ({ ...seller, status: 'Pending' })));
  const updateStatus = (id, status) => setSellers(sellers.map((seller) => seller.id === id ? { ...seller, status } : seller));

  return (
    <>
      <PageHeader eyebrow="Admin management" title="Seller approvals" description="Approve verified sellers or reject incomplete applications." />
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Store</th><th className="px-5 py-4">Owner</th><th className="px-5 py-4">Category</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Decision</th></tr></thead><tbody className="divide-y divide-slate-100">{sellers.map((seller) => <tr key={seller.id}><td className="px-5 py-4"><p className="font-bold text-slate-900">{seller.storeName}</p><p className="mt-1 text-xs text-slate-500">{seller.email}</p></td><td className="px-5 py-4 text-slate-700">{seller.owner}</td><td className="px-5 py-4 text-slate-700">{seller.category}</td><td className="px-5 py-4"><StatusPill status={seller.status} /></td><td className="px-5 py-4">{seller.status === 'Pending' ? <div className="flex gap-2"><button type="button" onClick={() => updateStatus(seller.id, 'Approved')} className="focus-ring inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"><FiCheck /> Approve</button><button type="button" onClick={() => updateStatus(seller.id, 'Rejected')} className="focus-ring inline-flex items-center gap-1 rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-bold text-rose-700 hover:bg-rose-50"><FiX /> Reject</button></div> : <span className="text-xs text-slate-500">Decision recorded</span>}</td></tr>)}</tbody></table></div></div>
    </>
  );
}

export default AdminSellersPage;
