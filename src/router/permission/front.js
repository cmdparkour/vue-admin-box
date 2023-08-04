/**
 * 前端路由管理
 **/

/** 引入需要权限的Modules */
import Dashboard from '../modules/dashboard'

/** 登录后需要动态加入的本地路由 */
const FrontRoutes = [
  ...Dashboard,
]

export default FrontRoutes