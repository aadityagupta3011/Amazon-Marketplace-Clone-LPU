import { FiTrendingUp } from 'react-icons/fi';
import PageHeader from '../components/dashboard/PageHeader';
import RevenueChart from '../components/dashboard/RevenueChart';
import StatCard from '../components/dashboard/StatCard';
import { revenueData } from '../data/dashboardData';

function SellerAnalyticsPage() {
  const summary = [{ label: 'Average order value', value: '₹1,493' }, { label: 'Conversion rate', value: '4.8%' }, { label: 'Return rate', value: '1.2%' }];
  return (
    <>
      <PageHeader eyebrow="Seller analytics" title="Performance analytics" description="Use revenue and order trends to make better catalog decisions." />
      <section className="grid gap-4 sm:grid-cols-3">{summary.map((item) => <StatCard key={item.label} icon={FiTrendingUp} label={item.label} value={item.value} helper="Last 30 days" tone="sky" />)}</section>
      <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6"><h2 className="font-bold text-slate-900">Revenue trend</h2><p className="mt-1 text-sm text-slate-500">Monthly revenue from completed orders.</p><div className="mt-5"><RevenueChart data={revenueData} height={320} /></div></section>
    </>
  );
}

export default SellerAnalyticsPage;
