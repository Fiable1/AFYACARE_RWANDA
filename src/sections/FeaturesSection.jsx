import React from 'react'
import { features } from '../data/content'

const FeaturesSection = () => {
  return (
    <section id="features" className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-base font-bold uppercase tracking-wider text-brand-600">Features</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Everything you need for better health
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Our platform combines cutting-edge AI with human medical expertise to provide 
            comprehensive care that's always within reach.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-glass transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-float"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
