import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    // set view routes
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactUsView.vue'),
    },
    {
      path: '/our-service',
      name: 'ourService',
      component: () => import('@/views/OurServiceView.vue'),
    },
    {
      path: '/protfolio',
      name: 'profile',
      component: () => import('@/views/PortfolioView.vue'),
    },
  ],
})

export default router
