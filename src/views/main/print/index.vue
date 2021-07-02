<template>
  <div class="layout-container">
    <div style="text-align: left; padding: 15px;">
      <el-button @click="print">打印</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const print = () => {
      let headerStr = `
        <html>
          <head>
            <title></title>
            <style>
              table,table tr th, table tr td { border:1px solid #000; }
              table { width: 100%; min-height: 30px; line-height: 30px; text-align: center; border-collapse: collapse; margin-bottom: 20px;}
            </style>
          </head>
        <body>
      `
      let footerStr = "</body></html>"
      let printData = `
        <h1 style="text-align: center;">采购订单</h1>
        <div style="border-bottom: 1px solid #000; padding-bottom: 20px;">
          <div style="margin-right: 100px; display: inline-block;">订单号 ORD210000229</div>
          <div style="display: inline-block;">订单日期 2021-06-26</div>
        </div>
        <div style="padding: 10px 0;">
          <div style="margin: 10px 0;">
            <div style="display: inline-block; width: 49%;">供应商  其他厂家</div>
            <div style="display: inline-block; width: 49%;">购货方 这是一个名称</div>
          </div>
          <div style="margin: 10px 0;">
            <div style="display: inline-block; width: 49%;">联系方式  123456789</div>
            <div style="display: inline-block; width: 49%;">采购员 张三</div>
          </div>
          <div style="margin: 10px 0;">
            <div style="display: inline-block; width: 49%;">地址 上尚德缓刑枯栽春树暮云花飘万家雪</div>
            <div style="display: inline-block; width: 49%;">购货方 这是一个名称</div>
          </div>
          <div style="margin: 10px 0;">
            <div style="display: inline-block; width: 49%;">供应商  其他厂家</div>
            <div style="display: inline-block; width: 49%;">购货方 这是一个名称</div>
          </div>
        </div>
        <table>
          <tr>
            <th>商品编号</th>
            <th>商品名称</th>
            <th>单位</th>
            <th>数量</th>
            <th>单价</th>
            <th>金额</th>
            <th>零售价</th>
            <th>条码</th>
          </tr>
          <tr>
            <td>082002</td>
            <td>9803 防哂型女士旅行衣</td>
            <td>件</td>
            <td>110.0</td>
            <td>56.00</td>
            <td>6160.00</td>
            <td>148.00</td>
            <td>699902100000011</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>商品编号</th>
            <th>商品名称</th>
            <th>单位</th>
            <th>数量</th>
            <th>单价</th>
            <th>金额</th>
            <th>零售价</th>
            <th>条码</th>
          </tr>
          <tr>
            <td>082002</td>
            <td>9803 防哂型女士旅行衣</td>
            <td>件</td>
            <td>110.0</td>
            <td>56.00</td>
            <td>6160.00</td>
            <td>148.00</td>
            <td>699902100000011</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>商品编号</th>
            <th>商品名称</th>
            <th>单位</th>
            <th>数量</th>
            <th>单价</th>
            <th>金额</th>
            <th>零售价</th>
            <th>条码</th>
          </tr>
          <tr>
            <td>082002</td>
            <td>9803 防哂型女士旅行衣</td>
            <td>件</td>
            <td>110.0</td>
            <td>56.00</td>
            <td>6160.00</td>
            <td>148.00</td>
            <td>699902100000011</td>
          </tr>
        </table>
      `
      let wind = window.open("", "订单详情",
					"toolbar=no,scrollbars=yes,menubar=no")
      wind.document.body.innerHTML = headerStr + printData + footerStr
      wind.print()
      console.log(123)
      wind.close()
    }
    return {
      print
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>