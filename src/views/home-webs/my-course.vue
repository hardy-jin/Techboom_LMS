<template>
<h1 style="margin-top: 0.1%; margin-left: 0.5%;">我的课程</h1>
  <div class="courses">
    <div class="courseArea">
      <CourseCard v-for="course in courses" :key="course._id" :course="course" class="courseCard"></CourseCard>
    </div>
    <div class="rightSideArea">
      <TodoCard></TodoCard>
      <InfoCard></InfoCard>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, ref } from 'vue'
import CourseCard from '@/components/CourseCard.vue'
import TodoCard from '@/components/InfoCard.vue'
import InfoCard from '@/components/TodoCard.vue'
import CourseService from '@/services/CourseService'

export default defineComponent({
  name: 'my-course',
  components: {
    CourseCard,
    InfoCard,
    TodoCard,
  },
  data() {
    return {
      courses: {} as any,
    }
  },
  // 服务器
  // created() {
  //   CourseService.getCourses()
  //     .then(response => {
  //       //这里后台为什么需要两层status和data？
  //       let responseBody = response.data
  //       console.log('response received: *' + responseBody.status + '*\n' + responseBody.data)

  //       //todo: change later
  //       if (responseBody.status != 200) {
  //         alert('Error: cannot load courses (inner status code is not 200)');
  //       } else {
  //         this.courses = responseBody.data;
  //         console.log('successfully fetched courses:', this.courses);
  //       }
  //     })
  //     .catch(error => {
  //       console.log('Error occurred: ', error)
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       if (error.response.status == 401) {
  //         alert("请登录后再试")
  //         this.$router.push('/login')
  //       }
  //     })
  // }

  //mock data 
  created() {
      axios.get('/getCourses')
      .then(response => {
        this.courses = response.data.courses;
        // console.log('coures name:' + this.courses)
        // // console.log('response:' + response)
        // console.log('getCourseById 返回信息:' + JSON.stringify(response.data));
        // console.log('getCourseById 返回course:' + response.data.course.id);
      })
  }
})
</script>

<style lang="scss" scoped>
.courses {
  display: grid;
  grid-template-columns: 4fr 1.2fr;
  grid-template-areas: 
    "courseArea rightSideArea";
  grid-gap: 5%;
}

.courseArea {
  grid-area: courseArea;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}

.courseCard {
  display: grid;
}

.rightSideArea {
  grid-area: rightSideArea;
}
</style>
