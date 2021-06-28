import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/echarts',
    component: Layout,
    redirect: '/echarts/dragable',
    meta: { title: 'echarts图表', icon: 'el-icon-pie-chart' },
    children: [
      {
        path: 'bar',
        component: () => import('@/views/main/echarts/bar.vue'),
        meta: { title: '柱状图' }
      },
      {
        path: 'line',
        component: () => import('@/views/main/echarts/line.vue'),
        meta: { title: '折线图' }
      },
      {
        path: 'pie',
        component: () => import('@/views/main/echarts/pie.vue'),
        meta: { title: '饼图' }
      },
      {
        path: 'radar',
        component: () => import('@/views/main/echarts/radar.vue'),
        meta: { title: '雷达图' }
      },
      {
        path: 'map',
        component: () => import('@/views/main/echarts/map.vue'),
        meta: { title: '地图' }
      },
    ]
  }
]

export default route