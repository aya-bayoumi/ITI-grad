<template>
    <div class="flex flex-col justify-center gap-6 items-center mt-10" v-if="paymentStatus">
      <img class="w-70" src="/images/check-mark.jpg" alt="order confirmed" />
  
      <div class="self-stretch text-center text-Colors-main-body-text text-4xl font-semibold font-['Montserrat']">
        Thanks for your payment
      </div>
  
      <div class="text-center text-black text-3xl font-['Montserrat']">
        Status: <span :class="statusColor">{{ paymentStatus }}</span>
        Status: <span :class="statusColor"> OrderId {{ orderId }}</span>
      </div>
  
      <div class="text-center text-black text-2xl font-normal font-['Montserrat'] capitalize cursor-pointer">
        <nuxt-link to="/books2"><i class="fa-solid fa-arrow-left cursor-pointer"></i> Continue shopping</nuxt-link>
        
      </div>
    </div>
  
    <div v-else class="text-center mt-20 text-xl text-gray-600">Loading payment status...</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const paymentStatus = ref(null);
  const orderId = ref(null);
  
  const statusColor = computed(() => {
    switch (paymentStatus.value) {
      case 'succeeded': return 'text-green-600';
      case 'processing': return 'text-yellow-500';
      case 'failed': return 'text-red-500';
      default: return 'text-gray-700';
    }
  });
  
  onMounted(async () => {
    const sessionId = route.query.session_id;
    orderId.value = route.query.orderId; 
    if (!sessionId) {
      alert("No sessionId found in the URL");
      return;
    }
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('http://localhost:5000/payments/intent', {
        method: 'POST',
        headers: {
           'Authorization': token,
           'Content-Type': 'application/json',
         },
        body: JSON.stringify({ sessionId })
      });
  
      const data = await res.json();
  
      if (res.ok) {
        console.log("✅ Payment data:", data);
        paymentStatus.value = data.status;
 
      } else {
        console.error("❌ Error from server:", data);
        paymentStatus.value = "failed";
      }
    } catch (err) {
      console.error("🚨 Network error:", err);
      paymentStatus.value = "failed";
    }
  });
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  