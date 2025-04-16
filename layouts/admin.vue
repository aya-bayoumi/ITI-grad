<template>
    <div class="flex h-screen bg-[#fef7f1]">
      
       <!-- <AdminHeader /> -->
      <AdminSidebar />
  
      <!-- Main content -->
      <main class="ml-64 p-6 w-full overflow-y-auto">
        <slot />
      </main>
    </div>
  </template>
  
  <script setup>
  import AdminSidebar from '~/components/AdminSidebar.vue'
  // import  AdminHeader  from '@/components/AdminHeader.vue'
    </script>
  