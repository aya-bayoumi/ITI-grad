<template>
  <AdminHeader class="fixed top-0 left-0 w-full z-50 shadow bg-[#fdf5ed]" />

  <div class="p-6 
  pt-24 bg-[#4E3629]">
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
    <div class="flex items-end justify-center space-x-1 mt-6">
      <!-- Previous Button -->
      <!-- Prev Button -->
<button
  class="px-3 py-1 rounded-md bg-[#FED8B1] text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] disabled:opacity-50 border border-[#A67B5B]"
  disabled
>
  Prev
</button>

<!-- Page Numbers -->
<button class="px-3 py-1 rounded-md bg-[#4E3629] text-[#FED8B1] font-semibold border border-[#A67B5B]">1</button>
<button class="px-3 py-1 rounded-md bg-[#FED8B1] text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border border-[#A67B5B]">2</button>
<button class="px-3 py-1 rounded-md bg-[#FED8B1] text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border border-[#A67B5B]">3</button>
<span class="px-2 py-1 text-[#FED8B1]">...</span>
<button class="px-3 py-1 rounded-md bg-[#FED8B1] text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border border-[#A67B5B]">10</button>

<!-- Next Button -->
<button
  class="px-3 py-1 rounded-md bg-[#FED8B1] text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border border-[#A67B5B]"
>
  Next
</button>

  </div>
  </div>

  
</template>

  
  <script setup>
definePageMeta({
  middleware: ['admin']
})

const page = ref(1)
const totalPages = ref(1)

const { data: books, pending, error, refresh } = await useAsyncData(
  'books',
  async () => {
    const response = await $fetch(`http://localhost:5000/books?page=${page.value}`)
    totalPages.value = response.totalPages
    return response.data
  }
)

function nextPage() {
  if (page.value < totalPages.value) {
    page.value++
    refresh()
  }
}

function prevPage() {
  if (page.value > 1) {
    page.value--
    refresh()
  }
}
  </script>
  