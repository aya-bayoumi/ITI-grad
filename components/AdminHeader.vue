<template>
  <header class="bg-[#fdf5ed] flex justify-end items-center p-4 shadow-sm relative">
    <div class="flex items-center space-x-4">
      <!-- Search Icon -->
      <button aria-label="Search" class="text-[#4E3629] hover:text-[#2e1e13]">
        <Icon name="heroicons:magnifying-glass" size="24" />
      </button>

      <!-- Notification Bell -->
      <button aria-label="Notifications" class="text-[#4E3629] hover:text-[#2e1e13]">
        <Icon name="heroicons:bell" size="24" />
      </button>

      <!-- Admin Dropdown -->
      <div class="relative" @click.outside="showDropdown = false">
        <button
          @click="showDropdown = !showDropdown"
          class="bg-[#4b3220] text-[#fdf5ed] font-semibold px-4 py-2 rounded-md flex items-center space-x-1"
        >
          <span>ADMIN</span>
          <Icon name="heroicons:chevron-down" size="20" />
        </button>

        <!-- Dropdown -->
        <div
          v-if="showDropdown"
          class="absolute top-full right-0 mt-2 w-48 bg-[#fff7ef] text-[#4e3629] shadow-md rounded-md overflow-hidden z-50"
        >
          <a href="#" class="block px-4 py-2 text-sm hover:bg-[#f1e3d6]">Admin</a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-[#f1e3d6]">Change Password</a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-[#f1e3d6]">Logout</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const showDropdown = ref(false)
</script>
