<template>
    <div class="relative bg-Colors-Main-body-bg overflow-hidden flex flex-col items-center gap-5 text-Colors-main-body-text font-['Montserrat'] p-5 justify-center mt-25">
      <div>
        <h2 class="text-center text-Colors-main-body-text text-5xl font-semibold font-['Playfair_Display']">Card Details</h2>
      </div>
  
      <div class="w-full max-w-md flex flex-col gap-4">
        <label class="text-2xl font-normal capitalize" for="cardNumber">Enter Credit Card Number*</label>
        <input
          id="cardNumber"
          v-model="cardNumber"
          class="w-full h-10 px-6 py-2.5 rounded-3xl outline-1 outline-[#A67B5B]"
          type="text"
          placeholder="1234 5678 9012 3456"
        />
  
        <label class="text-2xl font-normal capitalize" for="cardHolder">Card Holder Name*</label>
        <input
          id="cardHolder"
          v-model="cardHolder"
          class="w-full h-10 px-6 py-2.5 rounded-3xl outline-1 outline-[#A67B5B]"
          type="text"
          placeholder="Your Full Name"
        />
  
        <div class="flex justify-between gap-4">
          <div class="flex-1">
            <label class="text-2xl font-normal capitalize" for="expiry">Expiry*</label>
            <input
              id="expiry"
              v-model="expiry"
              class="w-full h-10 px-4 py-2.5 rounded-3xl outline-1 outline-[#A67B5B]"
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div class="flex-1">
            <label class="text-2xl font-normal capitalize" for="cvv">CVV*</label>
            <input
              id="cvv"
              v-model="cvv"
              class="w-full h-10 px-4 py-2.5 rounded-3xl outline-1 outline-[#A67B5B]"
              type="text"
              placeholder="123"
            />
          </div>
        </div>
      </div>
  
      <div class="flex justify-between w-full max-w-md mt-6">
        <p class="text-black text-3xl font-normal">Total</p>
        <p class="text-black text-3xl font-normal">$4.88</p>
      </div>
  
      <div class="w-[400px] h-12 p-2.5 bg-[#4E3629] rounded-[40px] outline-1 outline-[#A67B5B] flex justify-center items-center mt-4">
        <button class="text-[#FED8B1] text-xl font-semibold font-['Montserrat'] cursor-pointer">
          Confirm
        </button>
      </div>
  
      <div class="flex items-center gap-2 mt-4 cursor-pointer" @click="goBack">
        <i class="fa-solid fa-arrow-left text-xl"></i>
        <p class="text-black text-2xl font-normal font-['Montserrat'] capitalize">Back</p>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({ layout: 'registered' })
  
  import { ref } from 'vue'
  
  const cardNumber = ref('')
  const cardHolder = ref('')
  const expiry = ref('')
  const cvv = ref('')
  
  const goBack = () => {
    window.history.back()
  }
  </script>
  