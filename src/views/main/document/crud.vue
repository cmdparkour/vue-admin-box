<template>
  <div class="layout-container">
    <article>
      <section>
        <p>crud是业务型中后台系统的关键，在本项目中，集成了几套常见的表格表单模型，如果你需要搞一个CRUD，那么直接使用这几个Demo进行开发，这是极高效的，
        如果没有什么自定义样式，你大概率可以在20分钟以内完成一个表格，以及删除、新增及编辑功能，即使有自定义样式、状态切换一类的，再补充个10分钟也能搞定，
        一天8个小时，假设有效时间为4个小时，你效率可以达到一天8个页面的CRUD，如果再去除一些业务需求探讨的时间，一天4个页面的CRUD是比较可靠的，因为这种模式的确定性，以及在我自己的项目中的实践，可以把BUG的产生数量压低至一个很小的区间，至少在我的项目中，出现的BUG已经全部修复了才提炼出来这套模型。</p>
        <p>针对于表格组件，我采用封装的形式把表格和分页给关联起来，形成一套易用于请求使用的表格分页联动组件，无论是用于和表单联动还是单纯用于展示表格，对于大多数vue3中后台框架来说，这都是一套比较好的实践方案，这也是系统主推的一套核心东西。</p>
        <p>针对于表单组件，同样也采用封装的形式把一些基础功能封装在内，如：核心的拖拽功能、一套新增、编辑流程等。</p>
        <p>未来会扩展更多的应用场景进来，如：</p>
        <p>1. 很多查询条件的收缩、展开功能</p>
        <p>2. 表格数据导出xls/csv一类的功能</p>
        <p>3. 数据批量导入功能</p>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  article {
    padding: 0 20px;
    p {
      text-align: left;
      line-height: 25px;
    }
  }
</style>