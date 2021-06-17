import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/systemManage',
    component: Layout,
    redirect: '/systemManage/menu',
    meta: { title: '系统管理', icon: 'el-icon-document-copy' },
    alwayShow: true,
    children: [
      {
        path: 'menu',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '菜单管理' }
      },
      {
        path: 'role',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '角色管理' }
      },
      {
        path: 'user',
        component: () => import('@/views/main/pages/work/index.vue'),
        meta: { title: '用户管理' }
      },
    ]
  }
]

export default route