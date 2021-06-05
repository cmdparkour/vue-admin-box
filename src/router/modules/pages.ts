import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/pages',
    component: Layout,
    redirect: '/pages/crudTable',
    meta: { title: 'message.menu.page.name', icon: 'el-icon-document-copy' },
    children: [
      {
        path: 'crudTable',
        component: () => import('@/views/main/pages/crudTable/index.vue'),
        meta: { title: 'message.menu.page.crudTable', icon: 'el-icon-document-copy' }
      }
    ]
  }
]

export default route