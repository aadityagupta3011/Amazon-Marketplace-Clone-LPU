import { useState } from 'react';
import { FiAlertTriangle, FiPackage } from 'react-icons/fi';
import PageHeader from '../components/dashboard/PageHeader';
import StatusPill from '../components/dashboard/StatusPill';
import { sellerProducts } from '../data/dashboardData';

function SellerInventoryPage() {
  const [items, setItems] = useState(sellerProducts);
  const restockItem = (id) => setItems(items.map((item) => (item.id === id ? { ...item, stock: item.stock + 10, status: 'Active' } : item)));

  return (
    <>
      <PageHeader eyebrow="Seller inventory" title="Inventory status" description="Monitor stock levels and restock items before they run out." />
      <div className="mb-5 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"><FiAlertTriangle className="shrink-0 text-lg" />{items.filter((item) => item.stock < 8).length} products need your attention.</div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"><div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Product</th><th className="px-5 py-4">SKU</th><th className="px-5 py-4">Available</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Action</th></tr></thead><tbody className="divide-y divide-slate-100">{items.map((item) => <tr key={item.id}><td className="px-5 py-4 font-bold text-slate-900">{item.name}</td><td className="px-5 py-4 text-slate-600">{item.sku}</td><td className="px-5 py-4"><span className="inline-flex items-center gap-2 font-bold text-slate-800"><FiPackage className="text-slate-400" />{item.stock} units</span></td><td className="px-5 py-4"><StatusPill status={item.status} /></td><td className="px-5 py-4"><button type="button" onClick={() => restockItem(item.id)} className="focus-ring rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50">Add 10 units</button></td></tr>)}</tbody></table></div></div>
    </>
  );
}

export default SellerInventoryPage;
