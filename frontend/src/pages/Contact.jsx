import ContactDetails from '../components/contact/ContactDetails'
import ContactHero from '../components/contact/ContactHero'
import ContactInquiry from '../components/contact/ContactInquiry'
import Reveal from '../components/motion/Reveal'

export default function Contact() {
  return (
    <>
      <ContactHero />

      <Reveal>
        <ContactDetails />
      </Reveal>

      <Reveal>
        <ContactInquiry />
      </Reveal>
    </>
  )
}
