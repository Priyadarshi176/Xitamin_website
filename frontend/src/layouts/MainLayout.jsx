// src/layouts/MainLayout.jsx

import Header from '../components/Header'
import Footer from '../components/Footer'

import CursorGlow from '../components/motion/CursorGlow'
import PageLoader from '../components/motion/PageLoader'
import ScrollProgress from '../components/motion/ScrollProgress'

export default function MainLayout({ children }) {
  return (
    <>
      <PageLoader />
      <CursorGlow />
      <ScrollProgress />

      <Header />

      <main id="main-content">
        {children}
      </main>

      <Footer />
    </>
  )
}