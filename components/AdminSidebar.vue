<template>
  <div class="w-60 bg-[#FFF7EF] text-white h-screen shadow-md fixed left-0 top-0 p-6">
    <!-- اللوجو -->
    <a href="/" class="logoA text-2xl font-bold">Qera'a</a>

    <!-- المينيو -->
    <nav class="mb-12">
      <ul class="space-y-3 text-sm">
        <li>
          <NuxtLink 
            to="/admin/"
             active-class="activeA"
            class="text-[#4E3629] font-medium tracking-wide py-1 px-2 rounded transition-colors duration-200 hover:bg-[#4E3629] hover:text-white"
          >
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/admin/products"
            active-class="activeA"
            class="text-[#4E3629] font-medium tracking-wide py-1 px-2 rounded transition-colors duration-200 hover:bg-[#4E3629] hover:text-white"
            
          >
            All Products
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/admin/orders"
            active-class="activeA"
            class="text-[#4E3629] font-medium tracking-wide py-1 px-2 rounded transition-colors duration-200 hover:bg-[#4E3629] hover:text-white"
          >
            Order List
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <br>

  

    <!-- التصنيفات -->
    <div>
      <h3 class="text-base font-semibold text-[#4E3629] mb-4 uppercase tracking-wider">Categories</h3>
      <ul class="space-y-3 text-sm text-[#4E3629]">
        <li class="flex justify-between items-center">
          <span>Literature</span>
          <span class="bg-[#E9D8C8] rounded-full px-2 py-0.5 text-xs">21</span>
        </li>
        <li class="flex justify-between items-center">
          <span>Self Development</span>
          <span class="bg-[#E9D8C8] rounded-full px-2 py-0.5 text-xs">32</span>
        </li>
        <li class="flex justify-between items-center">
          <span>Fantasy</span>
          <span class="bg-[#E9D8C8] rounded-full px-2 py-0.5 text-xs">13</span>
        </li>
        <li class="flex justify-between items-center">
          <span>Science</span>
          <span class="bg-[#E9D8C8] rounded-full px-2 py-0.5 text-xs">14</span>
        </li>
        <li class="flex justify-between items-center">
          <span>Novel</span>
          <span class="bg-[#E9D8C8] rounded-full px-2 py-0.5 text-xs">06</span>
        </li>
        <li class="flex justify-between items-center">
          <span>Historical</span>
          <span class="bg-[#E9D8C8] rounded-full px-2 py-0.5 text-xs">11</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style >
.activeA {
  background-color: #4E3629;
  color: white;
  border-radius: 5px;
}
.logoA{
    font-family: logo;
    font-size: 40px;
    font-weight: lighter;
    color: #4E3629;
}
</style>



<script setup>
</script>
