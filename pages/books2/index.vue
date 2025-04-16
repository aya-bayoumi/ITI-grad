<template>
    <div class="px-20">
        <!-- filter section -->
        <!-- <div
            class="p-7 gap-3 flex items-center justify-start rounded-full bg-[#4E3629] w-[100%] h-5 font-semibold text-l mt-5 font-['Montserrat']">
            <div class="gap-3 flex items-center text-[#FAD4A2] ">
                <i class="fa-solid fa-filter"></i>
                <p>Filter</p>
            </div>
            <div class=" flex justify-between items-center text-center w-[10%] h-10 px-4 bg-[#FAD4A2] text-[#4E3629] rounded-full ">
                <label for="">Price</label>
                <select name="Price" id="Price">Price</select>
            </div>
            <div class=" flex justify-between items-center w-[10%] px-4 bg-[#FAD4A2] text-[#4E3629] rounded-full h-10 ">
                <label for="">Category</label>
                <select name="Category" id="Category">Category</select>
            </div>
            <div class=" flex justify-between items-center w-[10%] px-4 bg-[#FAD4A2] text-[#4E3629] rounded-full h-10 ">
                <label for="">Author</label>
                <select name="Author" id="Author">Author</select>
            </div>
        </div> -->



        <div class="flex gap-3 items-center p-7 rounded-full bg-[#4E3629] mt-5 text-l font-semibold font-['Montserrat']">
  <div class="flex items-center gap-2 text-[#FAD4A2]">
    <i class="fa-solid fa-filter"></i>
    <p>Filter</p>
  </div>

  <!-- Price Range -->
  <div class="flex items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 h-10">
    <label>Min</label>
    <input type="number" v-model="minPrice" class="w-16 bg-transparent outline-none" />
    <label>Max</label>
    <input type="number" v-model="maxPrice" class="w-16 bg-transparent outline-none" />
  </div>

  <!-- Category -->
  <div class="flex items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 h-10">
    <label>Category</label>
    <select v-model="selectedCategory" class="bg-transparent outline-none">
      <option value="">All</option>
      <option value="Fiction">Fiction</option>
      <option value="Science">Science</option>
      <option value="Self Development">Self Development</option>
      <!-- Add more as needed -->
    </select>
  </div>

  <!-- Author -->
  <div class="flex items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 h-10">
    <label>Author</label>
    <select v-model="selectedAuthor" class="bg-transparent outline-none">
      <option value="">All</option>
      <option value="Stephen">Stephen</option>
      <option value="Hawking">Hawking</option>
      <option value="John">John</option>
      <!-- Add more dynamically if you want -->
    </select>
  </div>
</div>


        <!-- Literature section -->
        <div v-for="(category, index) in categories" :key="index">
  <div class="flex justify-between font-semibold text-2xl my-5">
    <p class="font-['Playfair_Display']">{{ category.category }}</p>
    <a
      class="underline font-normal text-xl font-['Montserrat']"
      :href="`/books2/category/${category.category}`"
    >
      View more
    </a>
  </div>
  <div class="flex flex-wrap gap-4">
    <Card
      v-for="book in category.books || []"
      :key="book._id"
      :title="book.title"
      :author="book.author"
      :image="book.image"
      :price="book.price"
      :id="book._id"
    />
    <Card
      v-for="book in (expandedCategories[category.category]?.books || [])"
      :key="book._id"
      :title="book.title"
      :author="book.author"
      :image="book.image"
      :price="book.price"
      :id="book._id"
    />
  </div>
  <div>
    <img class="h-10 w-[100%]" src="/images/Wooden Shelf.png" alt="">
  </div>
