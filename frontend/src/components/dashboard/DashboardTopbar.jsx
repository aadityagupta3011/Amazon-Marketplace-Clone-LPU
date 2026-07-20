import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';

function DashboardTopbar({ role, onMenuClick }) {
  const title = role === 'admin' ? 'Admin workspace' : 'Seller workspace';

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onMenuClick} className="focus-ring rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden" aria-label="Open dashboard menu">
          <FiMenu className="text-xl" />
        </button>
        <p className="text-sm font-semibold text-slate-600">{title}</p>
      </div>

      <div className="flex items-center gap-3">
        <button type="button" className="focus-ring relative rounded-lg p-2 text-slate-600 hover:bg-slate-100" aria-label="Notifications">
          <FiBell className="text-xl" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500" />
        </button>
        <button type="button" className="focus-ring flex items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-slate-100">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-amazon-navy text-xs font-bold text-white">AR</span>
          <span className="hidden text-sm font-semibold text-slate-700 sm:block">Adarsh</span>
          <FiChevronDown className="hidden text-slate-500 sm:block" />
        </button>
      </div>
    </header>
  );
}

export default DashboardTopbar;
