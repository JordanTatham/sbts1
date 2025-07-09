import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Service by the Sea - Professional Cleaning & Garden Services",
  description:
    "Professional end of tenancy cleaning, communal area maintenance, garden services, and handyman solutions across Brighton, Hove, and surrounding areas.",
  keywords: "cleaning services, end of tenancy cleaning, garden maintenance, Brighton, Hove, communal cleaning",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
