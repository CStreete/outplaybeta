import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new NextResponse("Invalid Request", { status: 405 })
  }
  try {
    const { email } = await req.json()

    const newSubscription = await db.users.create({
      data: {
        email,
      },
    })
    return NextResponse.json(newSubscription)
  } catch (error) {
    console.log("[COURSES]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
