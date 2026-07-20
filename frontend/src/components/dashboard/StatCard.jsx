function StatCard({ icon: Icon, label, value, helper, tone = 'amber' }) {
  const tones = {
    amber: 'bg-amber-100 text-amber-800',
    sky: 'bg-sky-100 text-sky-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    violet: 'bg-violet-100 text-violet-700',
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-extrabold text-slate-900">{value}</p>
          {helper && <p className="mt-2 text-xs font-medium text-slate-500">{helper}</p>}
        </div>
        <span className={`grid h-11 w-11 place-items-center rounded-xl ${tones[tone]}`}>
          <Icon className="text-xl" />
        </span>
      </div>
    </article>
  );
}

export default StatCard;
