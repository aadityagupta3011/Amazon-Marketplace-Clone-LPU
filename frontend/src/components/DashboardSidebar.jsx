import { NavLink } from 'react-router-dom';
import {
  FiBarChart2,
  FiBox,
  FiClipboard,
  FiGrid,
  FiHome,
  FiPackage,
  FiSettings,
  FiUsers,
} from 'react-icons/fi';

const sellerLinks = [
  { label: 'Overview', to: '/seller/dashboard', icon: FiHome },
  { label: 'Products', to: '/seller/products', icon: FiPackage },
  { label: 'Orders', to: '/seller/orders', icon: FiClipboard },
  { label: 'Inventory', to: '/seller/inventory', icon: FiBox },
  { label: 'Analytics', to: '/seller/analytics', icon: FiBarChart2 },
];

const adminLinks = [
  { label: 'Overview', to: '/admin/dashboard', icon: FiHome },
  { label: 'Sellers', to: '/admin/sellers', icon: FiUsers },
  { label: 'Products', to: '/admin/products', icon: FiPackage },
  { label: 'Categories', to: '/admin/categories', icon: FiGrid },
  { label: 'Reports', to: '/admin/reports', icon: FiBarChart2 },
];

function DashboardSidebar({ role = 'seller', onNavigate }) {
  const links = role === 'admin' ? adminLinks : sellerLinks;
  const title = role === 'admin' ? 'Admin Panel' : 'Seller Center';

  return (
    <aside className="w-full border-b border-slate-200 bg-white md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-5">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-amazon-navy text-sm font-extrabold text-white">
          A
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">{title}</p>
          <p className="text-xs text-slate-500">Marketplace management</p>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-3 py-4 md:block md:space-y-1">
        {links.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-amber-100 text-amber-900'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`
            }
          >
            <Icon className="text-lg" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="hidden px-3 md:block">
        <NavLink
          to={`/${role}/settings`}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
        >
          <FiSettings className="text-lg" />
          Settings
        </NavLink>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
