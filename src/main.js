import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
export const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
