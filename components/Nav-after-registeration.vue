<!-- <template>
    <div class="container mx-auto">
        <nav class="flex justify-between items-center py-4">
            <div>
                <a href="/" class="logo text-2xl font-bold">Qera'a</a>
            </div>
            <div class="links flex items-center">
                <NuxtLink href="/" class="px-3 py-5" active-class="active">Home</NuxtLink>
                <NuxtLink href="/books2" class="px-5 py-2" active-class="active">Books</NuxtLink>
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
                <img :src="profileImage" alt="Profile Image" class="rounded-full w-10 h-10" />
                </NuxtLink>
            </div>
        </nav>
    </div>
</template> -->

<template>
  <div class="container mx-auto">
    <nav class="flex justify-between items-center py-4 relative">
      <!-- Logo -->
      <div>
        <a href="/" class="logo text-2xl font-bold">Qera'a</a>
      </div>

      <!-- Hamburger Menu (Mobile Only) -->
      <button
  class="text-white md:hidden focus:outline-none"
  @click="toggleMenu"
>
  <FontAwesomeIcon :icon="['fas', isMenuOpen ? 'times' : 'bars']" class="menu text-xl" />
</button>

      <!-- Links (Desktop) -->
      <div class="links hidden md:flex items-center">
        <NuxtLink href="/" class="px-3 py-5" active-class="active">Home</NuxtLink>
        <NuxtLink href="/books2" class="px-5 py-2" active-class="active">Books</NuxtLink>
        <NuxtLink href="/#plans" class="px-5 py-2">Plans</NuxtLink>
        <NuxtLink href="/#contact" class="px-5 py-2">Contact Us</NuxtLink>
        <NuxtLink href="/cart" class="px-5 py-2" active-class="active">
          <FontAwesomeIcon :icon="['fas', 'cart-shopping']" class="cart-icon" />
        </NuxtLink>
        <NuxtLink href="/favourites" class="px-5 py-2" active-class="active">
          <FontAwesomeIcon :icon="['fas', 'heart']" class="heart-icon" />
        </NuxtLink>
      </div>

      <!-- Search Input (Desktop only) -->
      <div class="search-input hidden md:block">
        <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" class="search-icon" />
        <input type="text" placeholder="Search..." class="flex px-4 py-2">
      </div>

      <!-- Profile -->
      <div class="profile hidden md:flex items-center">
        <NuxtLink v-if="username" to="/profile" class="name py-2">{{ username }}</NuxtLink>
        <NuxtLink v-if="username" to="/profile" class="image">
          <img :src="profileImage" alt="Profile Image" class="rounded-full w-10 h-10" />
        </NuxtLink>
      </div>

      <!-- Mobile Menu (only visible when isMenuOpen) -->
      <div v-if="isMenuOpen" class="absolute top-10 mx-38 w-60 h-130 bg-[#4E3629] md:hidden flex flex-col items-center px-6 py-4 z-50">
        <div class="flex items-center mt-4 gap-3">
          <!-- <NuxtLink v-if="username" to="/profile" class="name">{{ username }}</NuxtLink> -->
          <NuxtLink v-if="username" to="/profile" class="image">
            <img :src="profileImage" alt="Profile Image" class="rounded-full w-10 h-10" />
          </NuxtLink>
        </div>
        <NuxtLink href="/" class="links py-6 " active-class="active">Home</NuxtLink>
        <NuxtLink href="/books2" class="links py-6 " active-class="active">Books</NuxtLink>
        <NuxtLink href="/#plans" class="links py-6 ">Plans</NuxtLink>
        <NuxtLink href="/#contact" class="links py-6 ">Contact Us</NuxtLink>
        <NuxtLink href="/cart" class="py-6 " active-class="active">
          <FontAwesomeIcon :icon="['fas', 'cart-shopping']" class="cart-icon" />
        </NuxtLink>
        <NuxtLink href="/favourites" class="py-6 " active-class="active">
          <FontAwesomeIcon :icon="['fas', 'heart']" class="heart-icon" /> 
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>


