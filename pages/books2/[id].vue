<template>
   <div class="px-5 sm:px-20 my-5 sm:my-10 flex flex-col sm:flex-row justify-between items-center">
     <!-- Book Details Section -->
     <div class="sm:w-[300px] lg:w-[350px] text-center sm:text-left mb-6 sm:mb-0">
      <p class="font-normal text-xl sm:text-2xl">books <span class="font-medium">> book details</span></p>
      <img class="w-full sm:w-50 h-auto sm:h-70 mt-5" :src="book.image || '/images/basic.png'" @error="e => e.target.src = '/images/basic.png'" alt="">

     </div>
     <div class="w-[900px] w-full">
      <h1 class="text-2xl sm:text-3xl font-semibold font-['Playfair_Display'] mb-3">{{ book.title }}</h1>
      <p class="font-['Montserrat'] text-lg sm:text-xl font-semibold mb-3" v-if="book && book.author && book.author.name">{{ book.author.name }}</p>
      
      <div class="flex flex-wrap gap-4 items-center mb-3">
        <div class="border-1 border-[#A67B5B] w-full sm:w-[150px] flex flex-col justify-center items-center rounded-lg font-['Montserrat'] mb-3 sm:mb-0">
          <p>Hard Copy Book</p>
          <p>{{ book.price }}</p>
        </div>
        <div class="border-1 border-[#A67B5B] w-full sm:w-[150px] flex flex-col justify-center items-center rounded-lg font-['Montserrat']">
          <p>Online Book</p>
          <p>{{ book.onlinePrice }}</p>
        </div>
      </div>

      <h4 class="text-xl sm:text-2xl font-semibold font-['Montserrat'] mb-3">Description :</h4>
      <p class="text-base sm:text-lg font-medium font-['Montserrat'] mb-3">{{ book.description }} </p>

       <div class="flex flex-col sm:flex-row mt-5 justify-between items-center">
         <div class="flex items-center gap-2 mb-3 sm:mb-0">
           <button class="cursor-pointer" @click="updateQuantity(quantity - 1)">
             <div class="border-2 w-8 h-8 rounded-full flex justify-center items-center text-[#4E3629] text-xl">
               <i class="fa-solid fa-minus"></i>
             </div>
           </button>
           <span class="px-2 text-3xl">{{ quantity }}</span>
           <button class="cursor-pointer" @click="updateQuantity(quantity + 1)">
            <div class="border-2 w-8 h-8 rounded-full flex justify-center items-center text-[#4E3629] text-xl">
              <i class="fa-solid fa-plus"></i>
            </div>
          </button>
         </div>
         <div class="flex gap-2">
          <button     @click="addToCart" class="cursor-pointer text-[#FED8B1] bg-[#4E3629] text-lg sm:text-l font-semibold font-['Montserrat'] py-2 px-6 rounded-[40px]">
            <i class="fa-solid fa-cart-shopping mr-3"></i> Add To Cart
          </button>
          <button class="cursor-pointer text-[#4E3629] bg-[#FAD4A2] text-lg sm:text-l font-semibold font-['Montserrat'] py-2 px-6 rounded-[40px]">
            <i class="fa-solid fa-download mr-3"></i> Add To Downloads
          </button>
         </div>
       </div>
     </div>
   </div>
 
   <!-- Reviews Section -->
   <div class="flex items-center gap-105 my-5 mx-20 justify-between">
     <div>
       <h1 class="text-center text-[#16100B] text-2xl font-medium font-['Playfair_Display']"> Rates & Reviews</h1>
       <div class="flex ml-2 gap-2 items-center">
         <p class="text-[#F2DE48]">⭐⭐⭐⭐⭐</p>
         <h4 class="font-medium text-2xl font-['Montserrat']">{{ averageRating }}</h4>
       </div>
     </div>
     
     <!-- <NuxtLink
       :to="`/books2/${book._id}/reviews`"
       class="text-center text-[#16100B] text-2xl font-normal font-['Playfair_Display'] decoration-solid underline"
     >
       See All
     </NuxtLink> -->
   </div>
 
   <div v-for="review in reviews" :key="review._id" class="review-card">
     <p class="font-['Montserrat'] text-xl">{{ review.comment }}</p>
     <p class="font-['Montserrat'] text-lg text-[#4E3629]">By: {{ review.username }}</p>
   </div>
 
   <!-- Suggested Books Section -->
   <!-- <div class="mt-5">
     <p class="text-start font-medium px-20 text-[#16100B] text-2xl font-['Playfair_Display']">You Can Also Read: </p>
   </div>
   <div class="px-20 flex my-5 justify-between">
     <div v-for="suggestedBook in suggestedBooks" :key="suggestedBook._id" class="suggested-book">
       <Card :title="suggestedBook.title" :author="suggestedBook.author" :image="suggestedBook.image" :price="suggestedBook.price" />
     </div>
   </div> -->
 </template>
 
 <script setup>
   import { ref, onMounted } from 'vue';
   import { useRoute, useRouter } from 'vue-router';
   import Card from '~/components/Card.vue';
 
   const book = ref({});
   const suggestedBooks = ref([]);
   const reviews = ref([]);
   const averageRating = ref(0);
   const quantity = ref(1); // Track the quantity of the book in the cart
 
   // Fetch book details based on the book ID from the route
   const fetchBook = async () => {
     try {
       const token = localStorage.getItem('token');
       const route = useRoute();
       const bookId = route.params.id;
       const res = await fetch(`http://localhost:5000/books/${bookId}`, {
         method: 'GET',
         headers: {
           'Authorization': token,
           'Content-Type': 'application/json',
         },
       });
 
       const data = await res.json();
       book.value = data.data;
 
       // Fetch reviews and suggested books after fetching the book
       fetchReviews(book.value._id);
       fetchSuggestedBooks(book.value.category);
 
     } catch (err) {
       console.error('Error fetching book details:', err);
     }
   };
 
   // Fetch reviews based on the book ID
   const fetchReviews = async (bookId) => {
     try {
       const token = localStorage.getItem('token');
       const res = await fetch(`http://localhost:5000/books/${bookId}/reviews`, {
         method: 'GET',
         headers: {
           'Authorization': token,
           'Content-Type': 'application/json',
         },
       });
 
       const data = await res.json();
       reviews.value = data.data;
       calculateAverageRating(reviews.value);
     } catch (err) {
       console.error('Error fetching reviews:', err);
     }
   };
 
   // Calculate average rating from reviews
   const calculateAverageRating = (reviews) => {
    if(reviews) {
      averageRating.value = 0;
      return;
    } 
     const totalRating = reviews?.reduce((acc, review) => acc + review.rating, 0);
     averageRating.value = (totalRating / reviews.length).toFixed(2);
   };
 
   // Fetch suggested books based on the category of the current book
   const fetchSuggestedBooks = async (category) => {
     try {
       const token = localStorage.getItem('token');
       const res = await fetch(`http://localhost:5000/books/paged-categories?page=1`, {
         method: 'GET',
         headers: {
           'Authorization': token,
           'Content-Type': 'application/json',
         },
       });
 
       const data = await res.json();
       const filteredBooks = data.data.filter(book => book.category === category); // Filter books by category
       suggestedBooks.value = filteredBooks.slice(0, 5); // Show only 5 books
     } catch (err) {
       console.error('Error fetching suggested books:', err);
     }
   };
 
   onMounted(() => {
     fetchBook(); // Fetch the book details when the component is mounted
   });
 
   const updateQuantity = (newQuantity) => {
     // Ensure quantity stays within valid bounds (e.g., 1 to stock amount)
     if (newQuantity >= 1 && newQuantity <= book.value.stock) {
       quantity.value = newQuantity;
     }
   };
 
   const addToCart = async () => {
     const cartItem = {
       bookId: book.value._id,
       title: book.value.title,
       quantity: quantity.value,
       price: book.value.price,
     };
 
     try {
       const token = localStorage.getItem('token');
       const res = await fetch(`http://localhost:5000/cart/add`, {
         method: 'POST',
         headers: {
           'Authorization': token,
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(cartItem),
       });
 
       const data = await res.json();
       if (data.success) {
         // Redirect to the checkout page after adding to cart
         const router = useRouter();
         router.push('/checkout');
       } else {
         console.error('Failed to add item to cart:', data.message);
       }
     } catch (err) {
       console.error('Error adding item to cart:', err);
     }
   };
 </script>
 