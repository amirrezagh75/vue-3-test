import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import 'primevue/resources/themes/mdc-dark-indigo/theme.css' // Dark materia ui framework

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.use(ToastService)
.use(VueAxios, axios)
.mount('#app')
