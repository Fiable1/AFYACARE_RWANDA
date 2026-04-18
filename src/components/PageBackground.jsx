import React from 'react'
import { useLocation } from 'react-router-dom'

const PageBackground = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const markers = [
    { left: '10%', top: '14%', size: 'small', delay: '0s' },
    { left: '22%', top: '56%', size: 'small', delay: '-4s' },
    { left: '78%', top: '18%', size: 'large', delay: '-7s' },
    { left: '84%', top: '62%', size: 'small', delay: '-2s' },
    { left: '58%', top: '80%', size: 'large', delay: '-5s' },
  ]

  // Shared elements for Home (Scattered) or Sub-pages (Centered)
  const Heartbeat = ({ className }) => (
    <div className={`ambient-ecg absolute h-40 w-full opacity-100 ${className}`}>
      <svg className="h-full w-full" viewBox="0 0 1600 160" preserveAspectRatio="none">
        <path
          className="ambient-ecg-line"
          d="M0 96 L150 96 L210 96 L250 58 L290 128 L340 34 L395 96 L560 96 L620 96 L670 70 L720 112 L770 54 L820 96 L1010 96 L1070 96 L1110 68 L1160 118 L1210 40 L1260 96 L1600 96"
        />
      </svg>
    </div>
  )

  const ServicePanel = ({ className }) => (
    <div className={`ambient-panel h-64 w-[min(90vw,36rem)] rounded-[40px] ${className}`} />
  )

  const PulseDot = ({ className }) => (
    <div className={`ambient-pulse-dot h-5 w-5 rounded-full ${className}`} />
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base Subtle Grids (Always available) */}
      <div className="ambient-grid absolute inset-0 opacity-80" />
      <div className="ambient-wash absolute inset-0" />
      
      {isHomePage ? (
        /* --- HOME PAGE: SCATTERED LAYOUT --- */
        <div className="animate-in fade-in duration-1000">
          <ServicePanel className="absolute left-[2%] top-[86px]" />
          <ServicePanel className="ambient-panel-secondary absolute right-[1%] top-[680px]" />
          
          <div className="ambient-orb ambient-orb-one absolute -left-28 top-12 h-80 w-80 rounded-full" />
          <div className="ambient-orb ambient-orb-two absolute right-[-120px] top-[360px] h-96 w-96 rounded-full" />
          <div className="ambient-orb ambient-orb-three absolute left-[28%] top-[930px] h-72 w-72 rounded-full" />
          
          <div className="ambient-ring absolute left-[6%] top-[120px] h-52 w-52 rounded-full" />
          <div className="ambient-ring absolute right-[10%] top-[830px] h-64 w-64 rounded-full" />
          
          <PulseDot className="absolute left-[18%] top-[220px]" />
          <PulseDot className="ambient-pulse-dot-alt absolute right-[18%] top-[920px]" />
          
          <Heartbeat className="left-0 top-[168px]" />

          {markers.map((marker, index) => (
            <span
              key={`home-marker-${index}`}
              className={`ambient-marker ambient-marker-${marker.size} absolute`}
              style={{ left: marker.left, top: marker.top, animationDelay: marker.delay }}
            >
              <span className="ambient-marker-x" />
            </span>
          ))}
        </div>
      ) : (
        /* --- SUB-PAGES: CENTERED PREMIUM WATERMARK --- */
        <div className="fixed inset-0 flex items-center justify-center opacity-30 animate-in zoom-in-75 fade-in duration-1000">
          {/* Centralized Group */}
          <div className="relative flex h-[300px] w-full items-center justify-center">
             {/* Center Heartbeat */}
             <Heartbeat className="scale-x-33 opacity-20" />
             
             {/* Centered Panel as Watermark */}
             <ServicePanel className="absolute scale-50 opacity-15 blur-[4px]" />
             
             {/* Pulsing focal point */}
             <div className="relative">
               <PulseDot className="scale-75 opacity-60" />
               <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-40" />
             </div>

             {/* Discrete floating rings */}
             <div className="ambient-ring absolute h-56 w-56 rounded-full opacity-20" />
             <div className="ambient-ring absolute h-[320px] w-[320px] rounded-full opacity-10 scale-100" />
          </div>
        </div>
      )}
    </div>
  )
}

export default PageBackground