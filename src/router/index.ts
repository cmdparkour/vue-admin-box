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

let modules: object[] = [
  ...System
]

const { t } = i18n.global

const routes: any = modules

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 动态路由的权限新增，供登录后调用
export function addRoutes() {
  let asyncRoutes: RouteRecordRaw[] = [
    ...Dashboard,
    ...Document,
    ...Permission,
    ...Component,
    ...Pages,
    ...Menu,
    ...Directive,
    ...Chart,
    ...SystemManage,
    ...Print,
    ...Community,
  ]
  // 与后端交互的逻辑处理，处理完后异步添加至页面
  asyncRoutes.forEach(item => {
    modules.push(item)
    router.addRoute(item)
  })
}

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