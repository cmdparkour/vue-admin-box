import { MockMethod } from 'vite-plugin-mock'

/** 给接口使用 */
const menu = [
  {
    path: '/',
    meta: { title: 'message.menu.dashboard.name', icon: 'sfont system-home' },
    children: [
      {
        path: 'dashboard',
        meta: { title: 'message.menu.dashboard.index', icon: 'sfont system-home', hideClose: true }
      }
    ]
  }
]

export default [
  /** 需要展示的菜单模拟接口 */
  {
    url: `/mock/menu/list`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: menu
      }
    }
  }
]