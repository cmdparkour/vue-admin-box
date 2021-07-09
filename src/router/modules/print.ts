import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/print',
    component: Layout,
    redirect: '/print/js',
    meta: { title: 'message.menu.print.name', icon: 'el-icon-pie-chart' },
    children: [
      {
        path: 'js',
        component: createNameComponent(() => import('@/views/main/print/index.vue')),
        meta: { title: 'message.menu.print.jsPrint', icon: 'el-icon-document-copy' }
      }
    ]
  }
]

export default route