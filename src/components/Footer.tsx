import FbIcon from '../assets/images/icon-facebook.svg'
import { Nav } from './Nav'
import TwIcon from '../assets/images/icon-twitter.svg'
import PinIcon from '../assets/images/icon-pinterest.svg'
import InstaIcon from '../assets/images/icon-instagram.svg'
import logo from '../assets/images/logo.svg'

const Footer = () => (
  <footer className=' bg-black flex justify-center lg:px-20'>
    <div className='max-w-max text-white grid w-full grid-cols-1 lg:grid-cols-2 justify-center px-5 py-16 gap-10'>
      <div className='flex flex-col items-center lg:items-start gap-3'>
        <img src={logo} alt="loopstudios" className="h-[1.5rem] justify-self-center" />
        <Nav className="justify-self-center" listClassName="font-sans-sm text-gray-dark flex flex-col lg:flex-row gap-5 text-body-copy" />
      </div>
      <div className="flex flex-col gap-5 items-center lg:items-end">
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
    </div>
  </footer>
)

export default Footer