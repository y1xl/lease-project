<template>
  <div>
    <div class="text-c border-b top bgc">
      <div class="fh_img" @click="routerback">
        <img src alt="返">
      </div>我的资料
    </div>

    <div class="myinfor">
      <div class="me bgc" style="margin-top: 70px;">
        <div class="flex-jc-between flex-align-items tx">
          <div style="padding-left: 13px;">我的头像</div>
          <div class="head_img">
            <img src="../../assets/tab/mys.png">
          </div>
        </div>

        <div class="hang" @click="detaInfoem">
          <van-cell is-link center to>
            <template slot="title">
              <div>详细信息</div>
            </template>
          </van-cell>
        </div>

        <div class="hang" @click="receInform">
          <van-cell is-link center to>
            <template slot="title">
              <div>收货信息</div>
            </template>
          </van-cell>
        </div>
      </div>

      <div class="me bgc" style="margin-top: 15px;">
        <div class="hang">
          <van-cell is-link center to>
            <template slot="title">
              <div>账号安全</div>
            </template>
          </van-cell>
        </div>

        <div class="hang">
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
    //详细信息
    detaInfoem() {
      this.$router.push({ path: "/DetaInformation" });
    },
    //收货信息
    receInform() {
      this.$router.push({ path: "/ReceInformation" });
    },

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
}
.fh_img {
  width: 12px;
  height: 12px;
  position: absolute;
  left: 10px;
  top: 2px;
}
.fh_img img {
  width: 12px;
  height: 12px;
}
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
  margin-top: 44px;
  width: 100%;
}

.me {
  width: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
}
</style>