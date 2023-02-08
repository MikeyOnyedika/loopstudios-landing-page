import { FC } from "react"

export const Nav: FC<{ className: string, listClassName: string , listItem?: string}> = ({ className, listClassName, listItem }) => {
    return (
        <nav className={className}>
            <ul className={listClassName + "  flex "}>
                <li className={listItem || ""}>
                    About
                </li>
                <li className={listItem || ""} >
                    Careers
                </li>
                <li className={listItem || ""} >
                    Events
                </li>
                <li className={listItem || ""} >
                    Products
                </li>
                <li className={listItem || ""} >
                    Support
                </li>
            </ul>
        </nav>
    )
}