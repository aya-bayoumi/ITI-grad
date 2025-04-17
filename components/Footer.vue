<template>
    <footer class="text-[#f6ddc6]">
  
      <!-- Top Section -->
      <div
        class="w-full bg-no-repeat bg-top bg-cover pt-28 pb-10 px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 items-center"
        style="background-image: url('/images/footer.svg')"
      >
        <!-- Logo -->
        <div class="flex justify-start items-center">
          <h1 class="text-5xl">Qera’a</h1>
        </div>
  
        <!-- Social icons + Links -->
        <div class="flex flex-col items-center gap-6">
          <!-- Social Icons -->
          <div class="icons flex gap-10 text-[34px]">
            <a href="#https://www.facebook.com/"><FontAwesomeIcon class="icon" icon="fa-brands fa-facebook" /></a>
            <a href="#https://www.instagram.com/bluebookstores/"><FontAwesomeIcon class="icon" icon="fa-brands fa-instagram" /></a>
            <a href="#"><FontAwesomeIcon class="icon" icon="fa-brands fa-twitter" /></a>
            <a href="https://github.com/aya-bayoumi/ITI-grad"><FontAwesomeIcon class="icon" icon="fa-brands fa-github" /></a>
          </div>
  
          <!-- Navigation Links -->
          <div class="flex flex-wrap justify-center gap-8 font-semibold">
            <a href="/">Home</a>
            <a href="/books">Books</a>
            <a href="/plans">Plans</a>
            <a href="/cart">Cart</a>
            <a href="#">Team</a>
          </div>
        </div>
  
        <!-- Empty column for layout distribution -->
        <div class="hidden md:block"></div>
      </div>
  
      <!-- Bottom Section -->
      <div class="px-6 py-4 flex flex-col bg-[#A67B5B] md:px-16 text-[#FFF7EF] md:flex-row justify-between items-center text-sm gap-3 md:gap-0">
        <p> &copy; 2025 All Rights Reserved</p>
  
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sales and Refunds</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
  
        <div class="flex items-center gap-4">
          <a href="tel:+20 01037896598" class="flex items-center gap-1">
            <Icon name="mdi:phone" /> +20 01037896598
          </a>
          <a href="mailto:qeraabookstore@gmail.com" class="flex items-center gap-1">
            <Icon name="mdi:email" /> qeraabookstore@gmail.com

          </a>
        </div>
      </div>
    </footer>
  </template>

<style scoped>
@media (max-width: 767px) {
  footer {
    text-align: center;
  }

  /* Top section */
  footer > div:first-child {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
    /* padding-top: 60px; */
    /* padding-bottom: 40px; */
  }

  footer h1 {
    justify-content: center;
    font-size: 36px;
    margin-bottom: -300px;
  }

  .icons {
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .icons .icon {
    font-size: 28px;
  }

  .flex.flex-wrap.justify-center.gap-8.font-semibold {
    gap: 16px;
    flex-direction: column;
  }

  /* Bottom section */
  footer > div:last-child {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  footer > div:last-child p {
    margin-bottom: 10px;
  }

  footer > div:last-child > div {
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  footer a {
    font-size: 14px;
  }
}

footer{
  background-color:  #fdf6ee;
}
h1{
  font-family: logo;
}
.icon{
  /* width: 30px; */
  font-size: 30px;
  color: #f6ddc6;
}
</style>