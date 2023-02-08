import { FC } from "react";
import close from '../assets/images/icon-close.svg'
import logo from '../assets/images/logo.svg'
import { Nav } from "./Nav";

export const MobileMenu: FC = () => {
    return (
        <aside className="md:hidden h-screen flex flex-col px-5 py-10 fixed inset-0 bg-black">
            <div className="flex justify-between">
                <img src={logo} alt="" className="h-[1.5rem]" />
                <img src={close} alt="" className="h-[1.5rem]" />
            </div>

            <Nav className="h-full flex items-center" listClassName="flex-col font-sans-sm  items-start gap-3" listItem="font-light text-gray uppercase text-sm" />


        </aside>
    )
}