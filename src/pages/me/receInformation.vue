<template>
  <div>
    <div class="text-c border-b top bgc">
      <div class="fh_img" @click="routerback">
        <img src alt="返">
      </div>收货信息
    </div>

    <div class="hang bgc">
      <van-cell is-link center to>
        <template slot="title">
          <div>
            <span>曲文</span>
            <span>13845684586</span>
            <span class="moren">默认</span>
          </div>
          <div>广东省 深圳市 龙华区 水榭春天B201</div>
        </template>

        <template slot="right-icon">
          <img src="../../assets/tab/mys.png" alt="图标" class="left_img">
        </template>
      </van-cell>
    </div>
    <div class="btn text-c">添加</div>
  </div>
</template>
<script>
export default {
  methods: {
    //编辑
    // receInform() {
    //   this.$router.push({ path: "/" });
    // },
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

.hang {
  margin-top: 46px;
  /* height: 55px; */
  line-height: 35px;
}

.moren {
  padding: 2px 5px;
  font-size: 10px;
  color: #fff;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  box-shadow: 0px 0px 6px 0px rgba(79, 171, 249, 0.36);
  border-radius: 4px;
}
.left_img {
  width: 17px;
  height: 17px;
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
