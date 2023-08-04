<template>
  <a href="https://github.com/cmdparkour/vue-admin-box" target="_blank" title="访问github地址"><i class="sfont system-github" @click="toggle"></i></a>
</template>

<script lang="js">
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>

<style lang="scss" scoped>
  a {
    &:focus {
      outline: none;
    }
  }
  i {
    cursor: pointer;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
</style>