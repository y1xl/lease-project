<template>
  <div class="full bgc">
    <div class="pd-15">
      <div class="header">
        <div class="text-c">我的额度</div>
        <div class="text-c">￥6000000</div>
      </div>
    </div>

    <div class="pd-15 border-b rz-style">认证免押金方式</div>
    <router-link class="flex-jc-between pd-15 border-b" to="/realname">
      <div>实名认证</div>
      <div class="flex-align-items">
        <span class="fc-blue mr">去认证</span>
        <span class="fc-grey mr">已认证</span>
        <van-icon name="arrow"/>
      </div>
    </router-link>
    <router-link class="flex-jc-between pd-15 border-b" to="/school">
      <div>学籍认证</div>
      <div class="flex-align-items">
        <span class="fc-blue mr">去认证</span>
        <span class="fc-grey mr">已认证</span>
        <van-icon name="arrow"/>
      </div>
    </router-link>
    <router-link class="flex-jc-between pd-15 border-b" to>
      <div>邀请好友</div>
      <div class="flex-align-items">
        <!-- <span class="fc-blue mr">去认证</span>
        <span class="fc-grey mr">已认证</span>-->
        <van-icon name="arrow"/>
      </div>
    </router-link>
    <router-link class="flex-jc-between pd-15 border-b" to="/cpeople">
      <div>添加紧急联系人</div>
      <div class="flex-align-items">
        <van-icon name="arrow"/>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mr {
  margin-right: 10px;
}
.header {
  height: 140px;
  background-image: linear-gradient(90deg, #5f99fd 0%, #2974f1 100%);
  border-radius: 5px;
  color: #fff;
}
.rz-style {
  background: #f6f6f6;
}
.header > div:nth-of-type(1) {
  /* font-size: 12px; */
  padding-top: 30px;
}
.header > div:nth-of-type(2) {
  font-size: 30px;
  padding-top: 10px;
}
</style>
