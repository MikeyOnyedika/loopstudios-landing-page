import FbIcon from '../assets/images/icon-facebook.svg'
import TwIcon from '../assets/images/icon-twitter.svg'
import PinIcon from '../assets/images/icon-pinterest.svg'
import InstaIcon from '../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <h4>loopstudios</h4>
        <nav>
          <ul>
            <li>
              About
            </li>
            <li>
              Careers
            </li>
            <li>
              Events
            </li>
            <li>
              Products
            </li>
            <li>
              Support
            </li>
          </ul>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className='flex gap-2'>
          <img src={FbIcon} alt="facebook-icon" />
          <img src={TwIcon} alt="twitter-icon" />
          <img src={PinIcon} alt="pinterest-icon" />
          <img src={InstaIcon} alt="instagram-icon" />
        </div>
        <p>
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>


      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </footer>
  )
}

export default Footer