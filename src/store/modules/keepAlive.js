const state = () => ({
  keepAliveComponentsName: [] // 需要缓存的组件名称
})

// mutations
const mutations = {
  // 重置，Push, splice keep-alive对象
  setKeepAliveComponentsName(state, nameArr) {
    state.keepAliveComponentsName = nameArr
  },
  addKeepAliveComponentsName(state, name) {
    state.keepAliveComponentsName.push(name)
  },
  delKeepAliveComponentsName(state, name) {
    const key = state.keepAliveComponentsName.indexOf(name)
    if (key !== -1) {
      state.keepAliveComponentsName.splice(key, 1)
      console.log(state.keepAliveComponentsName)
    }
  }
}

const getters = {
  keepAliveComponentsName(state) {
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
