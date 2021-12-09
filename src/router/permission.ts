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
]

/** 重置匹配所有路由的解决方案，todo */
function eachData(data: any, type: number) {
  data.forEach(d => {
    if (d.children && d.children.length > 0) {
      if (type === 0) {
        d.component = Layout
      } else {
        d.component = createNameComponent(() => MenuBox)
      }
      eachData(d.children, type + 1)
    } else {
      /* 组件匹配暂时写死，todo项 */
      // d.component = createNameComponent(() => import('@/views/main/pages/crudTable/index.vue'))
      // d.component = x.component
    }
  })
  console.log(data)
}

/** 动态路由的权限新增，供登录后调用 */
function addRoutes() {

  // 与后端交互的逻辑处理，处理完后异步添加至页面
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
  // eachData(data, 0) // 匹配本地路由，产生一棵新树
  // data.forEach(item => { // 添加到路由表里面去
  //   modules.push(item)
  //   router.addRoute(item)
  // })

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
