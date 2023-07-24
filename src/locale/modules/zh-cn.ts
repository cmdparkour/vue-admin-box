import zhLocale from 'element-plus/dist/locale/zh-cn.mjs'
import system from './zh-cn/system'
import common from './zh-cn/common'
import menu from './zh-cn/menu'
const lang = {
  el: zhLocale.el, // element内部国际化
  message: {
    language: '中文',
    ...system,
    ...common,
    ...menu
  }
}

export default lang