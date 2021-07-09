interface Option {
  name: string,
  value: any
}
interface State {
  isCollapse: boolean,
  contentFullScreen: boolean,
  showLogo: boolean,
  fixedTop: boolean,
  showTabs: boolean,
  expandOneMenu: boolean,
  elementSize: string,
  lang: string,
  keepAliveComponentsName: []
}
const state = () => ({
  isCollapse: false, // 侧边栏是否收缩展示
  contentFullScreen: false, // 内容是否可全屏展示
  showLogo: true, // 是否显示Logo
  fixedTop: false, // 是否固定顶部, todo，暂未使用
  showTabs: true, // 是否显示导航历史
  expandOneMenu: true, // 一次是否只能展开一个菜单
  elementSize: 'mini', // element默认尺寸，支持官网四个大小参数
  lang: 'zh', // 默认采用的国际化方案
  keepAliveComponentsName: [] // 需要缓存的组件名称
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
  },
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