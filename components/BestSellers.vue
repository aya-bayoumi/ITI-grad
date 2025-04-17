<template>
  <div class="bg-[#F9F5F2] p-4 rounded shadow text-primary">
    <h2 class="font-bold mb-4">Best Sellers</h2>

    <!-- Show loading state if no data -->
    <div v-if="!bestSellers || bestSellers.length === 0" class="text-center py-4 text-gray-500">
      No best sellers data available
    </div>

    <!-- Loop through best sellers when data is available -->
    <div
      v-else
      v-for="book in bestSellers"
      :key="book.bookId"
      class="flex justify-between items-center mb-3"
    >
      <div class="flex items-center space-x-2">
        <!-- Placeholder box for book image/icon -->
        <!-- <div class="w-8 h-8 bg-gray-300 rounded"></div> -->
        <div class="w-10 h-10 rounded overflow-hidden bg-gray-300 flex items-center justify-center">
        <img
          v-if="book.image"
          :src="book.image"
          alt="Book cover"
          class="w-full h-full object-cover"
          @error="book.image = ''"
        />
      </div>

        <span class="font-medium">{{ book.title }}</span>
      </div>
      <div class="text-right">
        <p class="font-semibold">Sold</p>
        <p class="text-xs text-gray-500">{{ book.totalSold }} sales</p>
      </div>
    </div>

    <!-- Optional report button -->
    <!-- <button class="w-full bg-accent text-white py-1 rounded mt-2 text-sm">Report</button> -->
  </div>
</template>

<script setup>
// ✅ Receive bestSellers data as props from parent component
// This eliminates the need for a separate API call
defineProps({
  bestSellers: {
    type: Array,
    default: () => []
  }
})

// 🔄 REMOVED: Separate API call that was causing the issue
// We now receive data as props from the parent component
</script>