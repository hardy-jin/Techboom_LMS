<template>
  <div class="container">
    <div v-loading="loading"
    element-loading-text="加载中..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(0, 0, 0, 0.8)" class="wrapper">
      <iframe src="//player.bilibili.com/player.html?aid=712020469&bvid=BV1wD4y1o7AS&cid=234725733&page=1" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true" class="video-frame" :onload="onVideoFrameLoaded"> </iframe>
    </div>
	</div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
// const baseUrl = ref("../../src/static/pdfjs/web/viewer.html?file=");
// const fileUrl = ref("../../../../public/Vue-3-Cheat-Sheet.pdf");
// const previewUrl = computed(() => {
//   return baseUrl.value + fileUrl.value
// });
const loading = ref(true)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
function onVideoFrameLoaded() {
  loading.value = false
}
</script>
<style scoped lang='scss'>
.video-frame {
  height: 100%;
  width: 100%;
  position: absolute;
}

.wrapper {
  position: relative;
  padding-top: 10px;
  padding-bottom: 56.25%;
  height: 0;
}

.container {
  width: 85%;
}
</style>


