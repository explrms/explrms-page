import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Git from '../views/Git'
import Telegram from "@/views/Telegram";
import VK from "@/views/VK"
import Photos from "@/views/Photos";
import LakeBaikalAug2022 from "@/views/photos/LakeBaikalAug2022";
import LakeBaikalAug2021 from "@/views/photos/LakeBaikalAug2021";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/git',
    name: 'Git',
    component: Git
  },
  {
    path: '/tg',
    name: 'Telegram',
    component: Telegram
  },
  {
    path: '/vk',
    name: 'VK',
    component: VK
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/photos/lake-baikal-aug-2022',
    name: 'LakeBaikalAug2022',
    component: LakeBaikalAug2022
  },
  {
    path: '/photos/lake-baikal-aug-2021',
    name: 'LakeBaikalAug2021',
    component: LakeBaikalAug2021
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'E-SPACE';
  next();
});


export default router
