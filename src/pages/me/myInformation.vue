<template>
  <div>
    <div class="myinfor">
      <div class="me bgc">
        <div class="flex-jc-between flex-align-items tx border-b">
          <div>我的头像</div>
          <div class="head_img">
            <img src="http://img2.imgtn.bdimg.com/it/u=390947329,3335162149&fm=26&gp=0.jpg" alt="头像">
          </div>
        </div>

        <van-cell is-link center to="/detaInformation" :border="false">
          <template slot="title">
            <div>详细信息</div>
          </template>
        </van-cell>
        <div class="shxx border-t">
          <van-cell is-link center to="/receInformation">
            <template slot="title">
              <div>收货信息</div>
            </template>
          </van-cell>
        </div>
      </div>

      <div class="me bgc">
        <div class="zhaq border-b">
          <van-cell is-link center to="/accountSecurity">
            <template slot="title">
              <div>账号安全</div>
            </template>
          </van-cell>
        </div>
        <div class="bdzh">
          <van-cell is-link center to="/accountBinding">
            <template slot="title">
              <div>绑定账号</div>
            </template>
          </van-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style>
.zhaq .van-cell {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.bdzh .van-cell,
.shxx .van-cell {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>

<style scoped>
.tx {
  padding: 10px 0;
  font-size: 12px;
}
.tx > div:nth-of-type(1) {
  padding-left: 12px;
}
.head_img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
}
.head_img > img {
  width: 45px;
  height: 45px;
}
.myinfor {
  width: 100%;
  padding-top: 12px;
}

.me {
  width: 300px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 15px;
}
</style>