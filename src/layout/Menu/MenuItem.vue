<template>
  <template v-if="!menu.hideMenu">
    <el-submenu v-if="showMenuType === 2" :index="pathResolve">
      <template #title>
        <i :class="menu.meta.icon" v-if="menu.meta.icon"></i>
        <span>{{ $t(menu.meta.title) }}</span>
      </template>
      <menu-item v-for="(item, key) in menu.children" :key="key" :menu="item" :basePath="pathResolve" />
    </el-submenu>
    <app-link v-else-if="showMenuType === 1" :to="pathResolve">
      <el-menu-item :index="pathResolve" v-if="!menu.children[0].children || menu.children[0].children.length === 0">
        <i :class="menu.children[0].meta.icon || menu.meta.icon" v-if="menu.children[0].meta.icon || menu.meta.icon"></i>
        <template #title>{{ $t(menu.children[0].meta.title) }}</template>
      </el-menu-item>
      <el-submenu v-else :index="pathResolve">
        <template #title>
          <i :class="menu.children[0].meta.icon || menu.meta.icon" v-if="menu.children[0].meta.icon || menu.meta.icon"></i>
          <span>{{ $t(menu.children[0].meta.title) }}</span>
        </template>
        <menu-item v-for="(item, key) in menu.children[0].children" :key="key" :menu="item" :basePath="pathResolve" />
      </el-submenu>
    </app-link>
    <app-link v-else :to="pathResolve">
      <el-menu-item :index="pathResolve">
      <i :class="menu.meta.icon" v-if="menu.meta.icon"></i>
      <template #title>{{ $t(menu.meta.title) }}</template>
      </el-menu-item>
    </app-link>
  </template>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import appLink from './Link.vue'
export default defineComponent({
  name: 'menu-item',
  props: {
    menu: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  components: {
    appLink
  },
  setup(props) {
    const menu = props.menu
    // todo: 优化if结构
    const showMenuType = computed(() => { // 0: 无子菜单， 1：有1个子菜单， 2：显示上下级子菜单
      if (menu.children && (menu.children.length > 1 || (menu.children.length === 1 && menu.alwayShow))) {
        return 2
      } else if (menu.children && menu.children.length === 1 && !menu.alwayShow) {
        return 1
      } else {
        return 0
      }
    })
    // todo: 优化多层if
    const pathResolve = computed(() => {
      let path = ''
      if (showMenuType.value === 1) {
        if (menu.children[0].path.charAt(0) === '/') {
          path = menu.children[0].path
        } else {
          let char = '/'
          if (menu.path.charAt(menu.path.length - 1) === '/') {
            char = ''
          }
          path = menu.path + char + menu.children[0].path
        }
      } else {
        path = menu.path
      }
      path = props.basePath ? props.basePath + '/' + path : path
      return path
    })
    return {
      showMenuType,
      pathResolve
    }
  }
})
</script>

<style lang="scss" scoped>
  .el-submenu {
    text-align: left;
  }
  .el-menu-item {
    text-align: left;
  }
</style>