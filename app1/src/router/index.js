import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import foodList from '../views/G-foodList'
import search from '../views/G-search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mine/:id',
      name: 'mine',
      component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
    },
    {
      path: '/foodList',
      name: 'foodList',
      component:foodList
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
    },
    {
      path: '/search/geohash',
      name: 'search',
      component:search
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
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "shop" */ '../views/G-order.vue')
    },
    {
      path: '/food',
      name: 'food',
      component: () => import(/* webpackChunkName: "shop" */ '../views/G-food.vue')
    }
  ]
})
