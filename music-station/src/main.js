import '@/assets/scss/index.scss'

import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局样式文件


createApp(App).use(store).use(router).mount('#app')