
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((total, item) => total + item.qty, 0),

    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.harga * item.qty,
        0
      )
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find(
        item => item.id === product.id
      )

      if (existing) {
        existing.qty++
      } else {
        this.items.push({
          ...product,
          qty: 1
        })
      }
    },

    removeFromCart(id) {
      this.items = this.items.filter(
        item => item.id !== id
      )
    }
  }
})
