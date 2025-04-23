import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import { NAME } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Taylor | AI Developer & Full-Stack Engineer",
  description:
    "Portfolio of Lucas Taylor, an AI Developer and Full-Stack Engineer specializing in Python and AI technologies.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/165153784.jfif" />
        <title>{ NAME.split(" ")[0] + "'s site" }</title>
      </head>
      <body className={inter.className}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  )
}
