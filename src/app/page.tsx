import MaxWidthWrapper from "../components/MaxWidthWrapper"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <MaxWidthWrapper classname="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className=" mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-purple px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 ">
          <p className=" text-sm font-semibold text-white">
            Outplay is launching soon!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-white">
          <span className=" text-purple-500">O</span>utPlay
        </h1>
        <p className=" mt-5 max-w-prose text-white sm:text-lg">
          A new generation platform, for the gamers
        </p>
        <Link
          className={buttonVariants({
            variant: "ghost",
            size: "lg",

            className: "mt-5 bg-purple-500 text-white",
          })}
          href={"/subscribe"}
        >
          Get Notified
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
      <div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className=" mt-16 flex justify-center sm:mt-24 ">
            <div className="-m-2 rounded-xl bg-purple-950/10 px-8 ">
              <Image
                src={"/Wireframe4.png"}
                height={1364}
                width={866}
                quality={100}
                alt="ui image"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-white sm:text-5xl">
              A gaming platform created for the true gamer
            </h2>
            <p className="mt-4 text-lg text-white">
              Sharing you favorite clips has never been easier than with
              Outplay.
            </p>
          </div>
        </div>
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold text-purple-300">
                Interact with Communities!
              </span>
              <span className="mt-2 text-white">
                Discover a world of possibilities with our app designed to help
                you explore diverse content and engage with vibrant communities!
                Whether you&apos;re a content creator, an explorer, or a social
                butterfly, we&apos;ve got you covered.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold text-purple-300">
                Post and share your favorite clips!
              </span>
              <span className="mt-2 text-white">
                Introducing our cutting-edge app that empowers you to share your
                favorite clips like never before! Whether it&apos;s a hilarious
                moment, an epic win, or a heartwarming scene, post and share
                your favorite clips to showcase the best moments.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-xl font-semibold text-purple-300">
                Build a community!
              </span>
              <span className="mt-2 text-white">
                Welcome to the ultimate community-building app where you&apos;re
                in control! With &apos;build a community,&apos; creating,
                nurturing, and connecting with your tribe has never been easier.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  )
}
