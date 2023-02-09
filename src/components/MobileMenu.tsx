import { FC } from "react";
import close from '../assets/images/icon-close.svg'
import logo from '../assets/images/logo.svg'
import { Nav } from "./Nav";
import { Logo } from "./Logo";

export const MobileMenu: FC<{ show: boolean, closeMobileMenu: () => void }> = ({ closeMobileMenu, show }) => {
    return (
        <aside className={`md:hidden h-screen ${show ? "translate-x-0": "translate-x-full"} transition flex flex-col px-5 py-10 fixed inset-0 bg-black z-10`}>
            <div className="flex justify-between">
                <Logo />
                <button onClick={closeMobileMenu}>
                    <img src={close} alt="" className="h-[1.5rem]" />
                </button>
            </div>

            <Nav className="h-full flex items-center" listClassName="flex-col font-sans-lg  items-start gap-5" listItem="text-gray uppercase text-sm" />


        </aside>
    )
}