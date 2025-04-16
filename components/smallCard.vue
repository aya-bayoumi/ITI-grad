<template>
    <div class="flex items-center bg-[#F9F5F2] p-4 rounded shadow text-[#4E3629]">
        <div class="bg-[#CBA58D] p-4 rounded w-16 h-16 m-4 flex items-center justify-center flex-shrink-0">
            <ShoppingBagIcon class="w-8 h-8" />
        </div>
        <div class="text-primaryA flex-grow">
            <h4 class="text-lg font-bold">{{ title }}</h4>
            <h4 class="font-bold">{{ amount }}</h4>
            <p class="text-xs text-green-600">{{ percentage }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: [String, Number],
    default: '$0'
  },
  percentage: {
    type: String,
    default: '0%'
  }
})

import { ShoppingBagIcon } from '@heroicons/vue/24/solid'
</script>