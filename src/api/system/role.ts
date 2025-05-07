import request from '@/utils/system/request'

// 获取数据api
export function getData(data: object) {
  return request({
    url: '/system/role/list',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 新增
export function add(data: object) {
  return request({
    url: '/system/role/add',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 编辑
export function update(data: object) {
  return request({
    url: '/system/role/update',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 状态变更
export function updateStatus(data: object) {
  return request({
    url: '/system/role/updateStatus',
    method: 'post',
    baseURL: '/mock',
    data
  })
}

// 删除
export function del(data: object) {
  return request({
    url: '/system/role/del',
    method: 'post',
    baseURL: '/mock',
    data
  })
}