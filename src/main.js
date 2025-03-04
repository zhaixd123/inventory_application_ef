import { createApp } from 'vue'
import MainLayout from './views/MainLayout.vue'  // 直接导入布局组件
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(MainLayout)  // 使用布局组件作为根组件
app.use(router)
app.use(ElementPlus)
app.mount('#app')