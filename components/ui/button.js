import { cn } from "@/utils/cn"

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "w-fit border text-sm p-2 rounded-lg select-none",
        "bg-sky-600 text-slate-50 hover:bg-sky-500 active:bg-sky-600 transition"
      )}
      {...props}
    >
      {children}
    </button>
  )
}
