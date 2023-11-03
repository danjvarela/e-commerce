import { cn } from "@/utils/cn"
import Link from "./ui/link"
import Button from "./ui/button"
import { useCart } from "@/hooks/cart"

export default function ProductCard({ context = "products", ...product }) {
  const { id, title, price, category, description, image } = product
  const { addToCart, itemCount, removeFromCart, removeItem } = useCart()

  return (
    <div
      className={cn(
        "p-4 rounded-md bg-slate-50 w-full h-full shadow-sm hover:ring ring-sky-200",
        "flex flex-col gap-4"
      )}
    >
      <div
        className={cn(
          "relative w-full h-[200px] bg-contain bg-center bg-no-repeat"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex flex-col gap-1">
          <Link className="font-semibold leading-none text-base" href="#">
            {title}
          </Link>

          <span className="text-[10px] px-[4px] py-[2px] border rounded-full w-fit border-sky-600 text-sky-600 select-none">
            {category}
          </span>
        </div>
        <div className="flex justify-between w-full items-center">
          <span>
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "PHP",
            })}
          </span>
          {context === "products" && (
            <Button onClick={() => addToCart(product)}>Add to cart</Button>
          )}
          {context === "cart" && (
            <div className="flex items-center gap-4">
              <span>Items in cart: {itemCount(id)}</span>

              <Button onClick={() => addToCart(product)}>Add 1 item</Button>
              <Button onClick={() => removeItem(id)}>Remove 1 item</Button>
              <Button onClick={() => removeFromCart(id)}>
                Remove from cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
