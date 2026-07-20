import { FiEdit2, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageHeader from '../components/dashboard/PageHeader';
import StatusPill from '../components/dashboard/StatusPill';
import { sellerProducts } from '../data/dashboardData';

function SellerProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Seller catalog" title="Manage products" description="Update listings, prices and stock details from your catalog." action={<Link to="/seller/products/new" className="focus-ring inline-flex items-center gap-2 rounded-xl bg-amazon-orange px-4 py-2.5 text-sm font-bold text-slate-900 hover:bg-amber-400"><FiPlus /> Add product</Link>} />
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
        <div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Product</th><th className="px-5 py-4">SKU</th><th className="px-5 py-4">Price</th><th className="px-5 py-4">Stock</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Action</th></tr></thead><tbody className="divide-y divide-slate-100">{sellerProducts.map((product) => <tr key={product.id} className="text-slate-700"><td className="px-5 py-4 font-bold text-slate-900">{product.name}</td><td className="px-5 py-4">{product.sku}</td><td className="px-5 py-4">₹{product.price.toLocaleString('en-IN')}</td><td className="px-5 py-4">{product.stock}</td><td className="px-5 py-4"><StatusPill status={product.status} /></td><td className="px-5 py-4"><Link to={`/seller/products/${product.id}/edit`} className="focus-ring inline-flex items-center gap-1 rounded-lg px-2 py-1.5 font-bold text-amazon-blue hover:bg-sky-50"><FiEdit2 /> Edit</Link></td></tr>)}</tbody></table></div>
      </div>
    </>
  );
}

export default SellerProductsPage;
