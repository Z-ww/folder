import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import food from '../views/food'

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
      component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
    },
    {
      path: '/food',
      name: 'food',
      component:food
    }
  ]
})
