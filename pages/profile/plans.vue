<template>
  <div class="plans-page">
    <Sidebar />
    <div class="content">
      <h1>Plans</h1>
      <div v-if="loading">Loading...</div>

      <div v-else-if="plans.length === 0" class="empty-plans">
        <p>You have no active plans</p>
        <button class="browse-button" @click="browsePlans">Browse Plans</button>
      </div>

      <div v-else class="plan-list">
        <div v-for="plan in plans" :key="plan.id" class="plan-item">
          <p>{{ plan.name }} - ${{ plan.price }} / {{ plan.duration }}</p>
          <span class="status">{{ plan.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue';
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'registered',
});

const plans = ref([]);
const loading = ref(true);
const userId = ref(null);

onMounted(async () => {
  try {
    // جلب بيانات المستخدم من السيرفر
    const userResponse = await fetch('/api/user'); // مثلاً استدعاء API للحصول على بيانات المستخدم
    const userData = await userResponse.json();

    if (userData && userData.id) {
      userId.value = userData.id;
      fetchPlans();
    } else {
      loading.value = false;
    }
  } catch (error) {
    console.error('Error fetching user data', error);
    loading.value = false;
  }
});

const fetchPlans = async () => {
  try {
    const response = await fetch(`/api/plans/${userId.value}`);
    const data = await response.json();
    plans.value = data.plans;
  } catch (error) {
    console.error('Error fetching plans', error);
  } finally {
    loading.value = false;
  }
};

const browsePlans = () => {
  navigateTo('/plans');
};
</script>

<style scoped>
.plans-page {
  padding: 50px;
  background: #fdf6ee;
  height: 100%;
  display: flex;
}

h1 {
  margin: 10px 320px;
  color: #4E3629;
  font-size: 24px;
  font-weight: bold;
}

.empty-plans {
  background: #fdecd2;
  padding: 10px 25px;
  border-radius: 30px;
  font-size: 18px;
  color: #5a3d2b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
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

.plan-list {
  margin-top: 20px;
}

.plan-item {
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status {
  background: #6a4b3a;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 14px;
}
</style>
