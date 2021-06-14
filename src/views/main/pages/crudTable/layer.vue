<template>
  <Layer :layer="layer" @confirm="submit">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="名称：" prop="name">
        <el-input v-model="form.name" size="small" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="数字：">
        <el-input v-model="form.sort" oninput="value=value.replace(/[^\d]/g,'')" placeholder="只能输入正整数" size="small"></el-input>
      </el-form-item>
			<el-form-item label="选择器：" prop="select">
			  <el-select v-model="form.select" placeholder="请选择" clearable>
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
      <el-form-item label="单选框：">
        <el-radio-group v-model="form.radio">
          <el-radio :label="0">最新开播</el-radio>
          <el-radio :label="1">最早开播</el-radio>
          <el-radio :label="2">最多观看</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Layer from '@/components/layer/index.vue'
export default defineComponent({
  components: {
    Layer
  },
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: true
        }
      }
    }
  },
  setup() {
    const form = ref({})
    const rules = {}
    const options = [
      { value: 1, label: '运动'},
      { value: 2, label: '健身'},
      { value: 3, label: '跑酷'},
      { value: 4, label: '街舞'},
    ]
    function submit(){
      alert('操作成功')
    }
    return {
      form,
      rules,
      options,
      submit
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>