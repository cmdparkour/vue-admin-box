import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/community',
    component: Layout,
    redirect: '/community/qq',
    meta: { title: 'message.menu.community.name', icon: 'el-icon-table-lamp' },
    children: [
      {
        path: 'qq',
        component: () => import('@/views/main/community/qq.vue'),
        meta: { title: 'message.menu.community.qq' }
      },
      {
        path: 'site',
        component: () => import('@/views/main/community/site.vue'),
        meta: { title: 'message.menu.community.site' }
      },
    ]
  }
]

export default route