<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <tinymce v-model="word" />
      <el-card class="box-card">
        <template #header>
          <p style="text-align: left;">
            v-model结果
            <el-button style="float: right; padding: 3px 0" type="text" @click="setData">初始赋值</el-button>
          </p>
        </template>
        <div>{{ word }}</div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import tinymce from '@/components/tinymce/index.vue'
export default defineComponent({
  components: {
    tinymce
  },
  setup() {
    let word = ref('')
    function setData() {
      word.value = "我是一个初始值"
    }
    return {
      word,
      setData
    }
  }
})
</script>

<style lang="scss" scoped>
  * {
    text-align: left;
  }
  .box-card{
    margin-top: 10px;
  }
</style>