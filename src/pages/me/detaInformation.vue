<template>
  <div>
    <div class="myinfor">
      <div class="me bgc">
        <div class="nick_name">
          <van-cell center value="DORO_THY" to>
            <template slot="title">
              <div>昵称</div>
            </template>
          </van-cell>
        </div>
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

<style>
.nick_name .van-cell {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.bri_day .van-cell {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>


<style scoped>
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
  width: 100%;
}

.me {
  width: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 12px;
}
</style>