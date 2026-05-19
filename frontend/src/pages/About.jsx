import { lazy, Suspense } from 'react'

import AboutHero from '../components/about/AboutHero'
import AboutOverview from '../components/about/AboutOverview'
import AboutMission from '../components/about/AboutMission'
import AboutStory from '../components/about/AboutStory'
import AboutTimeline from '../components/about/AboutTimeline'
import TeamValues from '../components/about/TeamValues'

import SectionLoader from '../components/loaders/SectionLoader'
import Reveal from '../components/motion/Reveal'

const ContactCta = lazy(() => import('../components/common/ContactCta'))

export default function About() {
  return (
    <>
      <AboutHero />

      <Reveal>
        <AboutOverview />
      </Reveal>

      <Reveal>
        <AboutStory />
      </Reveal>

      <Reveal>
        <AboutMission />
      </Reveal>

      <Reveal>
        <AboutTimeline />
      </Reveal>

      <Reveal>
        <TeamValues />
      </Reveal>

      <Suspense fallback={<SectionLoader />}>
        <Reveal>
          <ContactCta />
        </Reveal>
      </Suspense>
    </>
  )
}
