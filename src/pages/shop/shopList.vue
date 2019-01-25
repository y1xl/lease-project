<template>
  <div>
    <div class="shoplist">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <div v-for="item in list" :key="item" :title="item">
          <div class="item">
            <router-link to="/ShopDetail">
              <div class="flex-jc-between">
                <div class="shop_title">龙华区油松店</div>
                <div>
                  <img src="../../assets/right.png" class="img_r">
                </div>
              </div>
              <div class="txt f12">广东省深圳市龙华新区油松路158号油富商城门店</div>
            </router-link>

            <router-link class="dt text-c" to="/map">
              <img class="ck_img" src="../../assets/mddw.png">
              <span class="txt f12">查看地图</span>
            </router-link>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
.f12 {
  font-size: 12px;
}

.shoplist {
  margin-bottom: 60px;
  padding-top: 2px;
  background: #fbfbfb;
}
.item {
  background: #fff;
  padding: 10px 20px;
  margin: 12px 14px 0 14px;
}
.shop_title {
  font-size: 15px;
  color: #7a7a7a;
}
.txt {
  width: 220px;
  color: #dcdddf;
  margin-top: 5px;
}
.ck_img {
  width: 10px;
  height: 12px;
}
.dt {
  margin-top: 15px;
  display: block;
}
.img_r {
  width: 6px;
  height: 12px;
}
</style>