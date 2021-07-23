<template>
  <div class="layout-container">
    <div class="box">
      <el-radio-group v-model="radio" @change="change">
      <el-radio-button label="admin"></el-radio-button>
      <el-radio-button label="editor"></el-radio-button>
      <el-radio-button label="test"></el-radio-button>
    </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const radio = ref(store.state.user.token)
    const change = () => {
      store.commit('user/tokenChange', radio.value)
    }
    return {
      radio,
      change
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 15px;
    text-align: left;
  }
</style>