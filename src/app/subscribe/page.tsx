import { NextPage } from "next"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import { Input } from "@/components/ui/input"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <MaxWidthWrapper classname="mb-12 mt-28 sm:mt-40 flex flex-col items-start justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-white">
        <span className=" text-purple-500">O</span>utPlay IS COMING SOON
      </h1>
      <p className="mt-5 font-semibold max-w-prose text-white sm:text-2xl">
        Be one of the first users to experince outplay once it has launched!
      </p>

      <div className="mt-28 w-full sm:flex sm:items-center">
        <p className=" text-white ">Enter your email to get notified!</p>
        <div className=" relative w-full flex space-x-2 items-center sm:w-1/2">
          <Input
            type="email"
            placeholder="Email"
            className="rounded-full ml-6 w-full  placeholder:text-white text-white py-6"
          ></Input>
          <Button
            variant={"ghost"}
            size={"lg"}
            type="submit"
            className="bg-purple-500 text-whit absolute right-0 rounded-full text-white py-7"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Page