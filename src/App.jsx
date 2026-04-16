import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import WhyChooseSection from './sections/WhyChooseSection';
import CtaSection from './sections/CtaSection';
import PageBackground from './components/PageBackground';
import SideChatBoard from './SideChatBoard';

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900 overflow-x-hidden">
      {/* Dynamic Animated Background */}
      <PageBackground />
      
      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative">
        <HeroSection />
        
        <div className="space-y-32 pb-32">
          <FeaturesSection />
          <WhyChooseSection />
          <CtaSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-brand-100 bg-white/50 py-12 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">A</div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">AfyaCare</span>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} AfyaCare Rwanda. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition">Terms</a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition">Privacy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Support Widget */}
      <SideChatBoard />
    </div>
  );
}

export default App;
