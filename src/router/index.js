import Vue from 'vue'
import VueRouter from 'vue-router'
import BgParticles from "@/components/BgParticles";
import Home from '../views/Home.vue'
import Portfolio from "../views/Portfolio.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, BgParticles

  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio, BgParticles
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
