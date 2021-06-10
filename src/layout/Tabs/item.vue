<template>
  <div class="tags-view-item" :class="active? 'active' : ''">
    <router-link :to="menu.path">
      {{ $t(menu.meta.title) }}
    </router-link>
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
    return {
      closeTab
    }
  }
})
</script>

<style lang="scss" scoped>
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    transition: 0.2s;
    a {
      color: #495060;
      height: 26px;
      display: inline-block;
      padding-left: 8px;
      padding-right: 8px;
    }
    .el-icon-close {
      padding-right: 8px;
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
      background-color: #409eff !important;
      border-color: #409eff;
      color: #fff;
      a {
        color: #fff;
      }
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-left: 8px;
      }
    }
    &:hover {
      background-color: #f1f1f1;
    }
  }
</style>