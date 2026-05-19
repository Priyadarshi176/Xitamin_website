import { lazy, Suspense } from 'react'

import Hero from '../components/home/Hero'
// import ProofStrip from '../components/ProofStrip'
import Reveal from '../components/motion/Reveal'
import SectionLoader from '../components/loaders/SectionLoader'

const Services = lazy(() => import('../components/home/Services'))
const WhyChoose = lazy(() => import('../components/home/WhyChoose'))
const Process = lazy(() => import('../components/home/Process'))
const Faq = lazy(() => import('../components/home/Faq'))
const ContactCta = lazy(() => import('../components/common/ContactCta'))

export default function Home() {
  return (
    <>
      <Hero />

      {/* <Reveal>
        <ProofStrip />
      </Reveal> */}

      <Suspense fallback={<SectionLoader />}>
        <Reveal>
          <Services />
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
      </Suspense>
    </>
  )
}