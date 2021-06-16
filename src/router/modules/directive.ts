import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/directive',
    component: Layout,
    redirect: '/directive/copy',
    meta: { title: 'message.menu.directive.name', icon: 'el-icon-toilet-paper' },
    // children: []
  }
]

export default route