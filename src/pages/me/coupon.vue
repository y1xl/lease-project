<template>
  <div>
    <div id="nav">
      <van-tabs @click="ontab">
        <van-tab :title="item" v-for="(item,index) in navtitle" :key="index">
          <div
            class="coupon_box position"
            v-for="(item,index) in couponlist"
            :key="index"
            v-show="showCoupon"
          >
            <div>
              <img src="../../assets/1.png">
            </div>

            <div class="coupon_con flex-jc-around flex-align-items">
              <div>
                <span class="num">10</span>
                <span class="yuan">元</span>
              </div>
              <div>
                <div class="coupon_fl">新人专享红包</div>
                <div class="limit">
                  <div>有效期至2019.01.15</div>
                  <div>满50可用</div>
                </div>
              </div>
            </div>
          </div>

          <div id="dialog">
            <van-dialog v-model="show" show-cancel-button :before-close="beforeClose">
              <div class="mask_box text-c">
                <img src="../../assets/2.png">
                <div class="lq_txt">领取优惠券</div>
                <input placeholder="请输入兑换码">
              </div>
            </van-dialog>
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
      navtitle: ["未使用", "已使用", "已失效", "领取/兑换"],
      couponlist: [{}, {}, {}],
      show: false,
      showCoupon: true,
      index: 0
    };
  },
  methods: {
    ontab(index, title) {
      console.log(index, title);
      if (index == 3) {
        this.showCoupon = false;
        this.show = true;
      }
      this.index = index;
    },

    beforeClose(action, done) {
      if (action === "confirm") {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  }
};
</script>

<style>
#nav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}

#dialog .van-dialog {
  width: 68%;
}
</style>

<style scoped>
.coupon_con {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
}

.num {
  font-size: 70px;
  font-weight: lighter;
  color: #4ea9f9;
}

.yuan {
  font-size: 25px;
  color: #4ea9f9;
}

.coupon_fl {
  font-size: 15px;
}
.limit {
  font-size: 12px;
  color: #aeaeae;
}

.get_coupon {
  width: 100%;
  height: 100%;
  margin-top: 100px;
}

/* 领取优惠券弹窗 */
.mask_box img {
  width: 50px;
  height: 60px;
  margin: 12px 0 5px 0;
}
.mask_box input {
  width: 180px;
  height: 28px;
  line-height: 20px;
  color: #aeaeae;
  font-size: 12px;
  background: #f6f6f7;
  text-align: center;
  margin: 12px 0 15px 0;
}
</style>


