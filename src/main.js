import Vue from 'vue'
import App from './App'
import router from './router'
// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入通用样式
import '@/assets/base.less'

// 导入axios
import axios from 'axios'

// 把axios绑定给vue的原型
Vue.prototype.axios = axios
// 给axios对象设置一个全局的默认baseURL
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 给axios配置请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // console.log('你好啊，我拦截了你')
    // console.log(config)
    // config.baseURL = 'http://localhost:8888/api/private/v1/'
    // 每次请求的时候，都会自动给config.headers增加一个Authorization
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 给axios配置响应拦截器
axios.interceptors.response.use(
  function(response) {
    // console.log(response)
    // 通过响应拦截器，直接返回res.data
    return response.data
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 使用element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
