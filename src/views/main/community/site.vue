<template>
  <div class="layout-container">
    <div class="box">
      <div v-for="(item, key) in data" :key="key">
        <h3 style="text-align: left;">{{ item.name }}</h3>
        <el-row :gutter="20">
          <el-col v-for="row in item.data" :key="row.id" :lg="6" :md="8" :sm="12" :xs="24">
            <Card
              :row="row"
              background="#fff"
              :thumb="item.thumb"
            />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './components/card.vue'
export default defineComponent({
  components: {
    Card
  },
  setup() {
    const data = [
      {
        name: '官方资源',
        thumb: 'http://blog.51weblove.com/wp-content/themes/2021062118010181/timthumb.php?src=http://blog.51weblove.com/wp-content/uploads/2018/12/2018120516354293.jpg&h=284&w=284&zc=1',
        data: [
          { id: 1, name: 'vue3官方文档', des: 'vue3最新中文文档', link: 'https://v3.cn.vuejs.org/' },
          { id: 2, name: 'vue-router', des: 'vue3版本的vue-router', link: 'https://next.router.vuejs.org' },
          { id: 3, name: 'vuex', des: 'vue3版本的vuex', link: 'https://next.vuex.vuejs.org/' },
          { id: 4, name: 'vite', des: '类webpack的打包工具', link: 'https://cn.vitejs.dev/' }
        ]
      },
      {
        name: '组件库',
        thumb: 'http://blog.51weblove.com/wp-content/themes/2021062118010181/timthumb.php?src=http://blog.51weblove.com/wp-content/uploads/2021/06/colorful-rocks-1674179_960_720.jpg&h=284&w=284&zc=1',
        data: [
          { id: 1, name: 'element-plus', des: '中后台UI组件库，支持vue3', link: 'https://element-plus.gitee.io/#/zh-CN' },
          { id: 2, name: 'Vant', des: '手机端UI组件库，支持vue3', link: 'https://youzan.github.io/vant/#/zh-CN/' },
          { id: 3, name: 'Vuetify', des: 'Material 样式的 Vue UI 组件库', link: 'https://next.vuetifyjs.com/zh-Hans/' },
          { id: 4, name: 'Naïve UI', des: 'vue3组件库新生力量', link: 'https://www.naiveui.com/zh-CN' }
        ]
      },
      {
        name: '其他资源',
        thumb: 'http://blog.51weblove.com/wp-content/themes/2021062118010181/timthumb.php?src=http://blog.51weblove.com/wp-content/uploads/2018/12/2018120512374712.jpg&h=284&w=248&zc=1',
        data: [
          { id: 1, name: 'vue-i18n', des: '国际化解决方案', link: 'https://vue-i18n.intlify.dev/', img: 'https://vue-i18n.intlify.dev/vue-i18n-logo.png' },
          { id: 2, name: 'h5-dooring', des: 'h5低代码开源平台', link: 'https://github.com/MrXujiang/h5-Dooring', img: '' },
        ]
      }
    ]
    return {
      data
    }
  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 15px;
    .el-col {
      margin-bottom: 10px;
    }
  }
</style>