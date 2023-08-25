<template>
  <a href="https://github.com/cmdparkour/vue-admin-box" target="_blank" :title="$t('message.system.github')"><i class="sfont system-github" @click="toggle"></i></a>
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
    &:focus {
      outline: none;
    }
  }
</style>