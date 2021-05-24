/**
 * @description 所有人可使用的参数配置列表
 * @params hideMenu: 是否隐藏当前路由结点不在导航中展示
 * @params alwayShow: 只有一个子路由时是否总是展示菜单，默认false
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NProgress from '/@/utils/system/nprogress'
import { systemTitle } from '/@/config/index.ts'

// 引入modules
import Dashboard from './modules/dashboard'
import Hello from './modules/hello'
import System from './modules/system'

let modules: object[] = [
  ...Dashboard,
  ...Hello,
  ...System
]

const routes: any = modules

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  NProgress.start();
  to.meta.title ? (document.title = `${to.meta.title}-${systemTitle}`) : ""; // 动态title
  next()
  // whiteList.indexOf(to.path) !== -1 || storageSession.getItem("info")
  //   ? next()
  //   : next("/login"); // 全部重定向到登录页
});

router.afterEach(() => {
  NProgress.done();
});

export default router