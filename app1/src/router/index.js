import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/login',
			name: 'login',
			component: () =>
				import( /* webpackChunkName: "login" */ '../views/login.vue')
		},
		//店铺
		{
			path: '/shop',
			name: 'shop',
			component: () =>
				import( /* webpackChunkName: "shop" */ '../views/shop.vue')
		},
		{
			path: '/city',
			name: 'city',
			component: () =>
				import( /* webpackChunkName: "city" */ '../views/city.vue')
		},
		{
			path: '/order',
			name: 'order',
			component: () =>
				import( /* webpackChunkName: "city" */ '../views/G-order.vue')
		},
		{
			path: '/food',
			name: 'food',
			component: () =>
				import( /* webpackChunkName: "mine" */ '../views/G-food.vue')
		},
		//我的
		{
			path: '/mine',
			name: 'mine',
			component: () =>
				import( /* webpackChunkName: "mine" */ '../views/mine.vue')

		},
		//我的余额
		{
			path: '/balance',
			name: 'balance',
			component: () =>
				import( /* webpackChunkName: "balance" */ '../views/balance.vue')

		},
		//余额说明
		{
			path: '/balance2',
			name: 'balance2',
			component: () =>
				import( /* webpackChunkName: "balance" */ '../views/balance2.vue')

		},
		//搜索
		{
			path: '/search',
			name: 'search',
			component: () =>
				import( /* webpackChunkName: "balance" */ '../views/G-search.vue')

		},
		//服务中心
		{
			path: '/fuwu',
			name: 'fuwu',
			component: () =>
				import( /* webpackChunkName: "fuwu" */ '../views/fuwu.vue')
		},
		//活动问题
		{
			path: '/problem',
			name: 'problem',
			component: () =>
				import( /* webpackChunkName: "problem" */ '../views/problem.vue')
		},
		//菜详情
		{
			path: '/details',
			name: 'details',
			component: () =>
				import( /* webpackChunkName: "details" */ '../views/details.vue')
		},
		//在线支付
		{
			path: '/timeDown',
			name: 'timeDown',
			component: () =>
				import( /* webpackChunkName: "timeDown" */ '../views/timeDown.vue')
		},
		//余额问题
		{
			path: '/problem2',
			name: 'problem2',
			component: () =>
				import( /* webpackChunkName: "problem2" */ '../views/problem2.vue')
		},
		//商务合作
		{
			path: '/cooperation',
			name: 'cooperation',
			component: () =>
				import( /* webpackChunkName: "cooperation" */ '../views/cooperation.vue')
		},
		//代金券说明
		{
			path: '/voucher',
			name: 'voucher',
			component: () =>
				import( /* webpackChunkName: "voucher" */ '../views/voucher.vue')
		},
		//负责声明
		{
			path: '/responsible',
			name: 'responsible',
			component: () =>
				import( /* webpackChunkName: "responsible" */ '../views/responsible.vue')
		},
		//优惠说明
		{
			path: '/discounts',
			name: 'discounts',
			component: () =>
				import( /* webpackChunkName: "discounts" */ '../views/discounts.vue')
		},
		//补签规则
		{
			path: '/retroactive',
			name: 'retroactive',
			component: () =>
				import( /* webpackChunkName: "retroactive" */ '../views/retroactive.vue')
		},
		//活动细则
		{
			path: '/rules',
			name: 'rules',
			component: () =>
				import( /* webpackChunkName: "rules" */ '../views/rules.vue')
		},
		//红包问题
		{
			path: '/hongbao',
			name: 'hongbao',
			component: () =>
				import( /* webpackChunkName: "hongbao" */ '../views/hongbao.vue')
		},
		//会员问题
		{
			path: '/vip',
			name: 'vip',
			component: () =>
				import( /* webpackChunkName: "vip" */ '../views/vip.vue')
		},
		//会员说明
		{
			path: '/vipshuoming',
			name: 'vipshuoming',
			component: () =>
				import( /* webpackChunkName: "vipshuoming" */ '../views/vipshuoming.vue')
		},
		//其他问题
		{
			path: '/qita',
			name: 'qita',
			component: () =>
				import( /* webpackChunkName: "qita" */ '../views/qita.vue')
		},
		//支付问题
		{
			path: '/zhifu',
			name: 'zhifu',
			component: () =>
				import( /* webpackChunkName: "qita" */ '../views/zhifu.vue')
		},
		//教我相关大片
		{
			path: '/xg',
			name: 'xg',
			component: () =>
				import( /* webpackChunkName: "xg" */ '../views/xg.vue')
		},
		//积分问题
		{
			path: '/point',
			name: 'point',
			component: () =>
				import( /* webpackChunkName: "point" */ '../views/point.vue')
		},
		//会员中心
		{
			path: '/benefit',
			name: 'benefit',
			component: () =>
				import( /* webpackChunkName: "benefit" */ '../views/benefit.vue')
		},
		//会员说明
		{
			path: '/vipDescription',
			name: 'vipDescription',
			component: () =>
				import( /* webpackChunkName: "vipDescription" */ '../views/vipDescription.vue')
		},
		//购买记录
		{
			path: '/invoiceRecord',
			name: 'invoiceRecord',
			component: () =>
				import( /* webpackChunkName: "invoiceRecord" */ '../views/invoiceRecord.vue')
		},
		//兑换会员
		{
			path: '/userCart',
			name: 'userCart',
			component: () =>
				import( /* webpackChunkName: "userCart" */ '../views/userCart.vue')
		},
		//用户等级说明
		{
			path: '/user',
			name: 'user',
			component: () =>
				import( /* webpackChunkName: "user" */ '../views/user.vue')
		},
		//超级会员权益说明
		{
			path: '/svip',
			name: 'svip',
			component: () =>
				import( /* webpackChunkName: "svip" */ '../views/svip.vue')
		},
		{
			path: '/resetPass',
			name: 'resetPass',
			component: () =>
				import( /* webpackChunkName: "resetPass" */ '../views/resetPass.vue')
		},
		{
			path: '/userinfo',
			name: 'userinfo',
			component: () =>
				import( /* webpackChunkName: "userinfo" */ '../views/userinfo.vue')
		},
		//积分
		{
			path: '/jife',
			name: 'jife',
			component: () =>
				import( /* webpackChunkName: "jife" */ '../views/jife.vue')
		},
		{
			path: '/load',
			name: 'load',
			component: () =>
				import( /* webpackChunkName: "load" */ '../views/load.vue')
		},
		//积分商城
		{
			path: '/integral',
			name: 'integral',
			component: () =>
				import( /* webpackChunkName: "integral" */ '../views/integral.vue')
		},
		{
			path: '/integral2',
			name: 'integral2',
			component: () =>
				import( /* webpackChunkName: "integral" */ '../views/integral2.vue')
		},
		//具体城市
		{
			path: '/foodList',
			name: 'foodList',
			component: () =>
				import( /* webpackChunkName: "foodList" */ '../views/G-foodList.vue')
		},
		
	]
})
