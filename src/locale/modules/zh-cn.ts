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
      component: {
        name: '组件',
        button: '按钮',
        wordEditor: '文本编辑器',
        mdEditor: 'md编辑器',
        codeEditor: '代码编辑器',
        jsonEditor: 'JSON编辑器',
        dragPane: '可拖拽面板',
        map: '地图组件',
        cutPhoto: '弹窗图片裁剪',
        rightMenu: '右键菜单',
        exportExcel:'导出文件'
      },
      page: {
        name: '页面',
        crudTable: '业务表格',
        categoryTable: '分类联动表格',
        treeTable: '树联动表格',
        card: '卡片列表',
        work: '工作进度',
        baidu: '嵌套链接',
        jump: '新窗口跳转',
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
      },
      directive: {
        name: '自定义指令',
        dragable: '拖拽指令：v-dragable',
        copy: '复制指令：v-copy',
        waterMarker: '水印指令：v-waterMarker',
        longpress: '长按指令：v-longpress',
        debounce: '按钮防抖指令：v-debounce',
        scroll: '下拉加载指令：v-infinite-scroll',
        clickOutside: '点击外部区域：v-click-outside',
      },
      echarts: {
        name: 'echarts图表',
        bar: '柱状图',
        line: '折线图',
        pie: '饼图',
        radar: '雷达图',
        map: '地图',
      },
      systemManage: {
        name: '系统管理',
        menu: '菜单',
        role: '角色',
        user: '用户'
      },
      print: {
        name: '打印功能',
        jsPrint: 'JS打印事件'
      },
      community: {
        name: '社区的力量',
        qq: 'QQ交流群',
        site: 'vue3最新资源库'
      },
      document: {
        name: '文档',
        intro: '使用说明',
        function: '功能说明',
        menu: '路由菜单配置',
        keepAlive: 'keepAlive使用说明',
        crud: '数据表格的增删改查',
        theme: '自定义主题',
        systemfont: '项目图标的说明',
        api: '接口说明文档'
      },
      tab: {
        name: 'tab事件公用',
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