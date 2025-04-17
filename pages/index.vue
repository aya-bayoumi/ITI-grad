<template>
   <div class="bg-[#FFF7EF] flex flex-col gap-8">
     <!-- hero section -->
     <section class="py-12 px-4 sm:px-6 lg:px-8  ">
       <div class="relative w-full h-[400px]">
         <img src="/images/Frame 608 (2).png" alt="" class="w-full h-full object-cover">
         <div class="absolute inset-0 bg-gradient-to-r from-[#4E3629] via-[#4E3629] to-[#FED8B1] opacity-70"></div>
         <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl text-center z-10">
           Books are a uniquely portable magic
         </h1>
       </div>
     </section>
     <!-- trend books section -->

     <trend />
     <about />
     <!-- authors section - -->
     <div class="mb-8">
       <author />
     </div>
 
     <section id="plans" class="bg-[#FFF7EF] py-16 px-4 sm:px-8">
    <h2 class="text-3xl font-bold text-yellow-950 mb-8  ">Choose your Plan</h2>
    <br>
    <div class="flex flex-col md:flex-row gap-16 justify-center items-center">
        <SubscriptionCard plan="Reader" price="100 / month" :features="[
    'Access to 500 books',
    'Offline listening',
    '1 device only',
    'Priority support'
  ]"
  @selected="handlePlanSelection" />
        <SubscriptionCard plan="Bookworm" price="300 / month"  :features="[
    'Access to 1000+ books',
    'Offline listening',
    'Share with 1 family member',
    'Priority support'
    
  ]" 
  @selected="handlePlanSelection"/>
        <SubscriptionCard plan="Master" price="500 / month" :features="[
    'Unlimited books',
    'Offline & Online sync',
    'Share with 3 family members',
    'Priority support'
  ]" 
  @selected="handlePlanSelection" />
    </div>
</section>

     <!-- contact us -->
      <div id="contact">
        <contact />
      </div>
    <!-- <Footer /> -->
    
   </div>
 </template>
 
 <script setup>
 import trend from '~/components/trend.vue'
 import about from '~/components/about.vue'
 import author from '~/components/author.vue'
 import SubscriptionCard from '~/components/Subscription Card.vue'
 import contact from '~/components/Contact.vue'

 const handlePlanSelection = async ({ plan, price }) => {
  const res = await fetch('/api/pay', {
    method: 'POST',
    body: JSON.stringify({ plan, price }),
    headers: { 'Content-Type': 'application/json' }
  })

  const data = await res.json()

  if (data.paymentUrl) {
    window.location.href = data.paymentUrl
  }
}

 </script>
 
 <style scoped>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 h1 {
   font-family: 'Monotype Corsiva', cursive;
 }
 h2 {
   font-family: 'Playfair Display';
   font-weight: bold;
   font-size: 2rem;
   color: #4E3629;
 }
 </style>
  
  
