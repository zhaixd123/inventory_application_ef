import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 修改后
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



const app = createApp(App)  // 使用布局组件作为根组件
app.use(router)
app.use(ElementPlus)
app.mount('#app')