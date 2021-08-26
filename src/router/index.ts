/**
 * @description 所有人可使用的参数配置列表
 * @params hideMenu: 是否隐藏当前路由结点不在导航中展示
 * @params alwayShow: 只有一个子路由时是否总是展示菜单，默认false
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import i18n from '@/locale'
import NProgress from '@/utils/system/nprogress'
import { changeTitle } from '@/utils/system/title'

// 动态路由相关引入数据
import Layout from '@/layout/index.vue'
import MenuBox from '@/components/menu/index.vue'
import { createNameComponent } from './createNode'

// 引入modules
import Dashboard from './modules/dashboard'
import Document from './modules/document'
import Permission from './modules/permission'
import Pages from './modules/pages'
import Menu from './modules/menu'
import Component from './modules/component'
import Directive from './modules/directive'
import SystemManage from './modules/systemManage'
import Chart from './modules/chart'
import Print from './modules/print'
import Community from './modules/community'
import System from './modules/system'

// 初始化必须要的路由
let modules: object[] = [
  ...System
]

const { t } = i18n.global

const routes: any = modules

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 登录后动态加入的路由
let asyncRoutes: RouteRecordRaw[] = [
  ...Dashboard,
  ...Document,
  ...Component,
  ...Pages,
  ...Menu,
  ...Directive,
  ...Chart,
  ...SystemManage,
  ...Print,
  ...Community,
]
// 动态路由的权限新增，供登录后调用
export async function addRoutes() {
  
  // let data = [ // 来源于后端的数据
  //   {
  //     path: '/echarts',
  //     meta: { title: '权限管理', icon: 'el-icon-pie-chart' },
  //     children: [
  //       {
  //         meta: { title: '菜单管理' },
  //         component: 'index',
  //         path: 'box456789'
  //       },
  //       {
  //         meta: { title: '角色管理' },
  //         component: 'index',
  //         path: 'box1'
  //       },
  //       {
  //         meta: { title: '用户管理' },
  //         component: 'index',
  //         path: 'box1456'
  //       },
  //     ]
  //   },
  // ]
  // eachData(data, 0) // 匹配本地路由
  // data.forEach(item => { // 添加到路由表里面去
  //   modules.push(item)
  //   router.addRoute(item)
  // })
  // 与后端交互的逻辑处理，处理完后异步添加至页面
  asyncRoutes.forEach(item => {
    modules.push(item)
    router.addRoute(item)
  })
}

// 重置匹配所有路由的解决方案，todo
function eachData(data: any, type: number) {
  data.forEach(d => {
    if (d.children && d.children.length > 0) {
      if (type === 0) {
        d.component = Layout
      } else {
        d.component = createNameComponent(MenuBox)
      }
      eachData(d.children, type + 1)
    } else {
      /* 组件匹配暂时写死，todo项 */
      d.component = createNameComponent(() => import('@/views/main/pages/crudTable/index.vue'))
    }
  })
  console.log(data)
}

// 如果你登录了，那么系统才会把路由加入到路由表里面，防止越权访问
if (store.state.user.token) {
  addRoutes()
}

const whiteList = ['/login']

router.beforeEach((to, _from, next) => {
  NProgress.start();
  if (store.state.user.token || whiteList.indexOf(to.path) !== -1) {
    to.meta.title ? (changeTitle(to.meta.title)) : ""; // 动态title
    next()
  } else {
    next("/login"); // 全部重定向到登录页
    to.meta.title ? (changeTitle(to.meta.title)) : ""; // 动态title
  }
});

router.afterEach((to, _from) => {
  const keepAliveComponentsName = store.getters['keepAlive/keepAliveComponentsName'] || []
  const name = to.matched[to.matched.length - 1].components.default.name
  if (to.meta && to.meta.cache && name && !keepAliveComponentsName.includes(name)) {
    store.commit('keepAlive/addKeepAliveComponentsName', name)
  }
  NProgress.done();
});

export {
  modules
}

export default router
