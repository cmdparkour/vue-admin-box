import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/system',
    component: Layout,
    redirect: '/404',
    hideMenu: true,
    meta: { title: 'message.menu.system.name' },
    children: [
      {
        path: '/404',
        component: () => import('@/views/system/404.vue'),
        meta: { title: 'message.menu.system.404', hideTabs: true }
      },
      {
        path: '/401',
        component: () => import('@/views/system/401.vue'),
        meta: { title: 'message.menu.system.401', hideTabs: true }
      },
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/system/redirect.vue'),
        meta: { title: 'message.menu.system.redirect', hideTabs: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/system/login.vue'),
    hideMenu: true,
    meta: { title: 'message.system.login', hideTabs: true }
  },
  {
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    component: Layout,
    redirect: "/404",
    hideMenu: true
  },
]

export default route