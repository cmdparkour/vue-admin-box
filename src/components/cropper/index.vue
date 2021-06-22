<template>
  <Layer :layer="layer" width="1000">
    <div class="container">
      <div class="box">
        <img id="test" class="default-img" :src="modelValue" />
      </div>
      <div class="box">
        <div class="preview">
        </div>
      </div>
    </div>
    <Tip :cropper="cropper" />
  </Layer>
</template>

<script lang="ts">
import { defineComponent, nextTick, watch, ref, Ref, reactive } from 'vue'
import Layer from '@/components/layer/index.vue'
import Tip from './tip.vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
interface Command {
  
}
export default defineComponent({
  components: {
    Layer,
    Tip
  },
  props: {
    layer: {
      type: Object,
      required: true,
      deafult: () => {
        return {
          show: false
        }
      }
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    let cropper: any = ref(null)
    watch(() => props.layer.show, (newVal) => {
      if (!newVal) {
        return
      }
      nextTick(() => {
        initCropper()
      })
    })
    // init the cropperjs
    function initCropper() {
      const image = document.getElementById('test') as HTMLImageElement
      cropper.value = new Cropper(image, {
        preview: '.preview',
        ready: function() {
          
        },
        crop: function(event) {
          
        },
      });
    }
    return {
      cropper
    }
  }
})
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    height: 300px;
    overflow: hidden;
    .box {
      width: 49%;
      height: 100%;
      .default-img {
        display: block;
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
      }
      .preview{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
        img {
          max-width: 100%;
        }
      }
    }
  }
  
</style>