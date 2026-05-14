import ContactCta from './components/ContactCta'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MarketplaceExpertise from './components/MarketplaceExpertise'
import CursorGlow from './components/motion/CursorGlow'
import PageLoader from './components/motion/PageLoader'
import Reveal from './components/motion/Reveal'
import ScrollProgress from './components/motion/ScrollProgress'
import Process from './components/Process'
import ProofStrip from './components/ProofStrip'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'

export default function App() {
  return (
    <>
      <PageLoader />
      <CursorGlow />
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <Reveal>
          <ProofStrip />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <MarketplaceExpertise />
        </Reveal>
        <Reveal>
          <WhyChoose />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <ContactCta />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
