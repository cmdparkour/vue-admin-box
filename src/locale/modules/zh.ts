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
      searchTip: '请输入关键词进行检索',
      add: '新增',
      update: '编辑',
      del: '删除',
      delBat: '批量删除',
      delTip: '确定删除选中的数据吗？',
      handle: '操作'
    },
    menu: {
      index: '首页',
      component: {
        name: '组件',
        button: '按钮'
      },
      page: {
        name: '页面',
        crudTable: '业务表格'
      },
      directive: {
        name: '自定义指令'
      },
      menu: {
        name: '多级嵌套菜单',
        menu_1: '二级菜单1',
        menu_1_1: '三级菜单1-1',
        menu_1_1_1: '四级菜单1-1-1',
        menu_1_1_2: '四级菜单1-1-2',
        menu_1_2: '三级菜单1-2',
        menu_2: '二级菜单2',
        menu_3: '二级菜单3'
      }
    },
  }
}

export default lang