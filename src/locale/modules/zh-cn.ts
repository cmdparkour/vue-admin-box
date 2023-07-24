import zhLocale from 'element-plus/dist/locale/zh-cn.mjs'
import common from './zh-cn/index'
const lang = {
  el: zhLocale.el, // element内部国际化
  message: {
    language: '中文',
    ...common,
  }
}

export default lang