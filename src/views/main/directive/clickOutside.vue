<template>
  <div class="layout-container">
    <div class="layout-container-table">
      点击状态：{{ sideStr }}
      <div class="box" v-clickoutside="setData">
        <span>InSide</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import clickoutside from '@/directive/clickOutside'
export default defineComponent({
  directives: {
    clickoutside
  },
  setup() {
    const sideStr = ref('')
    const setData = (type: boolean)=> {
     if (type) {
       sideStr.value = 'outSide'
     } else {
       sideStr.value = 'inSide'
     }
    }
    return {
      sideStr,
      setData
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    width: 200px;
    height: 200px;
    background: red;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 40px;
  }
</style>