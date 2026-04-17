import React, { useState } from 'react';
import { User, Mail, Lock, ChevronDown, Building2 } from 'lucide-react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'Doctor',
    hospital: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your registration logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-lg mb-6">
            <span className="text-3xl font-bold text-white">A</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join AfyaCare as a healthcare provider</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}  className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-3">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Dr. John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full  pl-12 pr-4 py-3 bg-gray-100 text-slate-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-3">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@hospital.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 text-slate-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-3">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 text-slate-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Role Dropdown */}
          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-slate-900 mb-3">
              Role
            </label>
            <div className="relative">
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition appearance-none cursor-pointer"
              >
                <option value="Doctor">Doctor</option>
                <option value="Hospital Admin">Hospital Admin</option>
                <option value="Nurse">Nurse</option>
                <option value="Lab Technician">Lab Technician</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Hospital / Clinic */}
          <div>
            <label htmlFor="hospital" className="block text-sm font-semibold text-slate-900 mb-3">
              Hospital / Clinic
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="hospital"
                name="hospital"
                placeholder="City General Hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 text-slate-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-full transition duration-200 mt-8 flex items-center justify-center gap-3 text-lg"
          >
            <User className="w-6 h-6" />
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-8 mb-8">
            Already have an account?{' '}
            <a href="/login" className="text-green-600 hover:text-green-700 font-semibold">
              Sign In
            </a>
          </p>

          {/* Back to Home Link */}
          <p className="text-center">
            <a href="/" className="text-gray-600 hover:text-gray-800 transition">
              ← Back to Home
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
