//托管
const Gohosting =  () => import(/* webpackChunkName: 'Gohosting-group' */ '@/pages/hosting/gohosting/index')
const Steps2 =  () => import(/* webpackChunkName: 'Gohosting-group' */ '@/pages/hosting/gohosting/steps2')
const Fittings =  () => import(/* webpackChunkName: 'Gohosting-group' */ '@/pages/hosting/gohosting/fittings')
const Uploadimg =  () => import(/* webpackChunkName: 'Gohosting-group' */ '@/pages/hosting/gohosting/uploadimg')
const Gsuccessful =  () => import(/* webpackChunkName: 'Gohosting-group' */ '@/pages/hosting/gohosting/successful')
//托管中心
const Trusteeship =  () => import('@/pages/hosting/myhosting/trusteeship')
const HostDetail =  () => import(/* webpackChunkName: 'myhosting-group' */ '@/pages/hosting/myhosting/hostDetail')
const HostCancel =  () => import(/* webpackChunkName: 'myhosting-group' */ '@/pages/hosting/myhosting/hostCancel')
const PlatformDeli =  () => import(/* webpackChunkName: 'myhosting-group' */ '@/pages/hosting/myhosting/platformDeli')
const PostDeli =  () => import(/* webpackChunkName: 'myhosting-group' */ '@/pages/hosting/myhosting/postDeli')
const HostingDetail =  () => import(/* webpackChunkName: 'myhosting-group' */ '@/pages/hosting/myhosting/hostingDetail')
const HostingExpress =  () => import(/* webpackChunkName: 'myhosting-group' */ '@/pages/hosting/myhosting/hostingExpress')
const Nearshop =  () => import(/* webpackChunkName: 'myhosting-group' */ '@/pages/hosting/myhosting/nearshop')
const NotDetail =  () => import(/* webpackChunkName: 'myhosting-notDetail-group' */ '@/pages/hosting/myhosting/notDetail')
const NotPay =  () => import(/* webpackChunkName: 'myhosting-notDetail-group' */ '@/pages/hosting/myhosting/notDetail')

export default [
    { path: '/gohosting', component: Gohosting, meta: { title: '托管理财', requireLogin: true } },
    { path: '/steps2', component: Steps2, meta: { title: '托管理财' } },
    { path: '/fittingsConfirm', component: Fittings, meta: { title: '配件确认' } },
    { path: '/uploadimg', component: Uploadimg, meta: { title: '上传照片', keepAlive: true, isBack: false, requireLogin: true } },
    { path: '/gsuccessful', component: Gsuccessful, meta: { title: '提交成功' } },

    { path: '/trusteeship', component: Trusteeship, meta: { title: '我的托管', keepAlive: true, isBack: false, requireLogin: true } },
    { path: '/hostDetail/:id', component: HostDetail, meta: { title: '审核详情', requireLogin: true } },
    { path: '/hostCancel/:id/:number', component: HostCancel, meta: { title: '取消托管' } },
    { path: '/platformDeli/:id', component: PlatformDeli, meta: { title: '平台配送' } },
    { path: '/postDeli/:id', component: PostDeli, meta: { title: '快递交付' } },
    { path: '/hostingDetail/:id', component: HostingDetail, meta: { title: '托管详情', requireLogin: true } },
    { path: '/hostingExpress/:id', component: HostingExpress, meta: { title: '审核详情', requireLogin: true } },
    { path: '/nearshop', component: Nearshop, meta: { title: '选择门店' } },
    { path: '/notDetail/:id', component: NotDetail, meta: { title: '详情', requireLogin: true } },
    { path: '/notpay/:id', component: NotPay, meta: { title: '支付' } },
]