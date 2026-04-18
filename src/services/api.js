import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

// Create axios instance with defaults
const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
});

// Attach JWT token from localStorage to every request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('mediassist_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ─── Auth ────────────────────────────────────────────────────────────────────

export const loginUser = (email, password) =>
  api.post('/auth/login', { email, password });

// ─── Appointments ─────────────────────────────────────────────────────────────

export const createAppointment = (data) =>
  api.post('/appointments', data);

export const getAppointments = (params = {}) =>
  api.get('/appointments', { params });

export const updateAppointmentStatus = (id, status, notes = '') =>
  api.patch(`/appointments/${id}/status`, { status, notes });

export const getAppointmentStats = () =>
  api.get('/appointments/stats/overview');

// ─── Hospitals & Doctors ─────────────────────────────────────────────────────

export const getHospitals = () =>
  api.get('/hospitals');

export const getDoctors = () =>
  api.get('/doctors');

export const getDoctorsByHospital = (hospitalName) =>
  api.get(`/doctors/hospital/${encodeURIComponent(hospitalName)}`);

export default api;
