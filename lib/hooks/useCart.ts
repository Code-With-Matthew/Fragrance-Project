import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Product, CartItem } from '@/lib/types'

interface CartState {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product, quantity = 1) => 
        set((state) => {
          const existing = state.items.find(item => item.id === product.id)
          return {
            items: existing
              ? state.items.map(item => 
                  item.id === product.id 
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                )
              : [...state.items, { ...product, quantity, addedAt: new Date() }]
          }
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter(item => item.id !== productId)
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
        })),
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)