import FbIcon from '../assets/images/icon-facebook.svg'
import { Nav } from './Nav'
import TwIcon from '../assets/images/icon-twitter.svg'
import PinIcon from '../assets/images/icon-pinterest.svg'
import InstaIcon from '../assets/images/icon-instagram.svg'
import logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <footer className='bg-black text-white grid grid-cols-1 justify-center px-5 py-16 gap-10'>
      <img src={logo} alt="" className="h-[1.5rem] justify-self-center" />
      <Nav className="justify-self-center" listClassName="font-sans-sm text-gray-dark flex-col gap-5 text-body-copy" />

      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
        <div className='flex gap-4 justify-center'>
          <img src={FbIcon} alt="facebook-icon" />
          <img src={TwIcon} alt="twitter-icon" className='py-[0.1rem]' />
          <img src={PinIcon} alt="pinterest-icon" />
          <img src={InstaIcon} alt="instagram-icon" />
        </div>
        <p className="text-gray-dark font-sans-sm text-base opacity-50 text-center">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>


    </footer>
  )
}

export default Footer