function PageBackground() {
  const markers = [
    { left: '10%', top: '14%', size: 'small', delay: '0s' },
    { left: '22%', top: '56%', size: 'small', delay: '-4s' },
    { left: '78%', top: '18%', size: 'large', delay: '-7s' },
    { left: '84%', top: '62%', size: 'small', delay: '-2s' },
    { left: '58%', top: '80%', size: 'large', delay: '-5s' },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-grid absolute inset-0 opacity-90" />
      <div className="ambient-wash absolute inset-0" />
      <div className="ambient-panel absolute left-[2%] top-[86px] h-56 w-[min(48vw,34rem)] rounded-[32px]" />
      <div className="ambient-panel ambient-panel-secondary absolute right-[1%] top-[680px] h-56 w-[min(46vw,31rem)] rounded-[32px]" />
      <div className="ambient-orb ambient-orb-one absolute -left-28 top-12 h-80 w-80 rounded-full" />
      <div className="ambient-orb ambient-orb-two absolute right-[-120px] top-[360px] h-96 w-96 rounded-full" />
      <div className="ambient-orb ambient-orb-three absolute left-[28%] top-[930px] h-72 w-72 rounded-full" />
      <div className="ambient-ring absolute left-[6%] top-[120px] h-52 w-52 rounded-full" />
      <div className="ambient-ring absolute right-[10%] top-[830px] h-64 w-64 rounded-full" />
      <div className="ambient-pulse-dot absolute left-[18%] top-[220px] h-4 w-4 rounded-full" />
      <div className="ambient-pulse-dot ambient-pulse-dot-alt absolute right-[18%] top-[920px] h-4 w-4 rounded-full" />
      <div className="ambient-ecg absolute left-0 top-[168px] h-40 w-full opacity-100">
        <svg className="h-full w-full" viewBox="0 0 1600 160" preserveAspectRatio="none">
          <path
            className="ambient-ecg-line"
            d="M0 96 L150 96 L210 96 L250 58 L290 128 L340 34 L395 96 L560 96 L620 96 L670 70 L720 112 L770 54 L820 96 L1010 96 L1070 96 L1110 68 L1160 118 L1210 40 L1260 96 L1600 96"
          />
        </svg>
      </div>
      <div className="ambient-ecg ambient-ecg-secondary absolute left-0 top-[760px] h-36 w-full opacity-95">
        <svg className="h-full w-full" viewBox="0 0 1600 160" preserveAspectRatio="none">
          <path
            className="ambient-ecg-line ambient-ecg-line-secondary"
            d="M0 100 L180 100 L230 100 L270 70 L305 122 L355 44 L405 100 L600 100 L650 100 L700 82 L740 112 L790 58 L840 100 L1020 100 L1080 100 L1135 74 L1175 118 L1220 54 L1270 100 L1600 100"
          />
        </svg>
      </div>
      {markers.map((marker) => (
        <span
          key={`${marker.left}-${marker.top}`}
          className={`ambient-marker ambient-marker-${marker.size} absolute`}
          style={{
            left: marker.left,
            top: marker.top,
            animationDelay: marker.delay,
          }}
        >
          <span className="ambient-marker-x" />
        </span>
      ))}
    </div>
  )
}

export default PageBackground
