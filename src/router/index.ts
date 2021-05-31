/**
 * @description 所有人可使用的参数配置列表
 * @params hideMenu: 是否隐藏当前路由结点不在导航中展示
 * @params alwayShow: 只有一个子路由时是否总是展示菜单，默认false
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import i18n from '@/locale'
import NProgress from '@/utils/system/nprogress'
import { changeTitle } from '@/utils/system/title'

// 引入modules
import Dashboard from './modules/dashboard'
import Hello from './modules/hello'
import System from './modules/system'

let modules: object[] = [
  ...Dashboard,
  ...Hello,
  ...System
]

const { t } = i18n.global

const routes: any = modules

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const whiteList = ['/login']

router.beforeEach((to, _from, next) => {
  NProgress.start();
  to.meta.title ? (changeTitle(to.meta.title)) : ""; // 动态title
  if (whiteList.indexOf(to.path) !== -1 || store.state.user.info.name) {
    next()
  } else {
    next("/login"); // 全部重定向到登录页
    to.meta.title ? (changeTitle(to.meta.title)) : ""; // 动态title
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router