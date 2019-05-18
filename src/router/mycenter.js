//个人中心
const Rules =  () => import(/* webpackChunkName: 'mycenter-group' */ '@/pages/me/rules')
const MyInformation =  () => import(/* webpackChunkName: 'mycenter-group' */ '@/pages/me/myInformation')
const AddInformation =  () => import(/* webpackChunkName: 'mycenter-group' */ '@/pages/me/addInformation')
const ReceInformation =  () => import(/* webpackChunkName: 'mycenter-group' */ '@/pages/me/receInformation')
const DetaInformation =  () => import(/* webpackChunkName: 'mycenter-group' */ '@/pages/me/detaInformation')
const Coupon =  () => import(/* webpackChunkName: 'mycenter-group' */ '@/pages/me/coupon')
const Cash =  () => import(/* webpackChunkName: 'mycenter-cash-group' */ '@/pages/me/cash')
const MyBalance =  () => import(/* webpackChunkName: 'mycenter-cash-group' */ '@/pages/me/myBalance')
const BankCard =  () => import(/* webpackChunkName: 'mycenter-cash-group' */ '@/pages/me/bankCard')
const BindingCard =  () => import(/* webpackChunkName: 'mycenter-cash-group' */ '@/pages/me/bindingCard')
const Integral =  () => import(/* webpackChunkName: 'mycenter-group' */ '@/pages/me/integral')
const Cart =  () => import(/* webpackChunkName: 'mycenter-group' */ '@/pages/me/cart')
const HelpCenter =  () => import(/* webpackChunkName: 'mycenter-helpCenter-group' */ '@/pages/me/helpCenter')
const CommonProblem =  () => import(/* webpackChunkName: 'mycenter-helpCenter-group' */ '@/pages/me/commonProblem')
import Setup from '@/pages/me/setup'
const AccountBinding =  () => import('@/pages/me/accountBinding')
const AccountSecurity =  () => import(/* webpackChunkName: 'accountSecurity-group' */ '@/pages/me/accountSecurity')
const Modify =  () => import(/* webpackChunkName: 'accountSecurity-group' */ '@/pages/me/security/modify')
const Sendcode =  () => import(/* webpackChunkName: 'accountSecurity-group' */ '@/pages/me/security/sendcode')
const Newphone =  () => import(/* webpackChunkName: 'accountSecurity-group' */ '@/pages/me/security/newphone')
const Newpassword =  () => import(/* webpackChunkName: 'accountSecurity-group' */ '@/pages/me/security/newpassword')

//免押认证
import Face from '@/pages/certification/face'
const Certification =  () => import(/* webpackChunkName: 'certification-group' */ '@/pages/certification/index')
const School =  () => import(/* webpackChunkName: 'certification-group' */ '@/pages/certification/school')
const cPeople =  () => import(/* webpackChunkName: 'certification-group' */ '@/pages/certification/people')
const AddPeople =  () => import(/* webpackChunkName: 'certification-group' */ '@/pages/certification/addPeople')
const Realname =  () => import(/* webpackChunkName: 'certification-realname-group' */ '@/pages/certification/realname')
const RealnameSuc =  () => import(/* webpackChunkName: 'certification-realname-group' */ '@/pages/certification/realnameSuc')
const RealnameUnbundling =  () => import(/* webpackChunkName: 'certification-realname-group' */ '@/pages/certification/realnameUnbundling')

export default  [
    { path: '/rules/:title', component: Rules, meta: { title: '规则' } },
    { path: '/myInformation', component: MyInformation, meta: { title: '我的资料', requireLogin: true } },
    { path: '/receInformation', component: ReceInformation, meta: { title: '收货信息', requireLogin: true } },
    { path: '/addInformation/:id', component: AddInformation, meta: { title: '编辑收货信息', requireLogin: true } },
    { path: '/addInformation', component: AddInformation, meta: { title: '添加收货信息', requireLogin: true } },
    { path: '/detaInformation', component: DetaInformation, meta: { title: '详细信息', requireLogin: true } },
    { path: '/coupon', component: Coupon, meta: { title: '优惠券', requireLogin: true } },
    { path: '/myBalance', component: MyBalance, meta: { title: '我的余额', requireLogin: true } },
    { path: '/cash', component: Cash, meta: { title: '提现', requireLogin: true } },
    { path: '/bankCard', component: BankCard, meta: { title: '银行卡', requireLogin: true } },
    { path: '/bindingCard', component: BindingCard, meta: { title: '绑定银行卡', requireLogin: true } },
    { path: '/helpCenter', component: HelpCenter, meta: { title: '帮助中心', requireLogin: true } },
    { path: '/integral', component: Integral, meta: { title: '我的积分', requireLogin: true } },
    { path: '/cart', component: Cart, meta: { title: '购物车', requireLogin: true } },
    { path: '/commonProblem', component: CommonProblem, meta: { title: '常见问题' } },
    { path: '/setup', component: Setup, meta: { title: '设置' } },
    { path: '/accountBinding', component: AccountBinding, meta: { title: '账号绑定', requireLogin: true } },
    //账号安全
    { path: '/accountSecurity', component: AccountSecurity, meta: { title: '账号安全', requireLogin: true } },
    { path: '/modify/:type/:phone', component: Modify, meta: { title: '当前绑定手机号', requireLogin: true } },
    { path: '/sendcode/:type/:phone', component: Sendcode, meta: { title: '发送验证码', requireLogin: true } },
    { path: '/newphone', component: Newphone, meta: { title: '绑定新手机号', requireLogin: true } },
    { path: '/newpassword', component: Newpassword, meta: { title: '修改密码', requireLogin: true } },

    //免押认证
    { path: '/certification', component: Certification, meta: { title: '认证中心', requireLogin: true } },
    { path: '/school', component: School, meta: { title: '学籍认证' } },
    { path: '/cpeople', component: cPeople, meta: { title: '添加紧急联系人' } },
    { path: '/addPeople', component: AddPeople, meta: { title: '添加紧急联系人' } },
    { path: '/addPeople/:id', component: AddPeople, meta: { title: '添加紧急联系人' } },
    { path: '/realname', component: Realname, meta: { title: '实名认证' } },
    { path: '/realnameSuc', component: RealnameSuc, meta: { title: '实名认证' } },
    { path: '/realnameUnbundling', component: RealnameUnbundling, meta: { title: '解绑实名认证' } },
    { path: '/face/:orderid', component: Face, meta: { title: '人脸识别' } },
]