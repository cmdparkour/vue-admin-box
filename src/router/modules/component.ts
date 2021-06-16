import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/component',
    component: Layout,
    redirect: '/component/table',
    meta: { title: 'message.menu.component.name', icon: 'el-icon-s-ticket' },
    alwayShow: true,
    children: [
      {
        path: 'button',
        component: () => import('@/views/main/components/button/index.vue'),
        meta: { title: 'message.menu.component.button' },
      }
    ]
  }
]

export default route