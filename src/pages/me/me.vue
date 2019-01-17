<template>
  <div class="bgc">
    <div class="flex-align-items manber_b" @click="myInformat">
      <div class="head_img">
        <img src="../../assets/tab/mys.png">
      </div>
      <div>
        <div class="name">DORO_THY</div>
        <div class="manber">普通会员</div>
      </div>
    </div>
    <div class="mebox">
      <div class="position me">
        <div class="hang" style="padding-top: 10px;">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/mys.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>免押认证</div>
            </template>
          </van-cell>
        </div>

        <div class="hang">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/mys.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>我的积分</div>
            </template>
          </van-cell>
        </div>

        <div class="hang">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/mys.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>我的托管</div>
            </template>
          </van-cell>
        </div>

        <div class="hang">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/mys.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>购物车</div>
            </template>
          </van-cell>
        </div>

        <div class="hang">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/mys.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>账户余额</div>
            </template>
          </van-cell>
        </div>

        <div class="hang" style="padding: 10px 0;border-bottom: solid 2px #F7F7F7; ">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/mys.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>优惠券</div>
            </template>
          </van-cell>
        </div>

        <div class="hang" style="padding-top: 10px;">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/mys.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>帮助中心</div>
            </template>
          </van-cell>
        </div>
        <div class="hang">
          <van-cell is-link center to>
            <template slot="icon">
              <img src="../../assets/tab/mys.png" alt="图标" class="left_img">
            </template>
            <template slot="title">
              <div>设置</div>
            </template>
          </van-cell>
        </div>
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

<style scoped>
.manber_b {
  width: 100%;
  height: 64px;
  padding: 48px 0 15px 13px;
}
.head_img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #fff;
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
.mebox {
  width: 100%;
}
.me {
  width: 296px;
  height: 380px;
  margin: 0 auto;
  border-radius: 5px;
}
.hang {
  height: 35px;
  line-height: 35px;
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