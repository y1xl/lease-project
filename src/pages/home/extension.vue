<template>
  <div class="divbox">
    <div class="bgc">
      <div class="pd10 box-sizing mar-b-10">
        <div class="trust_box text-c">
          <div class="flex-jc-around">
            <div class="text-c">
              <div class="grey_f">推广佣金</div>
              <div>
                <img class="yuan_img" src="../../assets/qian.png">
                <span class="money">100</span>
              </div>
            </div>
            <div class="text-c">
              <div class="grey_f">订单佣金</div>
              <div>
                <img class="yuan_img" src="../../assets/qian.png">
                <span class="money">100</span>
              </div>
            </div>
            <div class="text-c">
              <div class="grey_f">未结算佣金</div>
              <div>
                <img class="yuan_img" src="../../assets/qian.png">
                <span class="money">100</span>
              </div>
            </div>
          </div>
          <div class="grey_f padding_tb">总佣金</div>
          <div class="">
            <img class="all_img" src="../../assets/qicon.png">
            <span class="all_money">300</span>
          </div>
        </div>
      </div>

      <div class="pdlr10 mar-b-10">
        <div class="tg_yq_box text-c">
          <div class="flex-jc-between tg_yq">
            <div class="flex-align-items">
              <div class="wode flex-center">
                <img src="../../assets/wode.png">
              </div>
              <div>
                <div class="yq">邀请好友</div>
                <div class="grey_f">去邀请</div>
              </div>
            </div>
            <div>
              <img class="img_r" src="../../assets/right.png">
            </div>
          </div>
        </div>
      </div>

      <div class="pdlr10" @click="showcode=true">
        <div class="tg_yq_box text-c">
          <div class="flex-jc-between tg_yq">
            <div class="flex-align-items">
              <div class="saoma flex-center">
                <img src="../../assets/saoma.png">
              </div>
              <div>
                <div class="yq">推广二维码</div>
                <div class="grey_f ck">查看</div>
              </div>
            </div>
            <div>
              <img class="img_r" src="../../assets/right.png">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pd10 fs12 fc-grey">
        <p>佣金计算说明：</p>
        <p>总佣金=推广佣金+订单佣金+未结算佣金</p>
    </div>

    <van-popup v-model="showcode">
      <div style="font-size:0"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1016728805,4031130995&fm=26&gp=0.jpg" alt="" class="codeimg"></div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showcode:false
    };
  },
  methods: {
    routerback() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.fs12{
  font-size: 12px
}
.pd10{
  padding: 10px;
}
.pdlr10{
  padding-left: 10px;
  padding-right: 10px;
}
.divbox {
  min-height: 100vh;
  background-color: #fff;
}
.trust_box {
  /* width: 300px; */
  height: 170px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  /* margin-top: 11px; */
  padding-top: 30px;
}
.grey_f {
  color: #bfbfbf;
  font-size: 12px;
  line-height: 25px;
}
.yuan_img {
  width: 8px;
  height: 12px;
}
.all_img {
  width: 20px;
  height: 30px;
}
.padding_tb {
  padding: 20px 0 5px 0;
}

.money {
  color: #4ea9f9;
  font-size: 19px;
}
.all_money {
  color: #4ea9f9;
  font-size: 50px;
  font-weight: 200;
}

.tg_yq_box {
  /* width: 300px; */
  height: 80px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  /* margin-top: 10px; */
}

.tg_yq {
  display: flex;
  align-items: center;
  /* width: 300px; */
  height: 80px;
}
.img_r {
  width: 5px;
  height: 10px;
  margin-right: 13px;
}

.wode,
.saoma {
  width: 85px;
  height: 81px;
  background: linear-gradient(0deg, #a1c4fd, #bbe5f9);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.saoma > img {
  width: 24px;
  height: 24px;
}
.yq {
  padding-left: 20px;
}

.ck {
  padding-right: 25px;
}
.wode > img {
  width: 21px;
  height: 24px;
}

.codeimg {
  width: 200px;
  height: 200px;
}
</style>