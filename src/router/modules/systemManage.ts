import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/systemManage',
    component: Layout,
    redirect: '/systemManage/menu',
    meta: { title: 'message.menu.systemManage.name', icon: 'el-icon-document-copy' },
    alwayShow: true,
    children: [
      {
        path: 'menu',
        component: createNameComponent(() => import('@/views/main/systemManage/menu/index.vue')),
        meta: { title: 'message.menu.systemManage.menu' }
      },
      {
        path: 'role',
        component: createNameComponent(() => import('@/views/main/systemManage/role/index.vue')),
        meta: { title: 'message.menu.systemManage.role' }
      },
      {
        path: 'user',
        component: createNameComponent(() => import('@/views/main/systemManage/users/index.vue')),
        meta: { title: 'message.menu.systemManage.user' }
      }
    ]
  }
]

export default route