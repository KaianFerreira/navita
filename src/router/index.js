import Vue from 'vue'
import VueRouter from 'vue-router'
import Veichles from '../views/Veichles/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Veichles',
    component: Veichles
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
