<template>
  <div>
    <div class="flex-jc-between top_sear bgc">
      <div class="dw flex-align-items">
        附近门店：
        <span class="fc-blue text-line">{{nearShop}}</span>
      </div>
      <div class="sear flex-align-items" @click="gosearch">
        <van-icon name="search"/>
        <span>搜索你想要的商品</span>
      </div>
    </div>
    <div class="flex-jc-center bgc" v-show="active==0">
      <div class="banner bgc">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <div class="img_box">
              <img :src="item.adpic_img">
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="flex-jc-around bgc" v-show="active==0">
      <div class="tg" @click="gohosting">
        <img src="../assets/tuoguan.png"> 我要托管
      </div>
      <div class="tg">
        <router-link to="/Extension">
          <img src="../assets/wytg.png"> 我要推广
        </router-link>
      </div>
      <div class="tg">
        <router-link to="/WelfareAgency">
          <img src="../assets/fls.png"> 福利社
        </router-link>
      </div>
    </div>

    <div id="nav" class="bgc">
      <van-tabs v-model="active" @click="onClicknav">
        <van-tab title="热门">
          <div v-for="(item,key) in indexlist" :key="key">
            <div class="flex-jc-between flex-align-items hb">
              <div class="title">{{item.scene_name}}</div>
              <div class="m_txt flex-align-items" @click="more(item.scene_id)">更多
                <van-icon name="arrow"/>
              </div>
            </div>
            <div class="flex-jc-between border-b bgc camer_hm_box">
              <div
                class="camer_hm"
                @click="toDetail(goods.goods_id)"
                v-for="(goods,index) in item.goods"
                :key="index"
              >
                <div class="img_box2 flex-center">
                  <img class="img" :src="goods.gd_img[0]">
                </div>
                <div class="text-line pro_name">{{goods.goods_name}}</div>
                <div class="f12">
                  <span style="color: #F21E1E;">¥</span>
                  <span class="price">{{goods.hire_price.price}}</span>
                  /{{goods.hire_price.unt}}
                </div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab :title="item.cate_name" v-for="(item,index) in navlist" :key="index">
          <div class="title" v-show="!hostlist.length==0">热门推荐</div>
          <div class="flex-jc-between border-b bgc camer_hm_box" v-show="!hostlist.length==0">
            <div
              class="camer_hm"
              v-for="(goods,index) in hostlist"
              :key="index"
              @click="toDetail(goods.goods_id)"
            >
              <div class="img_box2 flex-center">
                <img class="img" :src="goods.gd_img[0]">
              </div>
              <div class="text-line pro_name">{{goods.goods_name}}</div>
              <div class="f12">
                <span style="color: #F21E1E;">¥</span>
                <span class="price">{{goods.hire_price.price}}</span>
                /{{goods.hire_price.unt}}
              </div>
            </div>
          </div>

          <div class="bgc">
            <div class="title">所有产品</div>
            <div
              class="fl_pro_list mar-b-10"
              v-for="(item, index) in goodslist"
              :key="index"
              @click="toDetail(item.goods_id)"
            >
              <div class="img_box">
                <img class="sy_img" :src="item.gd_img[0]">
              </div>
              <div class="f14 pro_name">{{item.goods_name}}</div>
              <div class="com_like">
                <van-rate v-model="item.eva_score" disabled disabled-color="#FFB10E"/>
                <span class="f12">{{item.eva_score}}</span>
                <div>
                  <img class="chat" src="../assets/chat.png">
                  <span class="f12">{{item.eva_num}}</span>
                </div>
              </div>
              <div class="zj">
                <span class="f14">租金：</span>
                <span class="price">¥{{item.hire_price.price}}</span>
                <span class="f12">/{{item.hire_price.unt}}</span>
              </div>
            </div>
          </div>

          <div
            v-show="goodslist.length==0"
            class="fc-grey text-c pd-15"
            style="background-color: #f6f6f6;"
          >没有更多了</div>
        </van-tab>
      </van-tabs>
    </div>

    <div class="em"></div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    let self = this;
    return {
      lat: "",
      lng: "",
      images: [],
      indexlist: [],
      navlist: [],
      goodslist: [],
      hostlist: [],
      active: 0,
      nearShop: ""
    };
  },

  created() {
    if (!window.localStorage.getItem("userinfo")) {
      this.$router.replace({ path: "/login" });
    }
    this.getLocation();
    this.getnav();
    this.getbanner();
    this.getindexlist();
  },

  methods: {
    getLocation() {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(position => {
          var lat = position.coords.latitude; //纬度
          var lng = position.coords.longitude; //经度
          this.lat = lat;
          this.lng = lng;
          this.getNearShop(lat, lng);
          let center = {
            lat,
            lng
          };
          window.localStorage.setItem("center", JSON.stringify(center));
        });
      } else {
        Toast("浏览器不支持地理定位");
      }
    },
    gohosting() {
      window.sessionStorage.removeItem("gohostingSession");
      this.$router.push({ path: "/gohosting" });
    },
    //更多
    more(id) {
      this.$router.push({ path: "/Goods/" + id });
    },
    //产品详情
    toDetail(id) {
      this.$router.push({ path: "/ProductDetail/" + id });
    },
    gosearch() {
      window.sessionStorage.removeItem("searchSession");
      this.$router.push({ path: "/search" });
    },

    onClicknav(i) {
      if (i == 0) {
      } else {
        Toast.loading({ mask: true, message: "加载中..." });
        let postData = this.$qs.stringify({
          cate_id: this.navlist[i - 1].cate_id
        });
        this.axios
          .post(this.API + "api/Lease/cate_goods", postData)
          .then(res => {
            console.log(res.data, "goodslist");
            let resdata = res.data;
            if (resdata.code == 200) {
              Toast.clear();
              this.goodslist = resdata.data.goods;
              this.hostlist = resdata.data.remen;
            } else {
              Toast.clear();
              Toast(resdata.message);
            }
          });
      }
    },

    getbanner() {
      this.axios.post(this.API + "api/Lease/Rotation_chart").then(res => {
        console.log(res.data, "getbanner");
        let resdata = res.data;
        if (resdata.code == 200) {
          this.images = resdata.data;
        } else {
          Toast(resdata.message);
        }
      });
    },
    getnav() {
      this.axios.post(this.API + "api/Lease/cate_select").then(res => {
        console.log(res.data, "getnav");
        let resdata = res.data;
        if (resdata.code == 200) {
          this.navlist = resdata.data;
        } else {
          Toast(resdata.message);
        }
      });
    },
    getindexlist() {
      Toast.loading({ mask: true, message: "加载中..." });
      this.axios.post(this.API + "api/Lease/goods_select").then(res => {
        console.log(res.data, "getindexlist");
        let resdata = res.data;
        if (resdata.code == 200) {
          Toast.clear();
          this.indexlist = resdata.data;
        } else {
          Toast.clear();
          Toast(resdata.message);
        }
      });
    },
    getNearShop(lat, lng) {
      let postData = this.$qs.stringify({
        lat: lat,
        lng: lng
        // lat:'22.54605355',
        // lng:'114.02597366'
      });
      this.axios
        .post(this.API + "api/Lease/Nearby_store", postData)
        .then(res => {
          console.log(res.data, "Nearby_store");
          let resdata = res.data;
          if (resdata.code == 200) {
            this.nearShop =
              resdata.data.store_province +
              resdata.data.store_district +
              resdata.data.store_city;
          } else {
            Toast(resdata.message);
          }
        });
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
.f12 {
  font-size: 12px;
}

.top_sear {
  width: 100%;
  height: 44px;
}

.sear {
  width: 50%;
  height: 32px;
  margin: 5px 12px 0 0;
  border-radius: 15px;
  background: #f6f5f5;
}

.sear .van-icon {
  padding-left: 10px;
}

.dw {
  width: 50%;
  height: 44px;
  line-height: 44px;
  margin-left: 13px;
  font-size: 13px;
}
.dw span {
  display: inline-block;
  width: 50px;
  height: 100%;
}

.banner {
  width: 290px;
  height: 160px;
}
.img_box {
  width: 290px;
  height: 160px;
}
.img_box img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.tg {
  text-align: center;
  font-size: 12px;
  line-height: 30px;
  padding: 20px 0;
}

.tg img {
  display: block;
  width: 50px;
  height: 50px;
}

/* .img {
  display: block;
  width: 50px;
  height: 75px;
} */

.title {
  font-size: 17px;
  font-weight: 600;
  padding: 10px;
}

.m_txt {
  font-size: 12px;
  color: #d0d0d0;
  margin-right: 13px;
}

.cp_box {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin: 0px auto;
}
.content {
  width: 100%;
  overflow-x: scroll;
  /*子元素的宽度大于父元素的即可滚动*/
  overflow-y: hidden;
  border-radius: 4px;
  margin-left: 12px;
}
.redPacket {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /*float: left;*/
  /*使其脱离文档流 宽度为所有字元素的和*/
  min-width: 100%;
}
.item {
  min-width: 105px;
  height: 200px;
  -webkit-align-items: center;
  -ms-flex-align: center;
}
.img_box1 {
  width: 105px;
  height: 125px;
  background: #f7f7f7;
}
.amount {
  text-align: center;
  padding-right: 10px;
  font-size: 12px;
  color: #ffd41d;
  border-right: 1px solid #ffa068;
}
.pro_title {
  width: 120px;
  padding-left: 5px;
  line-height: 30px;
}
.price_box {
  padding-left: 5px;
}
.price {
  font-size: 14px;
  color: #f21e1e;
}
.camer_hm_box {
  width: 100%;
  height: 175px;
}

.camer_hm_box > div:nth-child(1) {
  margin-left: 10px;
}
.camer_hm_box > div:nth-child(3) {
  margin-right: 10px;
}
.camer_hm {
  width: 95px;
  height: 175px;
}
.img_box2 {
  width: 95px;
  height: 110px;
  background: #f7f7f7;
}

/*分类 所有产品*/
.fl_pro_list {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.fl_pro_list:last-child {
  /* margin-bottom: 48px; */
}
.img_box {
  width: 100%;
  height: 150px;
}

.sy_img {
  width: 300px;
  height: 150px;
  border-radius: 10px;
}

.pro_name {
  margin-top: 5px;
  line-height: 30px;
}
.com_like {
  display: flex;
  line-height: 22px;
}
.zj {
  line-height: 30px;
}
.chat {
  width: 16px;
  height: 14px;
  padding-left: 15px;
  vertical-align: middle;
}

.em {
  width: 100%;
  height: 60px;
}
</style>