import { FC } from "react"
import HamburgerIcon from "../assets/images/icon-hamburger.svg"
import logo from '../assets/images/logo.svg'
const Header: FC<{ openMobileMenu: () => void }> = ({ openMobileMenu }) => {
    return (
        <header className="flex justify-between items-center w-full font-sans-sm ">
            <img src={logo} alt="" className="h-[1.5rem]" />
            <div className="flex">
                <button onClick={openMobileMenu} className=" md:hidden ">
                    <img src={HamburgerIcon} alt="hamburger" />
                </button>
                <nav className=" hidden md:block ">
                    <ul className="flex gap-2 lg:gap-8">
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
