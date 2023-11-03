import { useLocalStorage } from "@uidotdev/usehooks"
import { useEffect } from "react"

export const useCart = () => {
  const [cart, setCart] = useLocalStorage("cart", {})

  const addToCart = (id) => {
    setCart((prevCart) => {
      if (!prevCart[id]) {
        return { ...prevCart, [id]: 1 }
      }

      return { ...prevCart, [id]: prevCart[id] + 1 }
    })
  }

  useEffect(() => {
    console.log("cart", cart)
  }, [cart])

  return { cart, addToCart }
}
