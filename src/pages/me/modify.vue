<template>
  <div>
    <div class="text-c border-b top bgc">
      <div class="fh_img" @click="routerback">
        <img src alt="返">
      </div>修改绑定手机号
    </div>

    <div class="modify text-c">
      <div class="tel_num">您当前绑定手机号138xxxx4586</div>
      <div class="flex-jc-center">
        <div class="btn text-c">获取验证码</div>
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
  font-size: 16px;
  font-weight: 500;
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

.modify {
  margin-top: 44px;
  width: 100%;
}
.tel_num {
  font-size: 14px;
  line-height: 100px;
}
.btn {
  width: 292px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
</style>