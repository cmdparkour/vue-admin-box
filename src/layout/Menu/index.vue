<template>
  <el-menu
    :default-active="activeMenu"
    class="layout-menu"
    background-color="#1f2933"
    text-color="#bfcbd9"
    active-text-color="#409eff"
    :class="isCollapse? 'collapse': ''"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <MenuItem v-for="(menu, key) in allRoutes" :key="key" :menu="menu" />
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
    &.collapse {
      margin-left: 0px;
      paddding: 0 15px;
    }
  }
</style>