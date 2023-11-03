"use client"

import ProductCard from "@/components/product-card"
import { useCart } from "@/hooks/cart"

export default function CartPage() {
  const { cart } = useCart()

  return (
    <div className="p-4 bg-slate-100 flex flex-col gap-4 w-full">
      {Object.entries(cart).map(([, { product }]) => {
        console.log("produict", product)
        return <ProductCard key={product.id} {...product} />
      })}
    </div>
  )
}
