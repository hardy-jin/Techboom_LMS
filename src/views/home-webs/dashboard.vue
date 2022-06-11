<template>
  <div>
  <TinymceEditor :inline="true" ref="editorRef" id="editor" v-model:value="content" class="TinyMCE"></TinymceEditor>
  </div>
</template>

<script lang="ts" setup>
import TinymceEditor from '@/components/TinymceEditor.vue';
  import { ref } from 'vue'
  const editorRef = ref()
  const contentTMp = ref("../../../../public/helloWorld.txt")
  const content = '<h1>Welcome to Tech Rocket!</h1>'
  // 或者 onMounted(() => editorRef.value.setContent(content.value))

  
</script>

<style scoped>
.TinyMCE{
  background-color: white;
  padding:5%;
  margin:0 auto;
  width: 60%;
  text-align: left;
  justify-items: center;
  align-items: center;
}
</style>