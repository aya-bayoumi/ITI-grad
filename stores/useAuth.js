import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => ({
    email: '',
    resetCode: '',
  }),
  actions: {
    setEmail(email) {
      this.email = email
    },
    setResetCode(code) {
      this.resetCode = code
    },
    clearReset() {
      this.email = ''
      this.resetCode = ''
    },
  },
})
