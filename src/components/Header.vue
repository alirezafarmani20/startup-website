<script setup>
import { RouterLink } from 'vue-router';
//import component
import Container from '@/layouts/Container.vue'
import Navigations from './Navigations.vue'
</script>

<template>
  <header class="w-full bg-[#74C69D]">
    <Container class="py-6">
        <div class="w-full flex justify-between items-center">
            <div class="flex items-center">
                <!--logo section-->
                <RouterLink to="/">
                    <img src="../assets/image/logo.png" alt="site logo" class="w-[129px] h-[38px] md:w-[187px] md:h-[50px]">
                </RouterLink>
            </div>
            <div class="flex items-center">
                <!--menu section-->
                <Navigations />
            </div>
        </div>
    </Container>
  </header>
</template>
