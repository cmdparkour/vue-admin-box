<template>
  <div class="layout-container">
    <h1>接口说明文档</h1>
    <article>
      <section>
        <p>有很多小伙伴平时在群里面经常会问到一些关于项目数据请求的问题，在此，我就统一写成一个简单的文档给大家介绍一下这个项目中会涉及到的哪些数据请求使用的方式供大家来做参考。</p>
        <h2 style="margin-top: 40px;">数据请求封装介绍</h2>
          <p>当前的数据请求封装基于axios库进行的一个封装，主要有：<b>请求前的公共处理</b>、<b>请求后的公共处理</b>两方面,请参照文件：<b>src/utils/system/request.ts</b></p>
          <p>
            <b>请求前的公共处理</b>
          </p>
          <p>目前项目中主要对token进行了一个前置的处理，用户可根据自己的业务来自行扩展，如：时区信息、userId、用户位置等数据的统一处理，如果对加密要求高的，可以在此进行请求参数加密操作。</p>
          <p>
            <b>请求后的公共处理</b>
          </p>
          <p>主要是做错误提示的统一处理，当捕捉到错误时，无论是来自于服务器的错误还是code错误，都应该统一到这里来进行处理，然后使用Promise的catch返回到调用位置，有利于在复杂业务模型中保持高维护性。</p>
        <h2 style="margin-top: 40px;">如何在项目中使用接口请求</h2>
          <p>咱们需要关注的几个地方如下：
            <ul>
              <li>1. 根据自己业务类型优化改写: src/utils/request.ts，简单的项目可以跳过这一步</li>
              <li>2. 所有的接口放置的文件夹：src/api/*, 咱们所有的请求都应该放置于此，具体写法，参照文件内容即可</li>
              <li>3. 在页面内引入对应的接口函数，然后使用即可，可以参考：业务表格模块</li>
              <li>4. 每次调用的时候，都应该要考虑到接口返回异常的情况，进行catch处理，每次一定要对返回的data数据做类型判断，比如，你需要的是数组数据，但是接口在空的时候很可能会给你返回一个null，这此逻辑需要前端处理掉，可以封装处理，也可以独立处理，推荐和后端组协商好规范，进行封装处理操作。</li>
            </ul>
          </p>
        <h2 style="margin-top: 40px;">如何使用Mock数据</h2>
        <p>
          <b>使用本地Mock数据</b>
        </p>
        <p>
          <ul>
            <li>1. 使用本地Mock数据的时候，我们可以在文件夹：项目根目录/mock/ 里面新增一个文件，来定义mock函数,并在: 项目根目录/mockProdServer.ts文件里面引入，因为线上是需要自行引入的（备注：后期可能会换成自动引入的写法）</li>
            <li>2. 然后在：src/api/* 里面写接口调用，并定义baseUrl为“/mock”，可参照文件src/api/user.ts</li>
            <li>3. 然后在页面内引入这个文件内的对应函数使用即可</li>
            <li>4. 这样的配置可以使得大家在前期开发过程中使用自己的接口，然后在后期后端写好接口后，直接替换真实接口即可</li>
            <li>5. 如果有想独立前端项目为自己简历作品的时候，这个功能就很Nice了，每次替换一下后端接口和内容至mock虚拟数据的地方，即使离职后，你的前期项目也能跑起来当简历用，还是Nice。</li>
          </ul>
        </p>
        <p>
          <b>使用在线Mock数据</b>
        </p>
        <p>
          <ul>
            <li>1. 在任意在线mock平台建立项目，并建立mock模拟接口</li>
            <li>2. 在vite.config.ts里面，定义一个新的proxy，推荐名称：“onlineMock”， 可参考文件内部：server.proxy对象内部的写法，再新增一行，类似写法即可，更多资料请去vite官网找一下。</li>
            <li>3. 然后在：src/api/* 里面写接口调用，并定义baseUrl为“/onlineMock”，可参照文件src/api/user.ts</li>
            <li>4. 最后在页面内引入这个文件内的对应函数使用即可 </li>
            <li>5. 本地mock使用的是JS拦截机制，本地开发时有接口请求，线上使用时无接口请求，拦截的是JS事件。</li>
          </ul>
        </p>
        <h2 style="margin-top: 40px;">如何使用真实后端接口</h2>
        <p>在使用接口的时候，需要先行去除api文件夹里面对应接口的baseUrl，直接去掉即可</p>
        <p>
          <b>使用代理</b>
        </p>
        <p>
          <ul>
            <li>1. 本地调试的时候，需要关注vite.config.ts里面配置的代理对应的地址是否正常，可以用Postman自行测试一下接口是否可用</li>
            <li>2. src/api文件夹里面写接口的时候，要把代理的字符串和真实的字符串分开，如：http://vue-admin-box.51weblove.com/api/table/list，写代理的时候，应该把：'http://vue-admin-box.51weblove.com/api'代理到'api'，然后在接口里面就只用写path为：'table/list'。</li>
            <li>3. 代理设置后，你在开发者工具里面看到的接口：最终域名就是你现在项目的域名，如：http://localhost:3000/api/table/list，不要疑惑，实际上访问的是：http://vue-admin-box.51weblove.com/api/table/list</li>
            <li>4. 推荐大家使用代理，这样前端没跨域问题，后端也不用处理一堆东西，你好我好大家好，让后端和你合作也比较爽。</li>
            <li>5. 在上线的时候，大家也得要配置一下对应的服务器，比如Nginx就应该配置一下代理设置， 把你想要代理的接口前缀配置一下，这样线上真实项目才能正常访问。</li>
            <li>6. 如果你对性能有极致的追求，那就不要使用代理了，因为它会让你的服务器还充当一个接口中转站的角色。但在我自己的平时使用中，因为后台使用频率其实是远远不如前台页面的，所以我绝大部分时候都是使用的代理。</li>
          </ul>
        </p>
        <p>
          <b>直接使用接口地址</b>
        </p>
        <p>
          <ul>
            <li>1. 请先关注项目根目录三个文件： .env.development, .env.production, .env.staging文件，分别对应开发环境、生产环境、测试环境</li>
            <li>2. 需要修改三个文件中的VITE_BASE_URL变量，把它换成你的真实接口地址前缀</li>
            <li>3. 这时候再启动项目访问，你会发现，接口请求就变成了你需要的真实接口请求了。</li>
          </ul>
        </p>
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
  .layout-container {
    article {
      padding: 0 20px;
      h2 {
        text-align: left;
      }
      p {
        text-align: left;
        font-size: 18px;
        padding-left: 30px;
      }
      ul {
        text-align: left;
        li {
          line-height: 30px;
        }
      }
    }
  }
</style>