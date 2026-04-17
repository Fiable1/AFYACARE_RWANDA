import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Bell,
  CalendarDays,
  LayoutDashboard,
  LogOut,
  Search,
  Settings as SettingsIcon,
  User,
  ShieldCheck,
  Mail,
  Smartphone,
} from 'lucide-react';

function Settings() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <aside className="flex min-h-full flex-col w-full border-b border-slate-200 bg-white/95 px-5 py-6 shadow-sm lg:w-[280px] lg:border-r lg:border-b-0 lg:px-5 lg:py-10">
          <div className="flex items-center gap-3 text-brand-700">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white">M</div>
            <div>
              <h1 className="text-lg font-semibold">MediAssist</h1>
              <p className="text-sm text-slate-500">Clinical dashboard</p>
            </div>
          </div>

          <nav className="mt-10 space-y-3 text-base font-semibold text-slate-600">
            <Link to="/dashboard" className="flex w-full items-center gap-4 rounded-[28px] px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100">
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link to="/appointments" className="flex w-full items-center gap-4 rounded-[28px] px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100">
              <CalendarDays className="h-5 w-5" />
              Appointments
            </Link>
            <Link to="/settings" className="flex w-full items-center gap-4 rounded-[28px] bg-brand-50 px-5 py-4 text-brand-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-brand-100">
              <SettingsIcon className="h-5 w-5" />
              Settings
            </Link>
          </nav>

          <div className="mt-auto border-t border-slate-200 pt-6">
            <div className="flex items-center gap-4 rounded-3xl bg-slate-50 px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-base font-semibold uppercase text-white">DC</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Dr. Michael Chen</p>
                <p className="text-xs text-slate-500">doctor@hospital.com</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-slate-100 px-5 py-6 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Settings</p>
              <h2 className="mt-3 text-4xl font-semibold text-slate-900">Settings</h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative w-full max-w-lg">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search appointments, doctors..."
                  className="w-full rounded-[28px] border border-slate-200 bg-white px-14 py-4 text-base text-slate-700 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div className="flex items-center gap-3">
                <button className="relative inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:bg-slate-100">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-1 right-1 h-3 w-3 rounded-full bg-rose-600"></span>
                </button>
                <button className="inline-flex h-14 min-w-[3.5rem] items-center justify-center rounded-full bg-brand-600 px-5 text-base font-semibold uppercase text-white shadow-sm transition hover:shadow-lg">
                  DMC
                </button>
                <button type="button" onClick={() => { localStorage.clear(); navigate('/home'); }} className="inline-flex h-14 items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100">
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600">
                  <User className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">Profile Settings</h3>
                  <p className="mt-1 text-sm text-slate-500">Update your personal information</p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-700">
                    First Name
                    <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" defaultValue="John" />
                  </label>
                  <label className="space-y-2 text-sm text-slate-700">
                    Last Name
                    <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" defaultValue="Doe" />
                  </label>
                </div>

                <label className="space-y-2 text-sm text-slate-700">
                  Email Address
                  <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" defaultValue="john@example.com" />
                </label>

                <label className="space-y-2 text-sm text-slate-700">
                  Phone Number
                  <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" defaultValue="(555) 123-4567" />
                </label>

                <button className="inline-flex items-center justify-center rounded-3xl bg-brand-600 px-8 py-4 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg">
                  Save Changes
                </button>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-50 text-sky-600">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">Notifications</h3>
                  <p className="mt-1 text-sm text-slate-500">Manage your notification preferences</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { label: 'Email Notifications', description: 'Receive email updates for appointments', checked: true },
                  { label: 'SMS Notifications', description: 'Get text message reminders', checked: false },
                  { label: 'Push Notifications', description: 'Browser notifications for urgent updates', checked: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-sm">
                    <div>
                      <p className="font-semibold text-slate-900">{item.label}</p>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                    <input type="checkbox" defaultChecked={item.checked} className="h-5 w-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-50 text-amber-600">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">Security</h3>
                  <p className="mt-1 text-sm text-slate-500">Update your password and security settings</p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <label className="space-y-2 text-sm text-slate-700">
                  Current Password
                  <input type="password" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" defaultValue="********" />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  New Password
                  <input type="password" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" defaultValue="********" />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  Confirm Password
                  <input type="password" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" defaultValue="********" />
                </label>
                <button className="inline-flex items-center justify-center rounded-3xl bg-brand-600 px-8 py-4 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings;
