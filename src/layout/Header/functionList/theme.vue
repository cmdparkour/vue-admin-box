<template>
  <div :title="$t('message.system.setting.name')" @click="drawerChange(true)">
    <i class="sfont system-shezhi"></i>
  </div>
  <el-drawer
    :title="$t('message.system.setting.name')"
    v-model="drawer"
    size="300px"
    :show-close="false"
    direction="rtl">
      <h3>整体风格设置（to do）</h3>
      <div class="theme-box">
        <theme-icon v-model:active="state.style"></theme-icon>
        <theme-icon v-model:active="state.style" name="light" tip="亮色菜单风格" logo="#fff" menu="#fff"></theme-icon>
        <theme-icon v-model:active="state.style" name="dark" tip="暗色菜单风格" logo="#1f1f1f" menu="#1f1f1f" header="#1f1f1f" main="#000" activeColor="#fff"></theme-icon>
      </div>
      <h3>主题色(to do)</h3>
      <div class="theme-box">
        <!-- <theme-color v-model:active="state.primaryColor" v-model:activeTextColor="state.primaryTextColor"></theme-color> -->
        <theme-color
          v-for="(item, key) in themeColorArr"
          v-model:active="state.primaryColor"
          v-model:activeTextColor="state.primaryTextColor"
          :key="key"
          :color="item.color"
          :textColor="item.textColor"
          :tip="item.tip"
        ></theme-color>
      </div>
      <h3>导航模式(to do)</h3>
      <div class="theme-box">
        <theme-icon v-model:active="state.menuType" name="side" tip="侧边菜单导航"></theme-icon>
        <theme-icon v-model:active="state.menuType" name="top" tip="顶部菜单导航" header="#263445" menu="#f0f2f5"></theme-icon>
      </div>
      <h3>其他设置</h3>
      <div class="list">
        <div class="list-item" v-for="option in options" :key="option.name">
          <span>{{ $t(option.name) }}</span>
          <el-switch
            v-model="option.value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="change(option)"
          >
          </el-switch>
        </div>
      </div>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from 'vue'
import { useStore } from 'vuex'
import themeIcon from './theme/theme-icon.vue'
import themeColor from './theme/theme-color.vue'
import type { Style } from './theme/setting'
import { style } from './theme/setting'
interface Option {
  name: string,
  value: boolean,
  store: string
}
interface State {
  style: string,
  primaryColor: string,
  menuType: string
}
export default defineComponent({
  components: {
    themeIcon,
    themeColor
  },
  setup() {
    const store = useStore()
    // 只取值，不做computed
    const state: State = reactive({
      style: store.state.app.theme.state.style,
      primaryColor: store.state.app.theme.state.primaryColor,
      primaryTextColor: store.state.app.theme.state.primaryTextColor,
      menuType: store.state.app.theme.state.menuType
    })
    const themeColorArr = [
      { color: '#409eff', textColor: '#fff', tip: '默认蓝' },
      { color: '#d60f20', textColor: '#fff', tip: '玫瑰红' },
      { color: '#ac25e6', textColor: '#fff', tip: '优雅紫' },
      { color: '#4dc86f', textColor: '#fff', tip: '故事绿' },
      { color: '#13c2c2', textColor: '#fff', tip: '明青' },
      { color: '#333', textColor: '#fff', tip: '极客黑' }
    ]
    const setTheme = () => {
      const userTheme = style[state.style]
      const body = document.getElementsByTagName('body')[0]
      // 需要设置的颜色参照theme.scss，位置：assets/style/theme.scss
      // 设置主题色
      body.style.setProperty('--system-primary-color', state.primaryColor)
      // 设置菜单系列色
      body.style.setProperty('--system-menu-background', userTheme.menu.background)
      body.style.setProperty('--system-menu-text-color', userTheme.menu.textColor)
      body.style.setProperty('--system-menu-children-background', userTheme.menu.childrenBackground)
      body.style.setProperty('--system-menu-hover-background', userTheme.menu.hoverBackground)
      body.style.setProperty('--system-menu-submenu-active-color', userTheme.menu.submenuActiveColor)
      // 设置logo系列色
      body.style.setProperty('--system-logo-background', userTheme.logo.background)
      body.style.setProperty('--system-logo-color', userTheme.logo.color)
    }
    // 监听数据的变化
    watch(state, (newVal) => {
      const theme = {
        state: {
          ...state
        }
      }
      store.commit('app/stateChange', {
        name: 'theme',
        value: theme
      })
      setTheme()
    })
    let drawer = ref(false)
    const options = reactive([
      { name: 'message.system.setting.showLogo', value: store.state.app.showLogo, store: 'showLogo' },
      { name: 'message.system.setting.showBreadcrumb', value: store.state.app.showTabs, store: 'showTabs' },
      { name: 'message.system.setting.keepOnlyOneMenu', value: store.state.app.expandOneMenu, store: 'expandOneMenu' }
    ])
    const drawerChange = (value: boolean) => {
      drawer.value = value
    }
    const change = (option: Option) => {
      store.commit(`app/stateChange`, { name: option.store, value: option.value })
    }
    setTheme()
    return {
      drawer,
      options,
      state,
      themeColorArr,
      drawerChange,
      change
    }
  }
})
</script>

<style lang="scss" scoped>
  i {
    cursor: pointer;
    &:hover {
      background: rgba(0,0,0,.025);
    }
    &:focus {
      outline: none;
    }
  }
  
  .list {
    padding: 0 20px;
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      span {
        font-size: 16px;
      }
    }
  }
  h3 {
    margin-top: 40px;
    margin-bottom: 20px;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    padding: 0 20px;
    &:first-child {
      margin-top: 0;
    }
  }
  .theme-box {
    text-align: left;
    padding-left: 20px;
  }
</style>