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
        meta: { title: '卡片列表' }
      },
      {
        path: 'work',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '工作进度' }
      },
      {
        path: 'baidu',
        component: () => import('@/views/main/pages/baidu/index.vue'),
        meta: { title: '百度一下' }
      },
    ]
  }
]

export default route