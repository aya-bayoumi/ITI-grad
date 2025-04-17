// stores/favorites.ts
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as any[]
  }),
  actions: {
    add(book: any) {
      if (!this.favorites.some(item => item._id === book._id)) {
        this.favorites.push(book)
      }
    },
    remove(bookId: string) {
      this.favorites = this.favorites.filter(item => item._id !== bookId)
    },
    isFavorite(bookId: string) {
      return this.favorites.some(item => item._id === bookId)
    }
  }
})
