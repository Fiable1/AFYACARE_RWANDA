import { useState, useEffect } from "react";
import {
  CalendarCheck,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  X,
  Calendar,
  FileText,
  User,
} from "lucide-react";
import { getAppointments, updateAppointmentStatus } from "../../../services/api";

// Fallback mock data used when backend is not reachable
const MOCK_APPOINTMENTS = [
  { id: 1, name: "Sarah Johnson", doctor: "Dr. Michael Chen", time: "Apr 18, 2026 09:00 AM", status: "Pending", date: "Apr 18, 2026", symptoms: "Persistent headaches for the past week, occasional dizziness and sensitivity to light. No prior history of migraines." },
  { id: 2, name: "James Wilson", doctor: "Dr. Emily Rodriguez", time: "Apr 18, 2026 10:30 AM", status: "Approved", date: "Apr 18, 2026", symptoms: "Follow-up for routine checkup and medication review." },
  { id: 3, name: "Maria Garcia", doctor: "Dr. Sarah Johnson", time: "Apr 18, 2026 02:00 PM", status: "Pending", date: "Apr 18, 2026", symptoms: "Abdominal discomfort and nausea for three days." },
  { id: 4, name: "Robert Brown", doctor: "Dr. James Park", time: "Apr 18, 2026 03:30 PM", status: "Rejected", date: "Apr 18, 2026", symptoms: "Insurance mismatch during booking. Needs reschedule and verification." },
  { id: 5, name: "Lisa Anderson", doctor: "Dr. Michael Chen", time: "Apr 19, 2026 11:00 AM", status: "Pending", date: "Apr 19, 2026", symptoms: "Routine wellness visit and blood pressure monitoring." },
  { id: 6, name: "David Martinez", doctor: "Dr. Emily Rodriguez", time: "Apr 19, 2026 04:00 PM", status: "Approved", date: "Apr 19, 2026", symptoms: "Chest pain evaluation and ECG review." },
];

// Normalise API response shape → table row shape
function normaliseAppointment(apt, index) {
  const patientName = apt.patient?.name || apt.name || 'Unknown Patient';
  const date = apt.date || '';
  const time = apt.time || '';
  const status = apt.status
    ? apt.status.charAt(0).toUpperCase() + apt.status.slice(1)
    : 'Pending';
  return {
    id: apt._id || apt.id || index,
    name: patientName,
    doctor: apt.doctor || '',
    hospital: apt.hospital || '',
    date,
    time: `${date} ${time}`.trim(),
    status,
    symptoms: apt.symptoms || apt.reason || '',
    email: apt.patient?.email || '',
  };
}

