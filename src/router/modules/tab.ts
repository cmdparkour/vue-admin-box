/*
 * @Date: 2022-09-25 20:07:27
 * @Description: 
 */
import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/tab',
    component: Layout,
    redirect: '/tab/index',
    meta: { title: 'message.menu.print.name', icon: 'sfont system-24gl-printer' },
    children: [
      {
        path: 'index',
        component: createNameComponent(() => import('@/views/main/tab/index.vue')),
        meta: { title: 'message.menu.tab.name', icon: 'sfont system-24gl-printer' }
      }
    ]
  }
]

export default route