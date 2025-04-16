<template>
    <div class="container mx-auto">
        <nav class="flex justify-between items-center py-4">
            <div>
                <a href="/" class="logo text-2xl font-bold">Qera'a</a>
            </div>
            <div class="links flex items-center">
                <NuxtLink href="/" class="px-3 py-5" active-class="active">Home</NuxtLink>
                <NuxtLink href="/books" class="px-5 py-2" active-class="active">Books</NuxtLink>
                <NuxtLink href="/#plans" class="px-5 py-2">Plans</NuxtLink>
                <NuxtLink href="/#contact" class="px-5 py-2" >Contact Us</NuxtLink>
                <NuxtLink href="/cart" class="px-5 py-2" active-class="active"><FontAwesomeIcon :icon="['fas', 'cart-shopping']" class="cart-icon"/></NuxtLink>
                <NuxtLink href="/favourites" class="px-5 py-2" active-class="active"><FontAwesomeIcon :icon="['fas', 'heart']"  class="heart-icon"/></NuxtLink>
            </div>
            <div class="search-input">
                <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" class="search-icon" />
                <input type="text" placeholder="Search..." class="flex px-4 py-2">
            </div>
            <div class="profile flex items-center">
                <NuxtLink v-if="username" to="/profile" class="name py-2">{{ username }}</NuxtLink>
                <NuxtLink v-if="username" to="/profile" class="image">
                <!-- <img src="/images/user.jpg" /> -->
                <img :src="profileImage" alt="Profile Image" class="rounded-full w-10 h-10" />
                </NuxtLink>
            </div>
        </nav>
    </div>
</template>

<!-- <script setup>
import { useAuthStore } from '~/stores/auth'
import { onMounted, computed  } from 'vue'

const auth = useAuthStore()

const username = computed(() => auth.name || localStorage.getItem('username'))
const profileImage = computed(() => auth.profileImage || '/images/user.png')

onMounted(() => {
  const storedName = localStorage.getItem('username')
  const storedImage = localStorage.getItem('userImage')

  if (storedName && !auth.name) {
    auth.setName(storedName)
  }
  if (storedImage && !auth.profileImage) {
    auth.setProfileImage(storedImage)
  }
 

})
</script>  -->

<style>
.container {
    background-color: #4E3629;
    position:sticky;
    top:0;
    z-index: 999;
}

nav{
    width: 90%;
    height: 70px;
    margin: auto;

}

.logo{
    font-family: logo;
    font-size: 40px;
    font-weight: lighter;
    color: #FED8B1;
}

.links {
    color: #FFEAD6;
    font-family: links;
}
.active {
  color: #FED8B1;
  font-weight: bold;
}

.links a:hover {
    color: #FED8B1;
}

.search-input {
  position: relative; 
  width: 250px; 
}
.search-input input{
    width:100%;
    border: 1px solid #FFEAD6;
    border-radius: 20px;
    padding: 5px 40px;
    color: #FFEAD6;
}
.search-input input::placeholder{
    color: #FFEAD6;
}
.search-icon {
  position: absolute;
  top: 50%;
  left: 10px; 
  transform: translateY(-50%); 
  color: #FFEAD6;
  font-size: 16px;
}
.cart-icon{
    font-size: 22px;
    display: flex;
    align-self: center;
    color: #FFEAD6;
}
.heart-icon{
    font-size: 22px;
    display: flex;
    align-self: center;
    color: #FFEAD6;
}

.cart-icon:hover, .heart-icon:hover{
    color: #FED8B1;
}

input:focus{
    outline: none;
}

.profile{
    font-family: links;
    color: #FFEAD6;
}

.profile img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
}
</style>

  <script setup>

import { useAuthStore } from '~/stores/auth'
import { onMounted, computed, watch } from 'vue'
const auth = useAuthStore()

// استخدام computed للوصول إلى القيم الحالية
const username = computed(() => auth.username || localStorage.getItem('username'))
const profileImage = computed(() => auth.profileImage || '/images/user.png')

// مراقبة التغييرات في localStorage للتحديث الفوري
watch(() => [localStorage.getItem('username'), localStorage.getItem('userImage')], 
  ([newName, newImage]) => {
    if (newName && newName !== auth.username) {
      auth.setName(newName)
    }
    if (newImage && newImage !== auth.profileImage) {
      auth.setProfileImage(newImage)
    }
  }
)

onMounted(() => {
  // تحميل القيم الأولية من localStorage
  const storedName = localStorage.getItem('username')
  const storedImage = localStorage.getItem('userImage')

  if (storedName && !auth.username) {
    auth.setName(storedName)
  }
  if (storedImage && !auth.profileImage) {
    auth.setProfileImage(storedImage)
  }
})
</script>
 
