<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-table :data="list">
      <el-table-column :label="$t('message.layerTable.tableTestName')" prop="name" />
    </el-table>
  </Layer>
</template>

<script lang="ts">
import type { LayerType } from '@/components/layer/index.vue'
import type { Ref } from 'vue'
import { defineComponent, ref } from 'vue'
import { add, update } from '@/api/table'
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
  setup(props, ctx) {
    const layerDom: Ref<LayerType | null> = ref(null)
    const list = ref([
      { name: '测试1' },
      { name: '测试2' },
      { name: '测试3' },
      { name: '测试4' },
    ])
    return {
      layerDom,
      list,
    }
  },
  methods: {
    submit() {
      if (this.ruleForm) {
        this.ruleForm.validate((valid) => {
          if (valid) {
            let params = this.form
            if (this.layer.row) {
              this.updateForm(params)
            } else {
              this.addForm(params)
            }
          } else {
            return false;
          }
        });
      }
    },
    // 新增提交事件
    addForm(params: object) {
      add(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.layerDom && this.layerDom.close()
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
          this.layerDom && this.layerDom.close()
        })
    }
  }
})
</script>

<style lang="scss" scoped></style>