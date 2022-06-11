<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>课程公告</span>
        <!-- <el-button class="button" type="text">Operation button</el-button> -->
      </div>
    </template>
    <div class="text item">本课程，即第一部分的内容,将涉及计算模型与信息表示、软硬件系统组成及工作原理、网络技术及应用、OFFICE基本操作等多个知识模块。</div>
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
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
  margin-bottom: 5%;
  width: auto;
  height: 30%;
  border-radius: 10px;
  border: none;
}
</style>