import { createStore, createLogger } from 'vuex'
import Presistent from './plugins/persistent'
const debug = process.env.NODE_ENV !== 'production'

const files= import.meta.globEager('./modules/*.ts')

let modules: any = {}
Object.keys(files).forEach((c: string) => {
  const module = files[c].default
  const moduleName: string = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2')
  modules[moduleName] = module
})

const presistent = Presistent({ key: 'vuex', modules, modulesKeys: {
  local: Object.keys(modules),
  session: []
} })

export default createStore({
  modules: {
    ...modules
  },
  strict: debug,
  plugins: debug ? [createLogger(), presistent] : [presistent]
})