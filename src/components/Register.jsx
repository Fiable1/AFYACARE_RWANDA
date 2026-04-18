import React, { useState } from 'react';
import { User, Mail, Lock, ChevronDown, Building2, ArrowLeft, Stethoscope, Briefcase } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../services/api';

const baseFields = [
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Dr. John Doe', icon: User },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@hospital.com', icon: Mail },
  { id: 'password', label: 'Password', type: 'password', placeholder: '••••••••', icon: Lock },
  { id: 'hospital', label: 'Hospital / Clinic', type: 'text', placeholder: 'City General Hospital', icon: Building2 },
];

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'Doctor',
    hospital: '',
    specialty: '',
    experience: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const { data } = await api.post('/auth/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role.toLowerCase().replace(' ', '_'),
        hospital: formData.hospital,
        ...(formData.role === 'Doctor' && {
          specialty: formData.specialty,
          experience: formData.experience,
        }),
      });
      if (data.success) {
        localStorage.setItem('mediassist_token', data.token);
        navigate('/login');
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to connect to server. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 flex items-center justify-center px-4 py-16 font-sans">

      {/* Decorative blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
        className="relative w-full max-w-lg"
      >
        {/* Card */}
        <div className="rounded-[40px] border border-white/70 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/60 px-10 py-12">

          {/* Logo & Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 260 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-[24px] bg-gradient-to-br from-emerald-600 to-emerald-500 shadow-xl shadow-emerald-500/30 mb-6 rotate-3"
            >
              <Stethoscope className="w-10 h-10 text-white -rotate-3" />
            </motion.div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Create Account</h1>
            <p className="text-slate-500 font-medium">Join AfyaCare as a healthcare provider</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl bg-red-50 border border-red-100 px-5 py-4 text-sm font-semibold text-red-600"
              >
                {error}
              </motion.div>
            )}

            {/* Text fields */}
            {baseFields.map(({ id, label, type, placeholder, icon: Icon }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">
                  {label}
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    value={formData[id]}
                    onChange={handleChange}
                    required
                    minLength={id === 'password' ? 6 : undefined}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pl-12 pr-5 font-medium text-slate-700 outline-none shadow-inner transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500"
                  />
                </div>
              </div>
            ))}

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">
                Role
              </label>
              <div className="relative group">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 px-5 font-medium text-slate-700 outline-none shadow-inner transition-all appearance-none cursor-pointer focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500"
                >
                  <option value="Doctor">Doctor</option>
                  <option value="Hospital Admin">Hospital Admin</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Lab Technician">Lab Technician</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Doctor-only fields: Specialty & Experience */}
            <AnimatePresence>
              {formData.role === 'Doctor' && (
                <motion.div
                  key="doctor-fields"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden space-y-5"
                >
                  {/* Specialty */}
                  <div>
                    <label htmlFor="specialty" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">
                      Specialty
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                        <Stethoscope className="w-5 h-5" />
                      </div>
                      <select
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        required={formData.role === 'Doctor'}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pl-12 pr-10 font-medium text-slate-700 outline-none shadow-inner transition-all appearance-none cursor-pointer focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500"
                      >
                        <option value="" disabled>Select specialty…</option>
                        <option>Cardiologist</option>
                        <option>Dermatologist</option>
                        <option>Pediatrician</option>
                        <option>Neurologist</option>
                        <option>Orthopedic Surgeon</option>
                        <option>Gynecologist</option>
                        <option>Ophthalmologist</option>
                        <option>Psychiatrist</option>
                        <option>Oncologist</option>
                        <option>Radiologist</option>
                        <option>Anesthesiologist</option>
                        <option>General Practitioner</option>
                        <option>Emergency Medicine</option>
                        <option>Endocrinologist</option>
                        <option>Gastroenterologist</option>
                        <option>Urologist</option>
                        <option>Pulmonologist</option>
                        <option>Rheumatologist</option>
                        <option>Nephrologist</option>
                        <option>Infectious Disease</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label htmlFor="experience" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 ml-1">
                      Years of Experience
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pl-12 pr-10 font-medium text-slate-700 outline-none shadow-inner transition-all appearance-none cursor-pointer focus:bg-white focus:ring-4 focus:ring-emerald-500/15 focus:border-emerald-500"
                      >
                        <option value="" disabled>Select experience…</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                        <option value="6–8 years">6–8 years</option>
                        <option value="9–12 years">9–12 years</option>
                        <option value="13–20 years">13–20 years</option>
                        <option value="20+ years">20+ years</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:from-emerald-700 hover:to-emerald-600 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-base"
              >
                <User className="w-5 h-5" />
                {isLoading ? 'Creating Account…' : 'Create Account'}
              </button>
            </div>

            {/* Footer links */}
            <div className="pt-2 text-center space-y-3">
              <p className="text-sm font-medium text-slate-500">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-emerald-600 hover:underline">
                  Sign In
                </Link>
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>

          </form>
        </div>

        {/* Bottom badge */}
        <p className="text-center text-xs font-semibold text-slate-400 mt-6 tracking-wide uppercase">
          AfyaCare Rwanda · Secure Registration
        </p>
      </motion.div>
    </div>
  );
}

export default Register;
