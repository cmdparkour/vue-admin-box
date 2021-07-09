interface Option {
  name: string,
  value: any
}

interface State {
  keepAliveComponentsName: []
}

const state = () => ({
  keepAliveComponentsName: [] // 需要缓存的组件名称
})

// mutations
const mutations = {
  // 重置，Push, splice keep-alive对象
  setKeepAliveComponentsName(state: any, nameArr: []) {
    state.keepAliveComponentsName = nameArr
  },
  addKeepAliveComponentsName(state: any, name: string) {
    state.keepAliveComponentsName.push(name)
  },
  delKeepAliveComponentsName(state: any, name: string) {
    const key = state.keepAliveComponentsName.indexOf(name)
    if (key !== -1) {
      state.keepAliveComponentsName.splice(key, 1)
      console.log(state.keepAliveComponentsName)
    }
  }
}

const getters = {
  keepAliveComponentsName(state: State) {
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