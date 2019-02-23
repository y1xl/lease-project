<template>
  <div class="bgc bigbox">
    <div class="flex-jc-center login_box">
      <div class="login">
        <div class="tip_title text-c pdt50">Hi!</div>
        <div class="tip_title text-c">欢迎加入</div>
        <div class="border-b pdt50">
          <input v-model.trim="newPhone" placeholder="请输入手机号" type="number" maxlength="11">
        </div>
        <div class="text-r pw_login" @click="password">使用密码登陆</div>
        <button class="btn text-c" @click="toNext" :class="newPhone==''?'btn-grey':'act'">下一步</button>
        <div class="other">
          <div class="flex-center disan_box">
            <div class="line"></div>
            <div class="disan pd-lr-15">第三方账号登陆</div>
            <div class="line"></div>
          </div>
          <div class="flex-jc-around">
            <img src="../../assets/l_zhifubao.png" alt="图标" class="icon_img">
            <img src="../../assets/l_weixin.png" alt="图标" class="icon_img">
            <img src="../../assets/l_weibo.png" alt="图标" class="icon_img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
import { Toast } from "vant";
export default {
  data() {
    return {
      newPhone: ""
    };
  },
  methods: {
    //下一步
    toNext() {
      console.log(this.newPhone);

      if (this.newPhone == "") {
        return;
      }
      
      if (!(/^1\d{10}$/.test(this.newPhone))) {
        Toast("手机号格式不正确");
        return;
      }
      
      this.$router.push({ path: "/inputCode/" + this.newPhone });
    },
    //密码登录
    password() {
      this.$router.push({ path: "/passwordLogin" });
    }
  }
};
</script>

<style scoped>
.bigbox {
  min-height: 100vh;
}
.pdt50 {
  padding-top: 50px;
}
.login_box {
  width: 100%;
  height: 100%;
}
.login {
  width: 250px;
  height: 100%;
}
.tip_title {
  font-size: 20px;
  line-height: 40px;
}
input {
  width: 100%;
  text-align: center;
  line-height: 40px;
}
.pw_login,
.disan {
  color: #aeaeae;
  line-height: 40px;
}
.disan_box {
  margin: 100px 0 20px 0;
}

.btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  border-radius: 20px;
  margin-top: 50px;
}
.btn-grey {
  background: rgba(191, 191, 191, 1);
}
.act {
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
}
.line {
  width: 50px;
  height: 1px;
  border-bottom: 1px solid #aeaeae;
}
.icon_img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>
