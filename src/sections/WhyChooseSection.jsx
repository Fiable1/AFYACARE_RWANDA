import React from 'react'
import { trustItems } from '../data/content'

const WhyChooseSection = () => {
  return (
    <section className="px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-brand-900 px-8 py-20 text-white sm:px-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-base font-bold uppercase tracking-widest text-brand-300">Why AfyaCare</h2>
            <p className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Healthcare built for the future
            </p>
            <p className="mt-8 text-lg text-brand-100/80 leading-relaxed">
              We bridge the gap between technology and human care, ensuring that 
              every citizen of Rwanda has access to world-class medical assistance 
              right from their pocket.
            </p>
            <div className="mt-12 space-y-8">
              {trustItems.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white backdrop-blur-md">
                    <item.icon className="h-6 w-6 text-brand-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="mt-2 text-brand-100/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-full bg-brand-400/20 blur-3xl" />
            <div className="relative aspect-square rounded-[32px] bg-white/10 p-2 shadow-2xl backdrop-blur-sm border border-white/20">
              <div className="h-full w-full rounded-[24px] bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center shadow-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
