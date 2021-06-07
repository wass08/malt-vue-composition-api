import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Composition from '@/views/Composition.vue'
import Options from '@/views/Options.vue'
import Counter from '@/views/Counter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/composition',
    name: 'Composition',
    component: Composition
  },
  {
    path: '/options',
    name: 'Options',
    component: Options,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
