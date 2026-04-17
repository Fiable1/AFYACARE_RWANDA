import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Bell,
  CalendarDays,
  Check,
  Clock,
  Eye,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  User,
  X,
} from 'lucide-react';

const appointments = [
  {
    id: 1,
    patient: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    doctor: 'Dr. Michael Chen',
    date: 'Apr 18, 2026',
    time: '09:00 AM',
    status: 'pending',
    initials: 'SJ',
    avatarBg: 'bg-emerald-600',
    notes: 'Persistent headaches for the past week, occasional dizziness and sensitivity to light.',
  },
  {
    id: 2,
    patient: 'Maria Garcia',
    email: 'maria.g@email.com',
    doctor: 'Dr. Michael Chen',
    date: 'Apr 18, 2026',
    time: '02:00 PM',
    status: 'pending',
    initials: 'MG',
    avatarBg: 'bg-slate-700',
    notes: 'Follow-up exam for recurring allergies and asthma breathing issues.',
  },
  {
    id: 3,
    patient: 'James Wilson',
    email: 'james.w@email.com',
    doctor: 'Dr. Michael Chen',
    date: 'Apr 18, 2026',
    time: '10:30 AM',
    status: 'approved',
    initials: 'JW',
    avatarBg: 'bg-emerald-600',
    notes: 'Regular checkup for diabetes management and medication review.',
  },
  {
    id: 4,
    patient: 'David Reed',
    email: 'david.r@email.com',
    doctor: 'Dr. Michael Chen',
    date: 'Apr 19, 2026',
    time: '11:30 AM',
    status: 'approved',
    initials: 'DR',
    avatarBg: 'bg-brand-600',
    notes: 'Annual checkup and medication review after recent blood test results.',
  },
  {
    id: 5,
    patient: 'Lina Patel',
    email: 'lina.p@email.com',
    doctor: 'Dr. Michael Chen',
    date: 'Apr 20, 2026',
    time: '01:15 PM',
    status: 'approved',
    initials: 'LP',
    avatarBg: 'bg-cyan-600',
    notes: 'Consultation for chronic back pain, posture correction, and physical therapy planning.',
  },
  {
    id: 6,
    patient: 'Alex Turner',
    email: 'alex.t@email.com',
    doctor: 'Dr. Michael Chen',
    date: 'Apr 16, 2026',
    time: '10:00 AM',
    status: 'completed',
    initials: 'AT',
    avatarBg: 'bg-slate-500',
    notes: 'Completed recovery visit after surgery, review healing progress.',
  },
  {
    id: 7,
    patient: 'Lisa Anderson',
    email: 'lisa.a@email.com',
    doctor: 'Dr. Michael Chen',
    date: 'Apr 19, 2026',
    time: '11:00 AM',
    status: 'completed',
    initials: 'LA',
    avatarBg: 'bg-emerald-600',
    notes: 'Follow-up for previous consultation on respiratory issues.',
  },
];

