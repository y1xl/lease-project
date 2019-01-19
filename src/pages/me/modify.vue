<template>
  <div>
    <div class="text-c border-b top bgc">
      <div class="fh_img" @click="routerback">
        <img src="../../assets/tab/fhimg.png">
      </div>修改绑定手机号
    </div>

    <div class="modify text-c">
      <div class="tel_num">您当前绑定手机号138xxxx4586</div>
      <div class="flex-jc-center">
        <div class="btn text-c" @click="countDown">{{content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "获取验证码",
      totalTime: 60, //倒计时
      canClick: true
    };
  },
  methods: {
    routerback() {
      this.$router.back(-1);
    },
    //倒计时
    countDown() {
      if (!this.canClick) return;
      this.canClick = false;
      this.content = this.totalTime + "s后重新发送";
      let clock = window.setInterval(() => {
        this.totalTime--;
        this.content = this.totalTime + "s后重新发送";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.content = "重新发送验证码";
          this.totalTime = 60;
          this.canClick = true;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.top {
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  font-weight: 500;
}
.fh_img {
  width: 13px;
  height: 16px;
  position: absolute;
  left: 10px;
  top: 2px;
}
.fh_img img {
  width: 13px;
  height: 16px;
}
.tx {
  padding: 10px 0;
  font-size: 12px;
}

.modify {
  margin-top: 44px;
  width: 100%;
}
.tel_num {
  font-size: 14px;
  line-height: 100px;
}
.btn {
  width: 298px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
</style>