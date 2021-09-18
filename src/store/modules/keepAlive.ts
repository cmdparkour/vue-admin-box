
interface Option {
  name: string,
  value: any
}

export interface keepAliveState {
  keepAliveComponentsName: string[]
}

const state = () => ({
  keepAliveComponentsName: [] // 需要缓存的组件名称
})

// mutations
const mutations = {
  // 重置，Push, splice keep-alive对象
  setKeepAliveComponentsName(state: keepAliveState, nameArr: []) {
    state.keepAliveComponentsName = nameArr
  },
  addKeepAliveComponentsName(state: keepAliveState, name: string) {
    state.keepAliveComponentsName.push(name)
  },
  delKeepAliveComponentsName(state: keepAliveState, name: string) {
    const key = state.keepAliveComponentsName.indexOf(name)
    if (key !== -1) {
      state.keepAliveComponentsName.splice(key, 1)
      console.log(state.keepAliveComponentsName)
    }
  }
}

const getters = {
  keepAliveComponentsName(state: keepAliveState) {
    return state.keepAliveComponentsName
  }
}

// actions
const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
