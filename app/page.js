import ProductCard from "@/components/product-card"

export default function Home() {
  return (
    <div className="p-4 bg-slate-100 grid grid-cols-3 gap-4">
      {[...Array(10)].map((_, index) => {
        return <ProductCard key={index} />
      })}
    </div>
  )
}
