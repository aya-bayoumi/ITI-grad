<template>

  <div class="px-4 md:px-20 bg-[#fdf6ee]">
    <!-- Filter Section -->
    <div class="flex flex-col md:flex-row gap-4 md:gap-3 items-center p-6 md:p-7 rounded-3xl bg-[#4E3629] mt-5 text-base font-semibold font-['Montserrat']">
      <!-- Filter Label -->

      <div class="flex items-center gap-2 text-[#FAD4A2]">
        <i class="fa-solid fa-filter"></i>
        <p>Filter</p>
      </div>

      <!-- Price Range -->

      <div class="flex flex-col sm:flex-row items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-3 py-2 h-auto sm:h-10 w-full sm:w-auto">
        <label>Min</label>
        <input type="number" v-model="minPrice" class="w-full sm:w-16 bg-transparent outline-none" />
        <label>Max</label>
        <input type="number" v-model="maxPrice" class="w-full sm:w-16 bg-transparent outline-none" />
      </div>

      <!-- Category -->
      <div class="flex flex-col sm:flex-row items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 py-2 h-auto sm:h-10 w-full sm:w-auto">
        <label>Category</label>
        <select v-model="selectedCategory" class="bg-transparent outline-none w-full sm:w-auto">
          <option value="">All</option>
          <option v-for="(category, index) in categoriesList" :key="index" :value="category">{{ category }}</option>
        </select>
      </div>

      <!-- Author -->
      <!-- <div class="flex flex-col sm:flex-row items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 py-2 h-auto sm:h-10 w-full sm:w-auto">
        <label>Author</label>
        <select v-model="selectedAuthor" class="bg-transparent outline-none w-full sm:w-auto">

          <option value=""> All </option>
          
          <option v-for="(author, index) in authorsList" :key="index" :value="author">{{ author }}</option>
        </select>

      </div> -->


    </div>

    <!-- Categories Section -->
    <div v-for="(category, index) in categories" :key="index" :data-category="category.category">

      <div class="flex flex-col sm:flex-row justify-between font-semibold text-xl sm:text-2xl my-5">

        <p class="font-['Playfair_Display']">{{ category.category }}</p>
        <a
          v-if="category.hasMore"
          class="underline font-normal text-lg sm:text-xl font-['Montserrat'] cursor-pointer"
          @click="loadMore(category.category)"
        >
          View more
        </a>
      </div>

      <div class="flex flex-wrap justify-center sm:justify-between gap-4">
        <Card
          v-for="book in category.books || []"
          :key="book._id"
          :title="book.title"
          :author="book.author"
          :image="book.image"
          :price="book.price"
          :id="book._id"
        />
      </div>

      <div class="mt-4">
        <img src="/images/WoodenShelf.png" alt="shelf" class="w-full" />
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex flex-wrap justify-center space-x-1 mt-6">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] disabled:opacity-50 border border-[#A67B5B] mb-1"
      >
        Prev
      </button>

      <button
        v-for="page in totalPagesArray"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-3 py-1 rounded-md mb-1',
          currentPage === page ? 'bg-[#4E3629] text-[#FED8B1]' : 'text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629]',
          'border border-[#A67B5B]'
        ]"
      >
        {{ page }}
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] disabled:opacity-50 border border-[#A67B5B] mb-1"
      >
        Next
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import Card from '~/components/Card.vue';

const categories = ref([]);
const categoriesList = ref([]);
const books = ref([]);
const authorsList = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const totalPagesArray = ref([]);

const selectedCategory = ref('');
const selectedAuthor = ref('');
const minPrice = ref('');
const maxPrice = ref('');

const fetchCategories = async (page = 1) => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:5000/books/paged-categories?page=${page}`, {
      headers: { Authorization: token },
    });
    const data = await res.json();
    categories.value = data.data.map(category => ({
      ...category,
      page: 1,
      hasMore: true,
    }));
    totalPages.value = data.totalPages;
    totalPagesArray.value = Array.from({ length: totalPages.value }, (_, i) => i + 1);
  } catch (err) {
    console.error('Error fetching categories:', err);
  }
};

const loadMore = async (categoryName) => {
  const token = localStorage.getItem('token');
  const categoryIndex = categories.value.findIndex(c => c.category === categoryName);
  const category = categories.value[categoryIndex];
  const nextPage = category.page + 1;

  try {
    const res = await fetch(`http://localhost:5000/books/category/${categoryName}?page=${nextPage}`, {
      headers: { Authorization: token },
    });
    const data = await res.json();

    if (data.data.length > 0) {
      categories.value[categoryIndex].books.push(...data.data);
      categories.value[categoryIndex].page = nextPage;
    } else {
      categories.value[categoryIndex].hasMore = false;
    }

    // Scroll to the category section
    setTimeout(() => {
      const categoryElement = document.querySelector(`[data-category="${categoryName}"]`);
      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 100);
  } catch (err) {
    console.error(`Error loading more books for ${categoryName}:`, err);
  }
};

const goToPage = (pageNumber) => {
  currentPage.value = pageNumber;
  fetchCategories(currentPage.value);
};

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

const fetchFilteredBooks = async () => {
  const token = localStorage.getItem('token');
  const query = new URLSearchParams();

  if (selectedCategory.value) query.append('category', selectedCategory.value);
  if (selectedAuthor.value) query.append('author', selectedAuthor.value);
  if (minPrice.value) query.append('minPrice', minPrice.value);
  if (maxPrice.value) query.append('maxPrice', maxPrice.value);

  try {
    const res = await fetch(`http://localhost:5000/books/filter?${query.toString()}`, {
      headers: { Authorization: token },
    });
    const data = await res.json();

    if (data.success) {
      // Update the displayed categories with just the filtered result
      categories.value = [{
        category: 'Filtered Results',
        books: data.data,
        hasMore: false,
        page: 1
      }];
    } else {
      categories.value = [];
    }
  } catch (err) {
    console.error('Error fetching filtered books:', err);
  }
};

const fetchCategoriesAndBooks = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/books', {
      headers: { Authorization: token },
    });
    const data = await res.json();

    if (data.success && data.data.length > 0) {
      books.value = data.data;

      // Extract unique categories from the books data
      const uniqueCategories = Array.from(new Set(data.data.map((book) => book.category)));

      categoriesList.value = uniqueCategories;
    }
  } catch (err) {
    console.error('Error fetching books:', err);
  }
};


const fetchAuthors = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/authors', {
      headers: { Authorization: token },
    });
    const data = await res.json();

    if ( data.authors.length > 0) {


      // Extract unique categories from the books data
      const uniqueAuthors = Array.from(new Set(data.authors.map((author) => author.name)));

      authorsList.value = uniqueAuthors;
    }
  } catch (err) {
    console.error('Error fetching books:', err);
  }
};
watch([selectedCategory, selectedAuthor, minPrice, maxPrice], fetchFilteredBooks);

onMounted(() => {
  fetchCategories(currentPage.value);
  fetchCategoriesAndBooks();
  fetchAuthors();
});
</script>
