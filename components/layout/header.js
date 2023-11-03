import Link from "@/components/ui/link"
import ShoppingCart from "../shopping-cart"

export default function Header() {
  return (
    <div className="w-full p-4 bg-slate-50 flex items-center justify-between sticky top-0 left-0 z-50">
      <Link className="font-bold text-base !text-slate-900" href="/">
        e-commerce
      </Link>

      <div className="flex gap-4">
        <ShoppingCart />
      </div>
    </div>
  )
}
