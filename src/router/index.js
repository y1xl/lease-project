import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Me from '@/pages/me/me'
import Order from '@/pages/order/orderList'
import Shop from '@/pages/shop/shopList'
//订单
import Comments from '@/pages/order/comments'
import OrderDetail from '@/pages/order/orderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',component: Index,meta:{title:'首页'} },
    { path: '/shop',component: Shop,meta:{title:'门店'} },
    { path: '/order',component: Order,meta:{title:'订单'} },
    { path: '/me',component: Me,meta:{title:'我的'} },
    //订单
    { path: '/comments',component: Comments,meta:{title:'评价'} },
    { path: '/orderDetail',component: OrderDetail,meta:{title:'订单详情'} },
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
