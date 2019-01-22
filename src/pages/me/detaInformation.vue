<template>
  <div>
    <div class="myinfor">
      <div class="me bgc">
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
        <div class="bri_day">
          <van-cell is-link center value="1998-11－25" to>
            <template slot="title">
              <div>生日</div>
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

<style scoped>
.myinfor {
  margin: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.me {
  width: 300px;
  height: 100%;
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
</style>