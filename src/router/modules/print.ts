import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/print',
    component: Layout,
    redirect: '/print/js',
    meta: { title: 'message.menu.print.name', icon: 'sfont system-24gl-printer' },
    children: [
      {
        path: 'js',
        component: createNameComponent(() => import('@/views/main/print/index.vue')),
        meta: { title: 'message.menu.print.jsPrint', icon: 'sfont system-24gl-printer' }
      }
    ]
  }
]

export default route