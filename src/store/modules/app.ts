const state = () => ({
  isCollapse: false,
  contentFullScreen: false,
  menuList: [], // 所有缓存的菜单数据组
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
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}