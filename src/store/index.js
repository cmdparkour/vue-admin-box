import { createStore, createLogger } from 'vuex'
import Persistent from './plugins/persistent'
const debug = import.meta.env.MODE !== 'production'
const files= import.meta.globEager('./modules/*.js')

let modules = {}
Object.keys(files).forEach((c) => {
  const module = files[c].default
  const moduleName = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  modules[moduleName] = module
})

// 这是一个vuex本地存储插件，默认把vuex所有数据都做存储了
// local代表存储在localStorage里面，进行永久存储
// session代表存储在sessionStorage里面，进行临时存储
// 都接收Modules的文件名数组，如：['app', 'keepAlive', 'user']
// 用户相关的数据建议直接存储在local里面，session里面会导致打开新窗口时获取不到token值，因为session只针对当前会话
const persistent = Persistent({ key: 'vuex', modules, modulesKeys: {
  local: Object.keys(modules),
  session: []
} })

export default createStore({
  modules: {
    ...modules
  },
  strict: debug,
  plugins: debug ? [createLogger(), persistent] : [persistent]
})
