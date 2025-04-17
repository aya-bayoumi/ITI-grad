import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => ({
    email: '',
    resetCode: '',
    token: '', // ✅ Add token

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
    // setToken(token) {
    //   this.token = token
    //   localStorage.setItem('token', token)
    // },
    // initializeToken() {
    //   const token = localStorage.getItem('token')
    //   if (token) {
    //     this.token = token
    //   }
    // },
    // logout() {
    //   this.token = null
    //   localStorage.removeItem('token')
    // },
  },
  persist: true, // ✅ 
})
