// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './style/reset.css'
import './style/common.css'
import router from './router'

Vue.use(require('vue-wechat-title'))

import axios from "axios"
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '7dd71e09ac3a903d60949151b6d53744',
  plugin: ['AMap.Autocomplete', 'AMap.OverView', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

Vue.config.productionTip = false

import qs from 'qs'
Vue.prototype.$qs = qs

// Vue.prototype.API = 'https://xcx.chinaname.cn/miniwind/api/'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App />'
})