<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <div ref="dom" />
      <el-card class="box-card">
        <template #header>
          <p style="text-align: left;">
            v-model结果
            <el-button style="float: right; padding: 3px 0" type="text" @click="setData">初始赋值</el-button>
          </p>
        </template>
        <pre>{{ codeData }}</pre>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
// load basic codemirror
import codeMirror, { CodeMirror } from 'codemirror'
import 'codemirror/lib/codemirror.css'
// load model
import 'codemirror/mode/javascript/javascript'
// load codetip
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'
import 'codemirror/theme/3024-night.css'
export default defineComponent({
  setup() {
    let dom = ref(null)
    let codeData = ref('')
    let editor: any = ref(null)
    let timer = null
    let editorChange = false
    const options = {
      value: codeData.value,
      lineNumbers: true,
      mode: 'application/json',
      theme: '3024-night'
    }
    onMounted(() => {
      editor = codeMirror(dom.value, options)
      handleChange()
    })
    function handleChange() {
      editor.on('changes', (instance: CodeMirror, changes: Array<object>) => {
        editorChange = true
        timer = null
        codeData.value = editor.getValue()
        timer = setTimeout(() => {
          editorChange = false
        }, 50)
      })
    }
    // watch the codeData change but not from editor change
    watch(codeData, (newVal, oldVal) => {
      if (!editorChange) {
        setEditorData()
      }
    })
    // to show how to do a v-model demo
    function setData() {
      codeData.value = JSON.stringify({
        code: 200,
        msg: '请求成功',
        data: {
          list: [
            { id: 1, name: '张三' },
            { id: 2, name: '李四' }
          ]
        }
      }, null, 2)
    }
    // set editor data anytime when you use this function
    function setEditorData() {
      editor.getDoc().setValue(codeData.value)
    }
    return {
      dom,
      codeData,
      setData
    }
  }
})
</script>

<style lang="scss" scoped>
  * {
    text-align: left;
  }
  #codeEditor {
    text-align: left;
  }
  pre{
    text-align: left;
  }
</style>