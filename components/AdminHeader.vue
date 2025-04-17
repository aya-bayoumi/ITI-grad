<template>
  <header class="bg-[#fdf5ed] flex justify-between items-center p-4 shadow-sm relative">
    <!-- Logo/Site Name -->
    <div class="text-2xl font-bold text-[#fdf5ed]">ADMIN PANEL</div>

    <div class="flex items-center space-x-4">
      <!-- Search Icon -->
      <button aria-label="Search" class="text-[#4E3629] hover:text-[#2e1e13]">
        <i class="fas fa-search"></i>
      </button>

      <!-- Notification Bell -->
      <!-- <button  aria-label="Notifications" class="text-[#4E3629] hover:text-[#2e1e13]"
       @click="toggleNotifications">
        <i class="fas fa-bell"></i>
      </button> -->
      <!-- Notification Bell -->
<div class="relative">
  <button @click="toggleNotifications" class="text-[#4E3629] hover:text-[#2e1e13] relative">
    <i class="fas fa-bell"></i>
    <!-- عدد الإشعارات الغير مقروءة -->
    <!-- <span
      v-if="unreadCount > 0"
      class="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
    >
      {{ unreadCount }}
    </span> -->
  </button>

  <!-- Notification Dropdown -->
  <div
    v-if="showNotifications"
    class="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
  >
    <div class="py-2 px-4 border-b border-[#f1e3d6] flex justify-between items-center">
      <span class="text-sm font-semibold text-[#4E3629]">Notifications</span>
      <button class="text-xs text-[#A67B5B] hover:underline" @click="markAllAsRead">Mark all as read</button>
    </div>
    <div class="max-h-60 overflow-y-auto">
      <div
        v-for="(notif, index) in notifications"
        :key="index"
        class="px-4 py-2 border-b border-[#f1e3d6] text-sm"
        :class="notif.read ? 'text-[#A67B5B]' : 'text-[#4E3629] font-semibold'"
      >
        <div>{{ notif.title }}</div>
        <div class="text-xs">{{ notif.date }}</div>
      </div>
    </div>
  </div>
</div>


      <!-- Admin Dropdown -->
      <div class="relative">
        <button
        
          @click="showDropdown = !showDropdown"
          class="flex items-center space-x-2 focus:outline-none"
        >
          <!-- Display the full name inside the circle -->
          <div class="w-10 h-10  bg-[#4E3629] w-20 h-10 rounded flex items-center justify-center text-[#fdf5ed] font-bold text-lg">Admin</div>
          <!-- <i class="fas fa-chevron-down text-[#4E3629]"></i> -->
        </button>

        <!-- Dropdown Menu -->
        <div
          v-if="showDropdown"
          class="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        >
          <div class="py-1">
            <!-- User Info -->
            <div class="px-4 py-3 border-b border-[#f1e3d6]">
              <p class="text-sm text-[#4E3629] font-medium">Admin User</p>
              <p class="text-xs text-[#A67B5B]">admin@example.com</p>
            </div>
            
            <!-- Menu Items -->
            <a href="#" class="block px-4 py-2 text-sm text-[#4E3629] hover:bg-[#fdf5ed]">
              <i class="fas fa-key text-[#4E3629]"></i> Change Password
            </a>
            <div class="border-t border-[#f1e3d6]"></div>
            <a @click.prevent="logout" class="block px-4 py-2 text-sm text-[#4E3629] hover:bg-[#fdf5ed]">
              <i class="fas fa-sign-out-alt text-[#4E3629]"></i> Logout
            </a>
          </div>
        </div>
        
    
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const showDropdown = ref(false)

const showNotifications = ref(false)
const unreadCount = ref(4)

const notifications = ref([
  { title: 'New user signed up', date: 'Apr 16, 2025', read: false },
  { title: 'Payment received', date: 'Apr 15, 2025', read: false },
  { title: 'Server backup completed', date: 'Apr 14, 2025', read: true },
])

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
}

const markAllAsRead = () => {
  notifications.value = notifications.value.map(n => ({ ...n, read: true }))
  unreadCount.value = 0
}

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
/* Optionally, add some custom styles for the dropdown if needed */
</style>
