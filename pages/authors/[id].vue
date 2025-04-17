<template>
    <div class="max-w-7xl mx-auto px-6 py-14 text-[#4E3629] bg-white">
    <!-- Breadcrumb -->
    <p class="text-sm mb-6 text-[#7B5E45] font-medium">Authors &gt; Author details</p>

    <!-- Author Info -->
    <div class="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
      <img 
        :src="author.image || defaultImage" 
        alt="Author" 
        class="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#A67B5B]"
      />
      <div class="text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ author.name }}</h1>
        <p class="text-base md:text-lg text-[#5C4637] max-w-3xl">{{ author.bio }}</p>
      </div>
    </div>

    <!-- Books Section -->
    <h2 class="text-2xl font-semibold mb-6">Author books</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <Card 
        v-for="book in books" 
        :key="book._id" 
        :id="book._id"
        :image="book.image"
        :title="book.title"
        :category="book.category"
        :author="book.author.name"
        :price="book.price"
      />
    </div>
  </div>
    <!-- here the shelf -->
    <div>
          <img class="h-15 w-[100%]"  src="/images/WoodenShelf.png" alt="">
      </div>
  </template>
  
  <script setup>
  import Card from '~/components/Card.vue'
  import { useRoute } from 'vue-router'
  import { ref, onMounted } from 'vue'
  
  const route = useRoute()
  const author = ref({})
  const books = ref([])
  const defaultImage = '/images/author-image.jpg' // Make sure this image exists in /public
  
  onMounted(async () => {
    try {
      const res = await fetch(`http://localhost:5000/authors/${route.params.id}`)
      const data = await res.json()
      author.value = data.author
      books.value = data.books
    } catch (error) {
      console.error("Error fetching author data:", error)
    }
  })
  </script>
  