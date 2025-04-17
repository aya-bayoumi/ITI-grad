

 <template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full transition-all hover:shadow-md hover:scale-105 ">
    <!-- صورة المنتج -->
    <div class="relative pt-[100%] bg-white h-90% ">
      <img 
        :src="image || '/placeholder-book.png'" 
        :alt="title"
        class="absolute top-0 left-0 w-full h-full object-cover rounded-lg p-3"
      />
    </div>

    <!-- محتوى البطاقة -->
    <div class=" text-center ">
      <!-- عنوان المنتج -->
      <h3 class="font-medium text-gray-900 text-sm line-clamp-2 mb-1 h-10 flex items-center justify-center">
        {{ title }}
      </h3>
      
      <!-- مؤلف/نوع المنتج -->
      <p class="text-gray-500 text-xs mb-2">
        {{ author }}
      </p>

      <!-- التقييم -->
      <span class="text-yellow-400">★★★★★</span>
      <div class="flex justify-center mb-1">
        <div class="flex text-yellow-400">
          <Icon 
            v-for="n in 5" 
            :key="n" 
            name="mdi:star-20-solid" 
            class="w-4 h-4"
          />
        </div>
      </div>

      <!-- السعر -->
      <p class="text-gray-900 font-bold text-sm">
        {{ price }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  author: String,
  image: String,
  price: String,
  rating: {
    type: Number,
    default: 5 
  }
});
</script>