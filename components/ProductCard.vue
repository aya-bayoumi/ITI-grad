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

    <!-- زرار Edit الصح -->
    <!-- <button
      @click="$router.push(`/admin/edit-book/${book.id}`)"
      class="w-full mt-2 bg-[#4E3629] text-[#FED8B1] hover:bg-[#3b271d] font-semibold py-2 rounded-md text-sm"
    >
      Edit
    </button> -->
    <router-link
  :to="`/admin/edit-book`"
  class="block text-center w-full mt-2 bg-[#4E3629] text-[#FED8B1] hover:bg-[#3b271d] font-semibold py-2 rounded-md text-sm"
>
  Edit
</router-link>

  </div>
</template>

<script setup>
defineProps({
  book: Object
})
</script>
