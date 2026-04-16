function TrustCard({ title, description, icon: Icon }) {
  return (
    <article className="group rounded-3xl border border-white/80 bg-white p-7 text-center shadow-card">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-sm transition-all duration-300 group-hover:rounded-full group-hover:bg-brand-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-800">{title}</h3>
      <p className="mt-3 text-sm text-slate-500">{description}</p>
    </article>
  )
}

export default TrustCard
