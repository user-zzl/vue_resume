import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Resume from '../components/Resume.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/resume', component: Resume, name: 'resume' }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
