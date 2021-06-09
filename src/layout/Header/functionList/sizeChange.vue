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
          {{ $t(d.name) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed, unref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const route = useRoute()
    const elementSize = computed(() => store.state.app.elementSize)
    const list = [
      { size: 'default', name: 'message.system.size.default' },
      { size: 'medium', name: 'message.system.size.medium' },
      { size: 'small', name: 'message.system.size.small' },
      { size: 'mini', name: 'message.system.size.mini' },
    ]
    const { fullPath } = unref(route)
    return {
      list,
      elementSize,
      fullPath
    }
  },
  methods: {
    handleCommand(command: string) {
      this.$store.commit('app/stateChange', {
        name: 'elementSize',
        value: command
      })
      this.setElementSize()
    },
    setElementSize() {
      this.$ELEMENT.size = this.elementSize
      this.$router.replace({
        path: "/redirect" + this.fullPath
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>