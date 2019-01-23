<template>
  <div>
    <div class="box bgc">
      <div class="flex-jc-between border-b pd-15" @click="isshow = true">
        <div class="flexbox">
          <div class="left">开卡银行</div>
          <span :class="text=='请选择开卡银行'?'select':''">{{text}}</span>
        </div>
        <van-icon name="arrow" color="#aeaeae" size="18px"/>
      </div>
      <div class="flex-jc-between border-b pd-15">
        <div class="flexbox">
          <div class="left">卡号</div>

          <input placeholder="请输入银行卡号 ">
        </div>
      </div>
      <div class="flex-jc-between border-b pd-15">
        <div class="flexbox">
          <div class="left">姓名</div>
          <input placeholder="请输入姓名">
        </div>
      </div>
      <div class="flex-jc-between border-b pd-15">
        <div class="flexbox">
          <div class="left">身份证号</div>
          <input placeholder="请输入身份证号">
        </div>
      </div>
      <div class="flex-jc-between border-b pd-15">
        <div class="flexbox">
          <div class="left">手机号</div>
          <input placeholder="请输入手机号">
        </div>
      </div>
      <div class="flex-jc-between border-b pd-15 flex-align-items">
        <div class="flexbox">
          <div class="left">验证码</div>
          <input placeholder="请输入验证码" class="input_b">
        </div>
        <span class="yz" @click="countDown">{{content}}</span>
      </div>
    </div>
    <div class="flex-jc-center">
      <div class="btn text-c">保存</div>
    </div>


    <van-popup v-model="isshow" position="bottom" :close-on-click-overlay="false">
        <van-picker :columns="columns" show-toolbar @confirm="onConfirm" @cancel="isshow = false"/>
    </van-popup>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
      columns: ["中国农业银行", "中国工商银行", "测试", "测试", "测试"],
      text: "请选择开卡银行",
      content: "获取验证码",
      totalTime: 60, //倒计时
      canClick: true
    };
  },
  methods: {
    onConfirm(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.text = value;
      this.isshow = false;
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
.box {
  margin: 15px;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 16px 0px rgba(220, 221, 223, 0.19);
  border-radius: 10px;
}
.left {
  width: 65px;
}
.select {
  color: #cecece;
}
input::placeholder {
  color: #cecece;
}
.input_b {
  width: 100px;
}
.yz {
  color: #fff;
  background-color: #4ea9f9;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 12px;
}
.btn {
  width: 280px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
  margin-top: 70px;
}
.model {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.main {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>


