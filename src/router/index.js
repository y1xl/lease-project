import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Me from '@/pages/me/me'
import Order from '@/pages/order/orderList'
import Shop from '@/pages/shop/shopList'
//产品
import Goods from '@/pages/home/index_more'
//订单
import Comments from '@/pages/order/comments'
import OrderDetail from '@/pages/order/orderDetail'
import Relet from '@/pages/order/relet'
import Shopping  from '@/pages/order/shopping'
import People  from '@/pages/order/people'
import LocationList  from '@/pages/order/locationList'
import Refund  from '@/pages/order/refund'
//个人中心
import MyInformation from '@/pages/me/myInformation'
import ReceInformation from '@/pages/me/receInformation'
import DetaInformation from '@/pages/me/detaInformation'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index, meta: { title: '首页' } },
    { path: '/shop', component: Shop, meta: { title: '门店' } },
    { path: '/order', component: Order, meta: { title: '订单' } },
    { path: '/me', component: Me, meta: { title: '我的' } },
    //订单
    { path: '/comments',component: Comments,meta:{title:'评价'} },
    { path: '/orderDetail',component: OrderDetail,meta:{title:'订单详情'} },
    { path: '/relet',component: Relet,meta:{title:'续租'} },
    { path: '/shopping',component: Shopping,meta:{title:'购买'} },
    { path: '/people',component: People,meta:{title:'自取联系人'} },
    { path: '/locationList',component: LocationList,meta:{title:'选择地点'} },
    { path: '/refund',component: Refund,meta:{title:'退租'} },
    //
    { path: '/goods', component: Goods, meta: { title: '产品列表' } },

    //个人中心
    { path: '/myInformation', component: MyInformation, meta: { title: '我的资料' } },
    { path: '/receInformation', component: ReceInformation, meta: { title: '收货信息' } },
    { path: '/detaInformation', component: DetaInformation, meta: { title: '详细信息' } },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})
