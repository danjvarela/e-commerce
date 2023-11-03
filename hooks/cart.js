import { useLocalStorage } from "@uidotdev/usehooks"

export const useCart = () => {
  const [cart, setCart] = useLocalStorage("cart", {})

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (!prevCart[product.id]) {
        return { ...prevCart, [product.id]: { product, count: 1 } }
      }

      return {
        ...prevCart,
        [product.id]: { product, count: prevCart[product.id].count + 1 },
      }
    })
  }

  const totalItems = Object.entries(cart).reduce((acc, entry) => {
    acc += entry[1].count
    return acc
  }, 0)

  return { cart, addToCart, totalItems }
}
