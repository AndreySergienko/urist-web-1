import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/webinar',
    name: 'web',
    component: () => import(/* webpackChunkName: "about" */ '../views/Webinar.vue')
  },
  {
    path: "/documents",
    name: 'doc',
    component: () => import('../views/Documents')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
