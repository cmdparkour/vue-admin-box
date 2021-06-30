import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/systemManage',
    component: Layout,
    redirect: '/systemManage/menu',
    meta: { title: 'message.menu.systemManage.name', icon: 'el-icon-document-copy' },
    alwayShow: true,
    children: [
      {
        path: 'dictionary',
        component: () => import('@/views/main/systemManage/dictionary/index.vue'),
        redirect: '/systemManage/dictionary/project',
        meta: { title: 'message.menu.systemManage.dictionary.name' },
        children: [
          {
            path: 'type',
            component: () => import('@/views/main/systemManage/dictionary/type/index.vue'),
            meta: { title: 'message.menu.systemManage.dictionary.type' }
          },
          {
            path: 'project',
            component: () => import('@/views/main/systemManage/dictionary/project/index.vue'),
            meta: { title: 'message.menu.systemManage.dictionary.project' }
          },
          {
            path: 'data',
            component: () => import('@/views/main/systemManage/dictionary/data/index.vue'),
            meta: { title: 'message.menu.systemManage.dictionary.data' }
          }
        ]
      },
      {
        path: 'menu',
        component: () => import('@/views/main/systemManage/menu/index.vue'),
        meta: { title: 'message.menu.systemManage.menu' }
      },
      {
        path: 'role',
        component: () => import('@/views/main/systemManage/role/index.vue'),
        meta: { title: 'message.menu.systemManage.role' }
      },
      {
        path: 'user',
        component: () => import('@/views/main/systemManage/users/index.vue'),
        meta: { title: 'message.menu.systemManage.user' }
      }
    ]
  }
]

export default route