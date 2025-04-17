<template>
  <nav class="navbar">
    <div class="logo">📚 Qera'a</div>
    <ul>
      <li><NuxtLink to="/">الرئيسية</NuxtLink></li>
      <li><NuxtLink to="/books2">الكتب</NuxtLink></li>
      <li><NuxtLink to="/plans">الخطط</NuxtLink></li>
      <li><NuxtLink to="/contact">تواصل معنا</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background: #6B4226;
  color: white;
}
ul {
  list-style: none;
  display: flex;
  gap: 15px;
}
a {
  color: white;
  text-decoration: none;
}
</style>

  
  