const tabData = [
  { key: 'pending', label: 'Pending' },
  { key: 'approved', label: 'Approved' },
  { key: 'completed', label: 'Completed' },
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState('pending');
  const [appointmentsList, setAppointmentsList] = useState(appointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const navigate = useNavigate();

  const handleApprove = (id) => {
    setAppointmentsList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'approved' } : item))
    );
    setActiveTab('approved');

    setSelectedAppointment((prev) =>
      prev && prev.id === id ? { ...prev, status: 'approved' } : prev
    );
  };

  const handleReject = (id) => {
    setAppointmentsList((prev) => prev.filter((item) => item.id !== id));
    setSelectedAppointment((prev) => (prev && prev.id === id ? null : prev));
  };

  const visibleAppointments = appointmentsList.filter((appointment) => appointment.status === activeTab);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <aside className="flex min-h-full flex-col w-full border-b border-slate-200 bg-white/95 px-5 py-6 shadow-sm lg:w-[280px] lg:border-r lg:border-b-0 lg:px-5 lg:py-10">
          <div className="flex items-center gap-3 text-brand-700">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white">M</div>
            <div>
              <h1 className="text-lg font-semibold">AfyaCare</h1>
              <p className="text-sm text-slate-500">Clinical dashboard</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2 text-sm font-medium text-slate-600">
            <Link to="/dashboard" className="flex w-full items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 text-brand-700 shadow-sm transition hover:bg-brand-100">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link to="/appointments" className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-slate-100">
              <CalendarDays className="h-4 w-4" />
              Appointments
            </Link>
            <Link to="/settings" className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-slate-100">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>

          <div className="mt-auto border-t border-slate-200 pt-6">
            <div className="flex items-center gap-3 rounded-3xl bg-slate-50 px-4 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold uppercase text-white">DC</div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Dr. Michael Chen</p>
                <p className="text-xs text-slate-500">doctor@hospital.com</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="relative flex-1 bg-slate-100 px-5 py-6 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">My Appointments</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Dr. Michael Chen</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Manage your appointments and patient consultations in one central place.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search appointments, doctors..."
                  className="w-full rounded-3xl border border-slate-200 bg-white px-12 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div className="flex items-center gap-3">
                <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-full bg-brand-600 text-sm font-semibold uppercase text-white shadow-sm">
                  DMC
                </button>
                <button type="button" onClick={() => { localStorage.clear(); navigate('/home'); }} className="inline-flex h-12 items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100">
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          <section className="mt-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                {tabData.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeTab === tab.key
                        ? 'border border-brand-600 bg-brand-600 text-white shadow-sm'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {tab.label}
                    <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-slate-100 px-2 text-xs font-semibold text-slate-700 shadow-sm">
                      {appointmentsList.filter((item) => item.status === tab.key).length}
                    </span>
                  </button>
                ))}
              </div>
              <div className="text-sm text-slate-500">Showing {visibleAppointments.length} appointment{visibleAppointments.length === 1 ? '' : 's'}.</div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <div className="hidden grid-cols-[240px_220px_220px_160px_160px] gap-4 border-b border-slate-200 px-6 py-4 text-xs uppercase tracking-[0.24em] text-slate-500 sm:grid">
                <div>Patient</div>
                <div>Doctor</div>
                <div>Date & Time</div>
                <div>Status</div>
                <div>Actions</div>
              </div>

              <div className="divide-y divide-slate-200">
                {visibleAppointments.map((appointment, index) => (
                  <div
                    key={appointment.id}
                    className="flex flex-col gap-4 bg-white px-5 py-6 transition-all duration-500 hover:bg-gradient-to-r hover:from-slate-50 hover:to-brand-50 hover:scale-105 hover:shadow-md sm:grid sm:grid-cols-[240px_220px_220px_160px_160px] sm:items-center sm:gap-0 sm:px-8 sm:py-7 cursor-pointer opacity-0 animate-slideIn"
                    style={{
                      animationDelay: `${index * 80}ms`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-semibold text-white ${appointment.avatarBg}`}>
                        {appointment.initials}
                      </div>
                      <div>
                        <p
                          className="cursor-pointer font-semibold text-slate-900 hover:text-brand-600"
                          onClick={() => setSelectedAppointment(appointment)}
                        >
                          {appointment.patient}
                        </p>
                        <p className="text-sm text-slate-500">{appointment.email}</p>
                      </div>
                    </div>

                    <div className="text-sm text-slate-600 transition-all duration-300 hover:translate-x-1">{appointment.doctor}</div>

                    <div className="text-sm text-slate-600">
                      <p>{appointment.date}</p>
                      <p className="mt-1 text-slate-500">{appointment.time}</p>
                    </div>

                    <div className="transition-all duration-300 hover:scale-110 hover:rotate-2">
                      <span
                        className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-all duration-300 ${
                          appointment.status === 'pending'
                            ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                            : appointment.status === 'approved'
                            ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 sm:justify-end">
                      {appointment.status === 'pending' && (
                        <>
                          <button
                            type="button"
                            onClick={() => handleApprove(appointment.id)}
                            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm transition-all duration-300 hover:bg-brand-50 hover:scale-125 hover:-rotate-6"
                            aria-label="Approve"
                          >
                            <Check className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleReject(appointment.id)}
                            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-600 shadow-sm transition-all duration-300 hover:bg-rose-50 hover:scale-125 hover:rotate-6"
                            aria-label="Reject"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </>
                      )}
                      <button
                        type="button"
                        onClick={() => setSelectedAppointment(appointment)}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-600 shadow-sm transition-all duration-300 hover:bg-slate-100 hover:scale-125"
                        aria-label="View"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}

                {visibleAppointments.length === 0 && (
                  <div className="px-6 py-16 text-center text-slate-500">
                    No appointments found for this section.
                  </div>
                )}
              </div>
            </div>
          </section>

          {selectedAppointment && (
            <aside className="pointer-events-auto absolute right-0 top-0 z-20 h-full w-full max-w-[450px] overflow-y-auto border-l border-slate-200 bg-white px-6 py-8 shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Appointment Details</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">{selectedAppointment.patient}</h3>
                </div>
                <button type="button" onClick={() => setSelectedAppointment(null)} className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 space-y-6">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Patient Information</p>
                  <div className="mt-4 flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-lg font-semibold text-white">{selectedAppointment.initials}</div>
                    <div>
                      <p className="font-semibold text-slate-900">{selectedAppointment.patient}</p>
                      <p className="text-sm text-slate-500">{selectedAppointment.email}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Appointment Details</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3 rounded-3xl bg-white p-4 shadow-sm">
                      <User className="h-5 w-5 text-brand-600" />
                      <div>
                        <p className="text-sm text-slate-500">Doctor</p>
                        <p className="font-semibold text-slate-900">{selectedAppointment.doctor}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-3xl bg-white p-4 shadow-sm">
                      <CalendarDays className="h-5 w-5 text-brand-600" />
                      <div>
                        <p className="text-sm text-slate-500">Date</p>
                        <p className="font-semibold text-slate-900">{selectedAppointment.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-3xl bg-white p-4 shadow-sm">
                      <Clock className="h-5 w-5 text-brand-600" />
                      <div>
                        <p className="text-sm text-slate-500">Time</p>
                        <p className="font-semibold text-slate-900">{selectedAppointment.time}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Status</p>
                  <div className="mt-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                    {selectedAppointment.status.charAt(0).toUpperCase() + selectedAppointment.status.slice(1)}
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Symptoms / Reason for Visit</p>
                  <div className="mt-3 rounded-3xl bg-white p-5 text-sm leading-6 text-slate-700 shadow-sm">
                    {selectedAppointment.notes}
                  </div>
                </div>

                {selectedAppointment.status === 'pending' && (
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => handleApprove(selectedAppointment.id)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-3xl bg-emerald-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                      <Check className="h-4 w-4" />
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => handleReject(selectedAppointment.id)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-3xl border border-rose-600 bg-white px-6 py-4 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
                    >
                      <X className="h-4 w-4" />
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </aside>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
