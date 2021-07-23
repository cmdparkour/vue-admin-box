<template>
  <div :title="$t('message.system.setting.name')" @click="drawerChange(true)">
    <i class="sfont system-shezhi"></i>
  </div>
  <el-drawer
    :title="$t('message.system.setting.name')"
    v-model="drawer"
    size="300px"
    :show-close="false"
    direction="rtl">
      <h3>整体风格设置</h3>
      
      <div class="list">
        <div class="list-item" v-for="option in options" :key="option.name">
          <span>{{ $t(option.name) }}</span>
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
      { name: 'message.system.setting.showLogo', value: store.state.app.showLogo, store: 'showLogo' },
      { name: 'message.system.setting.showBreadcrumb', value: store.state.app.showTabs, store: 'showTabs' },
      { name: 'message.system.setting.keepOnlyOneMenu', value: store.state.app.expandOneMenu, store: 'expandOneMenu' }
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
  h3 {
    margin-bottom: 12px;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    padding: 0 20px;
  }
</style>