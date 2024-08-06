import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

createApp(App).use(mdiVue, {
  icons: mdijs
}).mount('#app')