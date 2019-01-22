<template>
  <div class="bgc full">
    <div class="flex-jc-center">
      <div class="login_box">
        <div class="tip_title text-c">请输入验证码重置密码</div>
        <div class="text-c tel">13845687896</div>
        <div class="border-b">
          <input v-model="value" placeholder="请输入新密码" input-align="center" border="false">
        </div>
        <button class="btn text-c" @click="forget">确认并登陆</button>
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
    //下一步
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
.tip_title {
  padding-top: 70px;
  font-size: 20px;
}
.tel {
  color: #aeaeae;
  font-size: 12px;
  line-height: 40px;
}
input {
  width: 100%;
  text-align: center;
  line-height: 40px;
}
.btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: rgba(191, 191, 191, 1);
  border-radius: 20px;
  margin-top: 80px;
}
</style>
