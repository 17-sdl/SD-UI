import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { SD } from '../examples'



let app = createApp(App)
app.use(SD)
app.mount('#app')
