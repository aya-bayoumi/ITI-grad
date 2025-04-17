<template>
    <div class="text-black py-2 px-4 flex flex-col justify-between hover:shadow-2xl w-60 rounded-lg shadow-md overflow-hidden border border-gray-200 mb-9 hover:drop-shadow-xl transform hover:scale-105"> 
      <img class="w-60" :src="image || '/images/basic.png'" @error="e => e.target.src = '/images/basic.png'" alt="Book Cover">
      
      <div class="flex justify-between items-between mt-3 gap-4">
        <h4 class="font-bold">{{ title }}</h4>
        <i
          :class="isFavorite ? 'fa-solid fa-heart text-[#4E3629]' : 'fa-regular fa-heart'"
          @click="toggleFavorite"
          class="cursor-pointer text-xl transition-all"
        />
      </div>
      <p class="font-light text-[#4E3629]">{{ category }}</p>
      <div class="flex justify-between items-center mt-3 w-full">
        <p>{{ price }} LE</p>
        <p class="font-light">{{ author }}</p>
      </div>
      <img class="h-5 w-24 mb-2" src="/images/rate.png" alt="">
      <NuxtLink :to="`/books2/${id}`" class="bg-[#4E3629] rounded-full text-white cursor-pointer px-15 py-2 w-full">
        View Book
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue'
  
  const props = defineProps(['id', 'image', 'title', 'category', 'author', 'price'])
  const emit = defineEmits(['unfavorite'])
  
  const isFavorite = ref(false)
  
  watchEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]')
    isFavorite.value = favs.some(book => book.id === props.id)
  })
  
  const toggleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem('favorites') || '[]')
  
    if (isFavorite.value) {
      favs = favs.filter(book => book.id !== props.id)
      emit('unfavorite', props.id) // useful in favorites page
    } else {
      const bookData = { ...props }
      favs.push(bookData)
    }
  
    localStorage.setItem('favorites', JSON.stringify(favs))
    isFavorite.value = !isFavorite.value
  }
  </script>
  