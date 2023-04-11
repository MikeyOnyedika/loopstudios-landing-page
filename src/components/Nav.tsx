import { FC } from "react"

export const Nav: FC<{ className: string, listClassName: string, listItem?: string }> = ({ className, listClassName, listItem }) => {
    const list = [
        {
            id: 1,
            title: "About"
        },
        {
            id: 2,
            title: "Careers"
        },
        {
            id: 3,
            title: "Events"
        },
        {
            id: 4,
            title: "Products"
        },
        {
            id: 5,
            title: "Support"
        },
    ]

    return (
        <nav className={className}>
            <ul className={listClassName}>
                {
                    list.map(item => (
                        <li key={item.id} className={`${listItem || "" } cursor-pointer hover:font-bold`}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}