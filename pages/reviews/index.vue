<template>
  <div class="flex items-center gap-105 my-5 mx-20">
    <div>
      <h1 class="text-center text-[#16100B] text-2xl font-medium font-['Playfair_Display']">
        Rates & Reviews
      </h1>
      <div class="flex ml-2 gap-2 items-center">
        <p class="text-[#F2DE48]">{{ starRating }}</p>
        <h4 class="font-medium text-2xl font-['Montserrat']">{{ averageRating.toFixed(1) }}</h4>
      </div>
    </div>

    <h1 class="text-center text-[#16100B] text-3xl font-semibold font-['Playfair_Display']">
      {{ bookTitle }}
    </h1>
  </div>

  <div
    v-for="(review, index) in reviews"
    :key="index"
    class="text-[#16100B] flex border-[#A67B5B] border-2 mx-20 my-2 px-2 py-2 items-center"
  >
    <img class="w-14 h-14 rounded-full" :src="review.image || '/images/user.jpg'" alt="User Avatar" />
    <div class="flex flex-col justify-center ml-2">
      <h4 class="font-medium text-2xl font-['Montserrat']">{{ review.username || 'Anonymous' }}</h4>
      <p class="text-[#F2DE48]">{{ '⭐'.repeat(review.rating || 0) }}</p>
    </div>
    <p class="items-center flex ml-8 font-normal text-1xl font-['Montserrat']">{{ review.comment }}</p>
  </div>

  <div class="text-[#16100B] flex border-[#A67B5B] border-2 mx-20 my-2 px-2 py-2 items-center">
    <img class="w-14 h-14 rounded-full" src="/images/user.jpg" alt="User Avatar" />
    <div class="flex flex-col justify-center ml-2">
      <h4 class="font-medium text-2xl font-['Montserrat']">Your Name</h4>
      <p class="text-[#F2DE48]">{{ '⭐'.repeat(rating) }}</p>
    </div>
    <input
      v-model="newComment"
      class="self-stretch outline-none items-center w-full p-3 flex ml-8 font-normal text-1xl font-['Montserrat']"
      placeholder="Write A Comment"
    />
    <button
      @click="postReview"
      class="px-3 py-1 rounded-full bg-[#4E3629] text-[#FED8B1] cursor-pointer"
    >
      Post
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from '#app'

definePageMeta({ layout: 'registered' })

const route = useRoute()
// const bookId = route.params.id
const bookId = '67e9bff57f2c17d8a9893966' // For testing purposes, replace with actual book ID from route params

const reviews = ref([])
const newComment = ref('')
const rating = ref(4)
const averageRating = ref(0)
const bookTitle = ref('Loading...')

const starRating = computed(() => '⭐'.repeat(Math.round(averageRating.value)))

// 📦 Fetch book details and reviews using fetch
const fetchReviews = async () => {
  try {
    const response = await fetch(`http://localhost:5000/books/${bookId}/reviews`)
    if (!response.ok) throw new Error('Failed to fetch reviews')

    const data = await response.json()
    reviews.value = data.data || []
    bookTitle.value = data.title || 'Unknown Book'
    averageRating.value = calculateAverage(reviews.value)
  } catch (err) {
    console.error('Error fetching reviews:', err)
  }
}

// 📝 Post new review using fetch
const postReview = async () => {
  if (!newComment.value.trim()) return
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`http://localhost:5000/books/${bookId}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: rating.value, comment: newComment.value })
    })



    if (!response.ok) throw new Error('Failed to post review')

    newComment.value = ''
    await fetchReviews()
  } catch (err) {
    console.error('Error posting review:', err)
  }
}

const calculateAverage = (reviewsList) => {
  if (!reviewsList.length) return 0
  const total = reviewsList.reduce((sum, r) => sum + r.rating, 0)
  return total / reviewsList.length
}

onMounted(fetchReviews)
watch(() => bookId, fetchReviews)
</script>
