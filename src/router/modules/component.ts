import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/component',
    component: Layout,
    redirect: '/component/table',
    meta: { title: 'message.menu.component.name', icon: 'el-icon-s-ticket' },
    alwayShow: true,
    children: [
      {
        path: 'button',
        component: () => import('@/views/main/components/button/index.vue'),
        meta: { title: 'message.menu.component.button' },
      },
      {
        path: 'wordEditor',
        component: () => import('@/views/main/components/wordEditor/index.vue'),
        meta: { title: '文本编辑器' },
      },
      {
        path: 'mdEditor',
        component: () => import('@/views/main/components/mdEditor/index.vue'),
        meta: { title: 'MD编辑器' },
      },
      {
        path: 'codeEditor',
        component: () => import('@/views/main/components/codeEditor/index.vue'),
        meta: { title: '代码编辑器' },
      },
      {
        path: 'jsonEditor',
        component: () => import('@/views/main/components/jsonEditor/index.vue'),
        meta: { title: 'JSON编辑器' },
      },
      {
        path: 'dragPane',
        component: () => import('@/views/main/components/dragPane/index.vue'),
        meta: { title: '可拖拽面板' },
      },
      {
        path: 'map',
        component: () => import('@/views/main/components/map/index.vue'),
        meta: { title: '地图组件' },
      },
      {
        path: 'cutPhoto',
        component: () => import('@/views/main/components/cutPhoto/index.vue'),
        meta: { title: '弹窗图片裁剪' },
      },
      {
        path: 'rightMenu',
        component: () => import('@/views/main/components/rightMenu/index.vue'),
        meta: { title: '右键菜单' },
      },
    ]
  }
]

export default route