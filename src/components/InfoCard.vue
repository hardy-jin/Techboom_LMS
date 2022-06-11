<template>
  <el-card class="box-card" shadow="always">
    <template #header>
      <div class="card-header">
        <span>最近通知</span>
        <!-- <el-button class="button" type="text">Operation button</el-button> -->
      </div>
    </template>
    <div class="text item">
      <div>第一周 时间安排</div>
      <div>第一周 作业提交</div>
      <div>第二周 时间安排</div>
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
  margin-bottom: 5%;
  width: auto;
  height: auto;
  border-radius: 10px;
}
</style>