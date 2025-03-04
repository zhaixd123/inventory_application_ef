import { createRouter, createWebHistory } from 'vue-router'
//import HelloWorld from '../components/HelloWorld.vue'
//import SnakeGame from '../components/SnakeGame.vue'
import MainLayout from '../views/MainLayout.vue'

// router/index.js
const routes = [
  {
    path: '/inventory',
    component: MainLayout,
    //redirect: '/inventory/dashboard' // 添加默认重定向
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router