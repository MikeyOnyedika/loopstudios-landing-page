import Header from './components/Header'
import Hero from './components/Hero'
import CompanyPitch from './components/CompanyPitch'
import Creations from './components/Creations'
import Footer from './components/Footer'
import { MobileMenu } from './components/MobileMenu'

const App = () => {
  return (
    <>

      <div className='bg-hero-mobile text-white bg-cover bg-no-repeat h-screen flex flex-col w-full px-5 py-8'>
        <Header />
        <Hero />
      </div>
      <MobileMenu />
      <main className='bg-white '>
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