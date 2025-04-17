<template>
  <div class="bg-[#F9F5F2] p-4 rounded shadow text-primary">
    <h2 class="font-bold mb-4">Recent Orders</h2>

    <!-- Show loading state if no data -->
    <div v-if="loading" class="text-center py-4 text-gray-500">
      Loading orders...
    </div>

    <!-- Show error state if API call fails -->
    <div v-if="error" class="text-center py-4 text-red-500">
      Failed to load orders.
    </div>

    <!-- Orders Table -->
    <table v-if="orders.length > 0" class="w-full text-sm">
      <thead>
        <tr class="text-left">
          <th class="py-2">Product</th>
          <th>Order ID</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Actions</th> <!-- Add this for the View Order button -->
        </tr>
      </thead>
      <tbody>
        <!-- Iterate through orders -->
        <tr
          v-for="order in orders"
          :key="order._id"
          class="border-t border-gray-200"
        >
          <td class="py-2">order details</td>
          <td>#{{ order._id }}</td>
          <td>{{ formatDate(order.createdAt) }}</td> <!-- Simplified date format -->
          <td>{{ order.user?.email }}</td>
          <td>
            <span :class="order.status === 'Delivered' ? 'text-green-600' : 'text-red-600'">
              {{ order.status }}
            </span>
          </td>
          <td>₹{{ order.total }}</td>
          <td>
            <!-- Update status dropdown -->
            <select
              v-model="order.status"
              @change="updateOrderStatus(order)"
              class="mt-1 border border-gray-300 p-1 rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
              <option value="Returned">Returned</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const orders = ref([])
const loading = ref(true)
const error = ref(false)
const token = useCookie('token')

// Fetch orders from API
const fetchOrders = async () => {
  try {
    const response = await fetch('http://localhost:5000/admin/orders/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token.value,
      },
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    orders.value = data
  } catch (error) {
    console.error('❌ Failed to fetch orders:', error)
    error.value = true
  } finally {
    loading.value = false
  }
}

// Fetch orders on mount
onMounted(fetchOrders)

// Update the order status
const updateOrderStatus = async (order) => {
  try {
    const response = await fetch(`http://localhost:5000/admin/orders/${order._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token.value,
      },
      body: JSON.stringify({ status: order.status }),
    })
    console.log('Updating status to:', order.status);

    if (!response.ok) {
      throw new Error(`Failed to update status: ${response.status}`)
    }

    // Optionally handle the updated order response if necessary
    const updatedOrder = await response.json()
    const index = orders.value.findIndex((ord) => ord._id === order._id)
    if (index !== -1) {
      orders.value[index] = updatedOrder
    }
  } catch (error) {
    console.error('❌ Failed to update order status:', error)
  }
}

// Format the date to a simpler format (e.g., 'Apr 3, 2025')
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
</script>

<style scoped>
/* Example to add a hover effect on the order row */
tr:hover {
  background-color: #f0f0f0;
}

select {
  cursor: pointer;
}

select:hover {
  background-color: #f3f4f6;
}
</style>
