<template>
  <div class="bgc full">
    <div class="flex-jc-center">
      <div class="login_box">
        <div class="login_title text-c">密码登陆</div>
        <div class="border-b tel">
          <input v-model="value" placeholder="请输入手机号" input-align="center">
        </div>
        <div class="border-b password">
          <input v-model="value" placeholder="请输入密码" input-align="center">
        </div>
        <div class="text-r forget" @click="forget">忘记密码</div>
        <div class="btn text-c">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    //登陆
    forget() {
      this.$router.push({ path: "/ForgetPassword" });
    }
  }
};
</script>

<style scoped>
.login_box {
  width: 250px;
}
.login_title {
  padding-top: 30px;
  font-size: 20px;
  line-height: 80px;
}
input {
  width: 100%;
  text-align: center;
  line-height: 30px;
}
.forget {
  color: #aeaeae;
  line-height: 40px;
}
.btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: rgba(191, 191, 191, 1);
  border-radius: 20px;
  margin-top: 50px;
}
</style>
