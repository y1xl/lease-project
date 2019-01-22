<template>
  <div>
    <div class="add_address">
      <div class="add_addresscon bgc">
        <div class="me" style="margin-top: 15px;">
          <van-cell-group>
            <van-field v-model="value" placeholder="姓名"/>
          </van-cell-group>

          <van-cell-group>
            <van-field v-model="value" placeholder="手机号"/>
          </van-cell-group>
          <van-cell title="请选择所在地区" is-link/>
          <van-cell-group>
            <van-field v-model="value" placeholder="请输入详细地址"/>
          </van-cell-group>
          <div class="flexbox moren">
            <van-checkbox v-model="checked" checked-color="#4EA9F9"></van-checkbox>
            <span>设为默认地址</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-jc-center">
      <div class="btn text-c">保存</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      checked: true
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
.add_address {
  width: 100%;
}
.add_addresscon {
  width: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
}
.me {
  width: 270px;
  height: 100%;
  margin: 0 auto;
}

.moren {
  margin-left: 15px;
  height: 60px;
  line-height: 60px;
  color: #aeaeae;
}
.moren span {
  padding-left: 15px;
  font-size: 12px;
}

.btn {
  margin-top: 70px;
  width: 298px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
</style>