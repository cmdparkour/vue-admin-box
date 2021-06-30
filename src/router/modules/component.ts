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
      },
      {
        path: 'wordEditor',
        component: () => import('@/views/main/components/wordEditor/index.vue'),
        meta: { title: 'message.menu.component.wordEditor' },
      },
      {
        path: 'mdEditor',
        component: () => import('@/views/main/components/mdEditor/index.vue'),
        meta: { title: 'message.menu.component.mdEditor' },
      },
      {
        path: 'codeEditor',
        component: () => import('@/views/main/components/codeEditor/index.vue'),
        meta: { title: 'message.menu.component.codeEditor' },
      },
      {
        path: 'jsonEditor',
        component: () => import('@/views/main/components/jsonEditor/index.vue'),
        meta: { title: 'message.menu.component.jsonEditor' },
      },
      {
        path: 'dragPane',
        component: () => import('@/views/main/components/dragPane/index.vue'),
        meta: { title: 'message.menu.component.dragPane' },
      },
      {
        path: 'map',
        component: () => import('@/views/main/components/map/index.vue'),
        meta: { title: 'message.menu.component.map' },
      },
      {
        path: 'cutPhoto',
        component: () => import('@/views/main/components/cutPhoto/index.vue'),
        meta: { title: 'message.menu.component.cutPhoto' },
      },
      {
        path: 'rightMenu',
        component: () => import('@/views/main/components/rightMenu/index.vue'),
        meta: { title: 'message.menu.component.rightMenu' },
      },
    ]
  }
]

export default route