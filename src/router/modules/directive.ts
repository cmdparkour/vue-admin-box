import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/directive',
    component: Layout,
    redirect: '/directive/copy',
    meta: { title: 'message.menu.directive.name', icon: 'sfont system-zidingyi' },
    children: [
      {
        path: 'dragable',
        component: createNameComponent(() => import('@/views/main/directive/dragable.vue')),
        meta: { title: 'message.menu.directive.dragable' }
      },
      {
        path: 'copy',
        component: createNameComponent(() => import('@/views/main/directive/copy.vue')),
        meta: { title: 'message.menu.directive.copy' }
      },
      {
        path: 'waterMarker',
        component: createNameComponent(() => import('@/views/main/directive/waterMarker.vue')),
        meta: { title: 'message.menu.directive.waterMarker' }
      },
      {
        path: 'longpress',
        component: createNameComponent(() => import('@/views/main/directive/longpress.vue')),
        meta: { title: 'message.menu.directive.longpress' }
      },
      {
        path: 'debounce',
        component: createNameComponent(() => import('@/views/main/directive/debounce.vue')),
        meta: { title: 'message.menu.directive.debounce' }
      },
      {
        path: 'scroll',
        component: createNameComponent(() => import('@/views/main/directive/infiniteScroll.vue')),
        meta: { title: 'message.menu.directive.scroll' }
      },
      {
        path: 'clickOutside',
        component: createNameComponent(() => import('@/views/main/directive/clickOutside.vue')),
        meta: { title: 'message.menu.directive.clickOutside' }
      }
    ]
  }
]

export default route