//订单
const Comments =  () => import('@/pages/order/comments')
import OrderDetail from '@/pages/order/orderDetail'
const Relet =  () => import('@/pages/order/relet')
const Shopping =  () => import('@/pages/order/shopping')
const People =  () => import('@/pages/order/people')
import LocationList from '@/pages/order/locationList'
const Refund =  () => import('@/pages/order/refund')
const AppointmentExpress =  () => import('@/pages/order/appointmentExpress')
const Deny =  () => import('@/pages/order/deny')
import Calendar from '@/pages/order/calendar'
const Compensation =  () => import('@/pages/order/compensation')
const SendBack =  () => import('@/pages/order/sendBack')
import Buypay from '@/pages/order/buypay'
import BuyOrderDetail from '@/pages/order/buyOrderDetail'
const FriendRepay =  () => import('@/pages/order/friendRepay')

export default [
    { path: '/comments/:id/:goodid', component: Comments, meta: { title: '评价' } },
    { path: '/orderDetail/:id', component: OrderDetail, meta: { title: '订单详情' } },
    { path: '/relet/:id', component: Relet, meta: { title: '续租' } },
    { path: '/shopping/:id', component: Shopping, meta: { title: '购买', keepAlive: true, isBack: false, requireLogin: true } },
    { path: '/people/:type', component: People, meta: { title: '自取联系人' } },
    { path: '/locationList/:type', component: LocationList, meta: { title: '选择地点' } },
    { path: '/locationList/:type/:id', component: LocationList, meta: { title: '选择地点' } },
    { path: '/refund/:id', component: Refund, meta: { title: '退租' } },
    { path: '/appointmentExpress/:id', component: AppointmentExpress, meta: { title: '预约快递' } },
    { path: '/deny/:id', component: Deny, meta: { title: '否认' } },
    { path: '/calendar/:type', component: Calendar, meta: { title: '时间' } },
    { path: '/calendar/:type/:type1', component: Calendar, meta: { title: '时间' } },
    { path: '/compensation/:id', component: Compensation, meta: { title: '维修费' } },
    { path: '/sendBack/:id', component: SendBack, meta: { title: '自行寄回' } },
    { path: '/buypay/:id', component: Buypay, meta: { title: '支付', requireLogin: true } },
    { path: '/buyOrderDetail/:id', component: BuyOrderDetail, meta: { title: '订单详情', requireLogin: true } },
    { path: '/friendRepay', component: FriendRepay, meta: { title: '朋友代还' } },
]