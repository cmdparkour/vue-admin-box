import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
const lang = {
  el: zhLocale.el, // element内部国际化
  message: {
    language: '中文',
    system: {
      title: '后台管理系统',
      login: '登录',
      userName: '用户名',
      password: '密码',
      size: {
        default: '默认',
        medium: '中',
        small: '小',
        mini: '迷你'
      }
    },
    common: {
      search: '搜索',
      add: '新增',
      update: '编辑',
      del: '删除',
      delBat: '批量删除'
    },
    menu: {
      index: '首页',
      page: {
        name: '页面',
        crudTable: '业务表格'
      }
    },
  }
}

export default lang