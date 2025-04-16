<template>
    <div class="bg-white rounded-xl shadow-sm p-4 space-y-3">
      <img :src="book.img" alt="book image" class="rounded-md w-full h-40 object-cover" />
      <div class="font-bold">{{ book.title }}</div>
      <div class="text-sm text-gray-500">{{ book.type }}</div>
      <div class="font-semibold text-orange-600">₹{{ book.price }}</div>
      <p class="text-sm text-gray-400">{{ book.summary }}</p>
  
      <div class="text-xs text-gray-600 space-y-1">
        <div>📈 Sales: {{ book.sales }}</div>
        <div>📦 Remaining: {{ book.stock }}</div>
      </div>
  
      <n-button size="small" tertiary block>Edit</n-button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    book: Object
  })
  </script>
  