<template>
  <div>
    <div class="text-c border-b top">
      <div class="fh_img">
        <img src="../../assets/tab/right.png">
      </div>产品列表
    </div>
    <div class="flex-jc-center">
      <div class="img_b">
        <img
          class="top_img"
          src="https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99"
        >
      </div>
    </div>
    <div>
      <van-list v-model="loading" :finished="finished" @load="onLoad" class="flex-wrap bgc">
        <div v-for="item in list" :key="item" :title="item">
          <div class="item text-c">
            <div class="flex-jc-center">
              <div class="img_b1">
                <img class="img" src="../../assets/tab/zhuans.png">
              </div>
            </div>
            <div class="text-line pro_title f14">日本 instax拍立得日本 instax拍立得</div>
            <div>
              <span class="price f14">¥3.08</span>/日
            </div>
          </div>
        </div>
        <div class="text-c f14 no_more">
          <span>没有更多了</span>
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
        if (this.list.length >= 10) {
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
.f14 {
  font-size: 14px;
}
.top {
  position: fixed;
  top: 0;
  z-index: 99;
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
.img_b {
  width: 92%;
  height: 120px;
  margin-top: 57px;
}
.top_img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.item {
  width: 140px;
  height: 204px;
  background: #f7f7f7;
  border-radius: 5px;
  margin: 13px 0 0 13px;
}
.img_b1 {
  width: 60px;
  height: 80px;
  margin-top: 33px;
}
.img {
  width: 100%;
  height: 100%;
}
.pro_title {
  padding: 20px 20px 0 20px;
}
.price {
  color: #f21e1e;
}
.no_more {
  width: 100%;
  color: #cecece;
  padding: 12px 0;
}
</style>