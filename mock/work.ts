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
                  tags: ['新增'],
                  name: '拖拽指令',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '复制指令',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '防抖指令',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '长按指令',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '下拉加载',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '柱状图',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '折线图',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '饼图',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '雷达图',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '地图',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '右键菜单',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '系统管理-用户管理',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['新增'],
                  name: '系统管理-角色管理',
                  options: [
                    '类型：页面'
                  ]
                },{
                  tags: ['优化'],
                  name: 'tab标签栏Keep-alive',
                  options: [
                    '类型：系统优化'
                  ]
                },{
                  tags: ['优化'],
                  name: 'tab标签栏切换时自动居中处理tab标签栏切换时自动居中处理',
                  options: [
                    '类型：系统优化'
                  ]
                }]
            },
            {
              name: '处理中',
              children: [{
                tags: ['新增'],
                name: '页面-工作进度',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '页面-详情页面',
                options: [
                  '类型：页面'
                ]
              }]
            },
            {
              name: '待部署',
              children: []
            },
            {
              name: '测试中',
              children: []
            },
            {
              name: '已完成',
              children: [{
                tags: ['系统'],
                name: '路由管理router',
                options: [
                  '类型：系统'
                ]
              },{
                tags: ['系统'],
                name: '存储方案store',
                options: [
                  '类型：系统'
                ]
              },{
                tags: ['系统'],
                name: '登录管理',
                options: [
                  '类型：系统'
                ]
              },{
                tags: ['系统'],
                name: '菜单配置',
                options: [
                  '类型：系统'
                ]
              },{
                tags: ['系统'],
                name: '国际化解决方案',
                options: [
                  '类型：系统'
                ]
              },{
                tags: ['系统'],
                name: '尺寸切换',
                options: [
                  '类型：系统'
                ]
              },{
                tags: ['系统'],
                name: '全屏功能',
                options: [
                  '类型：系统'
                ]
              },{
                tags: ['系统'],
                name: '导航栏功能',
                options: [
                  '类型：系统'
                ]
              },{
                tags: ['新增'],
                name: '首页',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '首页',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '组件-按钮',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '组件-文本编辑器',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '组件-代码编辑器',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '组件-md编辑器',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '组件-JSON编辑器',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '组件-可拖拽面板',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '组件-地图组件',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '组件-弹窗图片裁剪',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '多级嵌套表单',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '页面-业务表格',
                options: [
                  '类型：页面'
                ]
              },{
                tags: ['新增'],
                name: '页面-卡片列表',
                options: [
                  '类型：页面'
                ]
              },{
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