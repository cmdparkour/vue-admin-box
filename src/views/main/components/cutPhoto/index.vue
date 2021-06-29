<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <div style="text-align: left;"><el-button @click="showWindow" type="primary">上传图片</el-button></div>
      <Cropper :layer="layer" v-model="img" />
      <el-card class="box-card" style="margin-top: 15px;">
        <template #header>
          <p style="text-align: left;">
            图片效果
          </p>
        </template>
        <img :src="img" alt="" style="width: 50%;" >
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import Cropper from '@/components/cropper/index.vue'
export default defineComponent({
  components: {
    Cropper
  },
  setup() {
    let img = ref('http://blog.51weblove.com/wp-content/uploads/2019/03/2019032400535358.jpg')
    const layer = reactive({
      show: false,
      title: '图片上传'
    })
    function showWindow() {
      layer.show = true
    }
    return {
      layer,
      img,
      showWindow
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>