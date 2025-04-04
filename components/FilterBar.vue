<script setup>
import { ref, onMounted } from 'vue';

// Data for price ranges
const priceRanges = ref([
  { label: '0 - 50 EGP', value: '0-50' },
  { label: '50 - 100 EGP', value: '50-100' },
  { label: '100 - 150 EGP', value: '100-150' },
  { label: '150 - 200 EGP', value: '150-200' },
  { label: '200+ EGP', value: '200+' }
]);

const authors = ref([]);
const categories = ref([]);
const selectedAuthor = ref('');
const selectedCategory = ref('');
const selectedPrice = ref('');
const isLoading = ref(true);
const errorMessage = ref('');

// Fetch data from API and populate filter options using traditional fetch
const fetchData = async () => {
  try {
    // Replace with your actual API URL
    const response = await fetch('http://localhost:5000/books');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();

    if (Array.isArray(data)) {
      authors.value = [...new Set(data.map(book => book.author))];
      categories.value = [...new Set(data.map(book => book.category))];
      errorMessage.value = '';  // Clear any error messages
    } else {
      errorMessage.value = 'The response is not an array as expected';
    }
  } catch (error) {
    errorMessage.value = `Error: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchData();
});

// Emit selected filters to parent component
const updateFilters = () => {
  const newFilters = {
    author: selectedAuthor.value,
    category: selectedCategory.value,
    price: selectedPrice.value
  };
  emit('filter', newFilters); 
};
</script>

<template>
  <div class="flex flex-wrap gap-4 mb-4 bg-brown-800 p-4 rounded-lg">
    <!-- Display loading message -->
    <div v-if="isLoading" class="w-full text-center py-4 text-gray-500">Loading...</div>
    
    <!-- Display error message -->
    <div v-if="errorMessage" class="w-full text-center py-4 text-red-500">{{ errorMessage }}</div>
    
    <!-- Filter by Author -->
    <select v-model="selectedAuthor" @change="updateFilters" class="bg-beige text-gray-800 p-2 rounded-lg shadow-md w-full sm:w-1/3">
      <option value="">Select Author</option>
      <option v-for="author in authors" :key="author" :value="author">{{ author }}</option>
    </select>

    <!-- Filter by Category -->
    <select v-model="selectedCategory" @change="updateFilters" class="bg-beige text-gray-800 p-2 rounded-lg shadow-md w-full sm:w-1/3">
      <option value="">Select Category</option>
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>

    <!-- Filter by Price -->
    <select v-model="selectedPrice" @change="updateFilters" class="bg-beige text-gray-800 p-2 rounded-lg shadow-md w-full sm:w-1/3">
      <option value="">Select Price Range</option>
      <option v-for="range in priceRanges" :key="range.value" :value="range.value">{{ range.label }}</option>
    </select>
  </div>
</template>

