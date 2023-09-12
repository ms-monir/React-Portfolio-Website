import React from 'react'
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Work from '../components/Work';
import Footer from '../components/Footer';
function Home() {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Work />
      <Footer />
    </div>
  )
}

export default Home