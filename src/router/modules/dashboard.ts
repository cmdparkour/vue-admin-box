import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'message.menu.dashboard.name', icon: 'sfont system-home' },
    children: [
      {
        path: 'dashboard',
        component: createNameComponent(() => import('@/views/main/dashboard/index.vue')),
        meta: { title: 'message.menu.dashboard.index', icon: 'sfont system-home', hideClose: true }
      }
    ]
  }
]

export default route