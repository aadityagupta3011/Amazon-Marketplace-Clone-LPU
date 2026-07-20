const statusStyles = {
  Active: 'bg-emerald-100 text-emerald-700',
  Delivered: 'bg-emerald-100 text-emerald-700',
  Shipped: 'bg-sky-100 text-sky-700',
  Processing: 'bg-amber-100 text-amber-800',
  'Low stock': 'bg-amber-100 text-amber-800',
  'Out of stock': 'bg-rose-100 text-rose-700',
  Cancelled: 'bg-rose-100 text-rose-700',
  Pending: 'bg-violet-100 text-violet-700',
  Approved: 'bg-emerald-100 text-emerald-700',
  Rejected: 'bg-rose-100 text-rose-700',
};

function StatusPill({ status }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${statusStyles[status] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}

export default StatusPill;
