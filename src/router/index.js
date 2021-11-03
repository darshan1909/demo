import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Services from '../views/Services'
import About from '../views/About'
import Contact from '../views/Contact'
import Loft from '../views/Loft'
import Refurbishments from '../views/Refurbishments'
import Extension from '../views/Extension'
import Bespoke from '../views/Bespoke'
import Kitchen from '../views/Kitchen'
import Carpentry from '../views/Carpentry' 



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Carpentry',
    name: 'Carpentry',
    component: Carpentry
  },
  {
    path: '/Kitchen',
    name: 'Kitchen',
    component: Kitchen
  },
  {
    path: '/Bespoke',
    name: 'Bespoke',
    component: Bespoke
  },
  {
    path: '/Extension',
    name: 'Extension',
    component: Extension
  },
  {
    path: '/Refurbishments',
    name: 'Refurbishments',
    component: Refurbishments
  },
  {
    path: '/Loft',
    name: 'Loft',
    component: Loft
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    window.scrollTo(0,0);
  },
  routes
})

export default router