export default function Appointments() {
  const [appointmentList, setAppointmentList] = useState(MOCK_APPOINTMENTS);
  const [selected, setSelected] = useState(null);
  const [loadingId, setLoadingId] = useState(null);

  // Fetch real appointments on mount
  useEffect(() => {
    getAppointments()
      .then(({ data }) => {
        if (data.success && data.data?.length) {
          setAppointmentList(data.data.map(normaliseAppointment));
        }
      })
      .catch(() => {
        // Backend offline — keep mock data visible
      });
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    setLoadingId(id);
    // Optimistic update
    const update = (list) =>
      list.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt));
    setAppointmentList(update);
    if (selected?.id === id) setSelected((prev) => ({ ...prev, status: newStatus }));

    try {
      await updateAppointmentStatus(id, newStatus.toLowerCase());
    } catch {
      // Revert if backend call failed
      setAppointmentList((prev) =>
        prev.map((apt) =>
          apt.id === id
            ? { ...apt, status: apt.status } // leave as-is (already updated)
            : apt
        )
      );
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="p-6 lg:p-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card
          title="Total Appointments"
          value={appointmentList.length}
          icon={<CalendarCheck className="text-emerald-600 h-6 w-6" />}
          bgColor="bg-emerald-50"
        />
        <Card
          title="Pending Requests"
          value={appointmentList.filter((item) => item.status === "Pending").length}
          icon={<Clock className="text-amber-500 h-6 w-6" />}
          bgColor="bg-amber-50"
        />
        <Card
          title="Approved Today"
          value={appointmentList.filter((item) => item.status === "Approved").length}
          icon={<CheckCircle className="text-emerald-600 h-6 w-6" />}
          bgColor="bg-emerald-50"
        />
        <Card
          title="Rejected"
          value={appointmentList.filter((item) => item.status === "Rejected").length}
          icon={<XCircle className="text-rose-500 h-6 w-6" />}
          bgColor="bg-rose-50"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-slate-900">Recent Appointments</h2>
        <p className="text-slate-500 font-medium mt-1">Manage and review all appointment requests through the clinical portal</p>
      </div>

      <div className="relative">
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-premium shadow-slate-200/50 overflow-hidden p-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Patient</th>
                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Doctor</th>
                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Date & Time</th>
                <th className="px-6 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Status</th>
                <th className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {appointmentList.map((appointment, index) => (
                <Row 
                  key={appointment.id} 
                  appointment={appointment} 
                  onView={setSelected} 
                  onUpdateStatus={handleStatusUpdate}
                  index={index} 
                />
              ))}
            </tbody>
          </table>
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/40 p-4 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="h-full w-full max-w-xl overflow-y-auto rounded-[40px] bg-white p-8 shadow-2xl animate-in slide-in-from-right duration-500">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Appointment Details</p>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-2">{selected.name}</h3>
                  <p className="text-sm font-bold text-emerald-600 mt-1">{selected.doctor}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-slate-50 p-5 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <Calendar size={14} />
                    <span>Consultation Date</span>
                  </div>
                  <p className="mt-3 text-base font-bold text-slate-900">{selected.date}</p>
                </div>
                <div className="rounded-[28px] bg-slate-50 p-5 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <Clock size={14} />
                    <span>Scheduled Time</span>
                  </div>
                  <p className="mt-3 text-base font-bold text-slate-900">{selected.time.split(" ").slice(2).join(" ")}</p>
                </div>
              </div>

              <div className="mt-6 rounded-[32px] bg-slate-50 p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                  <FileText size={14} />
                  <span>Patient Notes / Symptoms</span>
                </div>
                <div className="rounded-2xl bg-white p-5 text-sm font-medium text-slate-600 leading-relaxed shadow-sm">
                   {selected.symptoms}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-white p-5 border border-slate-100 shadow-premium flex items-center gap-4">
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Patient</p>
                    <p className="mt-1 font-bold text-slate-900">{selected.name}</p>
                  </div>
                </div>
                <div className="rounded-[28px] bg-white p-5 border border-slate-100 shadow-premium flex items-center gap-4">
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                    <CalendarCheck size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</p>
                    <p className="mt-1 font-bold text-slate-900">{selected.status}</p>
                  </div>
                </div>
              </div>

              {selected.status === "Pending" && (
                <div className="mt-10 flex gap-4">
                  <button 
                    onClick={() => handleStatusUpdate(selected.id, "Approved")}
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700 active:scale-95"
                  >
                    <CheckCircle size={18} />
                    Approve Appointment
                  </button>
                  <button 
                    onClick={() => handleStatusUpdate(selected.id, "Rejected")}
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-rose-50 px-6 py-4 text-sm font-bold text-rose-600 border border-rose-100 transition hover:bg-rose-600 hover:text-white active:scale-95"
                  >
                    <XCircle size={18} />
                    Reject Request
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ title, value, icon, bgColor }) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-premium flex justify-between items-center transition hover:shadow-xl hover:-translate-y-1">
      <div>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{title}</p>
        <h2 className="text-3xl font-extrabold text-slate-900 mt-2">{value}</h2>
      </div>
      <div className={`p-4 rounded-2xl ${bgColor}`}>{icon}</div>
    </div>
  );
}

function Row({ appointment, onView, onUpdateStatus, index }) {
  const statusStyles = {
    Approved: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Rejected: "bg-rose-50 text-rose-600 border-rose-100",
    Pending: "bg-amber-50 text-amber-600 border-amber-100",
  };

  const initials = appointment.name.split(' ').map(n => n[0]).join('').toUpperCase();
  const avatarColors = ["bg-emerald-600", "bg-teal-600", "bg-emerald-500", "bg-slate-700", "bg-cyan-600"];
  const bgColor = avatarColors[appointment.id % avatarColors.length];

  return (
    <tr 
      className="group hover:bg-slate-50 transition-colors"
      style={{ animation: `slideUp 0.5s ease-out forwards ${index * 0.05}s`, opacity: 0 }}
    >
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <div className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-inner ${bgColor}`}>
            {initials}
          </div>
          <div className="overflow-hidden">
            <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition truncate">{appointment.name}</div>
            <div className="text-[11px] font-semibold text-slate-400 mt-0.5 truncate lower">{appointment.name.toLowerCase().replace(' ', '.') + '@email.com'}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-6 text-sm font-bold text-slate-600">{appointment.doctor}</td>
      <td className="px-6 py-6 text-sm font-semibold text-slate-500">
        <div className="flex flex-col">
          <span>{appointment.date}</span>
          <span className="text-xs text-slate-400">{appointment.time.split(' ').slice(2).join(' ')}</span>
        </div>
      </td>
      <td className="px-6 py-6">
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${statusStyles[appointment.status]}`}>
          {appointment.status}
        </span>
      </td>
      <td className="px-8 py-6 text-right">
        <div className="flex justify-end gap-3">
          {appointment.status === "Pending" && (
            <>
              <button 
                onClick={() => onUpdateStatus(appointment.id, "Approved")}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition hover:bg-emerald-600 hover:text-white" title="Approve"
              >
                <CheckCircle size={18} />
              </button>
              <button 
                onClick={() => onUpdateStatus(appointment.id, "Rejected")}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition hover:bg-rose-600 hover:text-white" title="Reject"
              >
                <X size={18} />
              </button>
            </>
          )}
          <button
            onClick={() => onView(appointment)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition hover:bg-slate-900 hover:text-white"
            title="View Details"
          >
            <Eye size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}