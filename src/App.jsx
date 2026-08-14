import React from 'react'
import { C } from './lib/branding'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import ResultsSection from './components/ResultsSection'
import ProcessSection from './components/ProcessSection'
import PainSection from './components/PainSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body" style={{ background: C.paper }}>
      <Nav />
      <HeroSection />
      <ResultsSection />
      <ProcessSection />
      <PainSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
