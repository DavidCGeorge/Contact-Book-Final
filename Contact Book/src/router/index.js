import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Addcontact from '../views/addcontact.vue'
import Viewcontact from '../views/Viewcontact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addcontact',
      name: 'Addcontact',
      component: Addcontact
    },
    {
      path: '/Viewcontact',
      name: 'Viewcontact',
      component: Viewcontact
    },
  ]
})


export default router