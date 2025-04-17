<!-- <script setup>
defineProps({
  name: String,
  image: String
});
</script> -->

<template>

  <!-- صورة المؤلف -->
  <!-- <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-950">
    <img:src="image" :alt="name" class="w-full h-full object-cover" />
  </div>
   -->
  <!-- اسم المؤلف -->
  <!-- <p class="mt-2 text-lg font-semibold text-brown-900">{{ name }}</p> -->

<!-- Top Authors Section -->
<!-- <section class="py-12 px-4 sm:px-6 lg:px-8 bg-[#FFF7EF]">
<div class="max-w-7xl mx-auto">
  
   Center the heading  -->
   <!-- <div class="flex items-center">
<h2 class="text-3xl font-bold text-yellow-950 mb-8 flex-1">Top Authors</h2>
<a href="#" class="inline-block px-6 py-2 text-yellow-950 underline flex-1 text-right">view more</a>
</div>

  Scrollable flex container
  <div class="flex overflow-x-auto pb-6 gap-4 scrollbar-hide justify-center"> 
    Author Cards
    <div class="flex overflow-x-auto pb-6 gap-4 scrollbar-hide justify-center ">
<div 
  v-for="(author, index) in authors" 
  :key="index" 
  class="flex-shrink-0 w-44 p-2"
>
  <div class="flex flex-col items-center">
    <img 
      :src="author.image" 
      :alt="author.name"
      class="w-30 h-30 rounded-full object-cover border-4 border-yellow-950 "
    >
    <h3 class="text-lg font-medium text-yellow-950 mt-2">{{ author.name }}</h3>
    <p class="text-sm text-yellow-950 text-center mt-1">{{ author.desc }}</p>
  </div>
</div>
</div>
  </div>
</div>
</section> -->
<section class="py-12 px-4 sm:px-6 lg:px-8 bg-[#FFF7EF]">
  <div class="max-w-7xl mx-auto">
    <!-- Top bar: title + view more -->
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-3xl font-bold text-yellow-950">Top Authors</h2>
      <NuxtLink
        to="/authors"
        class="inline-block px-4 py-2 text-yellow-950 underline text-sm hover:text-[#7B5E45] transition"
      >
        view more
      </NuxtLink>
    </div>

    <!-- Scrollable container with AuthorCard components -->
    <div class="flex overflow-x-auto gap-6 pb-4 scrollbar-hide justify-between">
      <div
        v-for="author in authors"
        :key="author._id"
        class="flex-shrink-0 w-44"
      >
        <AuthorCard :author="author" />
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
// const authors = [
// {
//   name: "J.K. Rowling",
//   image: "https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=612x612&w=0&k=20&c=FtC05luuxRpiKRj5F84e2CiPf0h_ZuX6o7o5JwlNaJM=",
//   desc: "44 books",
// },
// {
//   name: "George Orwell",
//   image: "https://www.shutterstock.com/image-photo/confident-intelligence-grey-hair-senior-260nw-261010109.jpg",
//   desc: "19 books",
// },
// {
//   name: "Jane Austen",
//   image: "https://media.istockphoto.com/id/1326638534/photo/beautiful-african-american-woman-holding-red-book-looking-at-window-and-smiling-university.jpg?s=612x612&w=0&k=20&c=dOopOrEfKZuzBW3--hW-e0DXhmaQBc5LSoZTOuRmqnc=",
//   desc: "25 books",
// },
// {
//   name: "Agatha Christie",
//   image: "https://i.pinimg.com/736x/af/21/cb/af21cb6326fb44c35ce52a75122dd5e9.jpg",
//   desc: "7books",
// },
// {
//   name: "Mark Twain",
//   image: "https://i.pinimg.com/736x/b6/15/d1/b615d1b878bb7f54cbc92cc7ef59703c.jpg",
//   desc: "5books",
// },
// ]
const { data: authors, error } = await useFetch('http://localhost:5000/authors/top')

  if (error.value) {
    console.error('Failed to fetch top authors:', error.value)
  }
</script>

<style>
/* Optional: Hide scrollbar while keeping scroll functionality */
.scrollbar-hide {
-ms-overflow-style: none;
scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
display: none;
}
</style>