<template>
  <Layer :layer="layer" @confirm="submit">
    <el-form :model="ruleForm" :rules="rules" ref="form" label-width="120px" style="margin-right:30px;">
      <el-form-item label="角色名称：" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="角色标识：" prop="slug">
        <el-input v-model="ruleForm.slug" placeholder="请输入角色标识"></el-input>
      </el-form-item>
      <el-form-item label="状态：" prop="status">
        <el-switch
          v-model="ruleForm.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
          :active-value="1"
          :inactive-value="0"
          @change="handleUpdateStatus(scope.row)"
          ></el-switch>
      </el-form-item>
      <el-form-item label="备注：" prop="remark">
        <el-input v-model="ruleForm.remark" placeholder="请输入备注信息" type="textarea"></el-input>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Layer from '@/components/layer/index.vue'
import { add, update } from '@/api/table'
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
  setup(props, ctx) {
    let ruleForm = reactive({
      name: '',
      slug: '',
      status: 1,
      remark: ''
    })
    const rules = {
      name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
      slug: [{ required: true, message: '请输入角色标识', trigger: 'blur' }],
      status: [{ required: true, message: '请选择状态', trigger: 'change' }],
      remark: [{ required: false, message: '请输入备注', trigger: 'blur' }]
    }
    function init() { // 用于判断新增还是编辑功能
      if (props.layer.row) {
        ruleForm = JSON.parse(JSON.stringify(props.layer.row)) // 数量量少的直接使用这个转
      } else {

      }
    }
    init()
    return {
      ruleForm,
      rules
    }
  },
  methods: {
    submit() {
      this.$refs['form'].validate((valid: boolean) => {
        if (valid) {
          let params = this.ruleForm
          if (this.layer.row) {
            this.updateForm(params)
          } else {
            this.addForm(params)
          }
        } else {
          return false;
        }
      });
    },
    // 新增提交事件
    addForm(params: object) {
      add(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.layer.show = false
          this.$emit('getTableData', true)
        })
    },
    // 编辑提交事件
    updateForm(params: object) {
      update(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          this.$emit('getTableData', false)
        })
    }
  }
})
</script>

<style lang="scss" scoped></style>