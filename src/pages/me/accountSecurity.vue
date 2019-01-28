<template>
  <div>
    <div class="account_sec bgc">
      <div class="tel">
        <van-cell center is-link value="13417074484" :to="`/Modify/phone/13417074484`">
          <template slot="title">
            <div>绑定手机号</div>
          </template>
        </van-cell>

        <van-cell is-link center value="修改" to="/newpassword">
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
  methods: {}
};
</script>
<style>
</style>

<style scoped>
.tx {
  padding: 10px 0;
  font-size: 12px;
}

.account_sec {
  border-radius: 10px;
  overflow: hidden;
  margin: 15px;
}

.tel {
  width: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
}
</style>