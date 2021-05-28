import request from '@/utils/system/request'

export function loginApi(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

