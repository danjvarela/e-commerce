import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/utils/cn"
import Header from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "e-commerce",
  description: "A simple E-Commerce App",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-slate-200")}>
        <div className="relative container mx-auto max-w-4xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
