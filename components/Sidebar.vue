<template>
  <div>
    <!-- Mobile/Tablet Horizontal Navigation (Top) -->
    <div class="lg:hidden w-full">
      <ul class="flex justify-center py-4 px-2 space-x-2 md:space-x-4">
        <li>
          <nuxt-link to="/profile" active-class="active" class="px-2 py-1 md:px-3 md:py-2 text-sm md:text-base">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile/orders" active-class="active" class="px-2 py-1 md:px-3 md:py-2 text-sm md:text-base">Orders</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile/downloads" active-class="active" class="px-2 py-1 md:px-3 md:py-2 text-sm md:text-base">Downloads</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile/plans" active-class="active" class="px-2 py-1 md:px-3 md:py-2 text-sm md:text-base">Plans</nuxt-link>
        </li>
        <li>
          <a @click.prevent="logout" class="px-2 py-1 md:px-3 md:py-2 text-sm md:text-base cursor-pointer">Logout</a>
        </li>
      </ul>
    </div>

    <!-- Desktop Vertical Sidebar -->
    <div class="hidden lg:block sidebar">
      <ul>
        <li class="mt-12 ml-12">
          <nuxt-link to="/profile" active-class="active">Profile</nuxt-link>
        </li>
        <li class="mt-12 ml-12">
          <nuxt-link to="/profile/orders" active-class="active">Orders</nuxt-link>
        </li>
        <li class="mt-12 ml-12">
          <nuxt-link to="/profile/downloads" active-class="active">Downloads</nuxt-link>
        </li>
        <li class="mt-12 ml-12">
          <nuxt-link to="/profile/plans" active-class="active">Plans</nuxt-link>
        </li>
        <li class="mt-12 ml-12">
          <a @click.prevent="logout" class="cursor-pointer">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const logout = async () => {
  auth.logout();
  useCookie('token').value = null
  useCookie('username').value = null
  useCookie('role').value = null
  return navigateTo('/')
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
}

.sidebar ul {
  list-style: none;
}
li{
  padding: 10px;

}

.active {
  font-weight: bold;
  color: #4E3629;
}

a {
  cursor: pointer;
}
</style>

<!-- <template>
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
   -->