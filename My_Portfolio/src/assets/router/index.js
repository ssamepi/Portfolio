import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Personnel from '@/components/Personnel.vue'

// Chaque page de projet
import Alice_in_wonderland from '@/components/Per_project/Alice_in_wonderland.vue'
import Eliza from '@/components/Per_project/Eliza.vue'
import Etodo_planning from '@/components/Per_project/Etodo_planning.vue'
import ExploreCapture from '@/components/Per_project/Explore_capture.vue'
import HackJuice from '@/components/Per_project/Hack_juice.vue'
import Hackathon_green_way from '@/components/Per_project/Hackathon_green_way.vue'
import Next_buy from '@/components/Per_project/Next_buy.vue'
import Sncf from '@/components/Per_project/Sncf.vue'
import Starter_digital from '@/components/Per_project/Starter_digital.vue'

import { projects, techno } from '@/assets/data.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
    props: { projects, techno }
  },
  {
    path: '/personnel',
    name: 'personnel',
    component: Personnel
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    props: { projects, techno }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    props: { projects, techno }
  },
  {
    path: '/starter-digital-resume',
    name: 'Starter_digital_resume',
    component: Starter_digital
  },
  {
    path: '/etodo-planning',
    name: 'Etodo_planning',
    component: Etodo_planning
  },
  {
    path: '/hack-and-juice',
    name: 'Hack_juice',
    component: HackJuice
  },
  {
    path: '/green-way',
    name: 'Hackathon_green_way',
    component: Hackathon_green_way
  },
  {
    path: '/next-buy',
    name: 'Next_buy',
    component: Next_buy
  },
  {
    path: '/sncf',
    name: 'Sncf',
    component: Sncf
  },
  {
    path: '/alice-in-wonderland',
    name: 'Alice_in_wonderland',
    component: Alice_in_wonderland,
    props: { projects }
  },
  {
    path: '/eliza',
    name: 'Eliza',
    component: Eliza
  },
  {
    path: '/explore-and-capture',
    name: 'Explore_capture',
    component: ExploreCapture
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router