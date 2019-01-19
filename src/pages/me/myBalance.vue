<template>
  <div>
    <div class="bgc text-c all_bal">
      <div class="all_pro">¥863.08</div>
      <div>可提现金额</div>
      <div class="btn">提现</div>
    </div>

    <div id="navbal">
      <van-tabs @click="ontab">
        <van-tab :title="item" v-for="(item,index) in navtitle" :key="index">
          <div class="coupon_box position" v-for="(item,index) in couponlist" :key="index">
            <div>
              <img src="../../assets/tab/1.png">
            </div>

            <div class="coupon_con flex-jc-around flex-align-items"></div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navtitle: ["押金", "托管收益", "推广金", "红包", "邀请码"]
    };
  }
};
</script>
<style>
#navbal .van-tabs__line {
  background-color: #fff;
  height: 6px;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}

#navbal .van-tab {
  background-color: #fbfbfb;
}
</style>


<style scoped>
.all_bal {
  width: 100%;
  height: 150px;
  margin-top: 15px;
  box-shadow: 0px 0px 16px 0px rgba(220, 221, 223, 0.19);
}
.all_pro {
  font-size: 35px;
}
</style>


