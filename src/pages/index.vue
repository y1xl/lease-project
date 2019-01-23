<template>
  <div class="bgc">
    <div class="flex-jc-between top_sear">
      <div class="dw">附近门店：</div>
      <router-link class="sear flex-align-items" to="/search">
        <van-icon name="search"/>
        <span>搜索你想要的商品</span>
      </router-link>
    </div>

    <div class="banner text-c" >
      <van-swipe :autoplay="3000" >
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img :src="item">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="flex-jc-around" v-show="active==0">
      <div class="tg">
        <router-link to="/gohosting">
          <img src="../assets/tuoguan.png"> 我要托管
        </router-link>
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

    <div id="nav">
      <van-tabs v-model="active">
        <van-tab title="热门">
          <div class="flex-jc-between hb">
            <div class="title">热门租赁</div>
            <div class="m_txt" @click="more">更多
              <van-icon name="arrow"/>
            </div>
          </div>

          <div class="cp_box">
            <div class="content">
              <div class="redPacket">
                <div
                  class="item"
                  v-for="(item, index) in prolist"
                  :key="index"
                  style="margin-right:10px;border-radius:4px;"
                  @click="toDetail"
                >
                  <div class="img_box1 flex-center">
                    <img class="img" src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg">
                  </div>
                  <div class="pro_title text-line">{{item.name}}</div>

                  <div class="f12 price_box">
                    <span style="color: #F21E1E;">¥</span>
                    <span class="price">{{item.price}}</span>/日
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="em"></div>
        </van-tab>
        <van-tab title="相机">
          <div class="hb">
            <div class="title">热门推荐</div>
          </div>
          <div class="flex-jc-between border-b bgc camer_hm_box">
            <div class="camer_hm" style="margin-left: 10px;">
              <div class="img_box2 flex-center">
                <img class="img" src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg">
              </div>
              <div class="text-line pro_name">日本 instax 拍日本 instax 拍</div>
              <div class="f12">
                <span style="color: #F21E1E;">¥</span>
                <span class="price">3.08</span>/日
              </div>
            </div>

            <div class="camer_hm">
              <div class="img_box2 flex-center">
                <img class="img" src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg">
              </div>
              <div class="text-line pro_name">日本 instax 拍日本 instax 拍</div>
              <div class="f12">
                <span style="color: #F21E1E;">¥</span>
                <span class="price">3.08</span>/日
              </div>
            </div>

            <div class="camer_hm" style="margin-right: 10px;">
              <div class="img_box2 flex-center">
                <img class="img" src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg">
              </div>
              <div class="text-line pro_name">日本 instax 拍日本 instax 拍</div>
              <div class="f12">
                <span style="color: #F21E1E;">¥</span>
                <span class="price">3.08</span>/日
              </div>
            </div>
          </div>
          <div class="hb">
            <div class="title">所有产品</div>
            <div class="fl_pro_list bgc" v-for="(item, index) in flprolist" :key="index">
              <div class="img_box">
                <img class="sy_img" :src="item.imgurl">
              </div>
              <div class="f14 pro_name">{{item.name1}}</div>
              <div class="com_like">
                <van-rate v-model="value" disabled disabled-color="#FFB10E"/>
                <span class="f12">4.9</span>
                <div>
                  <img class="chat" src="../assets/chat.png">
                  <span class="f12">999+</span>
                </div>
              </div>
              <div class="zj">
                <span class="f14">租金：</span>
                <span class="price">¥{{item.price1}}</span>
                <span class="f12">/日</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="游戏">游戏</van-tab>
        <van-tab title="手机">手机</van-tab>
        <van-tab title="影音">影音</van-tab>
        <van-tab title="酷玩">酷玩</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      lat: "",
      lag: "",
      images: [
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
        "https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
      ],
      prolist: [
        { price: "3.08", name: "日本 instax 拍日本 instax 拍" },
        { price: "3.08", name: "日本 instax 拍日本 instax 拍" },
        { price: "3.08", name: "日本 instax 拍日本 instax 拍" },
        { price: "3.08", name: "日本 instax 拍日本 instax 拍" }
      ],
      flprolist: [
        {
          imgurl:
            "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
          price1: "3.08",
          name1: "Canon/佳能 PowerShot SX720 HS "
        },
        {
          imgurl:
            "https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
          price1: "1111111",
          name1: "Canon/佳能 PowerShot SX720 HS "
        },
        {
          imgurl:
            "https://img01.sogoucdn.com/app/a/100520146/b732e3b76b88596d786a22fe47b41f99",
          price1: "3.08",
          name1: "Canon/佳能 PowerShot SX720 HS "
        }
      ],
      active: 0,
      value: 5
    };
  },

  created() {
    this.getLocation();
  },

  methods: {
    getLocation() {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(position => {
          var lat = position.coords.latitude; //纬度
          var lag = position.coords.longitude; //经度
          (this.lat = lat), (this.lag = lag);
        });
      } else {
        Toast("浏览器不支持地理定位");
      }
    },
    //更多
    more() {
      this.$router.push({ path: "/Goods" });
    },
    //产品详情
    toDetail() {
      this.$router.push({ path: "/ProductDetail" });
    },

  }
};
</script>
<style>
#nav .van-tabs__line {
  height: 3px;
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
#nav .van-tab span {
  font-size: 14px;
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

.banner {
  width: 100%;
  height: 160px;
}
.banner img {
  width: 93.3%;
  height: 160px;
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

.hb {
  height: 44px;
  line-height: 44px;
}

.title {
  font-size: 17px;
  font-weight: 600;
  margin-left: 10px;
}

.m_txt {
  font-size: 12px;
  color: d0d0d0;
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
  padding-bottom: 20px;
  padding-left: 10px;
}
.fl_pro_list:last-child {
  margin-bottom: 48px;
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
  padding-left:15px;
  vertical-align: middle;
}

.em {
  width: 100%;
  height: 60px;
}
</style>