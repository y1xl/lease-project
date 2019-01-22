import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Me from '@/pages/me/me'
import Order from '@/pages/order/orderList'
import Shop from '@/pages/shop/shopList'
//产品
import Goods from '@/pages/home/index_more'
import Extension from '@/pages/home/extension'
import WelfareAgency from '@/pages/home/welfareAgency'
import ProductDetail from '@/pages/home/productDetail'
import WordMouth from '@/pages/home/wordMouth'
import Buy from '@/pages/home/buy'
import Pay from '@/pages/home/pay'
//订单
import Comments from '@/pages/order/comments'
import OrderDetail from '@/pages/order/orderDetail'
import Relet from '@/pages/order/relet'
import Shopping from '@/pages/order/shopping'
import People from '@/pages/order/people'
import LocationList from '@/pages/order/locationList'
import Refund from '@/pages/order/refund'
import TimeQuantum from '@/pages/order/timeQuantum'
import AppointmentExpress from '@/pages/order/appointmentExpress'
import Deny from '@/pages/order/deny'
import Calendar from '@/pages/order/calendar'

//个人中心
import MyInformation from '@/pages/me/myInformation'
import AddInformation from '@/pages/me/addInformation'
import ReceInformation from '@/pages/me/receInformation'
import DetaInformation from '@/pages/me/detaInformation'
import AccountSecurity from '@/pages/me/accountSecurity'
import Modify from '@/pages/me/modify'
import Coupon from '@/pages/me/coupon'
import MyBalance from '@/pages/me/myBalance'
import BankCard from '@/pages/me/bankCard'
import HelpCenter from '@/pages/me/helpCenter'
import Integral from '@/pages/me/integral'
import CommonProblem from '@/pages/me/commonProblem'
import Setup from '@/pages/me/setup'
import Trusteeship from '@/pages/me/trusteeship'


//登录
import Login from '@/pages/login/login'
import PasswordLogin from '@/pages/login/passwordLogin'
import ForgetPassword from '@/pages/login/forgetPassword'
import ResetPassword from '@/pages/login/resetPassword'
import InputCode from '@/pages/login/inputCode'

//门店
import ShopDetail from '@/pages/shop/shopDetail'

//免押认证
import Certification from '@/pages/certification/index'
import School from '@/pages/certification/school'
import cPeople from '@/pages/certification/people'
import AddPeople from '@/pages/certification/addPeople'
import Realname from '@/pages/certification/realname'
import Face from '@/pages/certification/face'

// 托管
import HostDetail from '@/pages/hosting/myhosting/hostDetail'
import HostCancel from '@/pages/hosting/myhosting/hostCancel'
import PlatformDeli from '@/pages/hosting/myhosting/platformDeli'
import PostDeli from '@/pages/hosting/myhosting/postDeli'

Vue.use(Router)

export default new Router({

  routes: [
    { path: '/', component: Index, meta: { title: '首页' } },
    { path: '/shop', component: Shop, meta: { title: '门店' } },
    { path: '/order', component: Order, meta: { title: '订单' } },
    { path: '/me', component: Me, meta: { title: '我的' } },
    //订单
    { path: '/comments', component: Comments, meta: { title: '评价' } },
    { path: '/orderDetail', component: OrderDetail, meta: { title: '订单详情' } },
    { path: '/relet', component: Relet, meta: { title: '续租' } },
    { path: '/shopping', component: Shopping, meta: { title: '购买' } },
    { path: '/people', component: People, meta: { title: '自取联系人' } },
    { path: '/locationList', component: LocationList, meta: { title: '选择地点' } },
    { path: '/refund', component: Refund, meta: { title: '退租' } },
    { path: '/timeQuantum', component: TimeQuantum, meta: { title: '选择时间段' } },
    { path: '/appointmentExpress', component: AppointmentExpress, meta: { title: '预约快递' } },
    { path: '/deny', component: Deny, meta: { title: '否认' } },
    { path: '/calendar', component: Calendar, meta: { title: '时间' } },
    //产品
    { path: '/goods', component: Goods, meta: { title: '产品列表' } },
    { path: '/extension', component: Extension, meta: { title: '我要推广' } },
    { path: '/welfareAgency', component: WelfareAgency, meta: { title: '福利社' } },
    { path: '/productDetail', component: ProductDetail, meta: { title: 'SKU信息' } },
    { path: '/wordMouth', component: WordMouth, meta: { title: '口碑' } },
    { path: '/buy', component: Buy, meta: { title: '下单' } },
    { path: '/pay', component: Pay, meta: { title: '额度' } },

    //个人中心
    { path: '/myInformation', component: MyInformation, meta: { title: '我的资料' } },
    { path: '/receInformation', component: ReceInformation, meta: { title: '收货信息' } },
    { path: '/addInformation', component: AddInformation, meta: { title: '添加收货信息' } },
    { path: '/detaInformation', component: DetaInformation, meta: { title: '详细信息' } },
    { path: '/accountSecurity', component: AccountSecurity, meta: { title: '账号安全' } },
    { path: '/modify', component: Modify, meta: { title: '修改绑定手机号' } },
    { path: '/coupon', component: Coupon, meta: { title: '优惠券' } },
    { path: '/myBalance', component: MyBalance, meta: { title: '我的余额' } },
    { path: '/bankCard', component: BankCard, meta: { title: '银行卡' } },
    { path: '/helpCenter', component: HelpCenter, meta: { title: '帮助中心' } },
    { path: '/integral', component: Integral, meta: { title: '我的积分' } },
    { path: '/commonProblem', component: CommonProblem, meta: { title: '常见问题' } },
    { path: '/setup', component: Setup, meta: { title: '设置' } },
    { path: '/trusteeship', component: Trusteeship, meta: { title: '我的托管' } },


    //登录
    { path: '/login', component: Login, meta: { title: '登录' } },
    { path: '/passwordLogin', component: PasswordLogin, meta: { title: '密码登录' } },
    { path: '/forgetPassword', component: ForgetPassword, meta: { title: '忘记密码' } },
    { path: '/resetPassword', component: ResetPassword, meta: { title: '重置密码' } },
    { path: '/inputCode', component: InputCode, meta: { title: '输入验证码' } },

    //门店
    { path: '/shopDetail', component: ShopDetail, meta: { title: '门店详情' } },

    //免押认证
    { path: '/certification', component: Certification, meta: { title: '认证中心' } },
    { path: '/school', component: School, meta: { title: '学籍认证' } },
    { path: '/cpeople', component: cPeople, meta: { title: '添加紧急联系人' } },
    { path: '/addPeople', component: AddPeople },
    { path: '/realname', component: Realname, meta: { title: '实名认证' } },
    { path: '/face', component: Face, meta: { title: '人脸识别' } },

    // 托管
    { path: '/hostDetail', component: HostDetail, meta: { title: '托管详情' } },
    { path: '/hostCancel', component: HostCancel, meta: { title: '取消托管' } },
    { path: '/platformDeli', component: PlatformDeli, meta: { title: '平台配送' } },
    { path: '/postDeli', component: PostDeli, meta: { title: '快递交付' } },

  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})