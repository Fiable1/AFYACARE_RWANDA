function FeatureCard({ title, description, icon: Icon }) {
  return (
    <article className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-float">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 transition-all duration-300 group-hover:rounded-full group-hover:bg-brand-100">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-8 text-xl font-bold tracking-tight text-slate-800">{title}</h3>
      <p className="mt-4 max-w-[18rem] text-sm leading-7 text-slate-500">{description}</p>
    </article>
  )
}

export default FeatureCard
