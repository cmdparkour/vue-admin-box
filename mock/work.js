import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: `/mock/work/list`,
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: {
          list: [
            {
              name: '待处理',
              children: [
                {
                  id: 101,
                  tags: ['优化'],
                  name: '父级菜单显示为白色',
                  options: [
                    '类型：系统优化'
                  ]
                }, {
                  id: 102,
                  tags: ['优化'],
                  name: '菜单国际化处理',
                  options: [
                    '类型：系统优化'
                  ]
                }, {
                  id: 103,
                  tags: ['优化'],
                  name: '系统全局国际化',
                  options: [
                    '类型：系统优化'
                  ]
                }]
            },
            {
              name: '处理中',
              children: [{
                id: 12,
                tags: ['新增'],
                name: '系统管理-菜单管理',
                options: [
                  '类型：页面'
                ]
              },{
                id: 104,
                tags: ['新增'],
                name: '系统管理-字典管理',
                options: [
                  '类型：页面'
                ]
              },{
                id: 105,
                tags: ['新增'],
                name: '系统管理-用户管理',
                options: [
                  '类型：页面'
                ]
              },{
                id: 13,
                tags: ['新增'],
                name: '系统管理-角色管理',
                options: [
                  '类型：页面'
                ]
              },
                
              ]
            },
            {
              name: '测试中',
              children: [{
                id: 11,
                tags: ['新增'],
                name: '右键菜单',
                options: [
                  '类型：页面'
                ]
              },{
                id: 14,
                tags: ['优化'],
                name: 'tab标签栏Keep-alive',
                options: [
                  '类型：系统优化'
                ]
              },{
                id: 15,
                tags: ['优化'],
                name: 'tab标签栏切换时自动居中处理tab标签栏切换时自动居中处理',
                options: [
                  '类型：系统优化'
                ]
              },{
                id: 6,
                tags: ['新增'],
                name: '柱状图',
                options: [
                  '类型：页面'
                ]
              },{
                id: 7,
                tags: ['新增'],
                name: '折线图',
                options: [
                  '类型：页面'
                ]
              },{
                id: 8,
                tags: ['新增'],
                name: '饼图',
                options: [
                  '类型：页面'
                ]
              },{
                id: 9,
                tags: ['新增'],
                name: '雷达图',
                options: [
                  '类型：页面'
                ]
              },{
                id: 10,
                tags: ['新增'],
                name: '地图',
                options: [
                  '类型：页面'
                ]
              },{
                id: 1,
                tags: ['新增'],
                name: '拖拽指令',
                options: [
                  '类型：页面'
                ]
              },{
                id: 2,
                tags: ['新增'],
                name: '复制指令',
                options: [
                  '类型：页面'
                ]
              },{
                id: 3,
                tags: ['新增'],
                name: '防抖指令',
                options: [
                  '类型：页面'
                ]
              },{
                id: 4,
                tags: ['新增'],
                name: '长按指令',
                options: [
                  '类型：页面'
                ]
              },{
                id: 5,
                tags: ['新增'],
                name: '下拉加载',
                options: [
                  '类型：页面'
                ]
              },]
            },
            {
              name: '已完成',
              children: [{
                id: 16,
                tags: ['新增'],
                name: '页面-工作进度',
                options: [
                  '类型：页面'
                ]
              },{
                id: 18,
                tags: ['系统'],
                name: '路由管理router',
                options: [
                  '类型：系统'
                ]
              },{
                id: 19,
                tags: ['系统'],
                name: '存储方案store',
                options: [
                  '类型：系统'
                ]
              },{
                id: 20,
                tags: ['系统'],
                name: '登录管理',
                options: [
                  '类型：系统'
                ]
              },{
                id: 21,
                tags: ['系统'],
                name: '菜单配置',
                options: [
                  '类型：系统'
                ]
              },{
                id: 22,
                tags: ['系统'],
                name: '国际化解决方案',
                options: [
                  '类型：系统'
                ]
              },{
                id: 23,
                tags: ['系统'],
                name: '尺寸切换',
                options: [
                  '类型：系统'
                ]
              },{
                id: 24,
                tags: ['系统'],
                name: '全屏功能',
                options: [
                  '类型：系统'
                ]
              },{
                id: 25,
                tags: ['系统'],
                name: '导航栏功能',
                options: [
                  '类型：系统'
                ]
              },{
                id: 26,
                tags: ['新增'],
                name: '首页',
                options: [
                  '类型：页面'
                ]
              },{
                id: 27,
                tags: ['新增'],
                name: '首页',
                options: [
                  '类型：页面'
                ]
              },{
                id: 28,
                tags: ['新增'],
                name: '组件-按钮',
                options: [
                  '类型：页面'
                ]
              },{
                id: 29,
                tags: ['新增'],
                name: '组件-文本编辑器',
                options: [
                  '类型：页面'
                ]
              },{
                id: 30,
                tags: ['新增'],
                name: '组件-代码编辑器',
                options: [
                  '类型：页面'
                ]
              },{
                id: 31,
                tags: ['新增'],
                name: '组件-md编辑器',
                options: [
                  '类型：页面'
                ]
              },{
                id: 32,
                tags: ['新增'],
                name: '组件-JSON编辑器',
                options: [
                  '类型：页面'
                ]
              },{
                id: 33,
                tags: ['新增'],
                name: '组件-可拖拽面板',
                options: [
                  '类型：页面'
                ]
              },{
                id: 34,
                tags: ['新增'],
                name: '组件-地图组件',
                options: [
                  '类型：页面'
                ]
              },{
                id: 35,
                tags: ['新增'],
                name: '组件-弹窗图片裁剪',
                options: [
                  '类型：页面'
                ]
              },{
                id: 36,
                tags: ['新增'],
                name: '多级嵌套表单',
                options: [
                  '类型：页面'
                ]
              },{
                id: 37,
                tags: ['新增'],
                name: '页面-业务表格',
                options: [
                  '类型：页面'
                ]
              },{
                id: 38,
                tags: ['新增'],
                name: '页面-卡片列表',
                options: [
                  '类型：页面'
                ]
              },{
                id: 39,
                tags: ['新增'],
                name: '页面-百度一下',
                options: [
                  '类型：页面'
                ]
              }]
            }
          ]
        },
        msg: ''
      };
    }
  },
]