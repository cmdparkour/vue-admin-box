<template>
  <el-config-provider :size="size">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="js">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const size = computed(() => store.state.app.elementSize)
    const messages = i18n.messages.value
    return {
      size,
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
</style>
