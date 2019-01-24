<template>
  <div class="">
    <van-cell to="/calendar">
      <template slot="title">
        <div class="flex-jc-between flex-align-items" style="margin-top: 20px;">
          <div>
            <div class="custom-text mar-b-10">取消托管日期</div>
            <div class="custom-text f13">请选择日期</div>
          </div>
          <van-icon name="arrow" color="#aeaeae" size="20px"/>
        </div>
      </template>
    </van-cell>

    <van-cell to="/addresslist">
      <template slot="title">
        <div class="flex-jc-between flex-align-items" style="padding: 10px 0;">
          <div>
            <div class="address">退回地址</div>
            <div>王某 18512658942</div>
            <div>广东省深圳市龙华新区水榭春天</div>
          </div>
          <van-icon name="arrow" color="#aeaeae" size="20px"/>
        </div>
      </template>
    </van-cell>

    <div class="post flex-jc-between mar-b-10 bgc pd-15" >
      <span>退回运费</span>
      <span>36</span>
    </div>

    <div class="bgc mar-b-10">
        <div class="border-b pd-15">请选择支付方式</div>
        <van-radio-group v-model="radio">
            <div class="flex-jc-between border-b pd-15" @click="radio = '1'">
                <div><img src="../../../assets/weixin.png" alt="微信" class="payimg">微信</div>
                <van-radio name="1" checked-color="#2DBBF1"></van-radio>
            </div>
            <div class="flex-jc-between border-b pd-15" @click="radio = '2'">
                <div><img src="../../../assets/ali.png" alt="支付宝" class="payimg">支付宝</div>
                <van-radio name="2" checked-color="#2DBBF1"></van-radio>
            </div>
            <div class="flex-jc-between pd-15" @click="radio = '3'">
                <div><img src="../../../assets/balance.png" alt="余额" class="payimg">余额<span class="fc-red"> ¥2.00</span></div>
                <van-radio name="3" checked-color="#2DBBF1"></van-radio>
            </div>
        </van-radio-group>
    </div>

    <div class="flex-jc-center bgc btn_box">
      <div class="btn text-c">立即支付</div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      radio:'1',
    }
  }
};
</script>

<style scoped>

.custom-text {
  color: #aeaeae;
  font-size: 14px;
}
.f12 {
  font-size: 13px;
}

.address {
  color: #aeaeae;
}
/* .post {
  margin: 15px;
} */

.btn {
  width: 280px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}

.payimg{
    width: 20px;
    height: 20px;
    padding-right: 10px;
    vertical-align: middle;
}
</style>


