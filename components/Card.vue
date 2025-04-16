<template>
    <NuxtLink :to="`/books2/${id}`"class="text-black mb-5"> 
        <img class="w-50 h-70" :src="image" alt="">
        
        <div class="flex justify-between items-center mt-3">
            <h4 class="font-bold">{{title}}</h4>
            <i class="fa-regular fa-heart"></i>
        </div>
        <p class="font-light text-[#4E3629]">{{category}}</p>
        <div class="flex gap-5">
            <p>{{ price }} LE</p>
            <p class="font-light">{{author}}</p>
        </div>
        <p>⭐⭐⭐⭐⭐</p>
        <button class="bg-[#4E3629] w-40 rounded-full text-white">View Book</button>
    </NuxtLink>
</template>
<script setup>
defineProps(['id', 'image', 'title', 'category', 'author' , 'price'])
</script>
