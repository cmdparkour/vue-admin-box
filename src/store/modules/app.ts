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
  theme: {
    primaryColor: string
  }
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
  theme: {
    state: {
      style: 'default',
      primaryColor: '#409eff',
      menuType: 'side'
    }
  }
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