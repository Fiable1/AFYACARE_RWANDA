import doc2 from '../assets/images/doc2.PNG'
import doc7 from '../assets/images/doc 7.PNG'
import doc4 from '../assets/images/doc 4.PNG'
import docOther from '../assets/images/doc....PNG'
import hugImage from '../assets/images/hug 8.PNG'
import { Linkedin, Mail, Award } from 'lucide-react'
import ImageWithSkeleton from './ImageLoader'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring" } }
}


function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 pt-32 pb-16 font-sans">
      <section className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Meet Our <span className="text-emerald-600">Team</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
            A dedicated group of healthcare professionals and technology experts committed to revolutionizing healthcare accessibility across Rwanda.
          </p>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-12 border-l-4 border-emerald-500 pl-4">Leadership Team</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={itemVariants} className="group relative rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-md p-4 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-emerald-400">
            <div className="aspect-[4/5] overflow-hidden rounded-[24px]">
              <ImageWithSkeleton src={doc2} alt="Dr. Sarah Johnson" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="mt-6 px-2">
              <h3 className="text-lg font-bold text-slate-900">Dr. Sarah Johnson</h3>
              <p className="text-sm font-semibold text-emerald-600">Chief Medical Officer</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">Board-certified physician with 15+ years of experience in internal medicine and digital health.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-slate-400">
                <a href="#" className="hover:text-emerald-600 transition-colors p-1" title="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:sarah.j@afyacare.rw" className="hover:text-emerald-600 transition-colors p-1" title="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <span className="ml-auto inline-flex rounded-full bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-100">Medical AI</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-md p-4 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-emerald-400">
            <div className="aspect-[4/5] overflow-hidden rounded-[24px]">
              <ImageWithSkeleton src={docOther} alt="Dr. Michael Chen" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="mt-6 px-2">
              <h3 className="text-lg font-bold text-slate-900">Dr. Michael Chen</h3>
              <p className="text-sm font-semibold text-emerald-600">Head of AI Research</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">Leading AI researcher specializing in machine learning applications for healthcare diagnostics.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-slate-400">
                <a href="#" className="hover:text-emerald-600 transition-colors p-1" title="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:michael.c@afyacare.rw" className="hover:text-emerald-600 transition-colors p-1" title="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <span className="ml-auto inline-flex rounded-full bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-100">Machine Learning</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-md p-4 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-emerald-400">
            <div className="aspect-[4/5] overflow-hidden rounded-[24px]">
              <ImageWithSkeleton src={doc7} alt="Emily Rodriguez" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="mt-6 px-2">
              <h3 className="text-lg font-bold text-slate-900">Emily Rodriguez</h3>
              <p className="text-sm font-semibold text-emerald-600">Director of Nursing</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">Registered nurse with expertise in patient care coordination and telemedicine services.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-slate-400">
                <a href="#" className="hover:text-emerald-600 transition-colors p-1" title="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:emily.r@afyacare.rw" className="hover:text-emerald-600 transition-colors p-1" title="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <span className="ml-auto inline-flex rounded-full bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-100">Patient Care</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-md p-4 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-emerald-400">
            <div className="aspect-[4/5] overflow-hidden rounded-[24px]">
              <ImageWithSkeleton src={doc4} alt="Dr. James Park" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="mt-6 px-2">
              <h3 className="text-lg font-bold text-slate-900">Dr. James Park</h3>
              <p className="text-sm font-semibold text-emerald-600">Medical Advisor</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">Specialist in emergency medicine with a focus on rapid diagnosis and patient safety.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-slate-400">
                <a href="#" className="hover:text-emerald-600 transition-colors p-1" title="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:james.p@afyacare.rw" className="hover:text-emerald-600 transition-colors p-1" title="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <span className="ml-auto inline-flex rounded-full bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-100">Emergency Medicine</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-t border-slate-100">
        <h2 className="text-3xl font-bold tracking-tight text-center text-slate-900 sm:text-4xl mb-16">Advisory Board</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* Prof. Lisa Anderson */}
          <motion.div variants={itemVariants} className="rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-md p-10 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mt-8 text-xl font-bold text-slate-950">Prof. Lisa Anderson</h3>
            <p className="mt-2 font-medium text-emerald-600">Medical Ethics Advisor</p>
            <p className="mt-6 text-sm font-medium text-slate-400 tracking-wide uppercase">MD, PhD - Stanford Medical School</p>
          </motion.div>

          {/* Dr. Robert Williams */}
          <motion.div variants={itemVariants} className="rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-md p-10 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mt-8 text-xl font-bold text-slate-950">Dr. Robert Williams</h3>
            <p className="mt-2 font-medium text-emerald-600">Technology Advisor</p>
            <p className="mt-6 text-sm font-medium text-slate-400 tracking-wide uppercase">PhD Computer Science - MIT</p>
          </motion.div>

          {/* Dr. Maria Garcia */}
          <motion.div variants={itemVariants} className="rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-md p-10 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mt-8 text-xl font-bold text-slate-950">Dr. Maria Garcia</h3>
            <p className="mt-2 font-medium text-emerald-600">Public Health Advisor</p>
            <p className="mt-6 text-sm font-medium text-slate-400 tracking-wide uppercase">MD, MPH - Johns Hopkins</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-slate-100/50">
        <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
          <ImageWithSkeleton 
            src={hugImage} 
            alt="Medical team" 
            className="h-[400px] w-full object-cover" 
          />
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Join Our Growing Team</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We're always looking for talented healthcare professionals and technologists who share our vision of making healthcare accessible to everyone.
          </p>
          <button className="mt-8 rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-emerald-700 active:scale-95">
            View Open Positions
          </button>
        </div>
      </section>

      <section className="relative overflow-hidden bg-emerald-800/90 backdrop-blur-md shadow-2xl py-12 sm:py-16 rounded-[40px] mt-12 mx-auto max-w-7xl">
        <div className="px-6 lg:px-8">
           <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Our Commitment</h2>
              <p className="text-base leading-relaxed text-emerald-50">
                "We are committed to leveraging technology to break down barriers in healthcare. Our team combines medical expertise with technological innovation to create solutions that truly make a difference in people's lives. Every day, we work towards a future where quality healthcare guidance is accessible to everyone, everywhere."
              </p>
           </div>
        </div>
      </section>
    </div>
  )
}

export default Team
