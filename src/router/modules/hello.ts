import Layout from '/@/layout/index.vue'
const route = [
  {
    path: '/hello',
    component: Layout,
    redirect: '/hello/helloc',
    meta: { title: 'hello', icon: 'el-icon-menu' },
    children: [
      {
        path: 'helloc',
        component: () => import('/@/views/main/dashboard/index.vue'),
        meta: { title: '测试', icon: 'el-icon-menu' }
      }
    ]
  }
]

export default route