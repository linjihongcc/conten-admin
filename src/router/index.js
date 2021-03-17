import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home'
// import About from '../views/About'
const Home = () => import('../views/Home')
const About = () => import('../views/About')

Vue.use(VueRouter)
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about/:id',
    component: About
  }

]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
