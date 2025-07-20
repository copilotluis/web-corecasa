import { createApp } from 'vue'
import { createPinia } from 'pinia' // Añade esta línea
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
app.use(createPinia()) // Añade esta línea
app.use(router)
app.mount('#app')