<template>

  <div class="courseContent">
    
    <div >
      <BriefCourseCard class="courseCard" :course="course"></BriefCourseCard>
      <CourseBulletin class="courseBulletin" :course="course"></CourseBulletin>
    </div>

    <div v-if="courseFile" class="courseMenu">
    <h1 style="margin-top: 0.1%; margin-left: 0.5%;">课程主页</h1>
      <div>
        <!-- <el-button
          type="primary"
          style="margin-bottom: 15px;border-radius: 3px;background: #274faee5;"
        >添加章</el-button> -->
      </div>
      <div>
        <!-- TODO:调整高度 -->
        <el-table
          :data="courseFile"
          style="width: 100%; height:auto; margin-bottom: 20px"
          row-key="id"
          highlight-current-row="false"
          default-expand-all
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
                class="link-type"
                :course="course"
              >
                <el-icon v-if="scope.row.type == 'text'" class="typeIcon">
                  <Reading />
                </el-icon>
                <el-icon v-if="scope.row.type == 'video'" class="typeIcon">
                  <VideoPlay />
                </el-icon>
                <el-icon v-if="scope.row.type == 'file'" class="typeIcon">
                  <Document />
                </el-icon>
                <el-icon v-if="scope.row.type == 'homework'" class="typeIcon">
                  <Edit />
                </el-icon>
                <span>{{ scope.row.file_name.split('.')[0] }}</span>
              </router-link>
            </template>
          </el-table-column>

          <!-- 操作列 -->
          <el-table-column width="80" align="right">
            <template #default="scope">
              <!-- 文件上传按钮 -->
              <!-- 
              参数说明：
              - 一次只能上传一个文件
              - 限制文件类型
              - 限制文件大小暂时为20M
              -->
              <el-upload
                class="uploadIcon"
                v-if="scope.row.isParent"
                action="string"
                accept=".doc, .docx, .ppt, .pptx, .pdf, .zip, .rar, .7z"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-upload="beforeUpload"
                :before-remove="beforeRemove"
                :show-file-list="false"
                :file-list="fileList"
                :http-request="httpRequest"
              >
                <el-icon class="typeIcon">
                  <UploadFilled />
                </el-icon>
              </el-upload>
            </template>
          </el-table-column>

          <el-table-column width="80" align="left">
            <template #default="scope">
              <!-- 其他操作按钮 -->
              <el-dropdown trigger="click">
                <span>
                  <el-icon class="icon" style="transform: rotate(90deg);">
                    <MoreFilled />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu v-if="scope.row.isParent">
                    <el-dropdown-item>
                      <el-icon class="moreIcon">
                        <Edit />
                      </el-icon>重命名
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-icon class="moreIcon">
                        <Delete />
                      </el-icon>删除
                    </el-dropdown-item>
                  </el-dropdown-menu>
                  <el-dropdown-menu v-else>
                    <el-dropdown-item>
                      <el-icon class="moreIcon">
                        <Sort />
                      </el-icon>移动
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-icon class="moreIcon">
                        <Delete />
                      </el-icon>删除
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import axios from 'axios';
import { uploadCourseWare } from '@/api/courseware';
import { defineComponent } from 'vue';
import {  ElMessageBox } from 'element-plus';
import BriefCourseCard from '@/components/BriefCourseCard.vue';
import CourseBulletin from '@/components/CourseBulletin.vue';
import type { UploadFile } from 'element-plus/es/components/upload/src/upload.type'

