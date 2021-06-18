<template>
  <div class="layout-container">
    <div :id="id" class="map"></div>
  </div>
</template>

<script lang="ts">
import { Script } from 'vm'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    let map = null
    const id = 'map-' + (new Date()).getTime()
    const key = "2a85714ee5a14f879ba7ae94551f5c6b"
    onMounted(() => {
      if (window.onLoad) {
        setMap()
      } else {
        loadApi()
      }
    })
    function loadApi() {
      window.onLoad = () => {
        setMap()
      }
      const url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`
      const jsapi: any = document.createElement('script')
      jsapi.charset = 'utf-8'
      jsapi.src = url
      document.head.appendChild(jsapi)
    }
    function setMap() {
      map = new AMap.Map(id, {
        resizeEnable: true
      })
    }
    return {
      id
    }
  }
})
</script>

<style lang="scss" scoped>
  .map{
    width: 100%;
    height: 100%;
  }
</style>