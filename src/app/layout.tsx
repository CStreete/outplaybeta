import { cn } from "@/lib/utils"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavBar from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Outplay",
  description: "Outplay",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn("min-h-screen font-sans antialiased", inter.className)}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
