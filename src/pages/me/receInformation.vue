<template>
  <div>
    <div class="addresslist">
      <div class="hang bgc" v-for="(address,index) in addresslist">
        <van-cell is-link center to>
          <template slot="title">
            <div>
              <span>曲文</span>
              <span>13845684586</span>
              <span class="moren" style>默认</span>
            </div>
            <div>广东省 深圳市 龙华区 水榭春天B201</div>
          </template>

          <template slot="right-icon">
            <img src="../../assets/bj.png" alt="图标" class="left_img">
          </template>
        </van-cell>
      </div>
    </div>
    <div class="btn text-c" @click="addAddress">添加</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addresslist: [{}, {}]
    };
  },
  methods: {
    routerback() {
      this.$router.back(-1);
    },
    addAddress() {
      this.$router.push({ path: "/AddInformation" });
    }
  }
};
</script>

<style>
.hang .van-cell {
  border-radius: 5px;
}
</style>

<style scoped>
.addresslist {
  width: 100%;
  margin-top: 12px;
  margin-left: 4%;
}
.hang {
  width: 92%;
  margin-top: 10px;
  line-height: 35px;
  border-radius: 5px;
}

.moren {
  padding: 2px 5px;
  color: #fff;
  font-size: 10px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  box-shadow: 0px 0px 6px 0px rgba(79, 171, 249, 0.36);
  border-radius: 4px;
}
.left_img {
  width: 12px;
  height: 12px;
  padding-right: 5px;
}
.btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  color: #fff;
}
</style>
