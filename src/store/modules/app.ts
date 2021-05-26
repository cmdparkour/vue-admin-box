interface Option {
  name: string,
  value: any
}

const state = () => ({
  isCollapse: false,
  contentFullScreen: false,
  showLogo: true, // 是否显示Logo
  fixedTop: false, // 是否固定顶部
  showTabs: true, // 是否显示导航历史
})

// actions
const actions = {

}

// mutations
const mutations = {
  isCollapseChange(state: any, type: boolean) {
    state.isCollapse = type
  },
  contentFullScreenChange(state: any, type: boolean) {
    state.contentFullScreen = type
  },
  menuListChange(state: any, arr: []) {
    state.menuList = arr
  },
  stateChange(state: any, option: Option) {
    state[option.name] = option.value
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}