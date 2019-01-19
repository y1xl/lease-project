<template>
  <div>
    <div class="myinfor">
      <div class="me bgc" style="margin-top: 12px;">
        <div class="flex-jc-between flex-align-items tx">
          <div style="padding-left: 13px;">我的头像</div>
          <div class="head_img">
            <img src="../../assets/tab/mys.png">
          </div>
        </div>

        <van-cell is-link center to="/DetaInformation">
          <template slot="title">
            <div>详细信息</div>
          </template>
        </van-cell>
        <div class="shxx">
          <van-cell is-link center to="/ReceInformation">
            <template slot="title">
              <div>收货信息</div>
            </template>
          </van-cell>
        </div>
      </div>

      <div class="me bgc" style="margin-top: 15px;">
        <div class="zhaq">
          <van-cell is-link center to="/accountSecurity">
            <template slot="title">
              <div>账号安全</div>
            </template>
          </van-cell>
        </div>
        <div class="bdzh">
          <van-cell is-link center to>
            <template slot="title">
              <div>绑定账号</div>
            </template>
          </van-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routerback() {
      this.$router.back(-1);
    }
  }
};
</script>

<style>
.zhaq .van-cell {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.bdzh .van-cell,
.shxx .van-cell {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>

<style scoped>
.tx {
  padding: 10px 0;
  font-size: 12px;
}
.head_img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
}
.head_img > img {
  width: 45px;
  height: 45px;
}
.myinfor {
  width: 100%;
}

.me {
  width: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
}
</style>