<template>
  <component :is="type" v-bind="linkProps(to)" @click="hideMenu" >
    <slot>
    </slot>
  </component>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from "vuex";
export default defineComponent({
  name: 'appLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const isCollapse = computed(() => store.state.app.isCollapse);
    const linkProps = (to) => {
     return {
       to: to
     } 
    }
    const hideMenu = () => {
      if (document.body.clientWidth <= 1000 && !isCollapse.value) {
        store.commit("app/isCollapseChange", true);
      }
    };
    return {
      type: "router-link",
      linkProps,
      hideMenu
    }
  }
})
</script>
<style lang="">
  
</style>