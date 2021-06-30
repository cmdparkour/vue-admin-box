import enLocale from 'element-plus/lib/locale/lang/en'
import system from './en/system'
import common from './en/common'
import menu from './en/menu'
const lang = {
  el: enLocale.el, // element-plus i18 setting
  message: {
    language: 'English',
    ...system,
    ...common,
    ...menu
  }
}

export default lang