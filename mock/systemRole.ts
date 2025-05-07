import { MockMethod } from 'vite-plugin-mock'
const roles = ['系统管理员', '平台管理员', '数据统计人员', '信息录入人员', '普通人员']
export default [
  {
    url: `/mock/system/role/list`,
    method: 'post',
    response: ({ body }) => {
      const { page, pageSize } = body
      return {
        code: 200,
        data: {
          list: [
            {  'id': 1, name: '系统管理员', slug: 'admin', status: 1, remark: '超级管理员' },
            {  'id': 2, name: '平台管理员', slug: 'platform', status: 0, remark: '涉及平台的管控操作' },
          ],
          pager: {
            page: page,
            pageSize: pageSize,
            total: 2
          }
        },
        msg: ''
      };
    }
  },
  {
    url: `/mock/system/role/add`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: {},
        msg: ''
      };
    }
  },
  {
    url: `/mock/system/role/update`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: {},
        msg: ''
      };
    }
  },
  {
    url: `/mock/system/role/updateStatus`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: {},
        msg: ''
      };
    }
  },
  {
    url: `/mock/system/role/del`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: {},
        msg: ''
      };
    }
  },
]