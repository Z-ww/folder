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
      path: '/mine',
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
    //我的
    {
    	path:'/mine',
    	name:'mine',
      component: () => import(/* webpackChunkName: "mine" */ '../views/mine.vue')

    },
    //我的余额
     {
    	path:'/balance',
    	name:'balance',
      component: () => import(/* webpackChunkName: "balance" */ '../views/balance.vue')

    },
    //余额说明
    {
    	path:'/balance2',
    	name:'balance2',
      component: () => import(/* webpackChunkName: "balance" */ '../views/balance2.vue')

    },
    //搜索
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
    },
    //服务中心
    {
    	path:'/fuwu',
    	name:'fuwu',
    	component: () => import(/* webpackChunkName: "fuwu" */ '../views/fuwu.vue')
    },
    //活动问题
    {
    	path:'/problem',
    	name:'problem',
    	component: () => import(/* webpackChunkName: "problem" */ '../views/problem.vue')
    },
    //余额问题
     {
    	path:'/problem2',
    	name:'problem2',
    	component: () => import(/* webpackChunkName: "problem2" */ '../views/problem2.vue')
    },
    //商务合作
    { 
    	path:'/cooperation',
    	name:'cooperation',
    	component: () => import(/* webpackChunkName: "cooperation" */ '../views/cooperation.vue')
    },
    //代金券说明
    { 
    	path:'/voucher',
    	name:'voucher',
    	component: () => import(/* webpackChunkName: "voucher" */ '../views/voucher.vue')
    },
    //负责声明
    {
    	path:'/responsible',
    	name:'responsible',
    	component: () => import(/* webpackChunkName: "responsible" */ '../views/responsible.vue')
    },
    //优惠说明
    {
    	path:'/discounts',
    	name:'discounts',
    	component: () => import(/* webpackChunkName: "discounts" */ '../views/discounts.vue')
    },
    //补签规则
    {
    	path:'/retroactive',
    	name:'retroactive',
    	component: () => import(/* webpackChunkName: "retroactive" */ '../views/retroactive.vue')
    },
    //活动细则
     {
    	path:'/rules',
    	name:'rules',
    	component: () => import(/* webpackChunkName: "rules" */ '../views/rules.vue')
    },
    //红包问题
     {
    	path:'/hongbao',
    	name:'hongbao',
    	component: () => import(/* webpackChunkName: "hongbao" */ '../views/hongbao.vue')
    },
    //会员问题
    {
    	path:'/vip',
    	name:'vip',
    	component: () => import(/* webpackChunkName: "vip" */ '../views/vip.vue')
    },
    //会员说明
     {
    	path:'/vipshuoming',
    	name:'vipshuoming',
    	component: () => import(/* webpackChunkName: "vipshuoming" */ '../views/vipshuoming.vue')
    },
    //其他问题
    {
    	path:'/qita',
    	name:'qita',
    	component: () => import(/* webpackChunkName: "qita" */ '../views/qita.vue')
    },
    //支付问题
     {
    	path:'/zhifu',
    	name:'zhifu',
    	component: () => import(/* webpackChunkName: "qita" */ '../views/zhifu.vue')
    },
    //教我相关大片
    {
    	path:'/xg',
    	name:'xg',
    	component: () => import(/* webpackChunkName: "xg" */ '../views/xg.vue')
    },
    //积分问题
     {
    	path:'/point',
    	name:'point',
    	component: () => import(/* webpackChunkName: "point" */ '../views/point.vue')
    },
     //用户等级说明
     {
    	path:'/user',
    	name:'user',
    	component: () => import(/* webpackChunkName: "user" */ '../views/user.vue')
    },
     //超级会员权益说明
     {
    	path:'/svip',
    	name:'svip',
    	component: () => import(/* webpackChunkName: "svip" */ '../views/svip.vue')
    }
  ]
})
