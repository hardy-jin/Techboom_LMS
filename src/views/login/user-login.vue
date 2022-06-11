<template>
  <div class="logincontainer">
    <el-form class="loginForm" ref="loginForm" :inline="false">
      <el-form-item>
        <div class="loginTitle">Tech Rocket</div>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入账户" v-model="userid" type="userid" name="userid" style="margin-top: 10px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="password" type="password" name="password" style="margin-top: 10px;"></el-input>
      </el-form-item>
      <el-form-item>
            <el-button class="mybtn" type="primary" size="large" @click="login" style="margin-top: 20px;padding-bottom:12px; text-align: center;">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user-login',
  data() {
    return {
      userid: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios
        .post(
          '/api/login',
          {
            userid: this.userid,
            password: this.password
          }
        )
        .then(response => {
          console.log('response received: *' + response.status + '*\n' + response.data)

          if (response.data.ret_code != 0) {
            alert(response.data.ret_msg);
          } else {
            console.log('successfully login:', response.data);
            this.$router.push('/my-course')
          }
        })
        .catch((error: any) => {
          console.log("login error:", error);
        })
    }
  }
})
</script>

<style scoped lang='scss'>
.logincontainer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg,#202c63,#265ed1, );
  .loginForm {
    background-color: white;
    height: 300px;
    width: 400px;
    border-radius: 10px;
    padding: 20px 35px;
    padding-bottom: 0px;
    box-shadow: 0 0 25px #274FAE;
    .loginTitle {
      font-size: 24px;
      font-weight: 600;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      align-items: center;
    }
    .mybtn {
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
