import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Projects from '@/components/Projects.vue'
import { projects, techno } from '@/assets/data.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main, 
    props: { projects, techno }
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects,
    props: { projects, techno }
  }
  // ,
  // {
  //   path: '/Mini_games',
  //   name: 'Mini_games',
  //   component: Mini_games,
  //   props: { projects, techno }
  // },
  // {
  //   path: '/Contact',
  //   name: 'Contact',
  //   component: Contact,
  //   props: { projects, techno }
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router