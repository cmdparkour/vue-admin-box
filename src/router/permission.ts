/*
 * @Date: 2022-07-24 21:43:47
 * @Description: 
 */
/** 引入类型 */
import type { Route } from './index.type'

/** 引入路由相关的资源 */
import router, { modules } from './index'
/** 引入vuex实例 */
import store from '@/store'

/** 动态路由实现基础组件 */
/** 引入全局Layout组件 */
import Layout from '@/layout/index.vue'
/** 引入多级菜单控制器组件 */
import MenuBox from '@/components/menu/index.vue'
/** 引入带有系统自定义name的组件，方便keep-alive实现 */
import { createNameComponent } from './createNode'

/** 引入需要权限的Modules */
import Dashboard from './modules/dashboard'
import Document from './modules/document'
import Pages from './modules/pages'
import Menu from './modules/menu'
import Component from './modules/component'
import Directive from './modules/directive'
import SystemManage from './modules/systemManage'
import Chart from './modules/chart'
import Print from './modules/print'
import Community from './modules/community'
import Tab from './modules/tab'

/** 登录后需要动态加入的本地路由 */
const asyncRoutes: Route[] = [
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
  ...Tab,
]

/** 
 * @name 动态路由的权限新增，供登录后调用
 * @other 如果需要进行后端接口控制菜单的话，请在此拿到后端的菜单树与asyncRoutes对比，生成一个新的值
 */
function addRoutes() {
  // 已验证完成，下面代码添加的可以实时同步至菜单中去，可以添加setTimeout(() => {}) 模拟异步代码的操作
  // 利用前端路由表模拟后端数据问题
  asyncRoutes.forEach(item => {
    modules.push(item)
    router.addRoute(item)
  })
}

/**
 * @des 登录了之后会执行这个方法，实现动态路由的功能
 */
export function getAuthRoutes() {
  // 判断token是否存在，存在则调用添加路由的方法
  if (store.state.user.token) {
    addRoutes()
  }
}
