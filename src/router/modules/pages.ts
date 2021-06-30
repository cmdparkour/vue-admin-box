import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/pages',
    component: Layout,
    redirect: '/pages/crudTable',
    meta: { title: 'message.menu.page.name', icon: 'el-icon-document-copy' },
    alwayShow: true,
    children: [
      {
        path: 'crudTable',
        component: () => import('@/views/main/pages/crudTable/index.vue'),
        meta: { title: 'message.menu.page.crudTable' }
      },
      {
        path: 'card',
        component: () => import('@/views/main/pages/card/index.vue'),
        meta: { title: 'message.menu.page.card' }
      },
      {
        path: 'work',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: 'message.menu.page.work' }
      },
      {
        path: 'baidu',
        component: () => import('@/views/main/pages/baidu/index.vue'),
        meta: { title: 'message.menu.page.baidu' }
      },
    ]
  }
]

export default route