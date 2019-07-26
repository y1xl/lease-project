import axios from "axios";
import qs from "qs";
import { Notify } from "vant";

axios.defaults.baseURL = 'https://newbeeadmin.zx-xcx.com/';
// axios.defaults.baseURL = 'https://admin.newbee-smart.com/';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(config.method === "post"&&config.headers.post['Content-Type'] == "application/x-www-form-urlencoded"){
        // 序列化 若是后台能直接处理json格式,可以不用 qs 来序列化的
        config.data = qs.stringify(config.data);
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    let code = error.response.status
    if (error.response && code === 404) {
        Notify('请求资源不存在');
    }
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    if (error.response && code === 500) {
        Notify('服务器错误,请稍后再试');
    }
    return Promise.reject(error);
});