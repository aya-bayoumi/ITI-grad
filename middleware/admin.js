export default defineNuxtRouteMiddleware(() => {
    const role = useCookie('role')
    if (role.value !== 'admin') return navigateTo('/unauthorized')
        
    })