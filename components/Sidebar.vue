<template>
    <div class="sidebar">
      <ul>
        <li><nuxt-link to="/profile" active-class="active">Profile</nuxt-link></li>
        <li><nuxt-link to="/profile/orders" active-class="active">Orders</nuxt-link></li>
        <li><nuxt-link to="/profile/downloads" active-class="active">Downloads</nuxt-link></li>
        <li><nuxt-link to="/profile/plans" active-class="active">Plans</nuxt-link></li>
        <li><a @click.prevent="logout">Logout</a></li>
      </ul>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const logout = async () => {
  auth.logout() ;   
  // await router.push('/') ;
  // Clear cookies
  useCookie('token').value = null
  useCookie('username').value = null
  useCookie('role').value = null
  // Redirect to login or home
  return navigateTo('/')
}
</script>

<style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    /* padding: 40px 0; */
  }
  .sidebar ul {
    list-style: none;
    
  }
  .sidebar li {
    margin:  50px;
    padding: 10px 0 0;
  }
  .active {
  font-weight: bold;
    color:  #4E3629;
}
  a{
  cursor: pointer;
}

</style>
  