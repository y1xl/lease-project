import Vue from 'vue' 
import Router from 'vue-router'
import Index from'@/pages/index' 
import Me from '@/pages/me/me' 
import Order from'@/pages/order/orderList'
import Shop from '@/pages/shop/shopList'  
import Home from'@/pages/home/index_more'

Vue.use(Router) 
export default new 

Router({ 
	routes: [ 
	
	{ path: '/',component:Index,meta:{title:'首页'} },
	{ path: '/shop',component: Shop,meta:{title:'门店'}}, 
	{ path: '/order',component: Order,meta:{title:'订单'} }, 
	{ path:'/me',component: Me,meta:{title:'我的'} },
	{ path:'/home',component: Home},
	
	],

scrollBehavior (to, from,savedPosition) { 
	if (savedPosition) { return savedPosition 
	}
	else { 
		return { x:0, y: 0 } 
		}
	}
})
