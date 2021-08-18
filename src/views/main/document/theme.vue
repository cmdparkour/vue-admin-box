<template>
  <div class="layout-container">
    <article>
      <section>
        <p>如何定制一套属于自己的系统主题呢，本篇文章就来教你在此系统内如何快速实现一套自定义主题</p>
        <p>
          1. 首先，你找到
          <b>src/theme/index.ts</b> 文件，咱们系统内的三个主题配置均在
          <b>style</b>常量下，你复制一套主题，改动为自己的颜色代码即可。
        </p>
        <p>
          2. 如果你采用的是国际化的模板，你需要额外关注一下
          <b>locale/modules</b>文件夹下各个语言包的system.ts，在里面分别定义你的主题名称，对象所在位置为：
          <b>system/setting/style</b>
        </p>
        <p>
          3. 你配置的主题名称，如：
          <b>default/light/dark</b>，这几个名称均会被映射到body的className上面，故，你甚至在当前数量的变量不满足你的需求时，甚至可以直接加一个css文件来进行所有元素的样式自定义，具体可参照：
          <b>theme/modules/dark.scss</b>文件中的写法，写完后，在
          <b>theme/index.scss</b>底部引入即可。
        </p>
        <p>
          4. 系统会自动采集
          <b>src/theme/index.ts</b>文件下面的主题，并在主题配置里面展示它，如此一来，你自定义主题唯一需要关注的就只是theme文件夹，如果需要国际化，再加一个locale文件夹，除此之外不需要涉及到其他任何文件夹的修改。
        </p>
        <p>5. 此措施确保了自定义主题足够的简单，简单到你只需要copy几行代码，改一下颜色即可。</p>
        <p>6. diy主题是如此的简单，赶快试试吧。</p>
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