<style>
.container {
    background-color: #4E3629;
    position:sticky;
    top:0;
    z-index: 999;
    /* width: 100vw; */
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

.links  {
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
.menu{
  color: #FFEAD6;
}
</style> 


<!-- <script setup> -->
<!-- // import { useAuthStore } from '~/stores/auth'
// import { onMounted, computed, watch } from 'vue'
// const auth = useAuthStore()

// // استخدام computed للوصول إلى القيم الحالية
// const username = computed(() => auth.username || localStorage.getItem('username'))
// const profileImage = computed(() => auth.profileImage || '/images/user.png') //.

// // مراقبة التغييرات في localStorage للتحديث الفوري
// watch(() => [localStorage.getItem('username'), localStorage.getItem('userImage')], 
//   ([newName, newImage]) => {
//     if (newName && newName !== auth.username) {
//       auth.setName(newName)
//     }
//     if (newImage && newImage !== auth.profileImage) {
//       auth.setProfileImage(newImage)
//     }
//   }
// )

// onMounted(() => {
//   // تحميل القيم الأولية من localStorage
//   const storedName = localStorage.getItem('username')
//   const storedImage = localStorage.getItem('userImage')

//   if (storedName && !auth.username) {
//     auth.setName(storedName)
//   }
//   if (storedImage && !auth.profileImage) {
//     auth.setProfileImage(storedImage)
//   }
// }) -->
/////////////////////////


<!-- // import { useAuthStore } from '~/stores/auth'
// import { computed, watch, onMounted } from 'vue'

// // auth store
// const auth = useAuthStore()

// // cookies (reactive)
// const usernameCookie = useCookie('username')
// const profileImageCookie = useCookie('userImage')

// // computed properties للعرض في النافبار
// const username = computed(() => auth.name || usernameCookie.value || 'User')
// const profileImage = computed(() => auth.profileImage || profileImageCookie.value || '/images/user.jpg')

// // عند تحميل الصفحة، خزن البيانات من الكوكيز لو مش موجودة في الستيت
// onMounted(() => {
//   if (!auth.name && usernameCookie.value) {
//     auth.setName(usernameCookie.value)
//   }
//   if (!auth.profileImage && profileImageCookie.value) {
//     auth.setProfileImage(profileImageCookie.value)
//   }
// })

// // تابع أي تغييرات تحصل في الكوكيز وحدث auth store لو اتغيرت
// watch(
//   () => [usernameCookie.value, profileImageCookie.value],
//   ([newName, newImage]) => {
//     if (newName && newName !== auth.name) {
//       auth.setName(newName)
//     }
//     if (newImage && newImage !== auth.profileImage) {
//       auth.setProfileImage(newImage)
//     }
//   }
// ) -->
<!-- </script> -->
//////////////////////////////////////////////////////////
 <!-- <script setup>
import { useAuthStore } from '~/stores/auth'
import { computed, watch, onMounted } from 'vue'

const auth = useAuthStore()

const usernameCookie = useCookie('username')
const profileImageCookie = useCookie('userImage')

const username = computed(() => auth.name || usernameCookie.value || 'User')

const profileImage = computed(() => {
  const image = auth.profileImage || profileImageCookie.value
  console.log('DEBUG profile image:', image) // ⬅️ إضافة للتأكد
  return image && image !== 'null' && image !== '' ? image : '/images/user.jpg'
})

onMounted(() => {
  if (!auth.name && usernameCookie.value) {
    auth.setName(usernameCookie.value)
  }
  if (!auth.profileImage && profileImageCookie.value) {
    auth.setProfileImage(profileImageCookie.value)
  }
})

watch(
  () => [usernameCookie.value, profileImageCookie.value],
  ([newName, newImage]) => {
    if (newName && newName !== auth.name) {
      auth.setName(newName)
    }
    if (newImage && newImage !== auth.profileImage) {
      auth.setProfileImage(newImage)
    }
  }
)
</script> 
 -->



 <script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

const usernameCookie = useCookie('username')
const profileImageCookie = useCookie('userImage')

const username = computed(() => auth.name || usernameCookie.value || 'User')

const profileImage = computed(() => {
  const image = auth.profileImage || profileImageCookie.value
  return image && image !== 'null' && image !== '' ? image : '/images/user.jpg'
})

onMounted(() => {
  if (!auth.name && usernameCookie.value) {
    auth.setName(usernameCookie.value)
  }
  if (!auth.profileImage && profileImageCookie.value) {
    auth.setProfileImage(profileImageCookie.value)
  }
})

watch(
  () => [usernameCookie.value, profileImageCookie.value],
  ([newName, newImage]) => {
    if (newName && newName !== auth.name) {
      auth.setName(newName)
    }
    if (newImage && newImage !== auth.profileImage) {
      auth.setProfileImage(newImage)
    }
  }
)

// 📱 متغير للتحكم في القائمة الجانبية للموبايل
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

</script>
