import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vMaska } from 'maska/vue'

import App from './App.vue'
import router from './router'

/** others **/
import './assets/css/_reset.scss'
import './assets/css/_font_rubik.scss'
import './assets/lib/icomoon/style.css'

/** layouts **/
import DefaultLayout from '@/layouts/default.vue'

const app = createApp(App)
app.component('default-layout', DefaultLayout)
app.directive('maska', vMaska)
app.use(createPinia())
app.use(router)
app.mount('#app')



