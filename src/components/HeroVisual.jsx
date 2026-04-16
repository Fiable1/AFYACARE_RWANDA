function HeroVisual() {
  return (
    <div className="relative h-[300px] overflow-hidden rounded-[20px] bg-gradient-to-br from-slate-50 via-[#f7f3ec] to-[#eef7ff] sm:h-[340px]">
      <div className="absolute inset-y-0 left-[16%] w-[10px] bg-slate-300/80" />
      <div className="absolute left-[6%] top-[10%] h-[32%] w-[18%] rounded-[18px] border border-slate-200 bg-white shadow-sm" />
      <div className="absolute left-[10%] top-[16%] h-[11%] w-[10%] rounded-lg bg-sky-100" />
      <div className="absolute left-[8%] top-[47%] h-[22%] w-[14%] rounded-[18px] border border-slate-200 bg-white shadow-sm" />
      <div className="absolute right-[6%] top-[22%] h-[36%] w-[15%] rounded-[22px] border border-slate-200 bg-white shadow-sm" />
      <div className="absolute right-[10%] top-[29%] h-10 w-10 rounded-full bg-red-500/90 shadow-lg shadow-red-500/20" />
      <div className="absolute right-[10.7%] top-[47%] h-[28%] w-[3px] rounded-full bg-emerald-800" />
      <div className="absolute inset-x-0 bottom-0 h-[23%] bg-gradient-to-t from-slate-200/90 to-transparent" />

      <div className="absolute left-1/2 top-[18%] h-[62%] w-[26%] -translate-x-1/2">
        <div className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 rounded-full bg-orange-400 shadow-lg shadow-orange-400/30">
          <div className="absolute left-1/2 top-[28%] h-6 w-10 -translate-x-1/2 rounded-full bg-white" />
          <div className="absolute left-[32%] top-[39%] h-2 w-2 rounded-full bg-slate-700" />
          <div className="absolute right-[32%] top-[39%] h-2 w-2 rounded-full bg-slate-700" />
          <div className="absolute -left-2 top-3 h-4 w-4 rounded-full bg-orange-500" />
          <div className="absolute -right-2 top-3 h-4 w-4 rounded-full bg-orange-500" />
        </div>

        <div className="absolute left-1/2 top-14 h-28 w-20 -translate-x-1/2 rounded-[28px] bg-orange-400 shadow-xl shadow-orange-400/25">
          <div className="absolute left-1/2 top-4 h-12 w-12 -translate-x-1/2 rounded-2xl bg-white/95" />
        </div>

        <div className="absolute left-[3%] top-[39%] h-14 w-8 rotate-[16deg] rounded-full bg-orange-400" />
        <div className="absolute right-[3%] top-[39%] h-14 w-8 -rotate-[16deg] rounded-full bg-orange-400" />
        <div className="absolute left-[1%] top-[58%] h-6 w-12 rounded-2xl bg-orange-300 shadow-md" />
        <div className="absolute right-[1%] top-[58%] h-6 w-12 rounded-2xl bg-orange-300 shadow-md" />
        <div className="absolute bottom-0 left-[27%] h-20 w-8 rounded-full bg-orange-400" />
        <div className="absolute bottom-0 right-[27%] h-20 w-8 rounded-full bg-orange-400" />
      </div>

      <div className="absolute left-[27%] top-[12%] rounded-2xl border border-white/80 bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Live assistance
        </div>
      </div>

      <div className="absolute left-[23%] top-[63%] rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-md backdrop-blur">
        <div className="text-xs font-semibold text-slate-800">Patient check-in</div>
        <div className="mt-1 text-[11px] text-slate-500">Vitals synced and ready</div>
      </div>
    </div>
  )
}

export default HeroVisual
