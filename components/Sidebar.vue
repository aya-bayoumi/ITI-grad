<template>
    <div class="sidebar">
      <ul>
        <li><nuxt-link to="/profile" active-class="active">Orders</nuxt-link></li>
        <li><nuxt-link to="/profile/downloads" active-class="active">Downloads</nuxt-link></li>
        <li><nuxt-link to="/profile/plans" active-class="active">Plans</nuxt-link></li>
        <li><nuxt-link to="/" >Logout</nuxt-link></li>
      </ul>
    </div>
</template>
  
<script setup>
definePageMeta({
  layout: 'registered', 
});
</script>
 

<style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    /* padding: 40px 0; */
  }
  .sidebar ul {
    list-style: none;
  }
  .sidebar li {
    margin: 80px 50px;
  }
  .active {
  font-weight: bold;
    color:  #4E3629;
}

</style>
  