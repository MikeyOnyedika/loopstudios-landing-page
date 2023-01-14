import Header from './components/Header'
import Hero from './components/Hero'
import CompanyPitch from './components/CompanyPitch'
import Creations from './components/Creations'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='bg-hero-mobile text-white bg-cover bg-no-repeat h-screen flex flex-col w-full px-5 py-8'>
        <Header />
        <Hero />
      </div>
      <main className='bg-white px-5 py-[7rem]'>
        <CompanyPitch />
        <Creations />
      </main>
      <Footer />
    </>
  )
}
export default App