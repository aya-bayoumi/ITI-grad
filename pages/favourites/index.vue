<template>
  <div class="shelf">
    <div class="text mx-15">
      <h1 class="text-4xl font-bold text-[#4E3629] mx-5">Favorites shelf</h1>
      <p class="text-[#4E3629] mt-3 mb-10 mx-5">Find your saved items and get ready to order them</p>
    </div>

    <div class="favorites flex flex-wrap gap-5">
      <Card
        v-for="book in favourites"
        :key="book.id"
        v-bind="book"
        @unfavorite="removeFromFavourites"
      />
    </div>

    <div>
      <img src="/images/woodenShelf.png" alt="shelf" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '~/components/Card.vue'

const favourites = ref([])

onMounted(() => {
  favourites.value = JSON.parse(localStorage.getItem('favorites') || '[]')
})

const removeFromFavourites = (id) => {
  favourites.value = favourites.value.filter(book => book.id !== id)
}
</script>

<style scoped>
.shelf {
  padding: 40px 0px;
  width: 100%;
  background-color: #fdf6ee;
}
.favorites {
  display: flex;
  flex-wrap: wrap;
  margin-left: 70px;
  gap: 20px;
}
</style>
