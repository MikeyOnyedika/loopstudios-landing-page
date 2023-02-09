import { FC } from 'react'
import logo from '../assets/images/logo.svg'
export const Logo: FC<{ className?: string }> = (props) => {
    return (
        <img src={logo} alt="" className={`${props.className || ""} h-[1.5rem]`} />
    )
}
