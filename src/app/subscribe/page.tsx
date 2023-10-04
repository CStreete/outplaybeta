"use client"
import { NextPage } from "next"
import MaxWidthWrapper from "../components/MaxWidthWrapper"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { Button, buttonVariants } from "@/components/ui/button"
import { SyntheticEvent, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [action, setAction] = useState("")
  const [formData, setFormData] = useState({
    email: "",
  })

  const submitRegistration = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      await axios.post("/api/subscribe", {
        email: formData.email,
      })
      setAction("sent")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MaxWidthWrapper classname="mb-12 mt-28 sm:mt-40 flex flex-col items-start justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-white">
        <span className=" text-purple-500">O</span>utPlay IS COMING SOON
        <span></span>
      </h1>
      <p className="mt-5 font-semibold max-w-prose text-white sm:text-2xl">
        Be one of the first users to experince outplay once it has launched!
      </p>

      <div className="mt-28 w-full sm:flex sm:items-center">
        {action == "sent" ? (
          <div>
            <h1 className=" text-2xl text-white">
              Thank You for your intrest in outplay, we will email u as soon as
              possible with future updates!
            </h1>
            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "lg",

                className: "mt-5 bg-purple-500 text-white",
              })}
              href={"/"}
            >
              Return
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        ) : (
          <>
            <p className=" text-white ">Enter your email to get notified!</p>

            <form
              onSubmit={submitRegistration}
              className="relative w-full flex space-x-2 items-center sm:w-1/2"
            >
              <Input
                type="email"
                placeholder="Email"
                className="rounded-full ml-6 w-full  placeholder:text-white text-white py-6"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></Input>
              <Button
                variant={"ghost"}
                size={"lg"}
                type="submit"
                className="bg-purple-500 text-whit absolute right-0 rounded-full text-white py-7"
              >
                Subscribe
              </Button>
            </form>
          </>
        )}
      </div>
    </MaxWidthWrapper>
  )
}

export default Page
