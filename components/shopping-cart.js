"use client"

import { ShoppingCart as ShoppingCartIcon } from "lucide-react"
import Link from "./ui/link"
import { cn } from "@/utils/cn"
import { useLocalStorage } from "@uidotdev/usehooks"

export default function ShoppingCart() {
  const [cart] = useLocalStorage("cart", {})

  const totalItemCount = Object.entries(cart).reduce((acc, entry) => {
    acc += entry[1]
    return acc
  }, 0)

  return (
    <Link href="/href" className="relative">
      <span
        className={cn(
          "absolute -right-3 -top-3 text-white bg-red-600 rounded-full aspect-square",
          "w-6 h-6 text-xs flex items-center justify-center"
        )}
      >
        {totalItemCount}
      </span>
      <ShoppingCartIcon />
    </Link>
  )
}
