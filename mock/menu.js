/** 给接口使用 */
const menu = [
  {
    path: '/',
    meta: { title: 'dashboard', icon: 'sfont system-home' },
    children: [
      {
        path: 'dashboard',
        meta: { title: '首页', icon: 'sfont system-home', hideClose: true }
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