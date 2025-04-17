<template>
    <div class="orders-page">
      <Sidebar />
      <div class="content">
        <h1 class="hidden md:block">Orders</h1>
        <div v-if="loading">Loading...</div>
  
        <div v-else-if="orders.length === 0" class="empty-orders">
          <p>No order has been made yet</p>
          <button class="browse-button" @click="browseBooks">Browse Books</button>
        </div>
  
        <div class="order-list">
          <div v-for="order in orders" :key="order._id" class="order-wrapper space-y-4">
            <div
  v-for="book in order.books"
  :key="book._id"
  class="book-card flex items-center justify-between bg-[#fdecd2] rounded-2xl p-4 w-full mb-2 relative"
>
  <img src="/images/book3.png" alt="Book cover" class="w-10 h-12 mr-4" />

  <div class="order-details flex-1 flex justify-between items-center text-[#5a3d2b] gap-5 text-base">
    <p class="font-bold flex-2">{{ book.title }}</p>
    <p class="flex-1">{{ order.status }}</p>
    <p class="flex-1.5">{{ order.createdAt }}</p>
    <p class="flex-1 text-right">${{ book.price }}</p>
  </div>

  <i
    v-if="order.status === 'Pending'"
    class="fas fa-trash absolute right-[-20px] text-red-600 cursor-pointer hover:text-red-800 transition"
    @click="removeBookFromOrder(order._id, book.bookId)"
    title="Remove Book"
  ></i>
</div>
</div>
</div>
</div>  

    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
  import { navigateTo } from '#app'
  import Sidebar from '~/components/Sidebar.vue'
  
  definePageMeta({
    layout: 'registered',
  })
  
  const orders = ref([])
  const loading = ref(true)
  
  const fetchOrders = async () => {
  loading.value = true;
  try {
    const res = await $fetch('http://localhost:5000/orders/my-orders', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    orders.value = res; // res لازم تكون راجعة من الباك أراي فيها الأوردرات
  } catch (err) {
    console.error("Error fetching orders:", err)
  } finally {
    loading.value = false;
  }
}

  
  onMounted(() => {
    fetchOrders()
  })
  
  const browseBooks = () => {
    navigateTo('/books2')
  }
  const removeBookFromOrder = async (orderId, bookId) => {
  try {
    await $fetch(`http://localhost:5000/orders/${orderId}/book/${bookId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    const order = orders.value.find(o => o._id === orderId)
    if (order) {
      order.books = order.books.filter(book => book.bookId !== bookId)
      if (order.books.length === 0) {
        orders.value = orders.value.filter(o => o._id !== orderId)
      }
    }
  } catch (error) {
    console.error('Error removing book:', error)
  }
}
// const cancelOrder = (orderId) => {
//   orders.value = orders.value.filter(order => order._id !== orderId)
// }
</script>
  
<style scoped>
@media (max-width: 768px) {
  .orders-page {
    flex-direction: column;
    padding: 20px;
    align-items: center;
  }
  .empty-orders {
    margin: 30px auto;
    padding: 60px;
    width: 100%;
    text-align: center;
    flex-direction: column;
    /* gap: 20px; */
  }

  .browse-button {
    height: 70px;
    text-align: center;
    width: 100%;
    padding: 10px 
  }

  .order-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .book-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    text-align: left;
    padding: 15px;
  }

  .order-details {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    font-size: 14px;
  }

  .fa-trash {
    position: static;
    margin: 10px 0 0 auto;
  }
}


  .orders-page {
    padding: 50px;
    background: #fdf6ee;
    height: 100%;
    display: flex;
  }
  
  h1 {
    margin: 10px 320px;
    color: #4e3629;
    font-size: 24px;
    font-weight: bold;
  }
  
  .empty-orders {
    background: #fdecd2;
    padding: 10px 25px;
    border-radius: 30px;
    font-size: 18px;
    color: #5a3d2b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 60px;
    width: 70%;
  }
  
  .browse-button {
    background: #6a4b3a;
    color: white;
    padding: 10px 70px;
    border: none;
    border-radius: 40px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .browse-button:hover {
    background: #5a3d2b;
  }
  .order-wrapper {
  position: relative;
  padding-right: 10px;  
  }
  
  
  .order-list {
    margin-top: 20px;
  }
  
  .order-item {
    background: #fff;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .order-card {
  background: #fdecd2;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  margin-bottom: 15px;
  width: 90%;
  }
  
  .book-image {
  width: 40px;
  height: 50px;
  margin-right: 15px;
  }
  
  .order-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  font-size: 16px;
  color: #5a3d2b;
  }
  
  .book-title {
  font-weight: bold;
  flex: 2;
  }
  .fa-trash{
  color:#5a3d2b;
  margin-bottom: 15px;
  margin-right: 80px;
  font-size: 20px;
  }
  </style>

 
  <!-- <script setup>
  import { ref, onMounted } from 'vue'
  import { navigateTo } from '#app'
  import Sidebar from '~/components/Sidebar.vue'
  
  definePageMeta({
    layout: 'registered',
  })
  
  const orders = ref([])
  const loading = ref(true)
  
  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:5000/orders/my-orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
  
      const data = await res.json()
  
      if (res.ok) {
        orders.value = data
      } else {
        console.error('Error fetching orders:', data.message || 'Unknown error')
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      loading.value = false
    }
  }
  
  onMounted(() => {
    fetchOrders()
  })
  
  const browseBooks = () => {
    navigateTo('/books')
  }
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
  }
  
  </script> -->
  