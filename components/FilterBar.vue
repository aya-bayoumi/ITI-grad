<template>
    <div class="flex flex-wrap gap-3 items-center p-6 rounded-full bg-[#4E3629] mt-5 text-l font-semibold font-['Montserrat']">
      <!-- Filter Icon -->
      <div class="flex items-center gap-2 text-[#FAD4A2]">
        <i class="fa-solid fa-filter"></i>
        <p>Filter</p>
      </div>
  
      <!-- Price Range -->
      <div class="flex items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 h-10">
        <label>Min</label>
        <input type="number" v-model="minPrice" class="w-16 bg-transparent outline-none" />
        <label>Max</label>
        <input type="number" v-model="maxPrice" class="w-16 bg-transparent outline-none" />
      </div>
  
      <!-- Category -->
      <div class="flex items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 h-10">
        <label>Category</label>
        <select v-model="selectedCategory" class="bg-transparent outline-none">
          <option value="">All</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
  
      <!-- Author -->
      <div class="flex items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 h-10">
        <label>Author</label>
        <select v-model="selectedAuthor" class="bg-transparent outline-none">
          <option value="">All</option>
          <option v-for="author in authors" :key="author" :value="author">{{ author }}</option>
        </select>
      </div>
  
      <!-- Reset -->
      <button @click="resetFilters" class="bg-[#FAD4A2] text-[#4E3629] px-4 py-1 rounded-full font-semibold">
        Reset
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const categories = ['Fiction', 'Science', 'Children', 'Finance & Business', 'Self Development', 'Productivity'];
  const authors = ['Stephen', 'Hawking', 'John'];
  
  const selectedCategory = ref('');
  const selectedAuthor = ref('');
  const minPrice = ref('');
  const maxPrice = ref('');
  
  const emit = defineEmits(['filter']);
  
  const resetFilters = () => {
    selectedCategory.value = '';
    selectedAuthor.value = '';
    minPrice.value = '';
    maxPrice.value = '';
    emitFilter();
  };
  
  const emitFilter = () => {
    emit('filter', {
      category: selectedCategory.value,
      author: selectedAuthor.value,
      minPrice: minPrice.value,
      maxPrice: maxPrice.value
    });
  };
  
  watch([selectedCategory, selectedAuthor, minPrice, maxPrice], emitFilter);
  </script>
  