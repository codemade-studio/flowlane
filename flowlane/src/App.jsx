import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Logos from './components/Logos.jsx'
import Features from './components/Features.jsx'
import Showcases from './components/Showcases.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Showcases />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
