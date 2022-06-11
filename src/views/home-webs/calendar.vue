<template>
  <div>
    <h2>日历</h2>
    <el-calendar ref="calendar">
      <!-- 自定义头部 -->
      <template #header="{ date }">
        <span>{{ date }}</span>
        <el-button-group>
          <el-button size="small" @click="selectDate('prev-year')">上一年</el-button>
          <el-button size="small" @click="selectDate('prev-month')">上个月</el-button>
          <el-button size="small" @click="selectDate('today')">今天</el-button>
          <el-button size="small" @click="selectDate('next-month')">下个月</el-button>
          <el-button size="small" @click="selectDate('next-year')">下一年</el-button>
        </el-button-group>
      </template>
      <!-- 自定义日历cell -->
      <template #dateCell="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').pop() }}
          {{ data.isSelected ? '✔️' : '' }}
        </p>
      </template>
    </el-calendar>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
// const value = ref(new Date())
const calendar = ref()
const selectDate = (val: string) => {
  calendar.value.selectDate(val)
}
</script>
<style scoped lang='scss'>
.is-selected {
  color: #1989fa;
}
</style>

