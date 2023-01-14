import HamburgerIcon from "../assets/images/icon-hamburger.svg"
import logo from '../assets/images/logo.svg'
const Header = () => {
    return (
        <header className="flex justify-between items-center w-full">
            {/* <a className="font-sans-sm font-normal text-md ">
                loopstudios
            </a> */}
            <img src={logo} alt="" className="h-[1.5rem]"/>
            <div className="flex">
                <img src={HamburgerIcon} alt="hamburger" className=" lg:hidden " />
                <nav className=" hidden lg:block ">
                    <ul className="flex gap-2">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#" >Careers</a>
                        </li>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header