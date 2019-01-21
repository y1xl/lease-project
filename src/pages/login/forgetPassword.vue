<template>
  <div class="bgc full">
    <div class="flex-jc-center">
      <div class="forget_box">
        <div class="tip_title text-c">请输入验证码重置密码</div>
        <div class="text-c tel">13845687896</div>
        <form>
          <div class="border input_box flexbox">
            <div class="border_right">
              <input type="text" maxlength="1">
            </div>
            <div class="border_right">
              <input type="text" maxlength="1">
            </div>
            <div class="border_right">
              <input type="text" maxlength="1">
            </div>
            <div class="border_right">
              <input type="text" maxlength="1">
            </div>
            <div class="border_right">
              <input type="text" maxlength="1">
            </div>
            <div>
              <input type="text" maxlength="1">
            </div>
          </div>
          <button class="btn text-c" @click="toNext" type="submit">下一步</button>
        </form>
        <div class="text-c resent">重新发送</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //下一步
    toNext() {
      this.$router.push({ path: "/ResetPassword" });
    }
  }
};
</script>

<style scoped>
.forget_box {
  width: 250px;
}
.tip_title {
  padding-top: 70px;
  font-size: 20px;
}
.tel,
.resent {
  color: #aeaeae;
  font-size: 12px;
  line-height: 40px;
}
.input_box {
  height: 40px;
  margin-top: 30px;
}

.input_box input {
  text-align: center;
  width: 38px;
  height: 37px;
}
.border_right {
  width: 40px;
  height: 40px;
  border-right: 1px solid #b7b7b7;
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
