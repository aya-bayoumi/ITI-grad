<template>
    <NuxtLink
      :to="`/authors/${author._id}`"
      class="flex flex-col items-center bg-[#fdf6ee] shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300 text-center w-40"
    >
      <!-- image (or fallback) -->
      <div class="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-brown-700">
        <img
          :src="author.image || defaultImage"
          alt="Author image"
          class="w-full h-full object-cover"
        />
      </div>
  
      <!-- name -->
      <h3 class="font-semibold text-brown-900 text-sm mb-1">{{ author.name }}</h3>
  
      <!-- conditional metric -->
      <p v-if="author.bookCount !== undefined" class="text-xs text-gray-500">
        {{ author.bookCount }} book<span v-if="author.bookCount !== 1">s</span>
      </p>
      <p v-else-if="author.totalSold !== undefined" class="text-xs text-gray-500">
        {{ author.totalSold }} sold
      </p>
    </NuxtLink>
  </template>
  
  <script setup>
  const props = defineProps({
    author: {
      type: Object,
      required: true,
    },
  });
  
  const defaultImage = "/images/author-image.jpg";
  </script>
  
  <style scoped>
  .text-brown-900 {
    color: #5C4033;
  }
  .border-brown-700 {
    border-color: #3D2B1F;
  }
  </style>
  