<template>
  <div title="设置主题" @click="drawerChange(true)">
    <i class="sfont system-shezhi"></i>
  </div>
  <el-drawer
    title="主题配置"
    v-model="drawer"
    size="300px"
    :show-close="false"
    direction="rtl">
      <el-divider content-position="center">主题</el-divider>

      <el-divider content-position="center">配置</el-divider>
      <div class="list">
        <div class="list-item" v-for="option in options" :key="option.name">
          <span>{{ option.name }}</span>
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
import { defineComponent, ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
interface Option {
  name: string,
  value: boolean,
  store: string
}
export default defineComponent({
  setup() {
    const store = useStore()
    let drawer = ref(false)
    const options = reactive([
      { name: '显示logo', value: store.state.app.showLogo, store: 'showLogo' },
      { name: '显示tabsView', value: store.state.app.showTabs, store: 'showTabs' },
      // { name: '固定顶部', value: store.state.app.fixedTop, store: 'fixedTop' }
    ])
    const drawerChange = (value: boolean) => {
      drawer.value = value
    }
    const change = (option: Option) => {
      store.commit(`app/stateChange`, { name: option.store, value: option.value })
    }
    return {
      drawerChange,
      drawer,
      options,
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
</style>