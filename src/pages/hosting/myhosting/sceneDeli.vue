<template>
  <div class="bgc full">
    <div class>
      <div class="flex-jc-between pd-15">
        <div>选择交付门店</div>
        <div class="flex-align-items fc-grey">
          <van-icon name="arrow"/>
        </div>
      </div>

      <div class="box">
        <div class="flex-jc-between" @click="toShopdet">
          <div class="shop_title pd-15">龙华区油松店</div>
        </div>

        <div class="txt pd-lr-15">广东省深圳市龙华新区油松路158号油富商城门店</div>
        <div class="dt text-c">
          <img class="ck_img" src="../../../assets/mddw.png">
          <span class="txt">查看地图</span>
        </div>
      </div>
    </div>

    <van-cell>
      <template slot="title">
        <div class="flex-jc-between flex-align-items" style="margin-top: 30px;">
          <div>
            <div class="custom-text">交付日期</div>
            <div class="custom-text f13">请选择交付日期</div>
          </div>
          <van-icon name="arrow" color="#aeaeae" size="20px"/>
        </div>
      </template>
    </van-cell>

    <div class="flex-jc-center bgc btn_box">
      <div class="btn text-c">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toShopdet() {
      this.$router.push({ path: "/ShopDetail" });
    }
  }
};
</script>
<style scoped>
.box {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 18px 0px rgba(188, 188, 188, 0.32);
  border-radius: 10px;
  margin: 15px;
}
.shop_title {
  font-size: 15px;
  color: #7a7a7a;
}
.txt {
  font-size: 12px;
  width: 220px;
  color: #dcdddf;
}
.ck_img {
  width: 10px;
  height: 12px;
}
.dt {
  padding: 15px;
}

.custom-text {
  color: #aeaeae;
  font-size: 14px;
}
.f13 {
  font-size: 13px;
}

input {
  width: 280px;
  height: 40px;
  margin: 0 15px;
  color: #aeaeae;
  font-size: 14px;
}
.btn_box {
  width: 100%;
  margin-top: 30px;
}
.btn {
  width: 280px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
</style>

