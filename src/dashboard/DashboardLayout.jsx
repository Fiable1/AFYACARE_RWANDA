import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  Bell,
  CalendarDays,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  Stethoscope,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getInitials = (name) => {
    if (!name) return '??';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="flex min-h-full flex-col w-full border-b border-slate-200 bg-white px-5 py-6 shadow-sm lg:w-[280px] lg:border-r lg:border-b-0 lg:px-5 lg:py-10">
          <div className="flex items-center gap-3 text-emerald-700">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-200">A</div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">AfyaCare</h1>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Clinical dashboard</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2 text-sm font-bold text-slate-600">
            <NavLink 
              to="/dashboard" 
              end
              className={({ isActive }) => `flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 transition ${isActive ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </NavLink>
            
            {user?.role === 'admin' && (
              <NavLink 
                to="/dashboard/doctors" 
                className={({ isActive }) => `flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 transition ${isActive ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <Stethoscope className="h-4 w-4" />
                Medical Staff
              </NavLink>
            )}

            <NavLink 
              to="/dashboard/settings" 
              className={({ isActive }) => `flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 transition ${isActive ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </NavLink>
          </nav>

          {/* User Profile Footer */}
          <div className="mt-auto border-t border-slate-100 pt-6">
            <div className="flex items-center gap-3 rounded-3xl bg-slate-50 p-4 border border-slate-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-md">
                {getInitials(user?.name)}
              </div>
              <div className="overflow-hidden">
                <p className="truncate text-sm font-bold text-slate-900">{user?.name || 'Medical Professional'}</p>
                <p className="truncate text-xs text-slate-500 font-medium">{user?.email}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Header & Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Header Bar */}
          <header className="flex h-20 items-center justify-between bg-white px-6 backdrop-blur-md lg:px-10 border-b border-slate-100">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Search anything..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-10 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-emerald-600">
                <Bell className="h-5 w-5" />
                <span className="absolute right-3 top-3 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
              </button>
              
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition hover:bg-red-50 hover:text-red-600 hover:border-red-100"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </header>

          {/* Dynamic Content */}
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
