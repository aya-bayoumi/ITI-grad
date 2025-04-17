<template>
    <!-- Review Component -->
    <div class="flex border-[#A67B5B] border-2 mx-20 my-2 bg-[#FFEAD6] items-center px-2 py-2" v-for="review in reviews" :key="review._id">
      <!-- Profile Image -->
      <img class="w-14 h-14 rounded-full" :src="review.userImage || '/images/Ellipse 2.png'" alt="User Image">
      <!-- Review Details -->
      <div class="flex flex-col justify-center ml-2">
        <h4 class="font-medium text-2xl font-['Montserrat']">{{ review.username }}</h4>
        <p class="text-[#F2DE48]">{{ '⭐'.repeat(review.rating) }}</p>
      </div>
      <!-- Review Text -->
      <p class="items-center flex ml-8 font-normal text-xl font-['Montserrat']">{{ review.comment }}</p>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
  
    // Create a ref to hold the reviews data
    const reviews = ref([]);
  
    // Function to fetch reviews based on the current book ID
    const fetchReviews = async () => {
      const route = useRoute();
      const bookId = route.params.id; // Get the book ID from the route
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
  
      try {
        const response = await fetch(`http://localhost:5000/books/${bookId}/reviews`, {
          method: 'GET',
          headers: {
            'Authorization': `${token}`, // Pass the token for authentication
            'Content-Type': 'application/json',
          },
        });
        
        const data = await response.json(); // Parse the response
        if (data.success) {
          reviews.value = data.data; // Store the reviews in the ref
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
  
    // Fetch the reviews when the component is mounted
    onMounted(() => {
      fetchReviews();
    });
  </script>
  