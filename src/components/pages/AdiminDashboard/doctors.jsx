import React from 'react';
import { Plus, Stethoscope, Mail, Phone, Pencil, Trash2 } from 'lucide-react';

const Doctors = () => {
  // Data exactly as shown in the provided screenshot
  const doctorsData = [
    { id: 1, name: "Dr. Sarah Johnson", email: "sarah.j@hospital.com", phone: "(555) 123-4567", specialty: "Cardiologist", experience: "15 years", patients: "234", status: "Active", color: "bg-green-600" },
    { id: 2, name: "Dr. Michael Chen", email: "michael.c@hospital.com", phone: "(555) 234-5678", specialty: "Neurologist", experience: "12 years", patients: "198", status: "Active", color: "bg-green-500" },
    { id: 3, name: "Dr. Emily Rodriguez", email: "emily.r@hospital.com", phone: "(555) 345-6789", specialty: "Pediatrician", experience: "10 years", patients: "312", status: "Active", color: "bg-green-500" },
    { id: 4, name: "Dr. James Park", email: "james.p@hospital.com", phone: "(555) 456-7890", specialty: "Orthopedic Surgeon", experience: "18 years", patients: "156", status: "On Leave", color: "bg-green-700" },
    { id: 5, name: "Dr. Lisa Anderson", email: "lisa.a@hospital.com", phone: "(555) 567-8901", specialty: "Dermatologist", experience: "14 years", patients: "289", status: "Active", color: "bg-green-600" },
  ];

  

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medical Staff</h1>
          <p className="text-gray-500 text-sm mt-1">Manage doctors and medical professionals</p>
        </div>
        <button className="flex items-center gap-2 bg-[#2D7A43] hover:bg-[#235d33] text-white px-4 py-2.5 rounded-lg font-semibold transition-colors">
          <Plus size={18} />
          Add Doctor
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Doctors" value="5" icon={<Stethoscope size={24} />} iconColor="text-green-600" bgColor="bg-green-50" />
        <StatCard title="Active" value="4" icon={<Stethoscope size={24} />} iconColor="text-green-600" bgColor="bg-green-50" />
        <StatCard title="Total Patients" value="1189" icon={<Stethoscope size={24} />} iconColor="text-blue-600" bgColor="bg-blue-50" />
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Specialty</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Experience</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Patients</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {doctorsData.map((doctor) => (
              <tr key={doctor.id} className="hover:bg-gray-50/50 transition-colors">
                {/* Doctor Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs ${doctor.color}`}>
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{doctor.name}</div>
                      <div className="flex flex-col text-xs text-gray-400 mt-0.5">
                        <span className="flex items-center gap-1"><Mail size={12} /> {doctor.email}</span>
                        <span className="flex items-center gap-1 mt-1"><Phone size={12} /> {doctor.phone}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 font-medium">{doctor.specialty}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{doctor.experience}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{doctor.patients}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-md text-xs font-bold ${
                    doctor.status === 'Active' 
                    ? 'bg-green-50 text-green-600' 
                    : 'bg-orange-50 text-orange-600'
                  }`}>
                    {doctor.status}
                  </span>
                </td>
                {/* Actions */}
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 text-gray-400">
                    <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
                      <Pencil size={18} />
                    </button>
                    <button className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-md transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Internal Sub-component for Stats Cards
const StatCard = ({ title, value, icon, iconColor, bgColor }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
    </div>
    <div className={`p-3 rounded-xl ${bgColor} ${iconColor}`}>
      {icon}
    </div>
  </div>
);

export default Doctors;