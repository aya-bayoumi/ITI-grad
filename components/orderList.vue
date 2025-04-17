<template>
  <div class="flex justify-between w-full py-4 border-b border-gray-300">
    <div class="flex gap-2 items-start w-1/5">
      <input type="checkbox" class="mt-1" />
      <div>
        <p v-for="(book, index) in order.books" :key="index">
          {{ book.title }} x{{ book.quantity }}
        </p>
      </div>
    </div>
    <p class="w-1/5 truncate">{{ order._id }}</p>
    <p class="w-1/5">{{ formatDate(order.createdAt) }}</p>
    <p class="w-1/5">{{ order.user.email }}</p>
    <p class="w-1/12">{{ order.status }}</p>
    <p class="w-1/12">{{ order.total }} $</p>
  </div>
</template>

<script setup>
defineProps({
  order: Object
})

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-GB')
}
</script>
