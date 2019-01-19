<template>
  <div class="bgc">
    <div class="flex-jc-between manber_b" @click="myInformat">
      <div class="flex-align-items flex_box">
        <div class="head_img">
          <img src="../../assets/tab/mys.png">
        </div>
        <div class>
          <div class="name">DORO_THY</div>
          <div class="manber">普通会员</div>
        </div>
      </div>
      <img class="hg" src="../../assets/tab/hg.png">
    </div>
    <div class="mebox">
      <div class="position me">
        <div style="padding-top: 10px;" class="myzf">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/myrz.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>免押认证</div>
            </template>
          </van-cell>
        </div>

        <van-cell is-link center to>
          <template slot="icon">
            <img src="../../assets/tab/jf.png" alt="图标" class="left_img">
          </template>
          <template slot="title">
            <div>我的积分</div>
          </template>
        </van-cell>

        <div class="hang">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/tg.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>我的托管</div>
            </template>
          </van-cell>
        </div>

        <van-cell is-link center to>
          <template slot="icon">
            <img src="../../assets/tab/gwc.png" alt="图标" class="left_img">
          </template>
          <template slot="title">
            <div>购物车</div>
          </template>
        </van-cell>

        <van-cell is-link center to>
          <template slot="icon">
            <img src="../../assets/tab/ye.png" alt="图标" class="left_img">
          </template>
          <template slot="title">
            <div>账户余额</div>
          </template>
        </van-cell>

        <div style="padding: 10px 0;border-bottom: solid 2px #F7F7F7; ">
          <van-cell is-link center to="/Coupon">
            <template slot="icon">
              <img src="../../assets/tab/yhq.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>优惠券</div>
            </template>
          </van-cell>
        </div>

        <div style="padding-top: 10px;">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/bz.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>帮助中心</div>
            </template>
          </van-cell>
        </div>

        <van-cell is-link center to>
          <template slot="icon">
            <img src="../../assets/tab/sz.png" alt="图标" class="left_img">
          </template>
          <template slot="title">
            <div>设置</div>
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //我的资料
    myInformat() {
      this.$router.push({ path: "/MyInformation" });
    }
  }
};
</script>

<style>
.myzf .van-cell {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>

<style scoped>
.manber_b {
  align-items: center;
  width: 100%;
  height: 180px;
  background: url(../../assets/tab/me_bg.png) no-repeat;
  background-size: 100% 100%;
}
.head_img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-left: 14px;
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
  margin: 0 12px 12px 0;
  width: 20px;
  height: 17px;
}
.mebox {
  width: 100%;
}
.me {
  width: 296px;
  height: 380px;
  top: -60px;
  margin: 0 auto;
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