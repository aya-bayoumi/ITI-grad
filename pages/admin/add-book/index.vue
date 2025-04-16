<template>
    <div class="min-h-screen bg-[#4E3629] p-6">
      <!-- Header -->
      <div class="flex justify-between items-center bg-[#4E3629] text-white p-4 rounded-md mb-6">
        <div>
          <h3 class="text-[#FFF7EF] text-xl font-semibold">Product details</h3>
          <p class="text-sm text-[#FFF7EF]">Home &gt; All product &gt; product details</p>
        </div>
        <button class="add-btn bg-[#A67B5B] px-5 py-3 rounded-md text-white font-semibold">
          + Add new book
        </button>
      </div>
  
      <!-- Main Form -->
      <div class="form grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-md bg-[#FFF7EF]">
        <!-- Left (Form) -->
        <div class="md:col-span-2 space-y-4">
          <div>
            <label class="block mb-1 font-medium">Product Name</label>
            <input type="text" class="w-full border rounded-md px-3 py-2" placeholder="Lorem Ipsum" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Description</label>
            <textarea class="w-full border rounded-md px-3 py-2" rows="4" placeholder="Lorem Ipsum Is A Dummy Text"></textarea>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block mb-1 font-medium">Category</label>
              <input type="text" class="w-full border rounded-md px-3 py-2" placeholder="Sneaker" />
            </div>
            <div>
              <label class="block mb-1 font-medium">Author Name</label>
              <input type="text" class="w-full border rounded-md px-3 py-2" placeholder="Addidas" />
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label class="block mb-1 font-medium">SKU</label>
              <input type="text" class="w-full border rounded-md px-3 py-2" placeholder="#32A53" />
            </div>
            <div>
              <label class="block mb-1 font-medium">Stock Quantity</label>
              <input type="number" class="w-full border rounded-md px-3 py-2" placeholder="211" />
            </div>
            <div>
              <label class="block mb-1 font-medium">Regular Price</label>
              <input type="text" class="w-full border rounded-md px-3 py-2" placeholder="₹110.40" />
            </div>
            <div>
              <label class="block mb-1 font-medium">Sale Price</label>
              <input type="text" class="w-full border rounded-md px-3 py-2" placeholder="₹450" />
            </div>
          </div>
        </div>
  
        <!-- Right (Image Section) -->
        <div class="space-y-4">
          <img src="/images/bookcover.png" alt="Book Cover" class="rounded-md shadow-md w-full" />
          
       <!-- Gallery Upload -->
  <div class="border border-dashed border-gray-400 p-4 rounded-md text-center text-sm text-gray-500">
    <label for="imageUpload" class="cursor-pointer flex flex-col items-center gap-2">
      <FontAwesomeIcon :icon="['fas', 'image']" class="text-[#A67B5B] text-3xl" />
      <p>Drop your image here, or <span class="underline">browse</span></p>
      <p class="mt-2">Jpeg, png are allowed</p>
    </label>
    <input
      id="imageUpload"
      type="file"
      accept="image/png, image/jpeg"
      class="hidden"
      multiple
      @change="handleUpload"
    />
  </div>

  <!-- Gallery Thumbnails -->
  <div class="space-y-2 mt-4">
    <div
      v-for="(img, index) in uploadedImages"
      :key="index"
      class="flex items-center gap-2"
    >
      <img :src="img.url" alt="Thumbnail" class="w-10 h-10 object-cover rounded" />
      <span class="flex-1 truncate">{{ img.name }}</span>
      <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
    </div>
  </div>
</div>
        <!-- Action Buttons -->
        <div class="flex mt-20 text-center mx-160 gap-4 ">
          <button class="del-btn bg-[#A67B5B] text-[#FFF7EF] px-6 py-2 rounded-md">Delete</button>
          <button class="cancel-btn border border-[#4E3629] text-[#4E3629] px-6 py-2 rounded-md">Cancel</button>
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  definePageMeta({
  middleware: ['admin']
  })
  import { ref } from 'vue'

const uploadedImages = ref([])

function handleUpload(event) {
  const files = event.target.files
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const reader = new FileReader()
    reader.onload = (e) => {
      uploadedImages.value.push({
        name: file.name,
        url: e.target.result,
      })
    }
    reader.readAsDataURL(file)
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
.cancel-btn, .del-btn {
  cursor: pointer;
}


</style>

