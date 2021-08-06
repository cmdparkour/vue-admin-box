<template>
  <div class="ok-loading">
    <div class="ball-loader"> <span></span><span></span><span></span><span></span> </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'routerReload',
  setup() {}
});
</script>

<style lang="scss">
.ok-loading {
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  var(--system-page-background);
  margin: 15px;
}
.ok-loading.close {
  animation: close 1s;
  -webkit-animation: close 1s;
  animation-fill-mode: forwards;
}
.ball-loader {

}
.ball-loader > span,
.signal-loader > span {
  background-color: var(--system-primary-color);
  display: inline-block;
}

.ball-loader > span:nth-child(1),
.ball-loader.sm > span:nth-child(1),
.signal-loader > span:nth-child(1),
.signal-loader.sm > span:nth-child(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.ball-loader > span:nth-child(2),
.ball-loader.sm > span:nth-child(2),
.signal-loader > span:nth-child(2),
.signal-loader.sm > span:nth-child(2) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.ball-loader > span:nth-child(3),
.ball-loader.sm > span:nth-child(3),
.signal-loader > span:nth-child(3),
.signal-loader.sm > span:nth-child(3) {
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
.ball-loader > span:nth-child(4),
.ball-loader.sm > span:nth-child(4),
.signal-loader > span:nth-child(4),
.signal-loader.sm > span:nth-child(4) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.ball-loader > span {
  width: 20px;
  height: 20px;
  margin: 0 3px;
  border-radius: 50%;
  transform: scale(0);
  -ms-transform: scale(0);
  -webkit-transform: scale(0);
  animation: ball-load 1s ease-in-out infinite;
  -webkit-animation: 1s ball-load ease-in-out infinite;
}
@-webkit-keyframes ball-load {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
}
@keyframes ball-load {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
}
@keyframes close {
  0% {
    opacity: 1;
    /*display: block;*/
  }
  100% {
    opacity: 0;
    /*display: none;*/
  }
}
</style>