import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/document',
    component: Layout,
    redirect: '/document/intro',
    meta: { title: 'message.menu.document.name', icon: 'sfont system-document' },
    children: [
      {
        path: 'intro',
        component: createNameComponent(() => import('@/views/main/document/intro.vue')),
        meta: { title: 'message.menu.document.intro' }
      },
      {
        path: 'function',
        component: createNameComponent(() => import('@/views/main/document/function.vue')),
        meta: { title: 'message.menu.document.function' }
      },
      {
        path: 'menu',
        component: createNameComponent(() => import('@/views/main/document/menu.vue')),
        meta: { title: 'message.menu.document.menu' }
      },
      {
        path: 'keep-alive',
        component: createNameComponent(() => import('@/views/main/document/keepAlive.vue')),
        meta: { title: 'message.menu.document.keepAlive' }
      },
      {
        path: 'crud',
        component: createNameComponent(() => import('@/views/main/document/crud.vue')),
        meta: { title: 'message.menu.document.crud' }
      },
      {
        path: 'theme',
        component: createNameComponent(() => import('@/views/main/document/theme.vue')),
        meta: { title: 'message.menu.document.theme' }
      },
      {
        path: 'systemfont',
        component: createNameComponent(() => import('@/views/main/document/systemfont.vue')),
        meta: { title: 'message.menu.document.systemfont' }
      },
      {
        path: 'api',
        component: createNameComponent(() => import('@/views/main/document/api.vue')),
        meta: { title: 'message.menu.document.api' }
      },
    ]
  }
]

export default route