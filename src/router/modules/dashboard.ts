import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'message.menu.dashboard.name', icon: 'el-icon-menu' },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/main/dashboard/index.vue'),
        meta: { title: 'message.menu.dashboard.index', icon: 'el-icon-menu', hideClose: true }
      }
    ]
  }
]

export default route