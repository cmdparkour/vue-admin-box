// 前端路由角色切换
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'

const route = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    meta: { title: 'message.menu.permission.name', icon: 'el-icon-goods' },
    children: [
      {
        path: 'page',
        component: createNameComponent(() => import('@/views/main/permission/page.vue')),
        meta: { title: 'message.menu.permission.page' }
      },
      {
        path: 'role',
        component: createNameComponent(() => import('@/views/main/permission/role.vue')),
        meta: { title: 'message.menu.permission.role' }
      },
    ]
  }
]

export default route