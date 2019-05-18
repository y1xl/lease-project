import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Me from '@/pages/me/me'
import LeaseOrder from '@/pages/order/leaseOrder'
import BuyOrder from '@/pages/order/buyOrder'
import Order from '@/pages/order/order'
import Shop from '@/pages/shop/shopList'
//产品
const Questionnaire =  () => import('@/pages/home/questionnaire')
import Redpacket from '@/pages/home/redpacket'
const Rpfriend =  () => import('@/pages/home/rpfriend')
import Goods from '@/pages/home/index_more'
import Extension from '@/pages/home/extension'
import WelfareAgency from '@/pages/home/welfareAgency'
import ProductDetail from '@/pages/home/productDetail'
import WordMouth from '@/pages/home/wordMouth'
import Buy from '@/pages/home/buy'
import Pay from '@/pages/home/pay'
import Agreement from '@/pages/home/agreement'
import Search from '@/pages/home/search'
import PreBuy from '@/pages/home/preBuy'
const FriendBuy =  () => import('@/pages/home/friendBuy')
const FriendBuyShare =  () => import('@/pages/home/friendBuyShare')

//订单
import ORDER from './order'
//个人中心
import MYCENTER from './mycenter'
//登录
import LOGIN from './login'
//门店
import ShopDetail from '@/pages/shop/shopDetail'
import Map from '@/pages/map'
//托管
import HOSTING from './hosting'
//收货地址
import Addresslist from '@/pages/address/addresslist'
import Addaddress from '@/pages/address/addaddress'

const NotFound =  () => import('@/pages/notFound')

Vue.use(Router)

const router = new Router({

  routes: [
    { path: '/', component: Index, meta: { title: '首页', requireLogin: true } },
    { path: '/shop', component: Shop, meta: { title: '门店', keepAlive: true, isBack: false, requireLogin: true } },
    { 
      path: '/order', component: Order, meta: { title: '订单', requireLogin: true }, 
      children:[
        { path: '', component: LeaseOrder, meta: { title: '订单', keepAlive: true, isBack: false  } },
        { path: 'buyOrder', component: BuyOrder, meta: { title: '订单', keepAlive: true, isBack: false, requireLogin: true  } },
      ]
    },
    { path: '/me', component: Me, meta: { title: '我的', requireLogin: true } },
    //门店
    { path: '/shopDetail', component: ShopDetail, meta: { title: '门店详情' } },
    { path: '/map/:center/:shop', component: Map, meta: { title: '地图' } },
    //订单
    ...ORDER,
    
    //产品&&首页
    { path: '/goods/:id', component: Goods, meta: { title: '产品列表', keepAlive: true, isBack: false  } },
    { path: '/extension', component: Extension, meta: { title: '推广收佣', requireLogin: true } },
    { path: '/welfareAgency', component: WelfareAgency, meta: { title: '领取福利', requireLogin: true } },
    { path: '/questionnaire', component: Questionnaire, meta: { title: '问卷调查' } },
    { path: '/redpacket', component: Redpacket, meta: { title: '抢红包' } },
    { path: '/rpfriend', component: Rpfriend, meta: { title: '抢红包-好友助力' } },
    { path: '/productDetail/:id', component: ProductDetail, meta: { title: 'SKU信息' } },
    { path: '/wordMouth/:id', component: WordMouth, meta: { title: '口碑' } },
    { path: '/buy', component: Buy, meta: { title: '下单', keepAlive: true, isBack: false, requireLogin: true  } },
    { path: '/pay/:orderid', component: Pay, meta: { title: '额度' } },
    { path: '/zagreement/:title', component: Agreement, meta: { title: '协议' } },
    { path: '/search', component: Search, meta: { title: '搜索', keepAlive: true, isBack: false } },
    { path: '/preBuy', component: PreBuy, meta: { title: '预下单', keepAlive: true, isBack: false, requireLogin: true } }, 
    { path: '/friendBuy', component: FriendBuy, meta: { title: '朋友送礼-下单', keepAlive: true, isBack: false } }, 
    { path: '/friendBuyShare', component: FriendBuyShare, meta: { title: '朋友送礼-朋友填写' } }, 

    //个人中心
    ...MYCENTER,
    //托管
    ...HOSTING,
    //收货地址
    { path: '/addresslist/:type', component: Addresslist, meta: { title: '收货地址', requireLogin: true } },
    { path: '/addaddress', component: Addaddress, meta: { title: '添加收货地址', requireLogin: true } },
    { path: '/addaddress/:id', component: Addaddress, meta: { title: '编辑收货地址', requireLogin: true } },
    //登录
    ...LOGIN,

    { path: '*', component: NotFound, meta: { title: '404-not found' } },

  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})

// 路由拦截
// 需要鉴权,我都会在路由meta添加添加一个字段requireLogin,设置为true的时,这货就必须走鉴权
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireLogin)) {
    if (window.localStorage.getItem("userinfo")) {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  } else {
    next();
  }
});

export default router;