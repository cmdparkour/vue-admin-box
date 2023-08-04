<template>
  <el-dropdown @command="handleCommand" size="medium">
    <span class="el-dropdown-link">
      <i class="sfont system-zuixiaohua"></i>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="d in list"
          :key="d.size"
          :command="d.size"
          :disabled=" elementSize === d.size "
        >
          {{ d.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="js">
import { defineComponent, computed, unref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const route = useRoute()
    const elementSize = computed(() => store.state.app.elementSize)
    const list = [
      { size: 'large', name: '大' },
      { size: 'default', name: '默认' },
      { size: 'small', name: '小' },
    ]
    const { fullPath } = unref(route)
    return {
      list,
      elementSize,
      fullPath
    }
  },
  methods: {
    handleCommand(command) {
      this.$store.commit('app/stateChange', {
        name: 'elementSize',
        value: command
      })
    },
  }
})
</script>

<style lang="scss" scoped>
  
</style>