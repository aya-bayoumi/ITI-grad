
// import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// export default defineNuxtPlugin((nuxtApp) => {
//   const pinia = createPinia() // Create Pinia instance
//   pinia.use(piniaPluginPersistedstate) // Use persisted state plugin
//   // Check if Pinia has already been initialized
//   if (!nuxtApp.vueApp.config.globalProperties.$pinia) {
//     nuxtApp.vueApp.use(pinia)
//   }
// })
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = nuxtApp.$pinia
  pinia.use(piniaPluginPersistedstate)
})

