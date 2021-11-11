<template>
  <div>
    <el-card shadow="hover" class="box-card">
      <template #header>
        <div style="text-align: left;"><h2>Element系列</h2><span>框架内部默认使用的按钮组，支持右上方的尺寸控制</span></div>
      </template>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>
      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>
      <el-row>
        <el-button :icon="Search" circle></el-button>
        <el-button type="primary" :icon="Edit" circle></el-button>
        <el-button type="success" :icon="Check" circle></el-button>
        <el-button type="info" :icon="Message" circle></el-button>
        <el-button type="warning" :icon="Star" circle></el-button>
        <el-button type="danger" :icon="Delete" circle></el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons'

</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 15px;
  }
</style>