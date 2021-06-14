import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu-1',
    meta: { title: 'message.menu.page.name', icon: 'el-icon-document-copy' },
    children: [
      {
        path: 'menu-1',
        meta: { title: 'menu-1' },
        children: [
            {
                path: 'menu-1-1',
                component: () => import('@/views/main/pages/crudTable/index.vue'),
                meta: { title: 'menu-1' },
            },
            {
                path: 'menu-1-2',
                component: () => import('@/views/main/pages/crudTable/index.vue'),
                meta: { title: 'menu-1' },
            },
        ]
      },
      {
        path: 'menu-2',
        component: () => import('@/views/main/pages/crudTable/index.vue'),
        meta: { title: 'menu-2' }
      },
      {
        path: 'menu-3',
        component: () => import('@/views/main/pages/crudTable/index.vue'),
        meta: { title: 'menu-3' }
      },
    ]
  }
]

export default route