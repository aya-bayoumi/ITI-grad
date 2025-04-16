<template>
  <div class="px-20">
      <!-- filter section -->
      <div
          class="p-7 gap-3 flex items-center justify-start rounded-full bg-[#4E3629] w-[100%] h-5 font-semibold text-l mt-5 font-['Montserrat']">
          <div class="gap-3 flex items-center text-[#FAD4A2] ">
              <i class="fa-solid fa-filter"></i>
              <p>Filter</p>
          </div>
          <div class=" flex justify-between items-center text-center w-[10%] h-10 px-4 bg-[#FAD4A2] text-[#4E3629] rounded-full ">
              <label for="">Price</label>
              <select name="Price" id="Price">Price</select>
          </div>
          <div class=" flex justify-between items-center w-[10%] px-4 bg-[#FAD4A2] text-[#4E3629] rounded-full h-10 ">
              <label for="">Category</label>
              <select name="Category" id="Category">Category</select>
          </div>
          <div class=" flex justify-between items-center w-[10%] px-4 bg-[#FAD4A2] text-[#4E3629] rounded-full h-10 ">
              <label for="">Author</label>
              <select name="Author" id="Author">Author</select>
          </div>
      </div>

      <!-- Literature section -->
      <div>
          <div class="flex justify-between font-semibold text-2xl my-5">
              <p class="font-['Playfair_Display']">Literature</p>
              <a class="underline font-normal text-xl font-['Montserrat']" href="">View more</a>
          </div>
          <div class="flex justify-between">
              <card/>
              <card/>
              <card/>
              <card/>
              <card/>
          </div>
      </div>
      <div>
          <img class="h-10 w-[100%]"  src="/images/Wooden Shelf.png" alt="">
      </div>
      <!-- Self Development section -->
      <div>
          <div class="flex justify-between font-semibold text-2xl my-5">
              <p class="font-['Playfair_Display']">Self Development</p>
              <a class="underline font-['Montserrat'] font-normal text-xl" href="">View more</a>
          </div>
          <div class="flex justify-between">
              <card/>
              <card/>
              <card/>
              <card/>
              <card/>
          </div>
      </div>
      <div>
          <img class="h-10 w-[100%]"  src="/images/Wooden Shelf.png" alt="">
      </div>
      <!-- Fantasy section -->
      <div>
          <div class="flex justify-between font-semibold text-2xl my-5">
              <p class="font-['Playfair_Display']">Fantasy</p>
              <a class="underline font-['Montserrat'] font-normal text-xl" href="">View more</a>
          </div>
          <div class="flex justify-between">
              <card/>
              <card/>
              <card/>
              <card/>
              <card/>
          </div>
      </div>
      <div>
          <img class="h-10 w-[100%]"  src="/images/Wooden Shelf.png" alt="">
      </div>
      <!-- Science section -->
      <div>
          <div class="flex justify-between font-semibold text-2xl my-5">
              <p class="font-['Playfair_Display']">Science</p>
              <a class="underline font-['Montserrat'] font-normal text-xl" href="">View more</a>
          </div>
          <div class="flex justify-between">
              <card/>
              <card/>
              <card/>
              <card/>
              <card/>
          </div>
      </div>
      <div>
          <img class="h-10 w-[100%]"  src="/images/Wooden Shelf.png" alt="">
      </div>

  </div>

<!-- pagination -->
  <div class="flex items-end justify-center space-x-1 mt-6">
      <!-- Previous Button -->
      <button class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] disabled:opacity-50 border-1 border-[#A67B5B]" disabled>
          Prev
      </button>

      <!-- Page Numbers -->
      <button class="px-3 py-1 rounded-md bg-[#4E3629] text-[#FED8B1] font-semibold border-1 border-[#A67B5B]">1</button>
      <button class="px-3 py-1 rounded-md  text-[#4E3629] hover:text-[#FED8B1]  hover:bg-[#4E3629] border-1 border-[#A67B5B]">2</button>
      <button class="px-3 py-1 rounded-md  text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border-1 border-[#A67B5B]">3</button>
      <span class="px-2 py-1 text-[#4E3629]">...</span>
      <button class="px-3 py-1 rounded-md  text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border-1 border-[#A67B5B]">10</button>

      <!-- Next Button -->
      <button class="px-3 py-1 rounded-md  text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border-1 border-[#A67B5B]">
          Next
      </button>
  </div>

</template>

<script setup>
definePageMeta({
  layout: 'registered', 
}); 
</script>