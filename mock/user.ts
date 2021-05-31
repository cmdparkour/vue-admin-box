import { MockMethod } from 'vite-plugin-mock'
const users = [
  { name: 'admin', password: '123456', token: 'admin-token', info: {
    name: '系统管理员'
  }},
  { name: 'editor', password: '123456', token: 'editor-token', info: {
    name: '编辑人员'
  }},
  { name: 'test', password: '123456', token: 'test-token', info: {
    name: '测试人员'
  }},
]
export default [
  {
    url: `/mock/user/login`,
    method: 'post',
    response: ({ body }) => {
      const user = users.find(user => {
        return body.name === user.name && body.password === user.password
      })
      if (user) {
        return {
          code: 200,
          data: {
            token: user.token,
          },
        };
      } else {
        return {
          code: 401,
          data: {},
          msg: '用户名或密码错误'
        };
      }
      
    }
  },
  {
    url: `/mock/user/info`,
    method: 'post',
    response: ({ query }) => {
      const { token } = query
      const info = users.find(user => {
        return user.token === token
      }).info
      if (info) {
        return {
          code: 200,
          data: {
            info: info
          },
        };
      } else {
        return {
          code: 403,
          data: {},
          msg: '无访问权限'
        };
      }
      
    }
  },
  {
    url: `/mock/user/loginOut`,
    method: 'post',
    response: ({ headers }) => {
      const { token } = headers
      const info = users.find(user => user.token === token).info
      if (info) {
        return {
          code: 200,
          data: {},
          msg: 'success'
        };
      } else {
        return {
          code: 403,
          data: {},
          msg: '无访问权限'
        };
      }
      
    }
  },
] as MockMethod[]