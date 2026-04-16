import HeroVisual from '../components/HeroVisual'
import { links, sectionIds } from '../data/links'
import { ArrowRightIcon } from '../components/icons'

function HeroSection() {
  return (
    <section id={sectionIds.home} className="bg-hero">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
            MediAssist
          </h1>
          <p className="mt-4 text-2xl font-semibold text-brand-500">
            Your AI Health Assistant
          </p>
          <p className="mt-5 max-w-lg text-base leading-8 text-slate-500">
            Experience the future of healthcare with intelligent medical guidance,
            instant appointments, and 24/7 support at your fingertips.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-700"
              href={links.heroPrimary}
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center rounded-xl border border-brand-300 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:bg-brand-50"
              href={links.heroSecondary}
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-brand-100 blur-2xl" />
          <div className="absolute -bottom-6 -right-8 h-24 w-24 rounded-full bg-sky-100 blur-2xl" />
          <div className="relative overflow-hidden rounded-[26px] border border-white/70 bg-white p-3 shadow-float">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
