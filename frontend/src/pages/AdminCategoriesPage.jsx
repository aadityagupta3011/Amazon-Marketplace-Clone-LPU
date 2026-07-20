import { useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import PageHeader from '../components/dashboard/PageHeader';
import { adminCategories as initialCategories } from '../data/dashboardData';

function AdminCategoriesPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [categoryName, setCategoryName] = useState('');
  const addCategory = (event) => { event.preventDefault(); const name = categoryName.trim(); if (!name) return; setCategories([...categories, { id: name.toLowerCase().replaceAll(' ', '-'), name, products: 0 }]); setCategoryName(''); };

  return (
    <>
      <PageHeader eyebrow="Admin catalog" title="Manage categories" description="Organize the marketplace catalog with clear product categories." />
      <form onSubmit={addCategory} className="mb-6 flex max-w-xl gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card"><input value={categoryName} onChange={(event) => setCategoryName(event.target.value)} className="focus-ring min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2.5 text-sm" placeholder="New category name" /><button type="submit" className="focus-ring inline-flex items-center gap-2 rounded-xl bg-amazon-orange px-4 py-2.5 text-sm font-bold text-slate-900 hover:bg-amber-400"><FiPlus /> Add</button></form>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{categories.map((category) => <article key={category.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-card"><div><h2 className="font-bold text-slate-900">{category.name}</h2><p className="mt-1 text-sm text-slate-500">{category.products} products</p></div><button type="button" onClick={() => setCategories(categories.filter((item) => item.id !== category.id))} className="focus-ring rounded-lg p-2 text-rose-600 hover:bg-rose-50" aria-label={`Remove ${category.name}`}><FiTrash2 /></button></article>)}</div>
    </>
  );
}

export default AdminCategoriesPage;
