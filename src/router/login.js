//登录
const Login =  () => import(/* webpackChunkName: 'login-group' */ '@/pages/login/login')
const PasswordLogin =  () => import(/* webpackChunkName: 'login-group' */ '@/pages/login/passwordLogin')
const ForgetPassword =  () => import(/* webpackChunkName: 'login-group' */ '@/pages/login/forgetPassword')
const ResetPassword =  () => import(/* webpackChunkName: 'login-group' */ '@/pages/login/resetPassword')
const InputCode =  () => import(/* webpackChunkName: 'login-group' */ '@/pages/login/inputCode')
const AliLogin =  () => import('@/pages/login/aliLogin')
const SinaLogin =  () => import('@/pages/login/sinaLogin')
const WxLogin =  () => import('@/pages/login/wxLogin')

export default [    
    { path: '/login', component: Login, meta: { title: '登录' } },
    { path: '/passwordLogin', component: PasswordLogin, meta: { title: '密码登录' } },
    { path: '/forgetPassword', component: ForgetPassword, meta: { title: '忘记密码' } },
    { path: '/resetPassword/:phone', component: ResetPassword, meta: { title: '重置密码' } },
    { path: '/inputCode/:phone', component: InputCode, meta: { title: '输入验证码' } },
    { path: '/alilogin', component: AliLogin, meta: { title: '授权' } },
    { path: '/sinalogin', component: SinaLogin, meta: { title: '授权' } },
    { path: '/wxlogin', component: WxLogin, meta: { title: '授权' } },
] 