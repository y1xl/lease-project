<template>
  <div>
    <div class="bgc flex-jc-center">
      <div class="login_box">
        <div class="tip_title text-c" style=" padding-top: 50px;">Hi!</div>
        <div class="tip_title text-c">欢迎加入</div>

        <div class="border-b">
          <van-field v-model="value" placeholder="请输入手机号" input-align="center" border="false"/>
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
  font-size: 20px;
  line-height: 40px;
}
.tel {
  color: #aeaeae;
  font-size: 12px;
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
