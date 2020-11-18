import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// importing scss global
import './assets/_scss/app.scss'

// importing vue component global
import Loading from './components/Loading.vue'
Vue.component('Loading', Loading)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
