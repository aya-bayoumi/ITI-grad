// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-29",
  app: {
    head: {
      link: [{ rel: "icon", href: "/favicon.ico" }],
      title:"Qera'a",
    },
  },

  devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
   vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
})