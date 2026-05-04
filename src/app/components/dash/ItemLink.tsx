"use client"
import { usePathname } from "next/navigation"
import Link from 'next/link'
type propsLink = {
    href: string,
    children: string
}

const ItemLink = ({href,children} : propsLink) => {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `p-2 rounded transition ${
      pathname === path
        ? "text-mainyellow bg-[#2b2820] font-medium"
        : "hover:bg-[#2b2820]"
    }`

  return (
    <Link href={href} className={linkClass(href)}>{children}</Link>
  )
}

export default ItemLink