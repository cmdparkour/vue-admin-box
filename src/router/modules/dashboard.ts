import Layout from '/@/layout/index.vue'
const route = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'dashboard', icon: 'el-icon-menu' },
    children: [
      {
        path: 'dashboard',
        component: () => import('/@/views/main/dashboard/index.vue'),
        meta: { title: '首页', icon: 'el-icon-menu' }
      }
    ]
  }
]

export default route