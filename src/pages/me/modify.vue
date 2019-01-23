<template>
  <div>
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
.tx {
  padding: 10px 0;
  font-size: 12px;
}

.modify {
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