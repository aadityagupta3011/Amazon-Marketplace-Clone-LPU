import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar';
import DashboardTopbar from './DashboardTopbar';

function DashboardLayout({ role }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 md:flex">
      <div className={menuOpen ? 'block' : 'hidden md:block'}>
        <DashboardSidebar role={role} onNavigate={() => setMenuOpen(false)} />
      </div>
      <div className="min-w-0 flex-1">
        <DashboardTopbar role={role} onMenuClick={() => setMenuOpen((isOpen) => !isOpen)} />
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
