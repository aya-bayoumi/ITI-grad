// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  app:{
    head: {
    script: [
      { src: "https://apis.google.com/js/platform.js", async: true, defer: true },
    ],
  }
},
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    plugins: ['~/plugins/fontawesome.js'],
   vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
