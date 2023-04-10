import Header from './components/Header'
import Hero from './components/Hero'
import CompanyPitch from './components/CompanyPitch'
import Creations from './components/Creations'
import Footer from './components/Footer'
import { MobileMenu } from './components/MobileMenu'
import { useState } from 'react'

const App = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <>
      <div className='bg-hero-mobile lg:bg-hero-desktop text-white bg-cover bg-no-repeat h-screen md:h-fit flex flex-col items-center  w-full px-5 py-8 md:px-32'>
        <Header openMobileMenu={() => setShowMobileMenu(true)} />
        <Hero />
      </div>
      <MobileMenu show={showMobileMenu} closeMobileMenu={() => setShowMobileMenu(false)} />
      <main className='bg-white flex flex-col gap-10 px-5 py-20 md:p-12  lg:p-20 lg:items-center'>
        <CompanyPitch />
        <Creations />
      </main>
      <Footer />
      <div className="text-[pink] bg-black text-[0.8rem] text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">MikeyV</a>.
      </div>
    </>
  )
}
export default App
