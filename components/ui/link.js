import { cn } from "@/utils/cn"
import NextLink from "next/link"

export default function Link({ children, className, ...rest }) {
  return (
    <NextLink
      className={cn(
        "text-sm text-sky-700 hover:text-sky-500 active:text-sky-700 transition",
        className
      )}
      {...rest}
    >
      {children}
    </NextLink>
  )
}
