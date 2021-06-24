import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/work/list',
    method: 'post',
    baseURL: '/mock',
    data
  })
}
