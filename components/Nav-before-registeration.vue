<!-- <template>
    <div class="container w-full">
        <nav class="flex justify-between items-center py-4">
            <div>
                <a href="/" class="logo text-2xl font-bold">Qera'a</a>
            </div>
            <div class="links flex items-center">
                <NuxtLink href="/" class="px-6 py-2" active-class="active">Home</NuxtLink>
                <NuxtLink href="/books2" class="px-6 py-2" active-class="active">Books</NuxtLink>
                <NuxtLink href="/contact" class="px-6 py-2" active-class="active">Contact Us</NuxtLink>
            </div>
            <div class="auth flex items-center">
                <a href="/signUp" class="sign px-4 py-2">Sign Up</a>
                <a href="/login" class="login px-4 py-2">Login</a>
            </div>
        </nav>
    </div>
</template> 


<style>
@media (max-width: 768px) {
  .auth .sign,
  .auth .login {
    width: 100%;
    text-align: center;
  }
}
.container {
    background-color: #4E3629;
    /* width: 100vw; */
    position: sticky;
    top: 0;
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

.auth{
    font-family: links;
    font-weight:bold;
}
.auth .sign{
    color: #FED8B1;
    border-radius: 40px;
    width: 120px;
    text-align: center;
}

.sign:hover{
background-color:#FAD4A2 ;
color: #4E3629;
}
.auth .login{
    color: #4E3629;
    background-color: #FAD4A2;
    border-radius: 40px;
    width: 120px;
    text-align: center;
    margin-left: 5px;
}
.login:hover{
    background-color: #4E3629;
    color: #FAD4A2;
}
</style> -->

<template>
    <div class="container w-full">
      <nav class="flex justify-between items-center py-4 relative">
        <!-- Logo -->
        <div>
          <a href="/" class="logo text-2xl font-bold">Qera'a</a>
        </div>
  
        <!-- Hamburger Menu (Mobile Only) -->
        <button class="text-white md:hidden focus:outline-none" @click="toggleMenu">
          <font-awesome-icon :icon="['fas', isMenuOpen ? 'times' : 'bars']" class="menu text-xl" />
        </button>
  
        <!-- Links (Desktop Only) -->
        <div class="links hidden md:flex items-center">
          <NuxtLink href="/" class="px-6 py-2" active-class="active">Home</NuxtLink>
          <NuxtLink href="/books2" class="px-6 py-2" active-class="active">Books</NuxtLink>
          <NuxtLink href="/contact" class="px-6 py-2" active-class="active">Contact Us</NuxtLink>
        </div>
  
        <!-- Auth Buttons (Desktop Only) -->
        <div class="auth hidden md:flex items-center">
          <a href="/signUp" class="sign px-4 py-2">Sign Up</a>
          <a href="/login" class="login px-4 py-2">Login</a>
        </div>
  
        <!-- Mobile Menu -->
        <div
          v-if="isMenuOpen"
          class="absolute top-10 mx-35 w-60 h-100 bg-[#4E3629] md:hidden flex flex-col items-center px-6 py-4 z-50"
        >
          <NuxtLink href="/" class="links py-6 w-full text-center" active-class="active">Home</NuxtLink>
          <NuxtLink href="/books2" class="links py-6 w-full text-center" active-class="active">Books</NuxtLink>
          <NuxtLink href="/contact" class="links py-6 w-full text-center" active-class="active">Contact Us</NuxtLink>
          <a href="/signUp" class="sign py-4 w-40 text-center rounded-full bg-[#FAD4A2]">Sign Up</a>
          <a href="/login" class="login mt-4 py-4 w-40 text-center rounded-full bg-[#FAD4A2]">Login</a>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  
  const isMenuOpen = ref(false)
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  </script>
  
  <style scoped>
  .container {
    background-color: #4E3629;
    position: sticky;
    top: 0;
    z-index: 999;
  }
  
  nav {
    width: 90%;
    height: 70px;
    margin: auto;
  }
  
  .logo {
    font-family: logo;
    font-size: 40px;
    font-weight: lighter;
    color: #FED8B1;
  }
  
  .links {
    color: #FFEAD6;
    font-family: links;
  }
  .links a:hover {
    color: #FED8B1;
  }
  
  .active {
    color: #FED8B1;
    font-weight: bold;
  }
  
  .auth {
    font-family: links;
    font-weight: bold;
  }
  .auth .sign {
    color: #FED8B1;
    border-radius: 40px;
    width: 120px;
    text-align: center;
  }
  .sign:hover {
    background-color: #FAD4A2;
    color: #4E3629;
  }
  .auth .login {
    color: #4E3629;
    background-color: #FAD4A2;
    border-radius: 40px;
    width: 120px;
    text-align: center;
    margin-left: 5px;
  }
  .login:hover {
    background-color: #4E3629;
    color: #FAD4A2;
  }
  
  .menu {
    color: #FFEAD6;
  }
  </style>
  