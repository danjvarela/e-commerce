"use client"

import ProductCard from "@/components/product-card"
import Link from "@/components/ui/link"
import { useCart } from "@/hooks/cart"

export default function CartPage() {
  const { cart, totalItems } = useCart()

  if (totalItems === 0)
    return (
      <div className="p-4 flex items-center justify-center whitespace-break-spaces">
        Your cart is empty.{" "}
        <Link href="/" className="text-base">
          Add products
        </Link>
      </div>
    )

  return (
    <div className="p-4 bg-slate-100 flex flex-col gap-4 w-full">
      {Object.entries(cart).map(([, { product }]) => {
        console.log("produict", product)
        return <ProductCard key={product.id} {...product} context="cart" />
      })}
    </div>
  )
}
