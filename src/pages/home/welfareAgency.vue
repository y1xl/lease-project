<template>
  <div class="bgc">
    <div class="qd_b">
      <div class="text-c top">
        <div class="fh_img" @click="routerback">
          <img src="../../assets/tab/writefhimg.png">
        </div>福利社
      </div>
      <div class="text-c qd_box">
        <div class="flex-jc-center">
          <div class="bor"></div>
          <div class="lxqd">已连续签到</div>
          <div class="bor"></div>
        </div>

        <div class="time">
          <span class="day">4</span>
          <span>天</span>
        </div>
        <div class="flex-jc-center">
          <div class="btn text-c">立即签到</div>
        </div>
      </div>
    </div>
    <!-- <div class="flexbox qdjl">
      <div class="yiqd_box">
        <img class="yiqd" src="../../assets/tab/yiqd.png">
      </div>
      <div>
        <img class="xixian" src="../../assets/tab/lan.png">
      </div>
      <div class="yiqd_box1">
        <img class="yiqd" src="../../assets/tab/yiqd.png">
      </div>
      <div>
        <img class="xixian" src="../../assets/tab/lan.png">
      </div>
      <div class="yiqd_box2">
        <img class="yiqd" src="../../assets/tab/yiqd.png">
      </div>
      <div>
        <img class="xixian" src="../../assets/tab/lan.png">
      </div>
      <div class="yiqd_box3">
        <img class="yiqd" src="../../assets/tab/yiqd.png">
      </div>
      <div>
        <img class="xixian" src="../../assets/tab/lan.png">
      </div>
      <div class="yiqd_box4">
        <img class="yiqd" src="../../assets/tab/yiqd.png">
      </div>
      <div>
        <img class="xixian" src="../../assets/tab/lan.png">
      </div>
      <div class="yiqd_box5">
        <img class="yiqd" src="../../assets/tab/yiqd.png">
      </div>
      <div>
        <img class="xixian" src="../../assets/tab/lan.png">
      </div>
      <div class="yiqd_box6">
        <img class="yiqd" src="../../assets/tab/yiqd.png">
      </div>
    </div>-->
    <div class="qd_img text-c">
      <img src="../../assets/tab/qd.png">
    </div>
    <div class="every_work">每日任务</div>
    <div class="flex-jc-center">
      <div class="word flex-jc-between flex-align-items">
        <div class="flex-align-items">
          <img src="../../assets/tab/tupian.png" class="tupian">
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
          <img src="../../assets/tab/pinglun.png" class="pinglun">
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
          <img src="../../assets/tab/wenjuan.png" class="wenjuan">
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
          <img src="../../assets/tab/haoyou_.png" class="haoyou_">
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
          <img src="../../assets/tab/xiangji.png" class="xiangji">
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
</template>

<script>
export default {
  methods: {
    routerback() {
      this.$router.back(-1);
    }
  }
};
</script>



<style scoped>
.top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  color: #fff;
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
.qd_b {
  align-items: center;
  width: 100%;
  height: 260px;
  background: url(../../assets/tab/fls_bg.png) no-repeat;
  background-size: 100% 100%;
}
.qd_box {
  padding-top: 90px;
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
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  color: #8bd0db;
  font-size: 16px;
}
.qdjl {
  width: 100%;
  height: 100px;
  background: #fff;
  margin-top: 20px;
  position: relative;
}
.yiqd {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 10px;
}
.xixian {
  width: 22px;
  height: 1.5px;
  position: absolute;
  top: 10px;
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