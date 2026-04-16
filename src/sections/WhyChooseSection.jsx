import TrustCard from '../components/TrustCard'
import { trustItems } from '../data/content'
import { sectionIds } from '../data/links'

function WhyChooseSection() {
  return (
    <section id={sectionIds.about} className="bg-panel py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">
            Why Choose MediAssist?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {trustItems.map((item) => (
            <TrustCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
