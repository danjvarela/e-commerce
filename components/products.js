"use client"

import { useProducts } from "@/hooks/products"
import ProductCard from "./product-card"
import { Loader2 } from "lucide-react"

export default function Products() {
  const products = useProducts()

  if (!products.length)
    return (
      <div className="w-full mt-12">
        <Loader2 className="w-8 h-8 animate-spin mx-auto" />
      </div>
    )

  return (
    <div className="p-4 bg-slate-100 grid grid-cols-3 gap-4 w-full">
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />
      })}
    </div>
  )
}
