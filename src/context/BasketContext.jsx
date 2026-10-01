import React, { createContext, useContext, useState } from 'react'

const BasketContext = createContext()

export function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState([])

  const addToBasket = (product) => {
    setBasketItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }

      return [...currentItems, { ...product, qty: 1 }]
    })
  }

  return (
    <BasketContext.Provider value={{ basketItems, addToBasket }}>
      {children}
    </BasketContext.Provider>
  )
}

export function useBasket() {
  return useContext(BasketContext)
}
