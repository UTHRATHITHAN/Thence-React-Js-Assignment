import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Footer from './Footer'
import Question from './Questions'
import { useState } from 'react'

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false); 
  return (
    <main className={`overflow-hidden  ${isMenuOpen && "fixed"  }`} >
      <NavBar isMenuOpen={isMenuOpen} handleMenuOpen={setMenuOpen} />
      <HeroSection  />
      <Question />
      <Footer />
    </main>
  )
}
