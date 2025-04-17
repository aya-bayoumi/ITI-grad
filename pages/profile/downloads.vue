<template>
  <div class="downloads-page">
    <Sidebar />
    <div class="content">
      <h1 class="hidden md:block">Downloads</h1>
      <div v-if="loading">Loading...</div>

      <div v-else-if="downloads.length === 0" class="empty-downloads">
        <p>No downloads yet</p>
        <button class="browse-button" @click="browseBooks">Browse Books</button>
      </div>

      <div class="download-list">
        <div
          v-for="book in downloads"
          :key="book._id"
          class="book-card flex items-center justify-between bg-[#fdecd2] rounded-2xl p-4 w-full mb-2"
        >
          <img :src="book.cover || '/images/book3.png'" alt="Book cover" class="w-10 h-12 mr-4" />
          <div class="details flex-1 flex justify-between items-center text-[#5a3d2b] gap-5 text-base">
            <p class="font-bold flex-2">{{ book.title }}</p>
            <p class="flex-1">{{ formatDate(book.downloadedAt) }}</p>
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

const downloads = ref([])
const loading = ref(true)

const fetchDownloads = async () => {
  loading.value = true
  try {
    const res = await $fetch('http://localhost:5000/orders/downloads', {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
    downloads.value = res
  } catch (err) {
    console.error('Error fetching downloads:', err)
  } finally {
    loading.value = false
  }
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

</script>

<style scoped>
@media (max-width: 768px) {
  .downloads-page {
    flex-direction: column;
    padding: 20px;
  }

  .empty-downloads {
    margin: 40px auto;
    width: 90%;
    text-align: center;
    flex-direction: column;
    gap: 20px;
  }

  .browse-button {
    font-size: 14px;
    padding: 10px 30px;
  }

  .book-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 15px;
    width: 100%;
  }

  .details {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  img {
    margin-right: 0;
  }
}

.downloads-page {
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

.empty-downloads {
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

.download-list {
  margin-top: 20px;
}

.book-card {
  background: #fdecd2;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  margin-bottom: 15px;
  width: 90%;
}
</style>
