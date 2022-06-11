<template>
  <div>
    <!-- 上传 -->
    <h2>上传视频</h2>
    <el-upload
      class="upload"
      drag
      show-file-list
      :action="uploadUrl"
      multiple
    >
      <el-icon class="el-icon--upload">
        <upload-filled />
      </el-icon>
      <div class="el-upload__text">
        拖动文件到此处 或
        <em>点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">视频文件要求小于 500kb</div>
      </template>
    </el-upload>
    <!-- 表格 -->
    <h2>视频列表</h2>
    <el-table :data="filterTableData" style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <p>描述: {{ props.row.description }}</p>
        <p>链接: {{ props.row.url }}</p>
      </template>
    </el-table-column>

    <el-table-column label="日期" prop="date" />
    <el-table-column label="标题" prop="title" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="搜索……" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>


  </div>
</template>
<script setup lang='ts'>
import { useRoute } from 'vue-router';
import { ref, reactive, computed, onMounted } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { getVideoList } from '@/api/courseware'
const route = useRoute();
const uploadUrl = computed(() => {
  let url = ""
  // url = "http://lms.techbooming.com/courseware/file/" + route.params.courseId
  console.log("upload file to ", url)
  return url
})

// onMounted(() => {
//   // getVideoList().then(res => {
//   //   console.log("get video list: ", res.data)
//   // })
//   tableData =  getVideoList()
  
// })

interface Video {
  date: string
  title: string
  description: string
  url: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.title.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: Video) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: Video) => {
  console.log(index, row)
}

let tableData: Video[] = getVideoList()

</script>
<style scoped lang='scss'>
</style>