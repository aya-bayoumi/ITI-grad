<template>
    <div class="container">
      <div class="review-card col-span-12 shadow-md p-4 flex flex-col sm:flex-row items-start md:items-center mx-auto gap-2 md:gap-4 border border-[#A67B5B] rounded-sm bg-[#FFEAD6] text-[#16100B]">
        
        <div class="flex items-center gap-2">
          <img :src="userImage" alt="User" class="w-12 h-12 rounded-full object-cover" />
  
          <div class="flex flex-col">
            <h3 class="text-lg font-semibold">{{ userName }}</h3>
            <div class="flex">
              <span v-for="star in 5" :key="star" class="relative">
                <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l2.39 6.61H19l-5.5 4.39L15.88 19 10 15.5 4.12 19l2.38-6L1 8.61h6.61L10 2z"></path>
                </svg>
                <svg class="w-5 h-5 absolute top-0 left-0 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" :style="{ clipPath: getStarClip(star) }">
                  <path d="M10 2l2.39 6.61H19l-5.5 4.39L15.88 19 10 15.5 4.12 19l2.38-6L1 8.61h6.61L10 2z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
  
        <!-- responsive -->
        <p class="flex-1 break-words sm:mt-2 md:mt-0">{{ reviewText }}</p>
      </div>
    </div>
  </template>
  
  
  
  
  <script setup>
  import { ref } from "vue";
  
  const userImage = ref("images/user.jpg");
  const userName = ref("John Doe");
  const rating = ref(4.3);
  const reviewText = ref(
    "This is an amazing product! I really love it. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.This is an amazing product! I really love it. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
  
  const getStarClip = (star) => {
    const fullStars = Math.floor(rating.value);
    const remainder = rating.value - fullStars;
    if (star <= fullStars) return "inset(0 0 0 0)";
    if (star === fullStars + 1) return `inset(0 ${(1 - remainder) * 100}% 0 0)`;
    return "inset(0 100% 0 0)";
  };
  </script>
  