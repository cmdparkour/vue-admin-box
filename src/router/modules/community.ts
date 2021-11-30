import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/community',
    component: Layout,
    redirect: '/community/qq',
    meta: { title: 'message.menu.community.name', icon: 'sfont system-shequ' },
    children: [
      {
        path: 'qq',
        component: createNameComponent(() => import('@/views/main/community/qq.vue')),
        meta: { title: 'message.menu.community.qq' }
      },
      {
        path: 'site',
        component: createNameComponent(() => import('@/views/main/community/site.vue')),
        meta: { title: 'message.menu.community.site' }
      },
    ]
  }
]

export default route