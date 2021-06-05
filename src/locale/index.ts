import { createI18n } from 'vue-i18n'
import store from '@/store'

const files= import.meta.globEager('./modules/*.ts')

let messages: any = {}
Object.keys(files).forEach((c: string) => {
  const module = files[c].default
  const moduleName: string = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  messages[moduleName] = module
})

const i18n = createI18n({
  locale: store.state.app.lang,
  fallbackLocale: store.state.app.lang,
  messages
})

export default i18n