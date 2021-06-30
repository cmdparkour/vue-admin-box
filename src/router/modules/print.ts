import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/print',
    component: Layout,
    redirect: '/print/html',
    meta: { title: '打印功能', icon: 'el-icon-pie-chart' },
    children: [
      {
        path: 'html',
        component: () => import('@/views/main/print/index.vue'),
        meta: { title: 'html打印', icon: 'el-icon-document-copy' }
      }
    ]
  }
]

export default route