<template>
    <div class="bg-[#F9F5F2] p-4 rounded shadow text-primary">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-bold">Sale Graph</h2>
        <div class="space-x-2 text-xs">
          <!-- <button class="bg-accent px-2 py-1 rounded text-white">Weekly</button> -->
          <button class="px-2 py-1 rounded border border-primary">Monthly</button>
          <!-- <button class="px-2 py-1 rounded border border-primary">Yearly</button> -->
        </div>
      </div>
      <div class="h-40 bg-white rounded border">
          <Line :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </template>

<script setup>
// -----------------------------------------------------
// ✅ Imports
// -----------------------------------------------------
import { ref, onMounted, computed } from 'vue'
import { Line } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler, // ✅ Needed for area fill
} from 'chart.js'

// ✅ Register all necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
)

// -----------------------------------------------------
// ✅ Reactive Data
// -----------------------------------------------------
const stats = ref({ salesGraph: [] })
const loading = ref(true)
const token = useCookie('token') // Assumes you're in Nuxt and using cookie-based auth

// -----------------------------------------------------
// ✅ Fetch Data from API
// -----------------------------------------------------
onMounted(async () => {
  try {
    const response = await fetch('http://localhost:5000/admin/stats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token.value,
      },
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    stats.value = data
    console.log('✅ Stats loaded:', data)

  } catch (error) {
    console.error('❌ Failed to fetch stats:', error)
  } finally {
    loading.value = false
  }
})

// -----------------------------------------------------
// ✅ Generate Dynamic Chart Data
// -----------------------------------------------------
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const chartData = computed(() => {
  const graphData = stats.value?.salesGraph || []

  return {
    labels: graphData.map(item => {
      const month = item._id?.month || 0
      return months[month - 1] ?? 'N/A'
    }),
    datasets: [
      {
        label: 'Sales',
        data: graphData.map(item => item.totalSales),
        borderColor: '#4E3629',
        backgroundColor: 'rgba(78, 54, 41, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  }
})

// -----------------------------------------------------
// ✅ Chart Options
// -----------------------------------------------------
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      min: 0,           // 👈 Minimum value
      max: 500,        // 👈 Maximum value
      ticks: {
        stepSize: 50,  // 👈 Distance between ticks (optional)
      },
    },
  },
}
</script>

  