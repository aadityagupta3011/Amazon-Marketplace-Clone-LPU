import { useState } from 'react';
import { FiArrowLeft, FiSave } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/dashboard/PageHeader';
import { sellerProducts } from '../data/dashboardData';

const emptyProduct = { name: '', sku: '', category: 'Electronics', price: '', stock: '', description: '' };

function SellerProductFormPage() {
  const { productId } = useParams();
  const savedProduct = sellerProducts.find((product) => product.id === productId);
  const [form, setForm] = useState(savedProduct ? { ...savedProduct, description: 'Product details can be updated here.' } : emptyProduct);
  const [message, setMessage] = useState('');

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.sku.trim() || !form.price || !form.stock) {
      setMessage('Please complete the required product details.');
      return;
    }
    setMessage('Product details are ready to be saved when the seller API is connected.');
  };

  return (
    <>
      <PageHeader
        eyebrow="Seller catalog"
        title={savedProduct ? 'Edit product' : 'Add a product'}
        description="Keep the catalog accurate with product details, pricing and available inventory."
        action={<Link to="/seller/products" className="focus-ring inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"><FiArrowLeft /> Back to products</Link>}
      />

      <form onSubmit={handleSubmit} className="max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-slate-700">Product name *</span><input name="name" value={form.name} onChange={updateField} className="focus-ring w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm" placeholder="e.g. Wireless Headphones" /></label>
          <label><span className="mb-2 block text-sm font-bold text-slate-700">SKU *</span><input name="sku" value={form.sku} onChange={updateField} className="focus-ring w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm" placeholder="e.g. SP-1024" /></label>
          <label><span className="mb-2 block text-sm font-bold text-slate-700">Category *</span><select name="category" value={form.category} onChange={updateField} className="focus-ring w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm"><option>Electronics</option><option>Fashion</option><option>Home & Kitchen</option><option>Beauty</option></select></label>
          <label><span className="mb-2 block text-sm font-bold text-slate-700">Selling price (₹) *</span><input name="price" type="number" min="0" value={form.price} onChange={updateField} className="focus-ring w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm" /></label>
          <label><span className="mb-2 block text-sm font-bold text-slate-700">Available stock *</span><input name="stock" type="number" min="0" value={form.stock} onChange={updateField} className="focus-ring w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm" /></label>
          <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold text-slate-700">Description</span><textarea name="description" rows="5" value={form.description} onChange={updateField} className="focus-ring w-full resize-y rounded-xl border border-slate-300 px-3 py-2.5 text-sm" placeholder="Describe key features and benefits" /></label>
        </div>
        {message && <p className="mt-5 rounded-xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">{message}</p>}
        <div className="mt-6 flex justify-end"><button type="submit" className="focus-ring inline-flex items-center gap-2 rounded-xl bg-amazon-orange px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-amber-400"><FiSave /> {savedProduct ? 'Save changes' : 'Create product'}</button></div>
      </form>
    </>
  );
}

export default SellerProductFormPage;
