<template>
  <div>
    <div class="bgc">
      <div class="flex-jc-center" v-if="detail.thumb">
        <div class="shopimg_b bgc-grey">
          <img :src="detail.thumb" alt="封面">
        </div>
      </div>
      <div class="dt text-c">
        <img class="dw_img" src="../../assets/mddw.png">
        <span
          class="txt"
        >{{(store_province||'') + (store_city||'') + (store_district||'')+(store_Address||'')}}</span>
      </div>
    </div>

    <div class="bgc flex-jc-center miaosu_b">
      <div class="miaosu">
        <div class="shop_name">{{store_name}}</div>
        <div class="shop_intro" v-html="detail.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      detail:'',
      store_province: "",
      store_city: "",
      store_Address: "",
      store_district: "",
      store_name: ""
    };
  },
  created() {
    this.getdetail();
  },
  methods: {
    getdetail() {
      Toast.loading({ mask: true, message: "加载中..." });
      let postData = this.$qs.stringify({
        store_id: this.$route.query.store_id
      });
      this.axios
        .post(this.API + "api/Lease/store_detail", postData)
        .then(res => {
          Toast.clear();
          console.log(res.data, "getdetail");

          let resdata = res.data;
          if (resdata.code == 200) {
            this.detail = resdata.data
            this.store_province = resdata.data.store_province;
            this.store_city = resdata.data.store_city;
            this.store_district = resdata.data.store_district;
            this.store_Address = resdata.data.store_Address;
            this.store_name = resdata.data.store_name;
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
.shopimg_b {
  margin-top: 15px;
  width: 92%;
  height: 170px;
  border-radius: 5px;
}
.shopimg_b img {
  width: 100%;
  height: 100%;
}
.txt {
  font-size: 12px;
  color: #dcdddf;
}
.dw_img {
  width: 10px;
  height: 12px;
}
.dt {
  line-height: 40px;
}
.miaosu_b {
  margin-top: 12px;
}
.miaosu {
  width: 92%;
}
.shop_name {
  font-size: 15px;
  font-weight: 700;
  height: 50px;
  line-height: 55px;
}

.shop_intro {
  font-size: 12px;
  color: #808080;
  padding-bottom: 20px;
}
</style>