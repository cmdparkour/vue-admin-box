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
        meta: { title: 'message.menu.directive.dragable' }
      },
      {
        path: 'copy',
        component: () => import('@/views/main/directive/copy.vue'),
        meta: { title: 'message.menu.directive.copy' }
      },
      {
        path: 'waterMarker',
        component: () => import('@/views/main/directive/waterMarker.vue'),
        meta: { title: 'message.menu.directive.waterMarker' }
      },
      {
        path: 'longpress',
        component: () => import('@/views/main/directive/longpress.vue'),
        meta: { title: 'message.menu.directive.longpress' }
      },
      {
        path: 'debounce',
        component: () => import('@/views/main/directive/debounce.vue'),
        meta: { title: 'message.menu.directive.debounce' }
      },
      {
        path: 'scroll',
        component: () => import('@/views/main/directive/infiniteScroll.vue'),
        meta: { title: 'message.menu.directive.scroll' }
      },
      {
        path: 'clickOutside',
        component: () => import('@/views/main/directive/clickOutside.vue'),
        meta: { title: 'message.menu.directive.clickOutside' }
      }
    ]
  }
]

export default route