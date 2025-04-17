<template>
    <div class="min-h-screen flex items-center justify-center bg-[#fdf6ee] px-4">
      <div class="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        <div class=" text-6xl mb-4">
            <ExclamationTriangleIcon class="w-16 h-16 mx-auto" />
        </div>
        <h1 class="text-2xl font-semibold text-gray-800 mb-2">Unauthorized Access</h1>
        <p class="text-gray-600 mb-6 ">
          Sorry, you are not authorized to view this page or perform this action.
        </p>
        <NuxtLink to="/" class="text-white bg-[#4e3729] hover:bg-[#9e805e] transition px-6 py-2 rounded-xl">
          Go back to Home
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid'
</script>
  