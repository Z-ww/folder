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
      component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
    },
    {
      path: '/foodList',
      name: 'foodList',
      component: () => import(/* webpackChunkName: "mine" */ '../views/foodList.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import(/* webpackChunkName: "city" */ '../views/city.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import(/* webpackChunkName: "shop" */ '../views/shop.vue')
    }
  ]
})
