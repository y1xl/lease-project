<template>
  <div>
    <div class="account_sec">
      <div class="tel bgc" style="margin-top: 12px;">
        <div class="bdsjh">
          <van-cell center value="138xxxx4568" to>
            <template slot="title">
              <div>绑定手机号</div>
            </template>
          </van-cell>
        </div>
        <div class="passwork">
          <van-cell is-link center value="修改" to="/Modify">
            <template slot="title">
              <div>登陆密码</div>
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
.bdsjh .van-cell {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.passwork .van-cell {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>

<style scoped>
.tx {
  padding: 10px 0;
  font-size: 12px;
}

.account_sec {
  width: 100%;
}

.tel {
  width: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
}
</style>