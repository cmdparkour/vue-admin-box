interface Socket {
  key: string,
  modules: Modules,
  modulesKeys: ModulesKeys
}

interface Modules {
  [propName: string]: any
}

interface ModulesKeys {
  local: string[],
  session: string[]
}

interface Mutation {
  type: any,
  payload: any
}
const exclude = ['actions', 'getters', 'mutations', 'namespaced']
export default function Persistent({ key, modules, modulesKeys }: Socket) {
  return (store: any) => {
    const localOldState = JSON.parse(localStorage.getItem(key) || '{}')
    const sessionOldState = JSON.parse(sessionStorage.getItem(key) || '{}')
    let oldState: Modules = {}
    Object.assign(oldState, localOldState, sessionOldState)
    if (Object.keys(oldState).length > 0) {
      for (const oldKey in oldState) {
        modules[oldKey] = oldState[oldKey]
      }
      store.replaceState(modules)
    }
    store.subscribe((mutation: Mutation, state: any) => {
      // 判断是否需要缓存数据至localStorage
      if (modulesKeys.local.length > 0) {
        const localData = setData(store.state, modulesKeys.local)
        localStorage.setItem(key, JSON.stringify(localData))
      } else {
        localStorage.removeItem(key)
      }
      // 判断是否需要缓存数据至sessionStorage
      if (modulesKeys.session.length > 0) {
        const sessionData = setData(store.state, modulesKeys.session)
        sessionStorage.setItem(key, JSON.stringify(sessionData))
      } else {
        sessionStorage.removeItem(key)
      }
    })
  }
}

function setData(state: any, module: string[]) {
  let data: Modules = {}
  for (const i of module) {
    data[i] = state[i]
  }
  return data
}
