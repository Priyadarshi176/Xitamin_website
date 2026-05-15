// src/pages/Home.jsx

import ContactCta from '../components/ContactCta'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
// import MarketplaceExpertise from '../components/MarketplaceExpertise'
import Reveal from '../components/motion/Reveal'
import Process from '../components/Process'
import ProofStrip from '../components/ProofStrip'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <ProofStrip />
      </Reveal>

      <Reveal>
        <Services />
      </Reveal>

      {/* <Reveal>
        <MarketplaceExpertise />
      </Reveal> */}

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
    </>
  )
}