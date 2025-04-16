export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
  
    if (auth.isLoggedIn) {
      to.meta.layout = 'registered'
    } else {
      to.meta.layout = 'default'
    }
  })
  