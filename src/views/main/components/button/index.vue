<template>
  <div>
    <ElementButtonCard />
    <NormalButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ElementButtonCard from './elementButton.vue'
import NormalButton from './normalButton.vue'
export default defineComponent({
  components: {
    ElementButtonCard,
    NormalButton
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 15px;
  }
</style>