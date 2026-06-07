'use client'

import { createContext, useContext, useState } from 'react'
import { menuItems } from '@/lib/menuData'

export type CartItem = {
  title: string
  price: number
  unit: string
  emoji: string
  qty: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: typeof menuItems[0]) => void
  decrease: (title: string) => void
  clearCart: () => void
  totalItems: number
  total: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: typeof menuItems[0]) => {
    const itemWithEmoji = item as typeof menuItems[0] & { emoji?: string }
    setCart((prev) => {
      const exist = prev.find((c) => c.title === itemWithEmoji.title)
      if (exist) return prev.map((c) =>
        c.title === itemWithEmoji.title ? { ...c, qty: c.qty + 1 } : c
      )
      return [...prev, {
        title: itemWithEmoji.title,
        price: itemWithEmoji.price,
        unit: itemWithEmoji.unit,
        emoji: itemWithEmoji.emoji ?? '',
        qty: 1,
      }]
    })
  }

  const decrease = (title: string) => {
    setCart((prev) =>
      prev.map((c) => c.title === title ? { ...c, qty: c.qty - 1 } : c)
          .filter((c) => c.qty > 0)
    )
  }

  const clearCart = () => setCart([])

  const totalItems = cart.reduce((sum, c) => sum + c.qty, 0)
  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, decrease, clearCart, totalItems, total }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook ใช้งานง่าย
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
