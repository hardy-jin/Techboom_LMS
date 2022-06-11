<template>
  <el-card :body-style="{ padding: '0px' }" class="box-card" shadow="hover">
    <img :src='course.img' class="image" />
    <div style="padding: 14px">
      <div class="course-name">
        <span>{{ course.name }}</span>
      </div>
      <div class="bottom">
        <time class="time">{{ course.description }}</time>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
defineProps(['course'])
</script>

<style scoped>
.box-card {
  width: auto;
  height: auto;
  border-radius: 10px;
  border:none;
}

.course-name {
  margin-top: 5px;
  font-size: 16px;
  align-items: left;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 30px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
