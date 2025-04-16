<template>
  <AdminHeader class="fixed top-0 left-0 w-full z-50 shadow bg-[#fdf5ed]" />

  <div class="p-6 pt-24 bg-[#4E3629]">
    <div class="flex justify-between items-start mb-6">
      <div>
        <h1 class="text-2xl font-bold text-[#FFF7EF]">All Products</h1>
        <p class="text-sm text-[#FFF7EF]">Home > All Products</p>
      </div>

      <!-- class="px-4 py-2 bg-[#FFF7EF] rounded-md text-[#4E3629] font-semibold" -->
      <button class="add-btn bg-[#A67B5B] px-5 py-3 rounded-md text-white font-semibold cursor">
        <NuxtLink
          to="/admin/add-book"
        >
          + Add new book
        </NuxtLink>
        </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      <ProductCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

  
  <script setup>
 definePageMeta({
  middleware: ['admin']
  })

  import ProductCard from '@/components/ProductCard.vue'
  import  AdminHeader  from '@/components/AdminHeader.vue'

  
  const books = [
    {
      id: 1,
      title: 'Love Brings',
      price: '110.40',
      type: 'novel',
      summary: 'Lorem ipsum is placeholder text...',
      img: 'https://placehold.co/150x200',
      sales: 1269,
      stock: 1269
    },
    {
      id: 2,
      title: 'The Alchemist',
      price: '110.40',
      type: 'novel',
      summary: 'Lorem ipsum is placeholder text...',
      img: 'https://placehold.co/150x200',
      sales: 1269,
      stock: 1269
    },
    {
      id: 3,
      title: 'The Alchemist',
      price: '110.40',
      type: 'novel',
      summary: 'Lorem ipsum is placeholder text...',
      img: 'https://placehold.co/150x200',
      sales: 1269,
      stock: 1269
    }
  ]
  </script>
  