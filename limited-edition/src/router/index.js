import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCart from '../views/ShoppingCart.vue'

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
  {
    path: '/',
    name: 'Home',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
