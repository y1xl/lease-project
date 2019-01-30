<template>
  <div>
    <div class="shoplist">
      <div v-for="(item,index) in list" :key="index" :title="item">
        <div class="item">
          <router-link :to="{path:'/ShopDetail',query:{store_id:item.store_id}}">
            <div class="flex-jc-between">
              <div class="shop_title">{{item.store_name}}</div>
              <van-icon name="arrow"/>
            </div>
            <div
              class="txt f12"
            >{{(item.store_province||'')+(item.store_district||'')+(item.store_city||'')+(item.store_Address||'')}}</div>
          </router-link>

          <router-link
            class="dt text-c"
            :to="`/map/${item.coordinate}/${item.store_name},${item.store_province+item.store_district+item.store_city}`"
          >
            <img class="ck_img" src="../../assets/mddw.png">
            <span class="txt f12">查看地图</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    if (!window.localStorage.getItem("userinfo")) {
      this.$router.replace({ path: "/login" });
    }
    this.getlist();
  },
  methods: {
    getlist() {
      Toast.loading({ mask: true, message: "加载中..." });
      this.axios.post(this.API + "api/Lease/store_select").then(res => {
        console.log(res.data, "list");
        let resdata = res.data;
        if (resdata.code == 200) {
          Toast.clear();
          this.list = resdata.data;
        } else {
          Toast.clear();
          Toast(resdata.message);
        }
      });
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
</style>