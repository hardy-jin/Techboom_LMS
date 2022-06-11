<template>
  <el-card class="box-card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>待办</span>
        <!-- <el-button class="button" type="text">Operation button</el-button> -->
      </div>
    </template>
    <div class="text item">
      <div>1. 信息安全导论 实验1</div>
      <div>2. 概率论第二章 课后练习</div>
      <div>3. 计算机网络 课程视频第四章</div>
      <div>4. python程序设计 课后作业2.1</div>
    </div>
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

.item {
  margin-bottom: 18px;
  line-height: 200%;
}

.box-card {
  width: auto;
  border-radius: 10px;
}
</style>