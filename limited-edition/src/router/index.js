import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCart from '../views/ShoppingCart.vue'
import ProductsPage from '../views/ProductsPage.vue'

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/',
    redirect: '/products'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
