<template>
  <div>
    <div class="bgc text-c all_bal">
      <div class="all_money">¥863.08</div>
      <div class="kt">可提现金额</div>
      <div class="flex-center">
        <div class="btn" @click="toBankCard">提现</div>
      </div>
    </div>

    <div id="nav">
      <van-tabs @click="ontag" v-model="active">
        <van-tab :title="item" v-for="(item,index) in navtitle" :key="index">
          <div v-for="(item,index) in 5">
            <div class="flex-center bgc">
              <div class="flex-jc-between flex-align-items pd-15 bala_deta border-b">
                <div>
                  <div>押金退还</div>
                  <div class="time">2018-12-19</div>
                </div>
                <div class="money_deta">+670</div>
              </div>
            </div>
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
      active: 0,
      navtitle: ["押金", "托管收益", "推广金", "红包", "邀请码"]
    };
  },
  methods: {
    ontag(index, title) {
      console.log(index, title);
      this.active = index;
    },

    //提现银行卡
    toBankCard() {
      this.$router.push({ path: "/BankCard" });
    }
  }
};
</script>
<style>
#nav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
</style>

<style scoped>
.all_bal {
  width: 100%;
  height: 150px;
  margin-top: 15px;
  box-shadow: 0px 0px 16px 0px rgba(220, 221, 223, 0.19);
}
.all_money {
  font-size: 35px;
  padding-top: 25px;
}
.kt {
  font-size: 13px;
}
.btn {
  width: 100px;
  height: 25px;
  line-height: 25px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  box-shadow: 0px 0px 13px 0px rgba(79, 171, 249, 0.36);
  border-radius: 29px;
  color: #fff;
  margin-top: 25px;
}
.bala_deta {
  width: 100%;
}
.money_deta {
  font-size: 16px;
  color: #4ea9f9;
}
.time {
  font-size: 12px;
  color: #aeaeae;
}
</style>


