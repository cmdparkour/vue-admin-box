const state = () => ({
  isCollapse: false, // 侧边栏是否收缩展示
  contentFullScreen: false, // 内容是否可全屏展示
  showLogo: true, // 是否显示Logo
  fixedTop: false, // 是否固定顶部, todo，暂未使用
  showTabs: true, // 是否显示导航历史
  expandOneMenu: true, // 一次是否只能展开一个菜单
  elementSize: 'small', // element默认尺寸，支持官网'large / default /small'小参数
  lang: '', // 默认采用的国际化方案,初次进入，采用浏览器当前设置的语言，默认采用中文
  theme: {
    state: {
      style: 'default',
      primaryColor: '#409eff',
      menuType: 'side'
    }
  },
  menuList: []
})

// mutations
const mutations = {
  isCollapseChange(state, type) {
    state.isCollapse = type
  },
  contentFullScreenChange(state, type) {
    state.contentFullScreen = type
  },
  menuListChange(state, arr) {
    state.menuList = arr
  },
  stateChange(state, option) {
    state[option.name] = option.value
  }
}

// actions
const actions = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
