<template>
  <div class="bgc full">
    <van-cell>
      <template slot="title">
        <div class="flex-jc-between flex-align-items" style="margin-top: 20px;">
          <div>
            <div class="custom-text">取消托管日期</div>
            <div class="custom-text f13">请选择日期</div>
          </div>
          <van-icon name="arrow" color="#aeaeae" size="20px"/>
        </div>
      </template>
    </van-cell>
    <van-cell>
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

    <div class="post flex-jc-between" style="margin-top: 20px;">
      <span>退回运费</span>
      <span>36</span>
    </div>
    <div class="flex-jc-center bgc btn_box">
      <div class="btn text-c">立即支付</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  font-size: 14px;
}
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
.post {
  margin: 15px;
}

.btn_box {
  width: 100%;
  margin-top: 290px;
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


