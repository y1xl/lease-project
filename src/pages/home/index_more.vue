<template>
  <div>
    <div class="flex-jc-center bgc">
      <div class="img_b">
        <img class="top_img" :src="adpic_img">
      </div>
    </div>
    <div id="pro-list">
      <van-list v-model="loading" :finished="finished" @load="onLoad" class="flex-wrap bgc">
        <div v-for="(item,index) in goodslist" :key="index">
          <div class="item text-c">
            <div class="flex-jc-center img_b1">
              <img class="img" :src="item.gd_img[0]">
            </div>
            <div class="text-line pro_title mar-b-10">{{item.goods_name}}</div>
            <div>
              <span class="price">{{item.selling_price}}</span>
              <span class="f12">/日</span>
            </div>
          </div>
        </div>
      </van-list>
      <div class="text-c fc-grey pd-15 bgc" v-show="finished">没有更多了</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      goodslist: [],
      loading: false,
      finished: false,
      page: 0,
      adpic_img: ""
    };
  },
  created() {
    this.gethender();
    setTimeout(() => {
      this.onLoad();
    }, 500);
  },
  methods: {
    gethender() {
      this.axios.post(this.API + "api/Lease/hender_img").then(res => {
        console.log(res.data, "gethender");
        let resdata = res.data;
        if (resdata.code == 200) {
          this.adpic_img = resdata.data[0].adpic_img;
        } else {
          Toast(resdata.message);
        }
      });
    },
    onLoad() {
      let nowPageNum = ++this.page;
      let postData = this.$qs.stringify({
        scene_id: this.$route.params.id,
        page: nowPageNum
      });
      this.axios
        .post(this.API + "api/Lease/Scene_goods", postData)
        .then(res => {
          console.log(res.data, "Scene_goods");
          let resdata = res.data;
          if (resdata.code == 200) {
            this.loading = true;
            // this.goodslist = this.goodslist.push(...resdata.data);
            this.goodslist = this.goodslist.concat(resdata.data);

            if (resdata.data.length == 0) {
              this.finished = true;
            }

            // 加载状态结束
            this.loading = false;
          } else {
            Toast(resdata.message);
          }
          this.finished = true;
        });
    }
  }
};
</script>
<style>
#pro-list .van-list__loading {
  margin: auto;
}
</style>

<style scoped>
.f12 {
  font-size: 12px;
}
.img_b {
  width: 92%;
  height: 120px;
  margin-top: 13px;
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
  font-size: 0;
  height: 120px;
  width: 100%;
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
</style>