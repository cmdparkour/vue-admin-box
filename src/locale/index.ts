// 提示信息仅在开发环境生效
import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
import store from '@/store'

const files= import.meta.globEager('./modules/*.ts')

let messages: LocaleMessages<VueMessageType> = {}
Object.keys(files).forEach((c: string) => {
  const module = files[c].default
  const moduleName: string = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  messages[moduleName] = module
})
const i18n = createI18n({
  __VUE_I18N_LEGACY_API__: false,
  __VUE_I18N_FULL_INSTALL__: false,
  locale: store.state.app.lang,
  fallbackLocale: store.state.app.lang,
  messages
})
document.querySelector('html')!.setAttribute('lang', store.state.app.lang)

export default i18n