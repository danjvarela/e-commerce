"use client"

import CartProducts from "@/components/cart-products"
import { useIsClient } from "@uidotdev/usehooks"

export default function CartPage() {
  const isClient = useIsClient()

  return (
    <div className="p-4 bg-slate-100 flex flex-col gap-4 w-full">
      {isClient && <CartProducts />}
    </div>
  )
}
