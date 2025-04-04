<template>
    <div class="orders-page">
      <Sidebar />
      <div class="content">
        <h1>Orders</h1>
      <div v-if="loading">Loading...</div>

    <!-- <div v-else-if="orders.length === 0" class="empty-orders">
      <p>No order has been made yet</p>
      <button @click="browseBooks">Browse Books</button>
    </div>

    <div v-else class="order-list">
      <div v-for="order in orders" :key="order.id" class="order-item">
        <p>Order #{{ order.id }} - Total: ${{ order.total }}</p>
        <ul>
          <li v-for="item in order.items" :key="item.id">
            {{ item.bookTitle }} - {{ item.quantity }}x
          </li>
        </ul>
      </div>
    </div>
  </div> -->
    <div v-else-if="orders.length === 0" class="empty-orders">
      <p>No order has been made yet</p>
      <button class="browse-button" @click="browseBooks">Browse Books</button>
    </div>

    <div v-else class="order-list">
      <div v-for="order in orders" :key="order.id" class="order-item">
        <p>Order #{{ order.id }} - Total: ${{ order.total }}</p>
        <ul>
          <li v-for="item in order.items" :key="item.id">
            {{ item.bookTitle }} - {{ item.quantity }}x
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import Sidebar from '~/components/Sidebar.vue'
  definePageMeta({
    layout: 'registered',
  });

//   import { ref, onMounted } from 'vue';

// const orders = ref([]);
// const loading = ref(false);
// const userId = ref(null);

// onMounted(() => {
//   const userData = JSON.parse(localStorage.getItem('user'));
//   if (userData) {
//     userId.value = userData.id;
//     fetchOrders();
//   } else {
//     loading.value = false;
//   }
// });

// const fetchOrders = async () => {
//   try {
//     const response = await fetch(`/api/orders/${userId.value}`);
//     const data = await response.json();
//     orders.value = data.orders;
//   } catch (error) {
//     console.error("Error fetching orders", error);
//   } finally {
//     loading.value = false;
//   }
// };

// const browseBooks = () => {
//   navigateTo('/books');
// };
import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

const orders = ref([]);
const loading = ref(true);
const userId = ref(null);

onMounted(async () => {
  try {
    const userResponse = await useFetch('/api/auth/me'); // تعديل حسب API المستخدم
    if (userResponse.data.value) {
      userId.value = userResponse.data.value.id;
      fetchOrders();
    } else {
      loading.value = false;
    }
  } catch (error) {
    console.error("Error fetching user data", error);
    loading.value = false;
  }
});

const fetchOrders = async () => {
  try {
    const response = await useFetch(`/api/orders/${userId.value}`);
    if (response.data.value) {
      orders.value = response.data.value.orders;
    }
  } catch (error) {
    console.error("Error fetching orders", error);
  } finally {
    loading.value = false;
  }
};

const browseBooks = () => {
  navigateTo('/books');
};
  </script>
  
  <!-- <style scoped>
  .profile-page {
    background-color: #FFF7EF;
    display: flex;
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  </style>
   -->

<style scoped>
.orders-page {
  padding: 50px;
  background: #fdf6ee; /* لون الخلفية الأساسي */
  height: 100%;
  display: flex;
}

h1{
  margin:10px 320px;
  color: #4E3629;
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
  /* max-width: 600px; */
  margin:0px auto;
}

.browse-button {
  background: #6a4b3a;
  color: white;
  padding: 10px 70px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.browse-button:hover {
  background: #5a3d2b;
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
</style>