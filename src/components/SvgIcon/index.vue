<template>
  <svg class="SvgIcon" aria-hidden="true"><use :xlink:href="symbolId" /></svg>
</template>

<script lang="ts">
/** 使用参照文档：https://gitee.com/webxrd/vite-plugin-svg?_from=gitee_search */
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const symbolId = computed(() => `#icon-${props.name}`)
    return { symbolId }
  }
})
</script>

<style scoped>
.SvgIcon {
  font-size: inherit;
  fill: currentColor;
  width: 1em;
  height: 1em;
  text-indent: 0;
}
</style>