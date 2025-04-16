<!-- <template>
    <AdminHeader/>
    <div class="bg-[#4E3629] h-180vh px-6 py-24 relative">
        <div class="flex flex-col items-start justify-start mb-6 text-[#FFEAD6] absolute top-5 text-xl">
            <p class="font-bold">Orders list</p>
            <p>Home > order list</p>

        </div>
        <div class="bg-[#FFF7EF] rounded-xl p-7">
        <div class="flex items-center  justify-between mb-15 font-bold text-2xl">
            <p>Recent Purchases</p>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div>
        <div class="flex items-center justify-between w-full font-semibold text-lg">
            <div class="flex items-center gap-2 text-center">
                <input type="checkbox"> Product </input>

            </div>
            <p >Order ID</p>
            <p >Date</p>
            <p>Customer Name</p>
            <p>status</p>
            <p>amount</p>
        </div>
    </div>
    <hr class="  border-t-2 border-gray-300  text-center mt-5 mb-10 flex items-center justify-center px-20">
            <orderList/>
            <orderList/>
            <orderList/>
            <orderList/>
            <orderList/>
        </div>


    <div class="flex items-end justify-center space-x-1 mt-6 bg-[#4E3629] text-[#FED8B1] border-[#FED8B1]"> -->
        <!-- Previous Button -->
        <!-- <button class="px-3 py-1 rounded-md  disabled:opacity-50 border-1 hover:text-[#4E3629] hover:bg-[#FED8B1]" disabled>
            Prev
        </button> -->

        <!-- Page Numbers -->
        <!-- <button class="px-3 py-1 rounded-md  font-semibold border-1 hover:text-[#4E3629] hover:bg-[#FED8B1] ">1</button>
        <button class="px-3 py-1 rounded-md  border-1 hover:text-[#4E3629] hover:bg-[#FED8B1]">2</button>
        <button class="px-3 py-1 rounded-md   border-1 hover:text-[#4E3629] hover:bg-[#FED8B1] ">3</button>
        <span class="px-2 py-1">...</span>
        <button class="px-3 py-1 rounded-md   border-1 hover:text-[#4E3629] hover:bg-[#FED8B1] ">10</button> -->

        <!-- Next Button -->
        <!-- <button class="px-3 py-1 rounded-md   border-1 hover:text-[#4E3629] hover:bg-[#FED8B1] ">
            Next
        </button>
    </div>
</div>
</template>
<script>
import { AdminHeader } from '#components';

definePageMeta({
  layout: 'admin',
})
</script> -->

<script setup>
import { AdminHeader } from '#components'
import orderList from '~/components/orderList.vue'

definePageMeta({
  layout: 'admin',
})

// ✅ جلب الداتا
const orders = ref([])

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:5000/admin/orders', {
      headers: {
        Authorization: `${localStorage.getItem('token')}` // لو عندك توكن
      }
    });
    const data = await response.json()
    orders.value = data
  } catch (err) {
    console.error('Error fetching orders:', err)
  }
})
</script>

<template>
  <AdminHeader />
  <div class="bg-[#4E3629] min-h-screen px-6 py-24 relative">
    <div class="flex flex-col items-start justify-start mb-6 text-[#FFEAD6] absolute top-5 text-xl">
      <p class="font-bold">Orders list</p>
      <p>Home > order list</p>
    </div>

    <div class="bg-[#FFF7EF] rounded-xl p-7 mt-20">
      <div class="flex items-center justify-between mb-15 font-bold text-2xl">
        <p>Recent Purchases</p>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>

      <div class="flex items-center justify-between w-full font-semibold text-lg">
        <div class="flex items-center gap-2 text-center">
          <input type="checkbox" /> Product
        </div>
        <p>Order ID</p>
        <p>Date</p>
        <p>Customer Name</p>
        <p>Status</p>
        <p>Amount</p>
      </div>

      <hr class="border-t-2 border-gray-300 mt-5 mb-10 px-20" />

      <!-- ✅ عرض الطلبات -->
      <orderList
        v-for="order in orders"
        :key="order._id"
        :order="order"
      />
    </div>
  </div>
</template>
