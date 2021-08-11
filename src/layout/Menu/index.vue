<template>
  <el-menu
    class="layout-menu system-scrollbar"
    background-color="var(--system-menu-background)"
    text-color="var(--system-menu-text-color)"
    active-text-color="var(--system-primary-color)"
    :default-active="activeMenu"
    :class="isCollapse? 'collapse': ''"
    :collapse="isCollapse"
    :collapse-transition="false"
    :unique-opened="expandOneMenu"
  >
    <menu-item v-for="(menu, key) in allRoutes" :key="key" :menu="menu" />
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
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
    onMounted(() => {

    })
    return {
      isCollapse,
      expandOneMenu,
      allRoutes,
      activeMenu,
    }
  }
})
</script>

<style lang="scss" scoped>
  .layout-menu {
    width: 100%;
    flex: 1;
    height: 0;
    overflow-y: auto;
    &.collapse {
      margin-left: 0px;
    }
    :deep() {
      .el-menu-item, .el-submenu {
        background-color: var(--system-menu-background) !important;
      }
      .el-menu-item i, .el-menu-item-group__title, .el-submenu__title i {
        color: var(--system-menu-text-color);
      }
      .el-menu-item, .el-submenu__title{
        &.is-active {
          background-color: var(--system-primary-color) !important;
          color: var(--system-primary-text-color) !important;
          i {
            color: var(--system-primary-text-color) !important;
          }
          &:hover {
            background-color: var(--system-primary-color) !important;
            color: var(--system-primary-text-color) !important;
          }
        }
        &:hover {
          background-color: var(--system-menu-hover-background) !important;
        }
      }
      .el-submenu {
        &.is-active {
          >.el-submenu__title, >.el-submenu__title i {
            color: var(--system-menu-submenu-active-color) !important;
          }
        }
        .el-menu-item {
          background-color: var(--system-menu-children-background) !important;
          &.is-active {
            background-color: var(--system-primary-color) !important;
            color: var(--system-primary-text-color) !important;
            &:hover {
              background-color: var(--system-primary-color) !important;
              color: var(--system-primary-text-color) !important;
            }
          }
          &:hover {
            background-color: var(--system-menu-hover-background) !important;
          }
        }
        .el-submenu {
          .el-submenu__title {
            background-color: var(--system-menu-children-background) !important;
            &:hover {
              background-color: var(--system-primary-color) !important;
            }
          }
        }
      }
    }
  }
</style>