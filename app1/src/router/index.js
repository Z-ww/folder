import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "mine" */ '../views/mine.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
    }
  ]
})
