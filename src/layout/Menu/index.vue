<template>
  <el-menu
    :default-active="activeMenu"
    class="layout-menu"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409eff"
    :class="isCollapse? 'collapse': ''"
    :collapse="isCollapse"
    :collapse-transition="false"
    :unique-opened="expandOneMenu"
  >
    <menu-item v-for="(menu, key) in allRoutes" :key="key" :menu="menu" />
  </el-menu>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import MenuItem from './MenuItem.vue'
export default defineComponent({
  components: {
    MenuItem
  },
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.app.isCollapse)
    const expandOneMenu = computed(() => store.state.app.expandOneMenu)
    const allRoutes = useRouter().options.routes
    const route = useRoute()
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });
    return {
      isCollapse,
      expandOneMenu,
      allRoutes,
      activeMenu
    }
  }
})
</script>

<style lang="scss" scoped>
  .layout-menu {
    width: 100%;
    flex: 1;
    box-shadow: 2px -1px 3px 0px #0000006e;
    &.collapse {
      margin-left: 0px;
      // padding: 0 15px;
    }
    :deep(.el-submenu) {
      .el-menu {
        background-color: #1f2d3d !important;
        .el-menu-item, .el-submenu__title {
          background-color: #1f2d3d !important;
          &:hover {
            background-color: #0f1721 !important;
          }
        }
      }
    }
  }
</style>