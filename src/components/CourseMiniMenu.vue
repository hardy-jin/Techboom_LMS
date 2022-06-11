<template>
  <el-card class="box-card" shadow="hover">
    <router-link :to="{ name: 'course-content', params: { courseId: '5bbdd191cc194f2aa87a9c92' } }">
      <el-button class="returnButton" type="primary">返回主页</el-button>
      </router-link>
    <el-table
      :data="courseFile"
      style="width: 100%; height:auto; margin-top: 0.5%;margin-bottom: 0.5%;border-radius: 8px;"
      row-key="id"
      highlight-current-row="false"
      :default-expand-all="false"
      :header-cell-style="{ opacity: 1, background: 'linear-gradient(180deg, #274FAE 95%, #e4ecfa)', color: 'white' }"
      :row-style="rowStyle"
    >
      <!-- 课程目录 -->
      <el-table-column label="课程目录" style="width:90%">
        <template #default="scope">
          <span v-if="scope.row.isParent">{{ scope.row.file_name }}</span>

          <router-link
            v-else
            :to="'/course-detail/' + scope.row.type + '/' + scope.row.file_id"
            class="link-type-small"
            :course="course"
          >
            <span>{{ scope.row.file_name.split('.')[0] }}</span>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: 'upload-courseware',
  data() {
    return {
      shouldUpload: false,
      acceptFile: false,
      fileSize: false,
      courseFile: null,
      course: {} as any,
    }
  },
  created() {
    // mock data
    axios.get('/getCourseMenu')
      .then(response => {
        this.courseFile = response.data.courseMenu;
      })
      .catch(error => {
        console.log(error);
      })
    axios.get('/getCourseById')
      .then(response => {
        this.course = response.data.course;
        console.log('coures name:' + this.course.name)
        // console.log('response:' + response)
        console.log('getCourseById 返回信息:' + JSON.stringify(response.data));
        // console.log('getCourseById 返回course:' + response.data.course.id);
      })
  },
  methods: {
    rowStyle(row: any) {
      //console.log('row:' + JSON.stringify(row));
      if (row.row.isParent) {
        return { background: '#e4ecfa', color: '#202020' }
      } else {
        return { background: '#ffff' }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.returnButton {
    background-color: #274fae;
    margin-bottom: 1%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
}

.text {
  font-size: 14px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  line-height: 200%;
}

.box-card {
  margin-top: 8%;
  margin-bottom: 8%;
  width: auto;
  height: auto;
  min-height:fit-content;
  border-radius: 10px;
  border: none;
}
</style>