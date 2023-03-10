/*
 * @Date: 2022-07-24 21:43:47
 * @Description: 
 */
/** 引入类型 */

/** 引入路由相关的资源 */
import router, { modules } from './index'
/** 引入vuex实例 */
import store from '@/store'
/** 引入后端路由控制器 */
import { isBackMenu } from '@/config'

/** 引入纯前端路由 */
import FrontRoutes from './permission/front'
/** 引入后端路由 */
import getMenu from './permission/back'

/** 
 * @name 动态路由的权限新增，供登录后调用
 * @other 如果需要进行后端接口控制菜单的话，请在此拿到后端的菜单树与asyncRoutes对比，生成一个新的值
 */
async function addRoutes() {
  // 已验证完成，下面代码添加的可以实时同步至菜单中去，可以添加setTimeout(() => {}) 模拟异步代码的操作
  // 利用前端路由表模拟后端数据问题
  // 等待后端接口返回数据后再回调出去，防止刷新跳转404
  return new Promise<void>((resolve) => {
    if (isBackMenu) {
      getMenu()
      .then((data) => {
        data.forEach(item => {
          modules.push(item)
          router.addRoute(item)
        })
        resolve()
      })
      return
    }    
    FrontRoutes.forEach(item => {
      modules.push(item)
      router.addRoute(item)
    })
    resolve()
  })
}

/**
 * @des 登录了之后会执行这个方法，实现动态路由的功能
 */
export async function getAuthRoutes() {
  // 判断token是否存在，存在则调用添加路由的方法
  if (store.state.user.token) {
    await addRoutes()
  }
}
