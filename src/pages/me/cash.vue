<template>
  <div>
    <div class="box">
      <router-link to="BankCard">
        <div class="add_card pd-15">
          <span class="jia">+</span>
          选择银行卡
        </div>
      </router-link>
      <div>
        <van-cell is-link to="BankCard">
          <template slot="title">
            <div class="cart">中国农业银行（4589）</div>
          </template>
        </van-cell>
      </div>
      <div class="pd-15">提现金额</div>
      <div class="flex-jc-between flex-align-items pd-15">
        <div class="flex-align-items">
          <img class="qian_img" src="../../assets/qian_icon.png">
          <input type="text" placeholder="可提现400元" v-model="money">
        </div>
        <div class="all" @click="allmoney">全部</div>
      </div>
    </div>
    <div class="tip text-c pd-15">3个工作日内到账，节假日顺延</div>
    <div class="flex-jc-center">
      <div class="btn text-c">确认体现</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      money:''
    }
  },
  methods:{
    allmoney(){
      this.money = 400
    }
  }
};
</script>

<style scoped>
.box {
  margin: 15px;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 16px 0px rgba(220, 221, 223, 0.19);
  border-radius: 10px;
}
.add_card,
.all {
  color: #4ea9f9;
}

.qian_img {
  width: 15px;
  height: 25px;
  margin-right: 15px;
}
.cart {
  font-size: 17px;
}
.fuhao {
  font-size: 30px;
  font-weight: 200;
  padding-right: 15px;
}
.btn {
  width: 299px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
  margin-top: 50px;
}
.tip {
  color: #aeaeae;
}

.money {
  font-size: 30px;
}
</style>
