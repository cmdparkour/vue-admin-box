<template>
  <template v-if="!menu.hideMenu">
    <el-sub-menu v-if="showMenuType === 2" :index="pathResolve" :show-timeout="0" :hide-timeout="0">
      <template #title>
        <i :class="menu.meta.icon" v-if="menu.meta.icon"></i>
        <span>{{ isBackMenu ? menu.meta.title : $t(menu.meta.title) }}</span>
      </template>
      <menu-item v-for="(item, key) in menu.children" :key="key" :menu="item" :basePath="pathResolve" />
    </el-sub-menu>
    <app-link v-else-if="showMenuType === 1" :to="pathResolve">
      <el-menu-item :index="pathResolve" v-if="!menu.children[0].children || menu.children[0].children.length === 0">
        <i :class="menu.children[0].meta.icon || menu.meta.icon" v-if="menu.children[0].meta.icon || menu.meta.icon"></i>
        <template #title>{{ isBackMenu ? menu.children[0].meta.title : $t(menu.children[0].meta.title) }}</template>
      </el-menu-item>
      <el-sub-menu v-else :index="pathResolve" :show-timeout="0" :hide-timeout="0">
        <template #title>
          <i :class="menu.children[0].meta.icon || menu.meta.icon" v-if="menu.children[0].meta.icon || menu.meta.icon"></i>
          <span>{{ isBackMenu ? menu.children[0].meta.title : $t(menu.children[0].meta.title) }}</span>
        </template>
        <menu-item v-for="(item, key) in menu.children[0].children" :key="key" :menu="item" :basePath="pathResolve" />
      </el-sub-menu>
    </app-link>
    <a v-else-if="showMenuType === 3" :href="menu.meta.jumpUrl" target="_blank" >
      <el-menu-item :index="pathResolve" class="menu-out-link" :disabled="true">
      <i :class="menu.meta.icon" v-if="menu.meta.icon"></i>
      <template #title>{{ isBackMenu ? menu.meta.title : $t(menu.meta.title) }}</template>
      </el-menu-item>
    </a>
    <app-link v-else :to="pathResolve">
      <el-menu-item :index="pathResolve">
      <i :class="menu.meta.icon" v-if="menu.meta.icon"></i>
      <template #title>{{ isBackMenu ? menu.meta.title : $t(menu.meta.title) }}</template>
      </el-menu-item>
    </app-link>
  </template>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import appLink from './Link.vue'
import { isBackMenu } from '@/config'
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
      } else if (menu.meta && menu.meta.jumpUrl) {
        return 3
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
      pathResolve,
      isBackMenu
    }
  }
})
</script>

<style lang="scss" scoped>
  .el-sub-menu {
    text-align: left;
  }
  .el-menu-item {
    text-align: left;
  }
  .el-menu-item i, .el-sub-menu__title i {
    padding-right: 8px;
  }
  .menu-out-link {
    cursor: pointer;
    opacity: 1;
  }
</style>