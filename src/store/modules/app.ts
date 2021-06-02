interface Option {
  name: string,
  value: any
}

const state = () => ({
  isCollapse: false,
  contentFullScreen: false,
  showLogo: true, // 是否显示Logo
  fixedTop: false, // 是否固定顶部, todo，暂未使用
  showTabs: true, // 是否显示导航历史
  elementSize: 'small'
})

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

// actions
const actions = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}