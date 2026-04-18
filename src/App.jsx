import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import WhyChooseSection from './sections/WhyChooseSection';
import CtaSection from './sections/CtaSection';
import PageBackground from './components/PageBackground';
import SideChatBoard from './SideChatBoard';
import FindCare from './components/FindCare';
import Login from './components/Login';
import DashboardLayout from './dashboard/DashboardLayout';
import Appointments from './components/pages/AdminDashboard/Appointmments';
import Doctors from './components/pages/AdiminDashboard/doctors';
import Settings from './dashboard/doctordashboard/settings';
import Team from './components/team';
import BookingPage from './components/BookingPage';
import About from './components/About';
import Register from './components/Register';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 40, scale: 0.98 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -40, scale: 0.98 }}
    transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
  >
    {children}
  </motion.div>
);

const Home = () => (
  <main className="relative">
    <HeroSection />
    <div className="space-y-32 pb-32">
      <FeaturesSection />
      <WhyChooseSection />
      <CtaSection />
    </div>
  </main>
);

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900 overflow-x-hidden">
      {/* Dynamic Animated Background */}
      <PageBackground />
      
      {/* Persistent Navigation (Hidden in Dashboard) */}
      {!isDashboard && <Navbar />}

      {/* Route switcher */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/find-care" element={<PageTransition><FindCare /></PageTransition>} />
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
          <Route path="/signup" element={<PageTransition><Register /></PageTransition>} />
          <Route path="/booking" element={<PageTransition><BookingPage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          
          {/* Unified Clinical Dashboard */}
          <Route path="/dashboard" element={<PageTransition><DashboardLayout /></PageTransition>}>
            <Route index element={<Appointments />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/team" element={<PageTransition><Team /></PageTransition>} />

          {/* Support legacy paths for backward compatibility */}
          <Route path="/admin/dashboard" element={<PageTransition><DashboardLayout children={<Appointments />} /></PageTransition>} />
          <Route path="/doctor/dashboard" element={<PageTransition><DashboardLayout children={<Appointments />} /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      {/* Footer (Hidden in Dashboard) */}
      {!isDashboard && (
        <footer className="relative border-t border-slate-100 bg-white py-12 backdrop-blur-md mt-auto">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">A</div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">AfyaCare</span>
              </div>
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} AfyaCare Rwanda. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition">Terms</a>
                <a href="#" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition">Privacy</a>
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* Support Widget (Hidden in Dashboard) */}
      {!isDashboard && <SideChatBoard />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
