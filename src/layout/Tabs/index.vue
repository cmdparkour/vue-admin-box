<template>
  <div class="tabs">
    <el-scrollbar class="scroll-container tags-view-container">
      <Item
        v-for="menu in menuList"
        :key="menu.meta.title"
        :menu="menu"
        :active="activeMenu.path === menu.path"
        @close="delMenu(menu)"
      />
    </el-scrollbar>
    <div class="handle">
      <el-dropdown>
        <div class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-refresh-left" @click="pageReload">重新加载</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-close">关闭当前标签</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-close">关闭其他标签</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-close">关闭所有标签</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-tooltip class="item" effect="dark" :content="contentFullScreen ? '退出全屏':'内容全屏'" placement="bottom">
        <i class="el-icon-full-screen" @click="onFullscreen"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import Item from './item.vue'
import { defineComponent, computed, unref, watch, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import tabsHook from './tabsHook.ts'
export default defineComponent({
  components: {
    Item
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const allRoutes = router.options.routes
    const defaultMenu = {
      path: '/dashboard',
      meta: { title: '首页', hideClose: true }
    }
    const contentFullScreen = computed(() => store.state.app.contentFullScreen)

    let activeMenu = reactive({ path: '' })
    let menuList = reactive(tabsHook.getItem())
    if (menuList.length === 0) { // 判断之前有没有调用过
      addMenu(defaultMenu)
    } 
    watch(menuList, (newVal) => {
      tabsHook.setItem(newVal)
    })
    watch(route, (newVal) => {
      addMenu(newVal)
      initMenu(newVal)
    })

    // 全屏
    function onFullscreen() {
      store.commit('app/contentFullScreenChange', !contentFullScreen.value)
    }

    // 当前页面组件重新加载
    function pageReload() {
      const { path, fullPath } = unref(route);
      router.replace({
        path: "/redirect" + fullPath
      });
    }

    // 添加新的菜单项
    function addMenu(menu: object) {
      let { path, meta } = menu
      if (meta.hideTabs) {
        return
      }
      let hasMenu = menuList.some((obj) => {
        return obj.path === path
      })
      if (!hasMenu) {
        menuList.push({
          path,
          meta
        })
      }
    }

    // 删除菜单项
    function delMenu(menu: object) {
      if (menu.path === activeMenu.path) {
        router.push(defaultMenu.path)
      }
      menuList.splice(menuList.findIndex(item => item.path === menu.path), 1)
      
    }

    // 初始化activeMenu
    function initMenu(menu: object) {
      activeMenu = menu
    }
    // 初始化时调用：1. 新增菜单 2. 初始化activeMenu
    addMenu(route)
    initMenu(route)
    return {
      contentFullScreen,
      onFullscreen,
      pageReload,
      // 菜单相关
      menuList,
      activeMenu,
      delMenu
    }
  }
})
</script>

<style lang="scss" scoped>
  .tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
    .handle {
      padding-right: 20px;
      height: 100%;
      display: flex;
      align-items: center;
      .el-dropdown-link {
        margin-top: 5px;
        border-left: 1px solid #eee;
        height: 25px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .scroll-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    :deep {
      .el-scrollbar__bar {
        bottom: 0px;
      }
      .el-scrollbar__wrap {
        height: 49px;
      }
    }
  }
  .tags-view-container {
    height: 34px;
    flex: 1;
    width: 100%;
    display: flex;
  }
  .el-icon-full-screen {
    cursor: pointer;
    &:hover {
      background: rgba(0,0,0,.025);
    }
    &:focus {
      outline: none;
    }
  }
</style>
