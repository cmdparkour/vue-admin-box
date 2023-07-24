import enLocale from 'element-plus/dist/locale/en.mjs'
import common from './en/index'

const lang = {
  el: enLocale.el, // element-plus i18 setting
  message: {
    language: 'English',
    ...common,
  }
}

export default lang