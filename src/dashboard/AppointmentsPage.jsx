import React, { useState } from 'react';
import {
  CalendarDays,
  Check,
  Clock,
  Eye,
  User,
  X,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const initialAppointments = [
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
    avatarBg: 'bg-emerald-400',
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

const AppointmentsPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('pending');
  const [appointmentsList, setAppointmentsList] = useState(initialAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

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
    <div className="p-6 lg:p-10 animate-in fade-in duration-500">
      <header className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">My Appointments</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">{user?.name || 'Medical Portal'}</h2>
        <p className="mt-3 max-w-2xl text-base font-medium text-slate-500 leading-relaxed">
          Manage your patient consultations and daily schedule through our centralized clinical platform.
        </p>
      </header>

      <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-premium shadow-slate-200/50">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            {tabData.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-3 rounded-2xl px-6 py-3 text-sm font-bold transition ${
                  activeTab === tab.key
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
                <span className={`inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-2 text-xs font-bold ${activeTab === tab.key ? 'bg-white text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {appointmentsList.filter((item) => item.status === tab.key).length}
                </span>
              </button>
            ))}
          </div>
          <div className="text-sm font-bold text-slate-400">Showing {visibleAppointments.length} medical records</div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-100 bg-slate-50 p-2">
          <div className="hidden grid-cols-[260px_220px_200px_160px_1fr] gap-4 px-8 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:grid">
            <div>Patient Name</div>
            <div>Attending Doctor</div>
            <div>Date & Time</div>
            <div>Current Status</div>
            <div className="text-right">Actions</div>
          </div>

          <div className="space-y-2">
            {visibleAppointments.map((appointment, index) => (
              <div
                key={appointment.id}
                className="group flex flex-col gap-4 rounded-3xl bg-white px-6 py-5 transition-all hover:shadow-xl hover:shadow-slate-100 sm:grid sm:grid-cols-[260px_220px_200px_160px_1fr] sm:items-center sm:gap-4 sm:px-8 sm:py-6"
                style={{ animation: `slideUp 0.5s ease-out forwards ${index * 0.1}s`, opacity: 0 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-inner ${appointment.avatarBg}`}>
                    {appointment.initials}
                  </div>
                  <div className="overflow-hidden">
                    <p className="truncate font-bold text-slate-900 group-hover:text-emerald-600 transition">{appointment.patient}</p>
                    <p className="truncate text-xs font-semibold text-slate-400">{appointment.email}</p>
                  </div>
                </div>

                <div className="text-sm font-bold text-slate-600">{appointment.doctor}</div>

                <div className="text-sm font-semibold text-slate-500">
                  <p>{appointment.date}</p>
                  <p className="text-xs text-slate-400">{appointment.time}</p>
                </div>

                <div>
                  <span className={`inline-flex rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase ${
                    appointment.status === 'pending'
                      ? 'bg-amber-50 text-amber-600 border border-amber-100'
                      : appointment.status === 'approved'
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {appointment.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:justify-end">
                  {appointment.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(appointment.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
                        title="Approve Appointment"
                      >
                        <Check className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleReject(appointment.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                        title="Reject Appointment"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setSelectedAppointment(appointment)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-slate-900 hover:text-white"
                    title="View Details"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}

            {visibleAppointments.length === 0 && (
              <div className="py-20 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-300">
                   <CalendarDays className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-bold text-slate-400 tracking-tight">No {activeTab} appointments found.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detail Overlay */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/40 p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="h-full w-full max-w-lg overflow-y-auto rounded-[40px] bg-white p-8 shadow-2xl animate-in slide-in-from-right duration-500">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Medical Record</p>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">{selectedAppointment.patient}</h3>
              </div>
              <button onClick={() => setSelectedAppointment(null)} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-8">
              <div className="rounded-[32px] bg-slate-50 p-6 border border-slate-100">
                 <div className="flex items-center gap-5">
                    <div className={`h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg ${selectedAppointment.avatarBg}`}>
                       {selectedAppointment.initials}
                    </div>
                    <div>
                       <p className="font-bold text-slate-900 text-lg leading-tight">{selectedAppointment.patient}</p>
                       <p className="text-sm font-medium text-slate-500 mt-1">{selectedAppointment.email}</p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                 <DetailCard icon={<User className="h-5 w-5" />} label="Attending Doctor" value={selectedAppointment.doctor} color="emerald" />
                 <DetailCard icon={<CalendarDays className="h-5 w-5" />} label="Consultation Date" value={selectedAppointment.date} color="emerald" />
                 <DetailCard icon={<Clock className="h-5 w-5" />} label="Scheduled Time" value={selectedAppointment.time} color="emerald" />
              </div>

              <div className="rounded-[32px] bg-slate-50 p-8 border border-slate-100">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Patient Notes / Symptoms</h4>
                 <div className="rounded-2xl bg-white p-6 text-sm font-medium text-slate-600 leading-relaxed shadow-sm">
                    {selectedAppointment.notes}
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailCard = ({ icon, label, value, color }) => (
  <div className="flex items-center gap-5 rounded-[28px] bg-white p-5 border border-slate-100 shadow-sm transition hover:shadow-md">
    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-${color}-50 text-${color}-600`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
      <p className="font-bold text-slate-900">{value}</p>
    </div>
  </div>
);

export default AppointmentsPage;
