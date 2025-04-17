<template>
  <div class="relative w-full max-w-[566px] mx-auto">
    <!-- SVG Background -->
    <svg 
      class="absolute inset-0 w-full h-full"
      viewBox="0 0 566 688"
      preserveAspectRatio="none"
    >
      <path 
        d="M120.404 4.66187C114.491 72.8899 40.3377 85.5733 4 83.3865V604.937C100.079 604.937 121.636 657.42 120.404 683.662H467.768C467.768 618.058 530.589 603.844 562 604.937V83.3865C483.658 83.3865 466.536 30.9034 467.768 4.66187H120.404Z" 
        fill="#FFEAD6" 
        stroke="#6F4E37" 
        stroke-width="8"
      />
    </svg>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center px-6 pt-20 pb-12 text-center animate-fadeIn">
      <h1 class="text-4xl font-bold text-[#6F4E37] mb-2">{{ plan }}</h1>
      <p class="text-2xl sm:text-3xl font-semibold text-[#6F4E37] mb-6">{{ price }}</p>

    
  <!-- <ul class="space-y-3 text-left w-full max-w-sm text-[#5C4033] mb-8">
    <li class="text-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586l7.707-7.707z" clip-rule="evenodd" />
      </svg>
      Access to 1000+ audiobooks
    </li>
    <li class="text-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586l7.707-7.707z" clip-rule="evenodd" />
      </svg>
      Offline listening available
    </li>
    <li class="text-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline-block mr-2 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586l7.707-7.707z" clip-rule="evenodd" />
      </svg>
      Share with 2 family members
    </li>
    <li class="text-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline-block mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586l7.707-7.707z" clip-rule="evenodd" />
      </svg>
      Night mode for better reading
    </li>
  </ul> -->
  <ul class="space-y-3 text-left w-full max-w-sm text-[#5C4033] mb-8 ">
  <li 
    v-for="(feature, index) in features" 
    :key="index"
    class="text-lg"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586l7.707-7.707z" clip-rule="evenodd" />
    </svg>
    {{ feature }}
  </li>
</ul>



      <button class="mt-auto px-3 py-3 bg-[#4E3629] text-white text-md  f rounded-lg hover:bg-[#6F4E37] transition-colors"
      @click="subscribe">
        Subscribe Now
        
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  plan: String,
  price: String,
  features: Array 
})

const emit = defineEmits(['selected'])

const subscribe = () => {
  console.log(`Subscribed to ${props.plan} plan for ${props.price}`);
  
  emit('selected', {
    plan: props.plan,
    price: props.price
  })
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.8s ease-out;
}
</style>
