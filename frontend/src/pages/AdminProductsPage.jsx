import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import PageHeader from '../components/dashboard/PageHeader';
import StatusPill from '../components/dashboard/StatusPill';
import { sellerProducts } from '../data/dashboardData';

function AdminProductsPage() {
  const [products, setProducts] = useState(sellerProducts.map((product) => ({ ...product, visible: true })));
  const toggleProduct = (id) => setProducts(products.map((product) => product.id === id ? { ...product, visible: !product.visible } : product));

  return (
    <>
      <PageHeader eyebrow="Admin catalog" title="Manage products" description="Review active product listings and hide items that need attention." />
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Product</th><th className="px-5 py-4">SKU</th><th className="px-5 py-4">Price</th><th className="px-5 py-4">Inventory</th><th className="px-5 py-4">Listing</th><th className="px-5 py-4">Action</th></tr></thead><tbody className="divide-y divide-slate-100">{products.map((product) => <tr key={product.id}><td className="px-5 py-4 font-bold text-slate-900">{product.name}</td><td className="px-5 py-4 text-slate-600">{product.sku}</td><td className="px-5 py-4 text-slate-700">₹{product.price.toLocaleString('en-IN')}</td><td className="px-5 py-4"><StatusPill status={product.status} /></td><td className="px-5 py-4"><StatusPill status={product.visible ? 'Active' : 'Rejected'} /></td><td className="px-5 py-4"><button type="button" onClick={() => toggleProduct(product.id)} className="focus-ring inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50">{product.visible ? <><FiEyeOff /> Hide</> : <><FiEye /> Publish</>}</button></td></tr>)}</tbody></table></div></div>
    </>
  );
}

export default AdminProductsPage;
