<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">My Orders</h1>

    <div v-for="status in statuses" :key="status" class="mb-8">
      <h2 class="text-xl font-semibold mb-2">{{ status }}</h2>
      <div v-if="filteredOrders(status).length">
        <div
          v-for="order in filteredOrders(status)"
          :key="order._id"
          class="border p-4 mb-4 rounded-lg shadow-sm"
        >
          <p class="text-sm text-gray-600 mb-2">Order ID: {{ order._id }}</p>
          <p class="text-sm text-gray-600 mb-2">Date: {{ formatDate(order.createdAt) }}</p>
          <p class="text-sm text-gray-600 mb-2">Total: ${{ order.total }}</p>
          <p class="text-sm text-gray-600 mb-2">Customer: {{ order.user.email }}</p>

          <ul class="list-disc pl-5 mt-2">
            <li
              v-for="book in order.books"
              :key="book._id"
              class="mb-1"
            >
              {{ book.title }} — {{ book.quantity }} × ${{ book.price }}
            </li>
          </ul>
        </div>
      </div>
      <p v-else class="text-gray-500">No orders with status "{{ status }}".</p>
    </div>
  </div>
</template>

<script setup>
const statuses = ['Pending', 'Out for Delivery', 'Delivered']

const { data: orders } = await useFetch('http://localhost:5000/orders', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})

const filteredOrders = (status) => {
  return orders.value?.filter(order => order.status === status)
}

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleString()
}
</script>
