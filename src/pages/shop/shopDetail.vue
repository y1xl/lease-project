<template>
  <div>
    <div class="bgc">
      <div class="flex-jc-center">
        <div class="shopimg_b">
          <img src="../../assets/tab/qd.png">
        </div>
      </div>
      <div class="dt text-c">
        <img class="dw_img" src="../../assets/tab/mddw.png">
        <span class="txt">广东省深圳市龙华新区油松路158号油富商城门店</span>
      </div>
    </div>

    <div class="bgc flex-jc-center miaosu_b">
      <div class="miaosu">
        <div class="shop_name">店铺名称</div>
        <div class="shop_intro">
          店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍
          店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    routerback() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.shopimg_b {
  margin-top: 15px;
  width: 92%;
  height: 170px;
  border-radius: 5px;
  background: rebeccapurple;
}
.shopimg_b img {
  width: 100%;
  height: 100%;
}
.txt {
  font-size: 12px;
  color: #dcdddf;
}
.dw_img {
  width: 10px;
  height: 12px;
}
.dt {
  line-height: 40px;
}
.miaosu_b {
  margin-top: 12px;
}
.miaosu {
  width: 92%;
}
.shop_name {
  font-size: 15px;
  font-weight: 700;
  height: 50px;
  line-height: 55px;
}

.shop_intro {
  font-size: 12px;
  color: #808080;
  padding-bottom: 20px;
}
</style>