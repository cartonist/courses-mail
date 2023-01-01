import {createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '../store/user.js'
const routes = [
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    name: 'main',
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'course',
        name: 'course',
        component: () => import('../views/Course.vue')
      }
    ]
  },
  {
    path: '/course-info/:id',
    name: 'CourseInfo',
    component: () => import('../views/CourseInfo.vue')
  },
  {
    path: '/course-play/:courseId/:chapterId/:subChapterId',
    name: 'course-play',
    component: () => import('../views/CoursePlay.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("../views/Cart.vue"),
    beforeEnter:(to, from, next) => {
      if(useUserStore().userinfo.id) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import("../views/Order.vue"),
    beforeEnter:(to, from, next) => {
      if(useUserStore().userinfo.id) {
        next()
      } else {
        next('/login')
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router