import { FC } from "react"
export const SeeAllBtn: FC<{ hiddenOnMobile: boolean }> = ({ hiddenOnMobile }) => {
    return (
        <button className={`${hiddenOnMobile === true ? "hidden lg:block" : "lg:hidden"}  lg:block uppercase font-sans-sm tracking-[0.3em] border-2 self-center py-2 px-10 border-black hover:bg-black hover:text-white transition-colors`}
        >See all</button>
    )
}