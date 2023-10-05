"use client"
import { ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const MobileNav = () => {
  const [isOpen, setOpen] = useState<Boolean>(false)
  const toggleOpen = () => setOpen((prev) => !prev)

  const pathname = usePathname()
  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [pathname])

  const closeOnCurrent = (href: string) => {
    if (pathname == href) {
      toggleOpen()
    }
  }

  return (
    <div className=" sm:hidden ">
      <Menu
        onClick={toggleOpen}
        className=" relative z-50 h-5 w-5 text-white cursor-pointer"
      />
      {isOpen ? (
        <div className=" fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className=" absolute bg-darkpurple grid w-full gap-3 px-10 pt-20 pb-8 border-b border-black shadow-xl">
            <li>
              <Link
                onClick={() => closeOnCurrent("/subscribe")}
                href={"/subscribe"}
                className=" text-purple-500 flex items-center w-full font-semibold"
              >
                Get Notified <ArrowRight className=" ml-2 h-5 w-5" />
              </Link>
            </li>
            <li className=" my-3 h-px w-full bg-white" />
            <li>
              <Link
                onClick={() => closeOnCurrent("")}
                href={""}
                className=" text-white flex items-center w-full font-semibold"
              >
                The Team
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}
export default MobileNav
