import { FC } from "react"
import HamburgerIcon from "../assets/images/icon-hamburger.svg"
import logo from '../assets/images/logo.svg'
import { Nav } from "./Nav"

const Header: FC<{ openMobileMenu: () => void }> = ({ openMobileMenu }) => {
    return (
        <header className="flex justify-between items-center w-full font-sans-sm max-w-max">
            <img src={logo} alt="" className="h-[1.5rem]" />
            <div className="flex">
                <button onClick={openMobileMenu} className=" md:hidden ">
                    <img src={HamburgerIcon} alt="hamburger" />
                </button>
                <Nav  className=" hidden md:flex " listClassName=" flex gap-2 lg:gap-8 "/> 
            </div>
        </header>
    )
}

export default Header
