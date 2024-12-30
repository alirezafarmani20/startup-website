<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const dropMenu = ref(false);

const toggleMenu = () => {
  dropMenu.value = !dropMenu.value;
};
</script>

<template>
  <div class="flex sm:hidden">
    <!--mobile menu-->
    <button @click="toggleMenu">
      <img src="../assets/icons/menu.png" alt="drop down menu">
    </button>
    <div v-if="dropMenu.value" class="absolute bg-white shadow-lg rounded-lg mt-2">
      <nav class="flex flex-col items-start p-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/our-service">Services</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </div>
  <div class="hidden sm:flex">
    <!--desktop-->
    <nav class="flex items-center md:gap-6 text-[#FFFFFF] font-medium">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/our-service">Services</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </div>
</template>
