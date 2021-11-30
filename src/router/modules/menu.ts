import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import MenuBox from '@/components/menu/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu-1',
    alwayShow: true,
    meta: { title: 'message.menu.menu.name', icon: 'sfont system-menu' },
    children: [
      {
        path: 'menu-1',
        component: createNameComponent(() => import('@/components/menu/index.vue')),
        redirect: '/menu/menu-1/menu-1-1',
        meta: { title: 'message.menu.menu.menu_1' },
        children: [
          {
            path: 'menu-1-1',
            component: createNameComponent(() => import('@/components/menu/index.vue')),
            redirect: '/menu/menu-1/menu-1-1/menu-1-1-1',
            meta: { title: 'message.menu.menu.menu_1_1' },
            children: [
              {
                path: 'menu-1-1-1',
                component: createNameComponent(() => import('@/views/main/menu/menu-1/menu-1-1/menu-1-1-1.vue')),
                meta: { title: 'message.menu.menu.menu_1_1_1' },
              },
              {
                path: 'menu-1-1-2',
                component: createNameComponent(() => import('@/views/main/menu/menu-1/menu-1-1/menu-1-1-2.vue')),
                meta: { title: 'message.menu.menu.menu_1_1_2' },
              },
            ]
          },
          {
            path: 'menu-1-2',
            component: createNameComponent(() => import('@/views/main/menu/menu-1/menu-1-2.vue')),
            meta: { title: 'message.menu.menu.menu_1_2' },
          },
        ]
      },
      {
        path: 'menu-2',
        component: createNameComponent(() => import('@/views/main/menu/menu-2.vue')),
        meta: { title: 'message.menu.menu.menu_2' }
      },
      {
        path: 'menu-3',
        component: createNameComponent(() => import('@/views/main/menu/menu-3.vue')),
        meta: { title: 'message.menu.menu.menu_3' }
      },
    ]
  }
]

export default route