</div>
</div>


        <!-- Self Development section -->
        <!-- <div>
            <div class="flex justify-between font-semibold text-2xl my-5">
                <p class="font-['Playfair_Display']">Self Development</p>
                <a class="underline font-['Montserrat'] font-normal text-xl" href="">View more</a>
            </div>
            <div class="flex justify-between">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        <div>
            <img class="h-10 w-[100%]"  src="/images/Wooden Shelf.png" alt="">
        </div> -->
        <!-- Fantasy section -->
        <!-- <div>
            <div class="flex justify-between font-semibold text-2xl my-5">
                <p class="font-['Playfair_Display']">Fantasy</p>
                <a class="underline font-['Montserrat'] font-normal text-xl" href="">View more</a>
            </div>
            <div class="flex justify-between">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        <div>
            <img class="h-10 w-[100%]"  src="/images/Wooden Shelf.png" alt="">
        </div> -->
        <!-- Science section -->
        <!-- <div>
            <div class="flex justify-between font-semibold text-2xl my-5">
                <p class="font-['Playfair_Display']">Science</p>
                <a class="underline font-['Montserrat'] font-normal text-xl" href="">View more</a>
            </div>
            <div class="flex justify-between">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        <div>
            <img class="h-10 w-[100%]"  src="/images/Wooden Shelf.png" alt="">
        </div>

    </div> -->

<!-- pagination -->
    <div  class="flex items-end justify-center space-x-1 mt-6">
        <!-- Previous Button -->
        <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] disabled:opacity-50 border-1 border-[#A67B5B]">
            Prev
        </button>

        <!-- Page Numbers -->
        <button class="px-3 py-1 rounded-md bg-[#4E3629] text-[#FED8B1] font-semibold border-1 border-[#A67B5B]">1</button>
        <button class="px-3 py-1 rounded-md  text-[#4E3629] hover:text-[#FED8B1]  hover:bg-[#4E3629] border-1 border-[#A67B5B]">2</button>
        <button class="px-3 py-1 rounded-md  text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border-1 border-[#A67B5B]">3</button>
        <span class="px-2 py-1 text-[#4E3629]">...</span>
        <button class="px-3 py-1 rounded-md  text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border-1 border-[#A67B5B]">10</button>

        <!-- Next Button -->
        <button @click="nextPage" class="px-3 py-1 rounded-md  text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border-1 border-[#A67B5B]">
            Next
        </button>
    </div>

</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import Card from '~/components/Card.vue';

const categories = ref([]);
const expandedCategories = ref({}); // لتخزين الكتب الإضافية حسب الكاتيجوري

const currentPage = ref(1);
const totalPages = ref(1); // عدد الصفحات الكلي

const selectedCategory = ref('');
const selectedAuthor = ref('');
const minPrice = ref('');
const maxPrice = ref('');
const books = ref([]);

const fetchCategories = async (page = 1) => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:5000/books/paged-categories?page=${page}`, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    categories.value = data.data;
    totalPages.value = data.totalPages; // تحديث عدد الصفحات
  } catch (err) {
    console.error('Error fetching categories:', err);
  }
};

onMounted(() => {
  fetchCategories(currentPage.value);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchCategories(currentPage.value);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchCategories(currentPage.value);
  }
};

const goToPage = (pageNumber) => {
  currentPage.value = pageNumber;
  fetchCategories(currentPage.value);
};

const fetchFilteredBooks = async () => {
  const token = localStorage.getItem('token');
  const query = new URLSearchParams();

  if (selectedCategory.value) query.append('category', selectedCategory.value);
  if (selectedAuthor.value) query.append('author', selectedAuthor.value);
  if (minPrice.value) query.append('minPrice', minPrice.value);
  if (maxPrice.value) query.append('maxPrice', maxPrice.value);

  try {
    const res = await fetch(`http://localhost:5000/books/filter?${query.toString()}`, {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.success) {
      books.value = data.data;
    } else {
      books.value = [];
    }
  } catch (error) {
    console.error("Error fetching filtered books", error);
  }
};

// شغلي الفلتر لما أي حاجة تتغير
watch([selectedCategory, selectedAuthor, minPrice, maxPrice], fetchFilteredBooks);

</script>
