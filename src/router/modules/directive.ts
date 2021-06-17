import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/directive',
    component: Layout,
    redirect: '/directive/copy',
    meta: { title: 'message.menu.directive.name', icon: 'el-icon-toilet-paper' },
    children: [
      {
        path: 'dragable',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '拖拽指令：v-dragable' }
      },
      {
        path: 'copy',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '复制指令：v-copy' }
      },
      {
        path: 'debounce',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '防抖指令：v-debounce' }
      },
      {
        path: 'permission',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '权限指令：v-permission' }
      },
      {
        path: 'waterMarker',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '水印指令：vue-waterMarker' }
      },
      {
        path: 'longpress',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '长按指令：v-longpress' }
      },
      {
        path: 'scroll',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '下拉加载：v-infinite-scroll' }
      },
    ]
  }
]

export default route