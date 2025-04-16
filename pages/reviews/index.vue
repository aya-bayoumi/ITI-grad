<template>
    <div class="flex items-center gap-105 my-5 mx-20">
      <div>
        <h1 class="text-center text-[#16100B] text-2xl font-medium font-['Playfair_Display']">
          Rates & Reviews
        </h1>
        <div class="flex ml-2 gap-2 items-center">
          <!-- النجوم حسب متوسط التقييم -->
          <p class="text-[#F2DE48]">{{ starRating }}</p>
          <h4 class="font-medium text-2xl font-['Montserrat']">{{ averageRating }}</h4>
        </div>
      </div>
  
      <!-- اسم الكتاب الديناميكي -->
      <h1 class="text-center text-[#16100B] text-3xl font-semibold font-['Playfair_Display']">
        {{ bookTitle }}
      </h1>
    </div>
  
    <!-- عرض الريڤيوهات -->
    <div
      v-for="(review, index) in reviews"
      :key="index"
      class="text-[#16100B] flex border-[#A67B5B] border-2 mx-20 my-2 px-2 py-2 items-center"
    >
      <img class="w-14 h-14 rounded-full" :src="review.image" alt="User Avatar" />
      <div class="flex flex-col justify-center ml-2">
        <h4 class="font-medium text-2xl font-['Montserrat']">{{ review.username }}</h4>
        <p class="text-[#F2DE48]">{{ "⭐".repeat(review.rating || 0) }}</p>
      </div>
      <p class="items-center flex ml-8 font-normal text-1xl font-['Montserrat']">{{ review.comment }}</p>
    </div>
  
    <!-- إضافة تعليق -->
    <div class="text-[#16100B] flex border-[#A67B5B] border-2 mx-20 my-2 px-2 py-2 items-center">
      <img class="w-14 h-14 rounded-full" :src="'/images/user.jpg'" alt="User Avatar" />
      <div class="flex flex-col justify-center ml-2">
        <h4 class="font-medium text-2xl font-['Montserrat']">Your Name</h4>
        <p class="text-[#F2DE48]">{{ "⭐".repeat(rating) }}</p>
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
  import { ref, computed, onMounted } from 'vue'
  import { useRoute } from '#app'
  definePageMeta({ layout: 'registered' })

  
  // 🟡 الكتاب من URL
  const route = useRoute()
  const bookId = route.params.id
  
  // 🟡 متغيرات
  const averageRating = ref(0)
  const rating = ref(4) // تقييم مبدئي
  const reviews = ref([])
  const newComment = ref('')
  const bookTitle = ref('')
  
  // ⭐ نجوم التقييم
  const starRating = computed(() => '⭐'.repeat(Math.round(averageRating.value)))
  
  // 💡 داتا وهمية مؤقتة كأنها من الباك
  onMounted(() => {
    bookTitle.value = 'Atomic Habits' // ممكن تيجي من backend كمان
  
    // بيانات وهمية للريڤيوهات
    reviews.value = [
      {
        username: 'JohnDoe',
        image: '/images/user.jpg',
        rating: 5,
        comment: 'Great book!',
        createdAt: '2025-04-10T10:30:00Z'
      }
    ]
  
    averageRating.value = calculateAverage(reviews.value)
  })
  
  // 🟢 إضافة تعليق جديد من الفرونت فقط
  const postReview = () => {
    if (!newComment.value.trim()) return
  
    const newReview = {
      username: 'Your Name',
      image: '/images/user.jpg',
      rating: rating.value,
      comment: newComment.value,
      createdAt: new Date().toISOString()
    }
  
    reviews.value.unshift(newReview)
  
    // إعادة حساب المتوسط
    averageRating.value = calculateAverage(reviews.value)
  
    newComment.value = ''
  }
  
  // 🔢 دالة لحساب متوسط التقييم
  const calculateAverage = (reviewsList) => {
    if (!reviewsList.length) return 0
    const total = reviewsList.reduce((sum, r) => sum + r.rating, 0)
    return total / reviewsList.length
  }
  </script>
  