import FeatureCard from '../components/FeatureCard'
import { features } from '../data/content'
import { sectionIds } from '../data/links'

function FeaturesSection() {
  return (
    <section id={sectionIds.keyFeatures} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">
            Key Features
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
