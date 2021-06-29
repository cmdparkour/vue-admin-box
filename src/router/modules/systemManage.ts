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
        path: 'dictionary',
        component: () => import('@/views/main/systemManage/dictionary/index.vue'),
        redirect: '/systemManage/dictionary/project',
        meta: { title: '字典管理' },
        children: [
          {
            path: 'type',
            component: () => import('@/views/main/systemManage/dictionary/type/index.vue'),
            meta: { title: '字典类型' }
          },
          {
            path: 'project',
            component: () => import('@/views/main/systemManage/dictionary/project/index.vue'),
            meta: { title: '字典项目' }
          },
          {
            path: 'data',
            component: () => import('@/views/main/systemManage/dictionary/data/index.vue'),
            meta: { title: '字典数据' }
          }
        ]
      },
      {
        path: 'menu',
        component: () => import('@/views/main/systemManage/menu/index.vue'),
        meta: { title: '菜单管理' }
      },
      {
        path: 'role',
        component: () => import('@/views/main/systemManage/role/index.vue'),
        meta: { title: '角色管理' }
      },
      {
        path: 'user',
        component: () => import('@/views/main/systemManage/users/index.vue'),
        meta: { title: '用户管理' }
      }
    ]
  }
]

export default route