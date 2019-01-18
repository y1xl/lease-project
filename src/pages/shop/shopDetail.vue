<template>
  <div>
    <div class="text-c border-b top bgc">
      <div class="fh_img" @click="routerback">
        <img src="../../assets/tab/fhimg.png">
      </div>龙华区油松店
    </div>
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
.top {
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;
  height: 44px;
  line-height: 44px;
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

.shopimg_b {
  margin-top: 55px;
  width: 94%;
  height: 170px;
  border-radius: 5px;
  background: rebeccapurple;
}
.txt {
  font-size: 12px;
  color: #dcdddf;
  margin-top: 5px;
}
.dw_img {
  width: 10px;
  height: 12px;
}
.dt {
  margin-top: 15px;
}
</style>