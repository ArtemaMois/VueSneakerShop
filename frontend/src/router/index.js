import { createRouter, createWebHistory } from 'vue-router'
import SneakersPage from '../pages/SneakersPage.vue'
import LikedSneakersPage from '../pages/LikedSneakersPage.vue';

const routes = [
  {
    path: '/',
    component: SneakersPage
  },
  {
    path: '/liked',
    component: LikedSneakersPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
