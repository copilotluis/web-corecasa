import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Products from './pages/Products.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import AboutPage from './pages/AboutPage.vue'
import PrivacyPolicy from './pages/PrivacyPolicy.vue'
import LegalNotice from './pages/LegalNotice.vue'
import CookiePolicy from './pages/CookiePolicy.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: AboutPage },
  { path: '/product/:id', component: ProductDetailPage, props: true },
  { path: '/privacy', component: PrivacyPolicy },
  { path: '/legal', component: LegalNotice },
  { path: '/cookies', component: CookiePolicy }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router