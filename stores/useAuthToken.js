// // stores/useAuthToken.js
// import { defineStore } from 'pinia'

// export const useAuthToken = defineStore('authToken', {
//   state: () => ({
//     token: null, // This will store the JWT token
//   }),
//   actions: {
//     // Action to set the token in the state
//     setToken(token) {
//       this.token = token
//     },

//     // Action to clear the token (e.g., logout)
//     clearToken() {
//       this.token = null
//     },
//   },

//   // Getters are optional, but useful if you want to access the token more easily
//   getters: {
//     getToken: (state) => state.token,
//     isAuthenticated: (state) => !!state.token, // Checks if the token exists
//   },
// })
import { defineStore } from 'pinia'

export const useAuthToken = defineStore('authToken', {
  state: () => ({
    token: '',
  }),
  actions: {
    setToken(token) {
      this.token = token
    },
    clearToken() {
      this.token = ''
    },
  },
})
