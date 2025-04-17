<template>
  <div class="min-h-screen bg-[#4E3629] p-6">
    <!-- Header -->
    <div class="flex justify-between items-center bg-[#4E3629] text-white p-4 rounded-md mb-6">
      <div>
        <h3 class="text-[#FFF7EF] text-xl font-semibold">Edit Book</h3>
        <p class="text-sm text-[#FFF7EF]">Home &gt; All product &gt; Edit book</p>
      </div>
    </div>

    <!-- Main Form -->
    <div class="form grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-md bg-[#FFF7EF]">
      <!-- Left (Form) -->
      <div class="md:col-span-2 space-y-4">
        <div>
          <label class="block mb-1 font-medium">Product Name</label>
          <input v-model="title" type="text" class="w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label class="block mb-1 font-medium">Description</label>
          <textarea v-model="description" class="w-full border rounded-md px-3 py-2" rows="4"></textarea>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 font-medium">Category</label>
            <input v-model="category" type="text" class="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Author Name</label>
            <input v-model="author" type="text" class="w-full border rounded-md px-3 py-2" />
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label class="block mb-1 font-medium">SKU</label>
            <input v-model="sku" type="text" class="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Stock Quantity</label>
            <input v-model="stock" type="number" class="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Regular Price</label>
            <input v-model="price" type="text" class="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Sale Price</label>
            <input v-model="onlinePrice" type="text" class="w-full border rounded-md px-3 py-2" />
          </div>
        </div>
      </div>

      <!-- Right (Image Section) -->
      <div class="space-y-4">
        <img v-if="image" :src="image" alt="Book Cover" class="rounded-md shadow-md w-full" />
        
        <!-- Upload -->
        <div class="border border-dashed border-gray-400 p-4 rounded-md text-center text-sm text-gray-500">
          <label for="imageUpload" class="cursor-pointer flex flex-col items-center gap-2">
            <font-awesome-icon :icon="['fas', 'image']" class="text-[#A67B5B] text-3xl" />
            <p>Drop your image here, or <span class="underline">browse</span></p>
            <p class="mt-2">Jpeg, png are allowed</p>
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/png, image/jpeg"
            class="hidden"
            @change="handleUpload"
          />
        </div>

        <!-- Thumbnails -->
        <div class="space-y-2 mt-4">
          <div v-for="(img, index) in uploadedImages" :key="index" class="flex items-center gap-2">
            <img :src="img.url" alt="Thumbnail" class="w-10 h-10 object-cover rounded" />
            <span class="flex-1 truncate">{{ img.name }}</span>
            <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex mt-6 text-center mx-130 gap-4">
        <button class="update-btn bg-[#4E3629] text-[#FFF7EF] px-6 py-2 rounded-md" @click="updateBook">Update</button>
        <button class="cancel-btn border border-[#4E3629] text-[#4E3629] px-6 py-2 rounded-md">Cancel</button>
      </div>
<div v-if="message" :class="['mt-4 text-center font-medium', messageType === 'success' ? 'text-green-600' : 'text-red-600']">
  {{ message }}
</div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['admin']
})

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const bookId = route.params.id
const message = ref('')
const messageType = ref('') // 'success' or 'error'


const title = ref('')
const description = ref('')
const category = ref('')
const author = ref('')
const sku = ref('')
const stock = ref(0)
const price = ref('')
const onlinePrice = ref('')
const image = ref('')
const uploadedImages = ref([])

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:5000/api/books/${bookId}`)
    const book = res.data

    title.value = book.title
    description.value = book.description
    category.value = book.category
    author.value = book.author
    sku.value = book.sku
    stock.value = book.stock
    price.value = book.price
    onlinePrice.value = book.onlinePrice
    image.value = book.image
  } catch (err) {
    console.error(err)
    alert('Failed to load book data')
  }
})

function handleUpload(event) {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.onload = (e) => {
    image.value = e.target.result
    uploadedImages.value.push({
      name: file.name,
      url: e.target.result,
    })
  }
  reader.readAsDataURL(file)
}

async function updateBook() {
  try {
    const payload = {
      title: title.value,
      description: description.value,
      category: category.value,
      author: author.value,
      sku: sku.value,
      stock: stock.value,
      price: price.value,
      onlinePrice: onlinePrice.value,
      image: image.value
    }

    await axios.put(`http://localhost:5000/api/books/${bookId}`, payload)

    message.value = 'Book updated successfully'
    messageType.value = 'success'
  } catch (err) {
    console.error(err)
    message.value = '  failed loading data'
    messageType.value = 'error'
  } finally {
    setTimeout(() => {
      message.value = ''
      messageType.value = ''
    }, 3000)
  }
}

</script>

<style scoped>
.add-btn {
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  color:#FFF7EF;
  cursor: pointer;
}
.add-btn:hover {
  color: #A67B5B;
  background-color: #FFF7EF;
}
.update-btn , .cancel-btn, .del-btn {
  cursor: pointer;
}


</style>

