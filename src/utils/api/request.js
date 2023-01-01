import axios from 'axios'
import config from '../../config'
import { ElMessage } from 'element-plus'
import { useUserStore } from '../../store/user.js'
const NETWORK_ERROR = '网络请求异常，请稍后重试.....'

// 创建一个axios实例对象
const service = axios.create({
  baseURL: config.baseApi
})

// 请求拦截器
service.interceptors.request.use((req) => {
  // 可以自定义header
  // jwt-token认证的时候
  
  // const userStore = useUserStore()
  // const token = userStore.token
  // if ( token ) {
  //   req.headers['Authorization'] = token
  //   console.log(req)
  // }

  return req
})

// 响应拦截器
service.interceptors.response.use((res) => {
  // console.log(res)
  const { code, data, msg } = res.data
  // 与后端协商，视情况而定
  if (code == 200) {
    return data
  }
  else if (res.data.meta.code == '200') {
    return res.data
  }
   else {
    // 网络请求错误
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

// 封装的核心函数
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() == 'get') {
    options.params = options.data
    // 同时配置params和data，针对get和post两种请求
  }
  // 对mock的处理
  let isMock = config.mock
  if (typeof options.mock !== 'undefined') {
    isMock = options.mock
  }
  // 对线上环境做处理
  if (config.env == 'prod') {
    // 不给你用到mock的机会
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }
  return service(options) //使用axios发送请求
}

export default request
