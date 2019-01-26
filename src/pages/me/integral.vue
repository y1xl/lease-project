<template>
  <div class="bgc">
    <div class="header" :style="bgimg">
      <div class="text-c">500</div>
      <div class="text-c">当前可用积分</div>
      <div class="flex-jc-around">
        <span>可抵扣：5元</span>
        <span>积分规则</span>
      </div>
    </div>
    <div class="mx">积分明细</div>
    <div class="box bgc">
      <div v-for="(item,index) in 5">
        <div class="flex-center bgc">
          <div class="flex-jc-between flex-align-items inte_deta border-b">
            <div>
              <div>签到</div>
              <div class="time">2018-12-19</div>
            </div>
            <div class="money_deta">+670</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgimg: {
        background:
          "url(" + require("../../assets/in_bg.png") + ") no-repeat top",
          backgroundSize: "100% 100%"
      },
      integral: [{}, {}]
    };
  },
  methods: {}
};
</script>


<style scoped>
.header {
  align-items: center;
  width: 100%;
  height: 210px;
  /* background: url(../../assets/in_bg.png) no-repeat;
  background-size: 100% 100%; */
  color: #fff;
}
.header > div:nth-of-type(1) {
  font-size: 30px;
  padding-top: 70px;
}
.header > div:nth-of-type(2) {
  padding-top: 10px;
}
.header > div:nth-of-type(3) {
  padding-top: 30px;
}
.box {
  margin: 0 15px;
}
.mx {
  height: 40px;
  line-height: 40px;
  background: #fbfbfb;
  padding-left: 15px;
}

.inte_deta {
  width: 100%;
  padding: 10px 0;
}
.money_deta {
  font-size: 16px;
  color: #4ea9f9;
}
.time {
  font-size: 12px;
  color: #aeaeae;
  margin-top: 5px;
}
</style>