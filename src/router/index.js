import {
  createRouter,
  createWebHistory
} from 'vue-router'
console.log(createRouter, createWebHistory)
import home from '../views/home.vue'
import my from '../views/my.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: home
  },
  {
    path: '/my',
    component: my
  }
  ]
})

export default router
