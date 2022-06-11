<template>
  <el-card :body-style="{ padding: '0px' }" class="box-card" shadow="always">
    <router-link
      :to="{ name: 'course-content', params: { courseId: course._id, courseBasicInfo: course.description } }"
    >
      <!-- v-bind img -->
      <img :src='course.img' class="image" />
    </router-link>
    <div style="padding: 14px">
      <div class="course-name">
        <span>{{ course.name }}</span>
      </div>
      <div class="bottom">
        <time class="time">{{ course.name }}</time>
        <router-link
          :to="{ name: 'course-content', params: { courseId: course._id, courseBasicInfo: course.description } }"
        >
          <el-button type="text" class="button">详情</el-button>
        </router-link>
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
  background-color: rgb(251, 252, 255);
  /* width: 250px; */
  width: auto;
  height: auto;
  color: #000000;
  /* display: flex; */
  /* margin: 20px; */
  cursor: pointer;
  /* border: 1px solid #d4d5d6e8; */
  transition: transform 0.2s;
  /* box-shadow: inset 0 0 0 1px rgba(11, 23, 48, .05), 0 .25rem .5rem rgba(32, 45, 74, .1); */
  box-shadow: 0 0 12px rgba(183, 187, 190, 0.699);
}
.box-card:hover {
  transform: scale(1.01);
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
