<template>
  <div>
    <div class="bgc">
      <div class="qd_b" :style="bgimg">
        <div class="text-c qd_box">
          <div class="flex-jc-center">
            <div class="bor"></div>
            <div class="lxqd">已连续签到</div>
            <div class="bor"></div>
          </div>

          <div class="time">
            <span class="day">{{day}}</span>
            <span>天</span>
          </div>
          <div class="flex-jc-center">
            <div class="btn text-c bgc" style="color: #8bd0db;" @click="signin" v-if="issignin">立即签到</div>
            <div class="btn text-c bgc-grey" v-else>已签到</div>
          </div>
        </div>
      </div>
      <div class="flex-center jd_box">
        <img src="../../assets/yiqd.png" class="true_img">
        <!-- <div class="oneday text-c fc-blue">1</div> -->
        <div class="yxian_blue"></div>
        <!-- <div class="xian_blue"></div> -->
        <!-- <div class="oneday text-c fc-blue">2</div> -->
        <img src="../../assets/yiqd.png" class="true_img">

        <div class="xian_blue"></div>
        <div class="oneday text-c fc-blue">3</div>
        <div class="xian_blue"></div>
        <div class="oneday text-c fc-blue">4</div>
        <div class="xian_blue"></div>
        <div class="oneday text-c fc-blue">5</div>
        <div class="xian_blue"></div>
        <div class="oneday text-c fc-blue">6</div>
        <div class="xian_blue"></div>
        <div class="oneday text-c fc-blue">7</div>
      </div>
      <div class="qd_img text-c">
        <img src="../../assets/qd.png">
      </div>
      <div class="every_work">每日任务</div>
      <div class="flex-jc-center">
        <div class="word flex-jc-between flex-align-items">
          <div class="flex-align-items">
            <img src="../../assets/tupian.png" class="tupian">
            晒图分享
          </div>
          <div>
            <div class="btn1 text-c">领奖励</div>
            <!-- <div class="btn2 text-c">已领取</div> -->
            <!-- <div class="btn3 text-c">去完成</div> -->
          </div>
        </div>
      </div>

      <div class="flex-jc-center">
        <div class="word flex-jc-between flex-align-items">
          <div class="flex-align-items">
            <img src="../../assets/pinglun.png" class="pinglun">
            优质评论
          </div>
          <div>
            <!-- <div class="btn1 text-c">领奖励</div> -->
            <div class="btn2 text-c">已领取</div>
            <!-- <div class="btn3 text-c">去完成</div> -->
          </div>
        </div>
      </div>

      <div class="flex-jc-center">
        <div class="word flex-jc-between flex-align-items">
          <div class="flex-align-items">
            <img src="../../assets/wenjuan.png" class="wenjuan">
            问卷调查
          </div>
          <div>
            <!-- <div class="btn1 text-c">领奖励</div> -->
            <!-- <div class="btn2 text-c">已领取</div> -->
            <div class="btn3 text-c">去完成</div>
          </div>
        </div>
      </div>

      <div class="flex-jc-center">
        <div class="word flex-jc-between flex-align-items">
          <div class="flex-align-items">
            <img src="../../assets/haoyou_.png" class="haoyou_">
            唤醒好友
          </div>
          <div>
            <!-- <div class="btn1 text-c">领奖励</div> -->
            <!-- <div class="btn2 text-c">已领取</div> -->
            <div class="btn3 text-c">去完成</div>
          </div>
        </div>
      </div>

      <div class="flex-jc-center">
        <div class="word flex-jc-between flex-align-items">
          <div class="flex-align-items">
            <img src="../../assets/xiangji.png" class="xiangji">
            租赁商品
          </div>
          <div>
            <!-- <div class="btn1 text-c">领奖励</div> -->
            <!-- <div class="btn2 text-c">已领取</div> -->
            <div class="btn3 text-c">去完成</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bgimg: {
        background:
          "url(" + require("../../assets/fls_bg.png") + ") no-repeat top",
          backgroundSize: "100% 100%"
      },
      day: 0,
      issignin: true
    }
  },
  methods: {
    signin(){
      this.day = this.day+1
      this.issignin = false
    }
  }
};
</script>



<style scoped>
.qd_b {
  align-items: center;
  width: 100%;
  height: 230px;
}
.qd_box {
  padding-top: 50px;
  color: #fff;
}

.bor {
  width: 14px;
  height: 1px;
  background: #fff;
}

.lxqd {
  position: relative;
  bottom: 9px;
  padding: 0 7px;
}
.time {
  padding-bottom: 16px;
}
.day {
  font-size: 45px;
}

.btn {
  width: 130px;
  height: 37px;
  line-height: 37px;
  border-radius: 20px;
  
  font-size: 16px;
}
.jd_box {
  margin: 15px;
}
.true_img {
  width: 25px;
  height: 25px;
}
.oneday {
  width: 25px;
  height: 25px;
  line-height: 25px;
  background: #bfe8ff;
  font-size: 12px;
  border-radius: 50%;
}
.xian_blue {
  width: 20px;
  height: 2px;
  background: #bfe8ff;
}
.yxian_blue {
  width: 20px;
  height: 2px;
  background: #54b1fa;
}
.qd_img > img {
  width: 240px;
  height: 60px;
}
.every_work {
  margin-top: 15px;
  padding-left: 12px;
}
.word {
  width: 94%;
  height: 45px;
  border-bottom: #f7f7f7 1px solid;
}
.haoyou_ {
  width: 20px;
  height: 16px;
  margin-right: 12px;
}
.tupian {
  width: 20px;
  height: 16px;
  margin-right: 12px;
}
.pinglun {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.wenjuan {
  width: 16px;
  height: 19px;
  margin-right: 13px;
}

.xiangji {
  width: 20px;
  height: 16px;
  margin-right: 12px;
}
.btn1 {
  width: 60px;
  height: 24px;
  line-height: 24px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 13px;
  color: #fff;
}
.btn2 {
  width: 60px;
  height: 24px;
  line-height: 24px;
  background: #d2d2d2;
  border-radius: 13px;
  color: #fff;
}
.btn3 {
  width: 60px;
  height: 24px;
  line-height: 24px;
  border: #4ea9f9 solid 1px;
  border-radius: 13px;
  color: #4ea9f9;
}
</style>