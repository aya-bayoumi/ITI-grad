// export default defineNuxtRouteMiddleware((to, from) => {
//     const auth = useAuthStore()
  
//     if (auth.isLoggedIn) {
//       to.meta.layout = 'registered'
//     } else {
//       to.meta.layout = 'default'
//     }
//   })



// export default defineNuxtRouteMiddleware((to, from) => {
//   const auth = useAuthStore()

//   // لو الصفحة فيها layout معين، سيبه زي ما هو
//   if (to.meta.layout) return

//   // لو مفيش، ساعتها اختار بناءً على الحالة
//   if (auth.isLoggedIn) {
//     to.meta.layout = 'registered'
//   } else {
//     to.meta.layout = 'default'
//   }
// })
export default defineNuxtRouteMiddleware((to, from) => {
    const role = useCookie('role') // SSR-safe!

    // Skip layout logic on specific pages
  if (['/login', '/signUp'].includes(to.path)) return
    if (role.value === 'admin') {
      to.meta.layout = 'admin'
    } else if (role.value === 'user') {
      to.meta.layout = 'registered'
    } else {
      to.meta.layout = 'default'
    }
  })
  