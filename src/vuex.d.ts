// vuex.d.ts
import {Store} from 'vuex'
import {RootState} from "@/store";


declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State extends RootState{}

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
