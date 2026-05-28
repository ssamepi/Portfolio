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
    path: '/Portfolio',
    name: 'home',
    component: Main,
    props: { projects, techno }
  },
  {
    path: '/Portfolio/personnel',
    name: 'personnel',
    component: Personnel
  },
  {
    path: '/Portfolio/projects',
    name: 'Projects',
    component: Projects,
    props: { projects, techno }
  },
  {
    path: '/Portfolio/contact',
    name: 'Contact',
    component: Contact,
    props: { projects, techno }
  },
  {
    path: '/Portfolio/starter-digital-resume',
    name: 'Starter_digital_resume',
    component: Starter_digital
  },
  {
    path: '/Portfolio/etodo-planning',
    name: 'Etodo_planning',
    component: Etodo_planning
  },
  {
    path: '/Portfolio/hack-and-juice',
    name: 'Hack_juice',
    component: HackJuice
  },
  {
    path: '/Portfolio/green-way',
    name: 'Hackathon_green_way',
    component: Hackathon_green_way
  },
  {
    path: '/Portfolio/next-buy',
    name: 'Next_buy',
    component: Next_buy
  },
  {
    path: '/Portfolio/sncf',
    name: 'Sncf',
    component: Sncf
  },
  {
    path: '/Portfolio/alice-in-wonderland',
    name: 'Alice_in_wonderland',
    component: Alice_in_wonderland,
    props: { projects }
  },
  {
    path: '/Portfolio/eliza',
    name: 'Eliza',
    component: Eliza
  },
  {
    path: '/Portfolio/explore-and-capture',
    name: 'Explore_capture',
    component: ExploreCapture
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router