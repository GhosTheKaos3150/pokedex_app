 import { createRouter, createWebHistory } from 'vue-router'
 import Home from '../views/Home'
 import About from '../views/About'
 import Pokemon from '../views/Pokemon'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/pokemon/:id',
    name: 'Pokemon',
    component: Pokemon
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
