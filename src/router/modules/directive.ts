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
        component: () => import('@/views/main/directive/dragable.vue'),
        meta: { title: '拖拽指令：v-dragable' }
      },
      {
        path: 'copy',
        component: () => import('@/views/main/directive/copy.vue'),
        meta: { title: '复制指令：v-copy' }
      },
      {
        path: 'waterMarker',
        component: () => import('@/views/main/directive/waterMarker.vue'),
        meta: { title: '水印指令：v-waterMarker' }
      },
      {
        path: 'longpress',
        component: () => import('@/views/main/directive/longpress.vue'),
        meta: { title: '长按指令：v-longpress' }
      },
      {
        path: 'debounce',
        component: () => import('@/views/main/directive/debounce.vue'),
        meta: { title: '按钮防抖指令：v-debounce' }
      },
      {
        path: 'scroll',
        component: () => import('@/views/main/directive/infiniteScroll.vue'),
        meta: { title: '下拉加载指令：v-infinite-scroll' }
      },
      {
        path: 'clickOutside',
        component: () => import('@/views/main/directive/clickOutside.vue'),
        meta: { title: '点击外部区域：v-click-outside' }
      }
    ]
  }
]

export default route