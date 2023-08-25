<template>
  <el-dropdown @command="handleCommand" size="medium">
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
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { changeTitle } from '@/utils/system/title'
export default defineComponent({
  setup() {
    const { locale, t } = useI18n()
    const route = useRoute()
    const store = useStore()
    // 国际化语言切换
    const handleCommand = (command: string) => {
      locale.value = command
      store.commit('app/stateChange', { name: 'lang', value: command })
      changeTitle(route.meta.title)
      document.querySelector('html')!.setAttribute('lang', command)
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