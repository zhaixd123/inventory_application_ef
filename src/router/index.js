import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // 确保这个路径正确指向你的 Home.vue 文件
import Dashboard from '../views/Dashboard.vue' // 假设你有一个 Dashboard.vue 在 views 文件夹中
import Inventory from '../views/Inventory.vue' // 假设你有一个 Inventory.vue 在 views 文件夹中

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  // 其他路由...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
