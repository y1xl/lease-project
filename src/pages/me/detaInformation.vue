<template>
  <div>
    <div class="text-c border-b top bgc">
      <div class="fh_img" @click="routerback">
        <img src="../../assets/tab/fhimg.png">
      </div>详细信息
    </div>

    <div class="myinfor">
      <div class="me bgc" style="margin-top: 70px;">
        <van-cell center value="DORO_THY" to>
          <template slot="title">
            <div>昵称</div>
          </template>
        </van-cell>

        <van-cell is-link center value="女" to>
          <template slot="title">
            <div>性别</div>
          </template>
        </van-cell>

        <van-cell is-link center value="广东省  深圳市" to>
          <template slot="title">
            <div>位置</div>
          </template>
        </van-cell>

        <van-cell is-link center value="1998-11－25" to>
          <template slot="title">
            <div>生日</div>
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