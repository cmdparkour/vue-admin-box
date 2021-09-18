interface Option<T>  {
  name: keyof optionKey<T>
  value: optionValue<T>
}

type optionKey<T> = {
  [name in keyof T]: string
}

type optionValue<T> = {
  value: T[keyof T]
}

export interface appState {
  isCollapse: boolean,
  contentFullScreen: boolean,
  showLogo: boolean,
  fixedTop: boolean,
  showTabs: boolean,
  expandOneMenu: boolean,
  elementSize: string,
  lang: string,
  theme: {
    primaryColor: '#409eff',
  },
  menuList: Array<unknown>,
  [key:string]:unknown
}

const state = () => ({
  isCollapse: false, // 侧边栏是否收缩展示
  contentFullScreen: false, // 内容是否可全屏展示
  showLogo: true, // 是否显示Logo
  fixedTop: false, // 是否固定顶部, todo，暂未使用
  showTabs: true, // 是否显示导航历史
  expandOneMenu: true, // 一次是否只能展开一个菜单
  elementSize: 'mini', // element默认尺寸，支持官网四个大小参数
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
  isCollapseChange(state: appState, type: boolean) {
    state.isCollapse = type
  },
  contentFullScreenChange(state: appState, type: boolean) {
    state.contentFullScreen = type
  },
  menuListChange(state: appState, arr: []) {
    state.menuList = arr
  },
  stateChange(state: appState, option: Option<appState>) {
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
