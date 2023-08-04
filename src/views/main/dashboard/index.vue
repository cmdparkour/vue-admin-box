<template>
  <div class="box">
    <Card />
    <Charts />
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import Card from './components/card/index.vue'
import Charts from './components/charts/index.vue'
export default defineComponent({
  components: {
    Card,
    Charts,
  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 15px;
  }
</style>