<template>
    <div class="bg-[#F9F5F2] p-4 rounded shadow text-primary">
      <h2 class="font-bold mb-4">Recent Orders</h2>
      <table class="w-full text-sm">
        <thead>
          <tr class="text-left">
            <th class="py-2">Product</th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="border-t border-gray-200">
            <td class="py-2">Lorem Ipsum</td>
            <td>#{{ order.id }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.customer }}</td>
            <td>
              <span :class="order.status === 'Delivered' ? 'text-green-600' : 'text-red-600'">
                {{ order.status }}
              </span>
            </td>
            <td>₹200.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  const orders = [
    { id: '25425', date: 'Nov 8th, 2023', customer: 'Kevin', status: 'Delivered' },
    { id: '25425', date: 'Nov 7th, 2023', customer: 'Komal', status: 'Canceled' },
    { id: '25424', date: 'Nov 6th, 2023', customer: 'Nihil', status: 'Delivered' },
    { id: '25423', date: 'Nov 5th, 2023', customer: 'Shivam', status: 'Delivered' },
    { id: '25422', date: 'Nov 4th, 2023', customer: 'Shubab', status: 'Delivered' },
    { id: '25421', date: 'Nov 2nd, 2023', customer: 'Yogesh', status: 'Delivered' },
  ]
  </script>
  