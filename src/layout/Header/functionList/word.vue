<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <i class="sfont system-wenzi"></i>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(locale, key) in $i18n.messages"
          :key="`locale-${locale.message.language}`"
          :command="key"
          :disabled="name === key"
        >
          {{ locale.message.language }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { changeTitle } from '@/utils/system/title'
export default defineComponent({
  setup() {
    const { locale, t } = useI18n()
    const route = useRoute()
    const handleCommand = (command) => {
      locale.value = command
      changeTitle(route.meta.title)
    }
    return {
      handleCommand,
      name: locale
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>