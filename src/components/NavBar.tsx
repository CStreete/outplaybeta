import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { Ghost } from "lucide-react"
import MobileNav from "./MobileNav"

const NavBar = () => {
  return (
    <nav className=" sticky h-14 inset-x-0 top-0 z-30 w-full  transition-al bg-darkpurple">
      <MaxWidthWrapper>
        <div className=" flex h-14 items-center justify-between ">
          <Link href={"/"} className=" flex z-40 font-semibold ">
            <span className=" text-white">
              <span className=" text-purple-400">o</span>utplay.
            </span>
          </Link>
          <MobileNav />

          <Link
            href={"/subscribe"}
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className:
                " hidden text-white hover:bg-gray-400/25 hover:text-white sm:flex",
            })}
          >
            Get Notified
          </Link>
          <Link
            href={""}
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className:
                " text-white hover:bg-gray-400/25 hover:text-white hidden sm:flex",
            })}
          >
            The team
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
export default NavBar
