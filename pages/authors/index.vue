
<!-- <script setup>
import AuthorCard from '@/components/AuthorCard.vue'
const { data: authors } = await useFetch('http://localhost:5000/authors?page=1&limit=10')
</script> -->

<template>
  <div class="py-10 bg-[#fdf6ee]">
    <!-- Cards Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
      <!-- Show skeletons while loading -->
      <template v-if="loading">
        <div v-for="n in 10" :key="n" class="animate-pulse w-40 h-52 bg-[#f1e4d8] rounded-xl"></div>
      </template>

      <!-- Show actual authors once loaded -->
      <AuthorCard
        v-else
        v-for="author in authors"
        :key="author._id"
        :author="author"
      />
    </div>

    <!-- Pagination -->
    <div class="flex items-end justify-center space-x-1 mt-6">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] disabled:opacity-50 border border-[#A67B5B]"
      >
        Prev
      </button>

      <template v-for="page in getPageNumbers()" :key="page">
        <span v-if="page === '...'" class="px-2 py-1 text-[#4E3629]">...</span>
        <button
          v-else
          @click="goToPage(page)"
          class="px-3 py-1 rounded-md border border-[#A67B5B]"
          :class="{
            'bg-[#4E3629] text-[#FED8B1] font-semibold': page === currentPage,
            'text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629]': page !== currentPage
          }"
        >
          {{ page }}
        </button>
      </template>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border border-[#A67B5B]"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthorCard from '@/components/AuthorCard.vue'

const route = useRoute()
const router = useRouter()

const currentPage = ref(parseInt(route.query.page || '1'))
const totalPages = ref(10)
const authors = ref([])
const loading = ref(true)

const fetchAuthors = async () => {
  loading.value = true
  try {
    const res = await fetch(`http://localhost:5000/authors?page=${currentPage.value}&limit=10`)
    const data = await res.json()
    authors.value = data.authors
    totalPages.value = data.totalPages
  } catch (err) {
    console.error('Failed to fetch authors:', err)
  } finally {
    loading.value = false
  }
}

watch(() => currentPage.value, fetchAuthors, { immediate: true })

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    router.push({ query: { ...route.query, page } })
  }
}
const prevPage = () => goToPage(currentPage.value - 1)
const nextPage = () => goToPage(currentPage.value + 1)

const getPageNumbers = () => {
  const pages = []
  const maxPagesToShow = 3

  if (totalPages.value <= 5) {
    for (let i = 1; i <= totalPages.value; i++) pages.push(i)
  } else {
    if (currentPage.value <= maxPagesToShow) {
      pages.push(...[1, 2, 3, '...', totalPages.value])
    } else if (currentPage.value >= totalPages.value - 2) {
      pages.push(...[1, '...', totalPages.value - 2, totalPages.value - 1, totalPages.value])
    } else {
      pages.push(...[1, '...', currentPage.value, '...', totalPages.value])
    }
  }

  return pages
}
</script>

