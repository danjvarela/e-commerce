import { API_URL } from "@/utils/constants"
import { useEffect, useState } from "react"

export function useProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/products?limit=10`)
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])

  return products
}
