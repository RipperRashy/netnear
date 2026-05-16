import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import Installers from '../components/Installers'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Installers />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home