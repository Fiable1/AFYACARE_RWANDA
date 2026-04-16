import Navbar from './components/Navbar'
import PageBackground from './components/PageBackground'
import HeroSection from './sections/HeroSection'
import FeaturesSection from './sections/FeaturesSection'
import WhyChooseSection from './sections/WhyChooseSection'
import CtaSection from './sections/CtaSection'

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-white text-ink">
      <PageBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <WhyChooseSection />
        <CtaSection />
      </main>
    </div>
  )
}

export default App
