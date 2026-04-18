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
  return (
    <div className="p-6 lg:p-10 animate-in fade-in duration-500">
      <header className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Settings</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Account Settings</h2>
        <p className="mt-3 max-w-2xl text-base font-medium text-slate-500 leading-relaxed">
          Manage your profile, security preferences, and notification settings.
        </p>
      </header>

      <div className="space-y-8">
        {/* Profile Settings */}
        <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-premium shadow-slate-200/50 transition-all hover:shadow-xl">
          <div className="flex items-center gap-5 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <User className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Profile Settings</h3>
              <p className="text-sm font-medium text-slate-400">Update your personal information</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-bold text-slate-700">
              First Name
              <input className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" defaultValue="John" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-bold text-slate-700">
              Last Name
              <input className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" defaultValue="Doe" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-bold text-slate-700 md:col-span-2">
              Email Address
              <input className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" defaultValue="john@afyacare.rw" />
            </label>
          </div>
          <button className="mt-8 rounded-2xl bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 active:scale-95">
            Save Profile Changes
          </button>
        </div>

        {/* Notifications */}
        <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-premium shadow-slate-200/50 transition-all hover:shadow-xl">
          <div className="flex items-center gap-5 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Mail className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Notifications</h3>
              <p className="text-sm font-medium text-slate-400">Manage your communication preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Email Notifications', description: 'Receive email updates for new appointments', checked: true },
              { label: 'SMS Notifications', description: 'Get text message reminders before visits', checked: false },
              { label: 'System Alerts', description: 'Browser notifications for urgent platform updates', checked: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-3xl border border-slate-50 bg-slate-50/30 px-6 py-5 transition hover:bg-white hover:border-slate-100">
                <div>
                  <p className="font-bold text-slate-900">{item.label}</p>
                  <p className="text-xs font-semibold text-slate-400">{item.description}</p>
                </div>
                <input type="checkbox" defaultChecked={item.checked} className="h-5 w-5 rounded-lg border-slate-300 text-emerald-600 focus:ring-emerald-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-premium shadow-slate-200/50 transition-all hover:shadow-xl">
          <div className="flex items-center gap-5 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Security & Privacy</h3>
              <p className="text-sm font-medium text-slate-400">Update password and secure your account</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            <label className="flex flex-col gap-2 text-sm font-bold text-slate-700">
              Current Password
              <input type="password" placeholder="••••••••" className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" />
            </label>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-bold text-slate-700">
                New Password
                <input type="password" placeholder="••••••••" className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" />
              </label>
              <label className="flex flex-col gap-2 text-sm font-bold text-slate-700">
                Confirm New Password
                <input type="password" placeholder="••••••••" className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" />
              </label>
            </div>
          </div>
          <button className="mt-8 rounded-2xl bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800 active:scale-95">
            Update Security Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
