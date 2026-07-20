import { FiDownload, FiFileText, FiTrendingUp } from 'react-icons/fi';
import PageHeader from '../components/dashboard/PageHeader';
import RevenueChart from '../components/dashboard/RevenueChart';
import StatCard from '../components/dashboard/StatCard';
import { revenueData } from '../data/dashboardData';

function AdminReportsPage() {
  const reports = [{ label: 'Gross marketplace value', value: '₹8.46L' }, { label: 'Completed orders', value: '564' }, { label: 'Platform commission', value: '₹84,600' }];
  return (
    <>
      <PageHeader eyebrow="Admin reporting" title="Marketplace reports" description="Review business performance and download summary reports." action={<button type="button" onClick={() => window.print()} className="focus-ring inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"><FiDownload /> Print report</button>} />
      <section className="grid gap-4 sm:grid-cols-3">{reports.map((report) => <StatCard key={report.label} icon={FiTrendingUp} label={report.label} value={report.value} helper="Last six months" tone="violet" />)}</section>
      <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-800"><FiFileText /></span><div><h2 className="font-bold text-slate-900">Revenue report</h2><p className="mt-1 text-sm text-slate-500">Monthly marketplace revenue trends.</p></div></div><div className="mt-5"><RevenueChart data={revenueData} height={330} /></div></section>
    </>
  );
}

export default AdminReportsPage;
