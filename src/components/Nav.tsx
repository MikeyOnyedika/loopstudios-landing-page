import { FC } from "react"

export const Nav: FC<{ className: string, listClassName: string, listItem?: string }> = ({ className, listClassName, listItem }) => {
    const list = [
        {
            id: 1,
            title: "About"
        },
        {
            id: 1,
            title: "Careers"
        },
        {
            id: 1,
            title: "Events"
        },
        {
            id: 1,
            title: "Products"
        },
        {
            id: 1,
            title: "Support"
        },
    ]

    return (
        <nav className={className}>
            <ul className={listClassName + "  flex "}>
                {
                    list.map(item => (
                        <li key={item.id} className={listItem || ""}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}