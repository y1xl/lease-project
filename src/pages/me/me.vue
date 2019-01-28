<template>
  <div>
    <div class="flex-jc-between manber_b" @click="myInformat" :style="bgimg">
      <div class="flex-align-items flex_box">
        <div class="head_img">
          <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg">
        </div>
        <div class>
          <div class="name">DORO_THY</div>
          <div class="manber">普通会员</div>
        </div>
      </div>
      <img class="hg" src="../../assets/hg.png">
    </div>
    <div class="mebox bgc">
      <van-cell is-link center to="/certification">
        <template slot="icon">
          <img src="../../assets/myrz.png" alt="图标" class="left_img">
        </template>
        <template slot="title">
          <div>免押认证</div>
        </template>
      </van-cell>

      <van-cell is-link center to="/Integral">
        <template slot="icon">
          <img src="../../assets/jf.png" alt="图标" class="left_img">
        </template>
        <template slot="title">
          <div>我的积分</div>
        </template>
      </van-cell>

      <van-cell is-link center to="Trusteeship">
        <template slot="icon">
          <img src="../../assets/tg.png" alt="图标" class="left_img">
        </template>
        <template slot="title">
          <div>我的托管</div>
        </template>
      </van-cell>

      <van-cell is-link center to="/cart">
        <template slot="icon">
          <img src="../../assets/gwc.png" alt="图标" class="left_img">
        </template>
        <template slot="title">
          <div>购物车</div>
        </template>
      </van-cell>

      <van-cell is-link center to="/MyBalance">
        <template slot="icon">
          <img src="../../assets/ye.png" alt="图标" class="left_img">
        </template>
        <template slot="title">
          <div>账户余额</div>
        </template>
      </van-cell>
      <div class="coupon">
        <van-cell is-link center to="/Coupon">
          <template slot="icon">
            <img src="../../assets/yhq.png" alt="图标" class="left_img">
          </template>
          <template slot="title">
            <div>优惠券</div>
          </template>
        </van-cell>
      </div>
      <div class="hcenter border-b">
        <van-cell is-link center to="/HelpCenter">
          <template slot="icon">
            <img src="../../assets/bz.png" alt="图标" class="left_img">
          </template>
          <template slot="title">
            <div>帮助中心</div>
          </template>
        </van-cell>
      </div>
      <van-cell is-link center to="Setup">
        <template slot="icon">
          <img src="../../assets/sz.png" alt="图标" class="left_img">
        </template>
        <template slot="title">
          <div>设置</div>
        </template>
      </van-cell>
    </div>
    <div class="height"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgimg: {
        background:
          "url(" + require("../../assets/me_bg.png") + ") no-repeat top",
        backgroundSize: "100% 100%"
      }
    };
  },
  methods: {
    //我的资料
    myInformat() {
      this.$router.push({ path: "/MyInformation" });
    }
  }
};
</script>


<style scoped>
.height {
  height: 50px;
}
.manber_b {
  align-items: center;
  width: 100%;
  height: 180px;
  /* background: url(../../assets/me_bg.png) no-repeat;
  background-size: 100% 100%; */
}
.head_img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-left: 14px;
  overflow: hidden;
}
.head_img > img {
  width: 60px;
  height: 60px;
}
.name {
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  margin-left: 14px;
}
.manber {
  font-size: 12px;
  color: #fff;
  margin-left: 14px;
}
.flex_box {
  margin-bottom: 10px;
}
.hg {
  margin: 0 15px 15px 0;
  width: 20px;
  height: 17px;
}
.mebox {
  margin: -50px 15px 15px 15px;
  overflow: hidden;
  border-radius: 10px;
}
.coupon {
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
}
.hcenter {
  padding-top: 15px;
}
.left_img {
  width: 17px;
  height: 17px;
  padding-right: 10px;
}

.right_img {
  padding-right: 10px;
  width: 5px;
  height: 10px;
}

.l_txt {
  margin-left: 10px;
  font-size: 14px;
}
</style>