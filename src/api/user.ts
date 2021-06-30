import request from '@/utils/system/request'

// 登录api
export function loginApi(data: object) {
  return request({
    url: '/user/login',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 获取用户信息Api
export function getInfoApi(data: object) {
  return request({
    url: '/user/info',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 退出登录Api
export function loginOutApi() {
  return request({
    url: '/user/out',
    method: 'post',
    baseURL: '/mock'
  })
}

// 获取用户信息Api
export function passwordChange(data: object) {
  return request({
    url: '/user/passwordChange',
    method: 'post',
    baseURL: '/mock',
    data
  })
}
