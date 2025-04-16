<!-- <template>
    <div>
        <div class="flex items-center justify-between w-full">
            <div class="flex items-center gap-2 text-center">
                <input type="checkbox"> Lorem, ipsum </input>

            </div>
            <p>#25426</p>
            <p>Nov 7th,2023</p>
            <div class="flex items-center gap-2">
                <img src="/images/user.jpg" class="w-10 h-10 rounded-full" alt="">
                <p>kavin</p>
            </div>
            <p>status</p>
            <p>amount</p>
        </div>
    </div>
    <hr class="  border-t-2 border-gray-300  text-center mt-5 mb-10 flex items-center justify-center px-20">

</template> -->
<script setup>
defineProps({
  order: Object
})
</script>

<template>
  <div>
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-2 text-center">
        <input type="checkbox" />
        <span>{{ order.books.length }} Book(s)</span>
      </div>

      <p>#{{ order._id.slice(-6) }}</p>

      <p>{{ new Date(order.createdAt).toLocaleDateString() }}</p>

      <div class="flex items-center gap-2">
        <img src="/images/user.jpg" class="w-10 h-10 rounded-full" alt="" />
        <p>{{ order.user?.email || 'Unknown' }}</p>
      </div>

      <p>{{ order.status }}</p>
      <p>${{ order.total.toFixed(2) }}</p>
    </div>

    <hr class="border-t-2 border-gray-300 mt-5 mb-10 px-20" />
  </div>
</template>
