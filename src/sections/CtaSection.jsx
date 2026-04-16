import { ArrowRightIcon } from '../components/icons'
import { links, sectionIds } from '../data/links'

function CtaSection() {
  return (
    <section id={sectionIds.getStarted} className="bg-cta py-16 text-center text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-[2.15rem]">
          Ready to Get Started?
        </h2>
        <p className="mt-3 text-sm text-emerald-50/90 sm:text-base">
          Join thousands of users who trust AfyaCare for their healthcare needs
        </p>
        <a
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-card transition hover:-translate-y-0.5 hover:bg-emerald-50"
          href={links.ctaPrimary}
        >
          Book Appointment Now
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

export default CtaSection
