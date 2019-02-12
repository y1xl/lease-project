<template>
  <div>
    <div class="flex-jc-center" v-for="(item,index) in cardlist" :key='index'>
      <div class="card_box bgc">
        <div class="card flex-jc-around flex-align-items">
          <div class="flex-align-items">
            <img class="card_img" src="../../assets/bankcart.png">
            <span>中国农业银行</span>
          </div>
          <div class="f12_grey">储蓄卡</div>
        </div>
        <div class="text-c card_num">4856 **** **** 1257</div>
      </div>
    </div>

    <div class="flex-jc-center">
      <router-link to="BindingCard">
        <div class="card_box bgc">
          <div class="flex-jc-center">
            <img class="add_img" src="../../assets/jiahao.png">
          </div>
          <div class="text-c f12_grey add_card">添加银行卡</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardlist: [{}, {}]
    };
  }
};
</script>

<style scoped>
.card_box {
  width: 295px;
  height: 112px;
  box-shadow: 0px 0px 16px 0px rgba(220, 221, 223, 0.19);
  border-radius: 5px;
  margin-top: 10px;
  font-size: 16px;
}
.card {
  margin-top: 15px;
}
.card_img {
  width: 20px;
  height: 20px;
  margin-right: 25px;
}
.add_img {
  width: 22px;
  height: 22px;
  margin-top: 30px;
}
.f12_grey {
  color: #aeaeae;
  font-size: 12px;
}

.card_num {
  line-height: 70px;
}
.add_card {
  line-height: 50px;
}
</style>