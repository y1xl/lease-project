<template>
  <div>
    <div id="nav">
      <van-tabs @click="ontab" v-model="ind">
        <van-tab :title="item" v-for="(item,index) in navtitle" :key="index">
          <div class="position" v-for="(item,index) in couponlist" :key="index">
            <div class="box flex-jc-around bgc" @click="toDetail">
              <div>
                <img
                  src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg"
                  alt
                  class="goods_img"
                >
              </div>
              <div class="pd-15 flex-column-space-between">
                <div class="goods_title newline">蚂蚁摄影Canon/佳能EOS200D 单反相机入门级入门级</div>
                <div class="flex-jc-between flex-align-items">
                  <div class="state">
                    <span v-if="ind==1||ind==0">审核中</span>
                    
                    <span v-if="ind==2">在库</span>
                    <!-- <span>出租中</span> -->
                    <span v-if="ind==3">已退回</span>
                  </div>
                  <div>
                    <div class="btn border-blue" v-if="ind==2" @click.stop="cancelTg">取消托管</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navtitle: ["全部", "审核中", "托管中", "已退回"],
      couponlist: [{}, {}, {}],
      ind: 0
    };
  },
  methods: {
    ontab(index, title) {
      console.log(index, title);
    },
    //托管详情
    toDetail() {
      if (this.ind == 1) {
        this.$router.push({ path: "/HostDetail" });
      }
      if (this.ind == 2) {
        this.$router.push({ path: "/hostingDetail" });
      }
      if (this.ind == 3) {
        this.$router.push({ path: "/hostingExpress" });
      }
    },
    //取消托管
    cancelTg() {
      window.sessionStorage.removeItem("hostCancelSession");
      this.$router.push({ path: "/HostCancel" });
    }
  }
};
</script>

<style>
#nav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
</style>

<style scoped>
.box {
  margin: 10px 15px 0 15px;
  border-radius: 10px;
}

.goods_img {
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 13px;
}

.goods_title {
  font-size: 15px;
  width: 135px;
}
.state {
  color: #aeaeae;
}

.btn {
  color: #4ea9f9;
  border-radius: 15px;
  padding: 5px 10px;
}
</style>


