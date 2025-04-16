<template>

   <div class="px-20 my-10 flex justify-between items-center">
      <div>
         <p class="font-normal text-2xl ">books <span class="font-medium">>book details</span></p>
         <img class="w-[300px] mt-5" src="/images/book1 2.png" alt="">
      </div>
      <div class="w-[900px] self-stretch">
         <h1 class="text-5xl font-semibold font-['Playfair_Display'] mb-3">Book Title</h1>
         <p class="font-['Montserrat'] text-3xl font-semibold mb-3">Author</p>
         <div class="flex gap-4 items-center mb-3">
            <div
               class="border-1 border-[#A67B5B] w-[150px] flex flex-col justify-center items-center rounded-lg font-['Montserrat']">
               <p>Hard Copy Book</p>
               <p>EGP XX.X</p>
            </div>
            <div
               class="border-1 border-[#A67B5B] w-[150px] flex flex-col justify-center items-center rounded-lg font-['Montserrat']">
               <p>Online Book</p>
               <p>EGP XX.X</p>
            </div>
         </div>
         <h4 class="text-2xl font-semibold font-['Montserrat'] mb-3">Description :</h4>
         <p class="text-xl font-medium font-['Montserrat'] mb-3">The beloved Japanese bestseller: a tale of love,
            family, new beginnings, and the comfort that can be found between the pages of a good book.When
            twenty-five-year-old Takako’s boyfriend reveals he’s marrying someone else, she reluctantly accepts her
            eccentric uncle Satoru’s offer to live rent-free in the tiny room above his shop.Hidden in Jimbocho, Tokyo,
            the Morisaki Bookshop is a booklover’s paradise. On a quiet corner in an old wooden building, the shop is
            filled with hundreds of second-hand books. It is Satoru’s pride and joy, and he has devoted his life to the
            bookshop since his wife left him five years earlier.</p>
         <div class="flex mt-5 justify-between">
            <div class="flex items-center gap-2">
               <button class="cursor-pointer">
                  <div class=" border-2 w-8 h-8 rounded-full flex justify-center items-center text-[#4E3629] text-xl ">
                     <i class="fa-solid fa-minus"></i>
                  </div>
               </button>
               <span class="px-2 text-3xl">1</span>
               <button class="cursor-pointer">
                  <div class=" border-2 w-8 h-8 rounded-full flex justify-center items-center text-[#4E3629] text-xl">
                     <i class="fa-solid fa-plus"></i>
                  </div>
               </button>
            </div>
            <div class="flex gap-2">
               <button
                  class="cursor-pointer text-[#FED8B1] bg-[#4E3629] text-l font-semibold font-['Montserrat'] py-2 px-6 rounded-[40px]">
                  <i class="fa-solid fa-cart-shopping mr-3"></i> Add To Cart</button>
               <button
                  class="cursor-pointer text-[#4E3629] bg-[#FAD4A2] text-l font-semibold font-['Montserrat'] py-2 px-6 rounded-[40px]">
                  <i class="fa-solid fa-download mr-3"></i> Add To Downloads</button>
            </div>

         </div>
      </div>
   </div>



   <div class="flex items-center gap-105 my-5 mx-20 justify-between">
      <div>
         <h1 class="text-center text-[#16100B] text-2xl font-medium font-['Playfair_Display']"> Rates & Reviews</h1>
         <div class="flex ml-2 gap-2  items-center">
            <p class="text-[#F2DE48]">⭐⭐⭐⭐⭐</p>
            <h4 class="font-medium text-2xl font-['Montserrat']">4.46</h4>
         </div>
      </div>
      <a class="text-center text-[#16100B] text-2xl font-normal font-['Playfair_Display'] decoration-solid underline"
         href="">See All</a>
   </div>
   <bookDetails />
   <bookDetails />
   <bookDetails />
   <bookDetails />
   <div class="mt-5">
      <p class="text-start font-medium px-20 text-[#16100B] text-2xl font-['Playfair_Display']">You Can Also Read: </p>
   </div>
   <div class="px-20 flex my-5 justify-between">
      <card />
      <card />
      <card />
      <card />
      <card />
   </div>
</template>

<script setup>
    definePageMeta({ layout: 'registered' })
</script>