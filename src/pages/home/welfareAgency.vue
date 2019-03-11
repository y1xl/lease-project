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
            <div class="btn text-c bgc" style="color: #8bd0db;" @click="signin" v-if="!issignin">立即签到</div>
            <div class="btn text-c bgc-grey" v-else>已签到</div>
          </div>
        </div>
      </div>
      
      <div class="flex-center jd_box">
        <img src="../../assets/yiqd.png" class="true_img" v-if="day >= 1">
        <div class="oneday text-c fc-blue" v-else>1</div>
        <div class="yxian_blue" v-if="day >= 1"></div>
        <div class="xian_blue" v-else></div>

        <img src="../../assets/yiqd.png" class="true_img" v-if="day >= 2">
        <div class="oneday text-c fc-blue" v-else>2</div>
        <div class="yxian_blue" v-if="day >= 2"></div>
        <div class="xian_blue" v-else></div>

        <img src="../../assets/yiqd.png" class="true_img" v-if="day >= 3">
        <div class="oneday text-c fc-blue" v-else>3</div>
        <div class="yxian_blue" v-if="day >= 3"></div>
        <div class="xian_blue" v-else></div>

        <img src="../../assets/yiqd.png" class="true_img" v-if="day >= 4">
        <div class="oneday text-c fc-blue" v-else>4</div>
        <div class="yxian_blue" v-if="day >= 4"></div>
        <div class="xian_blue" v-else></div>

        <img src="../../assets/yiqd.png" class="true_img" v-if="day >= 5">
        <div class="oneday text-c fc-blue" v-else>5</div>
        <div class="yxian_blue" v-if="day >= 5"></div>
        <div class="xian_blue" v-else></div>

        <img src="../../assets/yiqd.png" class="true_img" v-if="day >= 6">
        <div class="oneday text-c fc-blue" v-else>6</div>
        <div class="yxian_blue" v-if="day >= 6"></div>
        <div class="xian_blue" v-else></div>

        <img src="../../assets/yiqd.png" class="true_img" v-if="day >= 7">
        <div class="oneday text-c fc-blue" v-else>7</div>
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
            <!-- <div class="btn1 text-c">领奖励</div> -->
            <!-- <div class="btn2 text-c">已领取</div> -->
            <div class="btn3 text-c">去完成</div>
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
            <!-- <div class="btn2 text-c">已领取</div> -->
            <div class="btn3 text-c">去完成</div>
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
import { Toast,Dialog } from "vant";
export default {
  data(){
    return{
      bgimg: {
        background:
          "url(" + require("../../assets/fls_bg.png") + ") no-repeat top",
          backgroundSize: "100% 100%"
      },
      day: 0,
      issignin: false,
      signininfo:''
    }
  },
  mounted(){
    this.getsignin()
  },
  methods: {
    signin(){
      Toast.loading({ mask: true, message: "加载中..." });
      let time = Date.now()/1000+''
      let postData = this.$qs.stringify({ 
          users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          date_time: time.split('.')[0]
      });
      this.axios.post(this.API + "api/Order/UserSignin", postData)
      .then(res => {
          console.log(res.data, "signin");
          let resdata = res.data;
          if (resdata.code == 200) {
              Toast.clear();
              this.getsignin()
          } else {
              Toast.clear();
              Toast(resdata.message);
          }
      })
      .catch(error => {
          Toast.clear();
          Toast('网络出错')
      });
    },
    getsignin(){
      let postData = this.$qs.stringify({
          users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
      });
      this.axios.post(this.API + "api/Order/GetSigninData", postData)
      .then(res => {
          console.log(res.data, "GetSigninData");
          let resdata = res.data;
          if (resdata.code == 200) {
              this.signininfo = resdata.data;
              this.day = resdata.data.signin_days
              this.issignin = resdata.data.is_signin==0?false:resdata.data.is_signin==1?true:false
          } else {
              Toast(resdata.message);
          }
      })
      .catch(error => {
          Toast('网络出错')
      });
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