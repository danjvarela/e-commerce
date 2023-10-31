import { cn } from "@/utils/cn"
import Link from "./ui/link"
import Button from "./ui/button"

export default function ProductCard({
  id,
  title,
  price,
  category,
  description,
  image,
}) {
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
          <Link
            className="font-semibold leading-none text-base"
            href={`/products/${id}`}
          >
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
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  )
}
