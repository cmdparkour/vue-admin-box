import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/pages',
    component: Layout,
    redirect: '/pages/crudTable',
    meta: { title: 'message.menu.page.name', icon: 'sfont system-page' },
    alwayShow: true,
    children: [
      {
        path: 'crudTable',
        component: createNameComponent(() => import('@/views/main/pages/crudTable/index.vue')),
        meta: { title: 'message.menu.page.crudTable', cache: false, roles: ['admin', 'editor'] }
      },
      {
        path: 'categoryTable',
        component: createNameComponent(() => import('@/views/main/pages/categoryTable/index.vue')),
        meta: { title: 'message.menu.page.categoryTable', cache: true, roles: ['admin'] }
      },
      {
        path: 'treeTable',
        component: createNameComponent(() => import('@/views/main/pages/treeTable/index.vue')),
        meta: { title: 'message.menu.page.treeTable', cache: true }
      },
      {
        path: 'card',
        component: createNameComponent(() => import('@/views/main/pages/card/index.vue')),
        meta: { title: 'message.menu.page.card', cache: true }
      },
      {
        path: 'work',
        component: createNameComponent(() => import('@/views/main/pages/work/index.vue')),
        meta: { title: 'message.menu.page.work' }
      },
      {
        path: 'blog',
        component: createNameComponent(() => import('@/views/main/pages/baidu/index.vue')),
        meta: { title: 'message.menu.page.baidu' }
      },
    ]
  }
]

export default route