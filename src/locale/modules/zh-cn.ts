import locale from 'element-plus/dist/locale/zh-cn.mjs'
import messageJson from '../json/zh-cn.json'
const lang = {
  el: locale.el, // element内部国际化
  message: messageJson.message, // 自定义国际化
}

export default lang