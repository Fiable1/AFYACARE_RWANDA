import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../components/icons'
import HeroVisual from '../components/HeroVisual'
import { links } from '../data/links'

const HeroSection = () => {
  return (
    <section className="relative px-6 pt-24 lg:px-8 lg:pt-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-in fade-in slide-in-from-left-8 duration-700 pl-4 lg:pl-10">
          <div className="mb-8 flex">
            <div className="relative rounded-full px-4 py-1.5 text-sm font-bold leading-6 text-[#35aa56] ring-1 ring-[#35aa56]/20 bg-[#e9f7ee]/50 backdrop-blur-sm">
              New: AI-Powered Healthcare Assistant.
            </div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
            MediAssist
          </h1>
          <h2 className="mt-2 text-3xl font-bold text-[#35aa56] sm:text-4xl">
            Your AI Health Assistant
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-600 max-w-xl">
            Empowering Rwandans with instant medical guidance, seamless facility search, 
            and effortless appointment booking. Available 24/7, right when you need it.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              className="flex items-center gap-2 rounded-2xl bg-[#35aa56] px-10 py-4 text-base font-bold text-white shadow-premium transition hover:bg-[#2d8f48] hover:shadow-[#35aa56]/30 active:scale-95"
              to="/booking"
            >
              Get Started
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              className="group flex items-center gap-2 rounded-2xl border-2 border-[#35aa56] px-8 py-4 text-base font-bold text-[#35aa56] transition hover:bg-[#e9f7ee] active:scale-95"
              to="/login"
            >
              Provider Login
            </Link>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-[#35aa56]/10 blur-3xl opacity-60" />
          <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-sky-100 blur-3xl opacity-60" />
          <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white p-4 shadow-float backdrop-blur-sm">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
