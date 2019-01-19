<template>
  <div>
    <div class="text-c border-b top bgc">
      <div class="fh_img" @click="routerback">
        <img src="../../assets/tab/fhimg.png">
      </div>账号安全
    </div>

    <div class="account_sec">
      <div class="tel bgc" style="margin-top: 70px;">
        <van-cell center value="138xxxx4568" to>
          <template slot="title">
            <div>绑定手机号</div>
          </template>
        </van-cell>

        <van-cell is-link center value="修改" to="/Modify">
          <template slot="title">
            <div>登陆密码</div>
          </template>
        </van-cell>
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
  width: 13px;
  height: 16px;
  position: absolute;
  left: 10px;
  top: 3px;
}
.fh_img img {
  width: 13px;
  height: 16px;
}
.tx {
  padding: 10px 0;
  font-size: 12px;
}

.account_sec {
  margin-top: 44px;
  width: 100%;
}

.tel {
  width: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
}
</style>