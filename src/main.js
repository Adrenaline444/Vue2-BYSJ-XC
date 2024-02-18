import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, {Dialog} from 'vant';
import 'vant/lib/index.css';
import './assets/icon/iconfont.css';
import axios from "axios";
import public_loading from "./components/loading/public_loading";
import './components/public_black/public_black'
import './assets/css/public.css'


Vue.prototype.axios = axios


//加载动画
Vue.component('public_loading',public_loading)


const ser = Vue.prototype.axios = axios.create({
  baseURL:'http://localhost:8090/',
  timeout:1000,
})
//添加请求拦截器
ser.interceptors.request.use(function (config) {
  //在发送请求之前判断是否登录拥有token值
  if(localStorage.getItem('token') != null || localStorage.getItem('token') != undefined){
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
  return config
},function (error) {
  //出错返回
 return Promise.reject(error)
})
//添加响应拦截器
ser.interceptors.response.use(function (response) {
  //验证token是否过期
  if(response.data.status == '401' && response.data.msg == '无效的token'){
    localStorage.removeItem('token')
    sessionStorage.removeItem('student_id')
        Dialog.confirm({
          title:'暂未登录',
          message:"登录身份过期或未登录是否重新登陆"
        })
  }
  return response;
},function (error) {
  if(error.response.status){
    switch (error.response.status) {
      case 401:
        this.$toast.fail('登录过期请重新登录')
            break
      case 500:
        this.$toast.fail('未知错误')
            break
    }
  }
  return Promise.reject(error)
})

Vue.config.productionTip = false

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
