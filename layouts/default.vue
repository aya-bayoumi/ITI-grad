<template>
    <div>
      <Nav-before-registeration/>

      <slot /> <!-- This is where the page content will be injected -->
      <!-- <author /> -->
      <!-- <Footer /> -->
  </div>
  </template>
  
  <script setup>
  // import Nav-before-registeration from '@/components/Nav-before-registeration.vue';
  import Footer from '@/components/Footer.vue';
  // import author from '~/components/author.vue';
  </script>
  