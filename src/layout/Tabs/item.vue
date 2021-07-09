<template>
  <div class="tags-view-item" :class="active? 'active' : ''">
    <router-link :to="menu.path" v-if="menu.meta.title">
      {{ $t(menu.meta.title) }}
    </router-link>
    <i class="el-icon-refresh-right" @click.stop="reload" v-if="active" />
    <i class="el-icon-close" @click.stop="closeTab" v-if="!menu.meta.hideClose" :alt="$t('message.common.del')"></i>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    menu: {
      type: Object,
      default: () => {
        return {
          path: '',
          meta: {
            label: '',
            hideClose: false
          }
        }
      }
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    // 关闭按钮
    function closeTab() {
      emit('close')
    }
    // 刷新按钮
    function reload() {
      emit('reload')
    }
    return {
      closeTab,
      reload
    }
  }
})
</script>

<style lang="scss" scoped>
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 24px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    border-radius: 2px;
    a {
      color: #495060;
      height: 26px;
      display: inline-block;
      padding-left: 8px;
      padding-right: 8px;
    }
    .el-icon-refresh-right {
      display: inline-block;
      margin-right: 5px;
    }
    .el-icon-close {
      display: inline-block;
      height: 26px;
    }
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      background: #409eff;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to top, #409eff, #2c3e50);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #409eff, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      border-color: #409eff;
      color: #fff;
      a {
        color: #fff;
      }
    }
    &:hover {
      background-color: #f1f1f1;
    }
  }
</style>