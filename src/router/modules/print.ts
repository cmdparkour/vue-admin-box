import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/print',
    component: Layout,
    redirect: '/print/js',
    meta: { title: 'message.menu.print.name', icon: 'el-icon-pie-chart' },
    children: [
      {
        path: 'js',
        component: () => import('@/views/main/print/index.vue'),
        meta: { title: 'message.menu.print.jsPrint', icon: 'el-icon-document-copy' }
      }
    ]
  }
]

export default route