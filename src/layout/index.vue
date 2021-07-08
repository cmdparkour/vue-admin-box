<template>
  <el-container style="height: 100vh">
    <div class="mask" v-show="!isCollapse && !contentFullScreen" @click="hideMenu"></div>
    <el-aside :width="isCollapse ? '60px' : '250px'" :class="isCollapse ? 'hide-aside': 'show-side'" v-show="!contentFullScreen">
      <Logo v-if="showLogo" />
      <Menu />
    </el-aside>
    <el-container>
      <el-header v-show="!contentFullScreen">
        <Header />
      </el-header>
      <Tabs v-show="showTabs" />
      <el-main>
        <router-view v-slot="{ Component, route }">
          <keep-alive ref="keepDom" :max="10">
            <transition appear name="fade-transform" mode="out-in">
               <div class="el-main-box" :key="route.path" v-if="route.meta.cache">
                 <component :is="Component" />
               </div>
             </transition>
          </keep-alive>
          <div class="el-main-box" v-if="!route.meta.cache" :key="route.path">
            <transition appear name="fade-transform" mode="out-in">
              <component :is="Component" />
            </transition>
          </div>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import type { Ref } from 'vue'
import { defineComponent, computed, onBeforeMount, ref,getCurrentInstance } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useEventListener } from '@vueuse/core'
import Menu from "./Menu/index.vue"
import Logo from "./Logo/index.vue"
import Header from "./Header/index.vue"
import Tabs from './Tabs/index.vue'
export default defineComponent({
  components: {
    Menu,
    Logo,
    Header,
    Tabs
  },
  setup() {
    const store = useStore()
    // computed
    const isCollapse = computed(() => store.state.app.isCollapse)
    const contentFullScreen = computed(() => store.state.app.contentFullScreen)
    const showLogo = computed(() => store.state.app.showLogo)
    const showTabs = computed(() => store.state.app.showTabs)
    // 页面宽度变化监听后执行的方法
    const resizeHandler = () => {
      if (document.body.clientWidth <= 1000 && !isCollapse.value) {
        store.commit('app/isCollapseChange', true)
      } else if (document.body.clientWidth > 1000 && isCollapse.value) {
        store.commit('app/isCollapseChange', false)
      }
    }
    // 初始化调用
    resizeHandler()
    // beforeMount
    onBeforeMount(() => {
      // 监听页面变化
      useEventListener("resize", resizeHandler);
    });
    // methods
    // 隐藏菜单
    const hideMenu = () => {
      store.commit('app/isCollapseChange', true)
    }
    return {
      isCollapse,
      showLogo,
      showTabs,
      hideMenu,
      contentFullScreen
    }
  }
});
</script>

<style lang="scss" scoped>
  .el-header {
    padding-left: 0;
  }
  .el-aside {
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    overflow-x: hidden;
    transition: 0.3s;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
  .el-main {
    background-color: #f0f2f5;
    height: 100%;
    padding: 0;
  }
  .el-main-box {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 15px;
    box-sizing: border-box;
  }
  @media screen and ( max-width: 1000px ) {
    .el-aside {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      z-index: 1000;
      &.hide-aside {
        left: -250px;
      }
    }
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 999;
      background: rgba(0, 0, 0, 0.5);
    }
    
  }
</style>