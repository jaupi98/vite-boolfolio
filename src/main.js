import { createApp } from 'vue'

import App from './App.vue'
//importare router
import{ router } from "./router";

createApp(App).use(router).mount('#app')
