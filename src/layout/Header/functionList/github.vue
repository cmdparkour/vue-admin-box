<template>
  <a href="https://github.com/cmdparkour/vue-admin-box" target="_blank" title="github项目地址"><i class="sfont system-github" @click="toggle"></i></a>
</template>

<script lang="ts">
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
    &:hover {
      background: rgba(0,0,0,.025);
    }
    &:focus {
      outline: none;
    }
  }
</style>