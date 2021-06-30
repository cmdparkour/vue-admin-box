import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import system from './zh/system'
import common from './zh/common'
import menu from './zh/menu'
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