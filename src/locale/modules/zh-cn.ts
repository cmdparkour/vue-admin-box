import locale from 'element-plus/dist/locale/zh-cn.mjs'
const lang = {
  el: locale.el, // element内部国际化
  message: {
    language: '中文',
    common: {
      search: '搜索',
      searchTip: '请输入关键词进行检索',
      add: '新增',
      update: '编辑',
      del: '删除',
      delBat: '批量删除',
      delTip: '确定删除选中的数据吗？',
      handle: '操作',
      exportExcel:'导出Excel',
      exportExcelTip:'请输入导出文件名'
    },
    menu: {
      dashboard: {
        name: 'dashboard',
        index: '首页'
      },
      system: {
        name: '系统目录',
        redirect: '重定向页面',
        '404': '404',
        '401': '401'
      },
    },
    system: {
      title: '后台管理系统',
      subTitle: '时间不在于你拥有多少,而在于你怎样使用。',
      welcome: '欢迎登录',
      login: '登录',
      userName: '用户名',
      password: '密码',
      contentScreen: '内容全屏',
      fullScreen: '全屏',
      fullScreenBack: '退出全屏',
      github: '访问github地址',
      changePassword: '修改密码',
      loginOut: '退出登录',
      user: '管理员',
      size: {
        default: '默认',
        large: '大',
        small: '小',
      },
      setting: {
        name: '系统设置',
        style: {
          name: '整体风格设置',
          default: '默认菜单风格',
          light: '亮色菜单风格',
          chinese: '中国水墨风',
          dark: '暗色菜单风格'
        },
        primaryColor: {
          name: '主题色',
          blue: '默认蓝',
          red: '玫瑰红',
          violet: '优雅紫',
          green: '故事绿',
          cyan: '明青',
          black: '极客黑'
        },
        other: {
          name: '其他设置',
          showLogo: '显示logo',
          showBreadcrumb: '显示面包屑导航',
          keepOnlyOneMenu: '保持一个菜单展开',
        }
      },
      tab: {
        reload: '重新加载',
        closeAll: '关闭所有标签',
        closeOther: '关闭其他标签',
        closeCurrent: '关闭当前标签'
      }
    },
  }
}

export default lang