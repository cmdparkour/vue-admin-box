<template>
  <div class="box">
    <basic-template />
    <Card />
    <Charts />
    <Communication />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basicTemplate from './components/basic-template.vue'
import Communication from './components/communication.vue'
import Card from './components/card/index.vue'
import Charts from './components/charts/index.vue'
export default defineComponent({
  components: {
    Card,
    Charts,
    basicTemplate,
    Communication,
  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 15px;
  }
</style>