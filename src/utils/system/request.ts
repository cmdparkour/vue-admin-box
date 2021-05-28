import axios , { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'

const service: any = axios.create({
  baseURL: '/dev-api',
  timeout: 5000
})

type MyConfig = AxiosRequestConfig & {type: string}

// 请求前的统一处理
service.interceptors.request.use(
  (config: MyConfig) => {
    // 前置处理
    if (config.type === 'form') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    }

    // JWT鉴权处理
    if (store.getters.token) {
      config.headers['Authorization'] = 'Bearer ' + store.getters.token
    }

    return config
  },
  (error: AxiosError) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    if (res.code === 200) {
      return res
    } else {
      ElMessage({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res)
    }
  },
  (error: AxiosError)=> {
    console.log(error) // for debug
    const code = parseInt(error.toString().replace('Error: Request failed with status code ', ''))
    if (code === 403) {
      // to re-login
      ElMessage({
        message: '您的登录已过期，请重新登录',
        type: 'error',
        duration: 5 * 1000
      })
      // store.dispatch('user/resetToken').then(() => {
      //   location.reload()
      // })
    } else {
      ElMessage({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service