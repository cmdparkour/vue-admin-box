<template>
  <div class="box">
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
  .box{
    padding: 15px;
  }
  .el-row {
    margin-bottom: 15px;
  }
</style>