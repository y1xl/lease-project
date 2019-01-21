<template>
  <div>
    <div class="bgc flex-jc-center">
      <div class="login_box">
        <div class="login_title text-c">密码登陆</div>
        <div class="border-b tel">
          <van-field v-model="value" placeholder="请输入手机号" input-align="center" border="false"/>
        </div>
        <div class="border-b password">
          <van-field v-model="value" placeholder="请输入密码" input-align="center" border="false"/>
        </div>
        <div>忘记密码</div>
        <div>登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login_title {
  font-size: 20px;
  line-height: 70px;
}
</style>