export default defineComponent({
  name: 'upload-courseware',
  components: {
    BriefCourseCard,
    CourseBulletin
  },
  data() {
    return {
      shouldUpload: false,
      acceptFile: false,
      fileSize: false,
      courseFile: null,
      fileList: [],
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
    /** 上传文件之前的钩子,上传前对文件的大小和类型进行判断 **/
    beforeUpload(file: UploadFile, fileList: UploadFile[]) {
      //console.log(file);
      let shouldUpload = false;
      const fileSuffix = file.name.split('.')[1];
      this.acceptFile =
        fileSuffix === 'doc' || fileSuffix === 'docx' ||
        fileSuffix === 'ppt' || fileSuffix === 'pptx' ||
        fileSuffix === 'pdf' || fileSuffix === 'zip' ||
        fileSuffix === 'rar' || fileSuffix === '7z';
      this.fileSize = file.size / (1024 * 1024) < 20;

      this.shouldUpload = this.acceptFile && this.fileSize

      return this.shouldUpload;
    },

    /** 覆盖默认的上传行为 **/
    httpRequest(params: any) {
      console.log('当前值：' + this.shouldUpload)
      if (this.shouldUpload) {

        let formData = new FormData();
        formData.append('upload', params.file);
        uploadCourseWare(formData)
          .then(response => {
            // console.log('返回信息:' + response.status);
            if (response.status == 200) {
              ElMessageBox.confirm(
                '文件上传成功!',
                {
                  confirmButtonText: 'OK',
                  type: 'success',
                  showCancelButton: false,
                  showClose: false
                }
              );
            }
          })
          .catch(error => {
            console.log('错误信息:' + error);
            ElMessageBox.confirm(
              '文件上传失败!',
              {
                confirmButtonText: 'OK',
                type: 'error',
                showCancelButton: false,
                showClose: false
              }
            );

          })
      }
    },

    /** 取消文件上传 **/
    beforeRemove(file: UploadFile, fileList: UploadFile[]) {
      if (!this.acceptFile) {
        return ElMessageBox.confirm(
          '文件类型错误，请重新上传文件！',
          {
            confirmButtonText: 'OK',
            type: 'error',
            showCancelButton: false,
            showClose: false
          }
        );
      }
      if (!this.fileSize) {
        return ElMessageBox.confirm(
          '文件大小超过20M，请重新上传文件!',
          {
            confirmButtonText: 'OK',
            type: 'error',
            showCancelButton: false,
            showClose: false
          }
        );
      }
    },

    handleRemove(file: UploadFile, fileList: UploadFile[]) {
      console.log(file, fileList)
    },

    handlePreview(file: UploadFile) {
      console.log(file)
    },

    rowStyle(row: any) {
      //console.log('row:' + JSON.stringify(row));
      if (row.row.isParent) {
        return { background: '#e4ecfa', color: '#202020' }
      } else {
        return { background: '#f5f7fb' }
      }
    }
  }
})

</script>



<style lang="scss" scoped>
.courseContent {
  display: grid;
  grid-template-columns: 1.2fr 4fr;
  grid-template-areas: 
  "courseCard courseMenu"
  "courseBulletin .";
  grid-gap: 3%;
}
.courseMenu :deep(.el-table thead) {
  grid-area: courseMenu;
  color: #e4ecfa;
  font-weight: 500;
  border: none;
}

.courseContent {
  grid-area: courseContent;
}

// TODO:fix bug： bulletin 高度需要固定
.courseBulletin {
  grid-area: courseBulletin;
  height: 60%;
}

.courseMenu :deep(.el-table, .el-table__expanded-cell) {
  font-size: medium;
  font-weight: bold;
  // /* 表格字体颜色 */
  // color: #516eb3 ;
  /* 表格边框颜色 */
  border: none;
  // height: 100%;
  border-radius: 5px;
}

//关闭鼠标悬停高亮
.courseMenu :deep(.el-table tbody tr:hover > td) {
  background: none;
}

.courseMenu :deep(.el-table th, .el-table tr, .el-table td) {
  border: none;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 0%;
}

.moreIcon {
  width: 25px;
  height: 25px;
}

.typeIcon {
  width: 25px;
  height: 25px;
  margin-right: 1%;
  margin-top: auto;
}

.uploadIcon {
  align-items: center;
}

.moreIcon {
  align-items: right;
}
</style>