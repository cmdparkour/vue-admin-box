import { createI18n } from 'vue-i18n'

const files= import.meta.globEager('./modules/*.ts')

let messages: any = {}
Object.keys(files).forEach((c: string) => {
  const module = files[c].default
  const moduleName: string = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  messages[moduleName] = {}
  messages[moduleName].message = module
})

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages
})

export default i18n