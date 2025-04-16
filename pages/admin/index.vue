<template>
  <div class="bg-[#4E3629] min-h-screen"> <!-- should be in admin layout -->
  <div class="p-6 space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center">
      <div>
          <h1 class="text-xl font-bold text-white">Dashboard</h1>
          <p class="text-sm text-gray-300">Home > Dashboard</p>
      </div>
      <div class="text-sm bg-secondary text-white rounded px-4 py-2">
          Oct 11,2023 - Nov 11,2023
      </div>
      </div>
      
      <!-- Loading state -->
      <div v-if="loading" class="text-white text-center py-8">
          Loading dashboard data...
      </div>
      
      <!-- Dashboard content when data is loaded -->
      <template v-else>
          <!-- small cards -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <smallCard 
                  title="Total Sales" 
                  :amount="stats.totalSales || '0'"
                  percentage="+34.7%" 
              />
              <smallCard 
                  title="Active Orders" 
                  :amount="stats.activeOrders || '0'" 
                  percentage="+34.7%" 
              />
              <smallCard 
                  title="Completed Orders" 
                  :amount="stats.completedOrders || '0'" 
                  percentage="+34.7%" 
              />
              <smallCard 
                  title="Return Orders" 
                  :amount="stats.returnOrders || '0'" 
                  percentage="+34.7%" 
              />
          </div>
          
          <!-- Graph + Best Sellers -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GraphCard class="md:col-span-2" :salesGraph="stats?.salesGraph || []" />
              <!-- Pass bestSellers data to the BestSellers component -->
              <BestSellers :bestSellers="stats?.bestSellers || []" />
          </div>

          <!-- Recent Orders -->
          <RecentOrders />
      </template>
  </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['admin']
  })
// -----------------------------------------------------
// ✅ Imports
// -----------------------------------------------------
import { ref, onMounted } from 'vue'
import GraphCard from '~/components/GraphCard.vue'
import BestSellers from '~/components/BestSellers.vue'
import smallCard from '~/components/smallCard.vue'
import RecentOrders from '~/components/RecentOrders.vue'

// -----------------------------------------------------
// ✅ Reactive State
// -----------------------------------------------------
const stats = ref({
  totalSales: '$0',
  activeOrders: '$0',
  completedOrders: '$0',
  returnOrders: '$0',
  bestSellers: [], // ✅ Initialize bestSellers array
  salesGraph: []
})
const loading = ref(true)
const token = useCookie('token') // ✅ Nuxt way to access cookie-stored token

// -----------------------------------------------------
// ✅ Fetch Admin Stats from Backend API
// -----------------------------------------------------
onMounted(async () => {
  try {
    console.log('Auth token:', token.value) // 🔍 Debug: Confirm token is present

    const response = await fetch('http://localhost:5000/admin/stats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token.value // ✅ Auth header for protected route
      },
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`) // ✅ Error check
    }

    const data = await response.json()
    console.log('API response:', data)

    // ✅ Make sure all fields are properly initialized even if some are missing from API
    stats.value = {
      totalSales: data.totalSales || '$0',
      activeOrders: data.activeOrders || '$0',
      completedOrders: data.completedOrders || '$0',
      returnOrders: data.returnOrders || '$0',
      bestSellers: data.bestSellers || [], // ✅ Store bestSellers data
      salesGraph: data.salesGraph || []
    }
    
    console.log('Stats loaded:', stats.value)
    console.log('Best Sellers:', stats.value.bestSellers) // 🔍 Debug: Check bestSellers data

  } catch (error) {
    console.error('❌ Failed to fetch stats:', error)

  } finally {
    loading.value = false // ✅ Hide loader even if fetch fails
  }
})
</script>