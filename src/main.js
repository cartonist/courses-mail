import { createApp } from 'vue'
import './style.css' //默认的初始化样式
import './assets/css/reset.css' //导入自己的初始化样式
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './utils/mock/mock.js'
import store from './store'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(store)
app.mount('#app')
