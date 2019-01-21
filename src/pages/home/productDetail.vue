<template>
  <div>
    <div class="bgc" style="padding-bottom:10px;">
      <div class="flex-jc-center banner_box">
        <div class="banner flex-center bgc">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in images" :key="index">
              <img :src="item">
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="flex-jc-center">
        <div class="product bgc">
          <div class="flex-jc-between">
            <div>
              <div class="product_title">日本 instax拍立得</div>
              <div class="grey_12">一次成像相机</div>
            </div>
            <div class="flexbox">
              <div class="text-c">
                <div>
                  <img class="img_sc" src="../../assets/tab/my.png" alt>
                </div>
                <div class="grey_12">收藏</div>
              </div>
              <div class="text-c margin_left" @click="showmodel = true">
                <div>
                  <img class="img_sc" src="../../assets/tab/my.png" alt>
                </div>
                <div class="grey_12">分享</div>
              </div>
            </div>
          </div>

          <div class="flex-jc-between price_box">
            <div>
              <span class="product_title">低至</span>
              <span>¥</span>
              <span class="price">1.08</span>
              <span class="fsize13">/日</span>
            </div>
            <div class="fsize13">押金: ¥1000.00</div>
          </div>
        </div>
      </div>
      <div class="suggest flex-jc-center">
        <div class="suggest_tip">如果您计划远期使用，为了确保档期，建议您先预付定金预定设备</div>
      </div>
    </div>

    <div class="bgc" style="margin-top:10px;">
      <van-cell is-link @click="discountmodel = true">
        <template slot="title">
          <span class="lab">活动</span>
          <span class="custom-text">新人下单立减50元</span>
        </template>
      </van-cell>
      <div class="flex-jc-around duo_mian">
        <div class="grey_12 flex-align-items">
          <img class="img_zq" src="../../assets/tab/my.png" alt>多门店自取
        </div>
        <div class="grey_12 flex-align-items">
          <img class="img_myj" src="../../assets/tab/my.png" alt>免押金
        </div>
      </div>
    </div>

    <div class="bgc process">
      <div class="rule">租赁流程和规则</div>

      <div class="flex-jc-around position process_det">
        <div class="text-c">
          <div>
            <img class="img_xdlc" src="../../assets/tab/my.png" alt>
          </div>
          <div class="fsize13">下单</div>
        </div>
        <div class="grey_line1"></div>
        <div class="text-c">
          <div>
            <img class="img_xdlc" src="../../assets/tab/my.png" alt>
          </div>
          <div class="fsize13">送货</div>
        </div>
        <div class="grey_line2"></div>
        <div class="text-c">
          <div>
            <img class="img_xdlc" src="../../assets/tab/my.png" alt>
          </div>
          <div class="fsize13">归还</div>
        </div>
      </div>
    </div>

    <div class="bgc flex-jc-center word_mouth_box">
      <div class="word_mouth">
        <div class="flex-jc-between border-b word_num" @click="toMouthw">
          <div>
            <span>口碑</span>
            <span>(999+)</span>
          </div>
          <div>
            <span>97.6%</span>
            <img class="img_r" src="../../assets/tab/right.png" alt>
          </div>
        </div>
        <div class="border-b" v-for="(item,index ) in wordlist">
          <div class="flex-align-items head_name">
            <img class="head_img" src="../../assets/tab/my.png" alt>
            <span>李***莉</span>
            <span>
              <van-rate v-model="value" disabled disabled-color="#FFB10E" size="12"/>
            </span>
          </div>
          <div>
            <span class="grey_12">2018-12-5 15:00</span>
            <span class="grey_12">租期:1年</span>
          </div>
          <div class="com_det">
            很优秀哦 相机很好看 拍出来的照片也很好看 总体都很优秀 超
            级喜欢 加上水晶壳就更优秀了 很多模式可以玩 适合爱拍照的
            人 如果只是想记录生活的话 我觉得mini9就够了 总之很喜欢！
          </div>
          <div class="imglist" v-for="(item,index) in imglist">
            <!-- <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt> -->
            <img class="itemimg" src="item">
          </div>
        </div>
      </div>
    </div>
    <div class="bgc flex-jc-center" style="margin-top:10px">
      <div class="product_det">
        <div class="dettail">产品详情</div>
        <div>
          <span class="grey_12">商品名称</span>
          <span>INSTAXmini90</span>
        </div>
        <div class="weight">
          <span class="grey_12">商品毛重</span>
          <span>0.58kg</span>
        </div>
        <div>
          <span class="grey_12">使用相纸尺寸</span>
          <span>富士小尺寸</span>
        </div>
        <img
          class="pro_img"
          src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg"
          alt
        >
      </div>
    </div>
    <div style=" height: 50px;"></div>
    <div class="bgc footer flex-align-items border-t">
      <div class="flex-jc-between">
        <div class="text-c margin_left">
          <div>
            <img class="img_kf" src="../../assets/tab/my.png" alt>
          </div>
          <div class="f10_col">在线客服</div>
        </div>
        <div class="text-c margin_left">
          <div>
            <img class="img_kf" src="../../assets/tab/my.png" alt>
          </div>
          <div class="f10_col">电话客服</div>
        </div>
        <div class="btn bcolor padding_lr margin_left">给朋友送礼</div>
        <div class="btn bcol padding_lr margin_left">立即租赁</div>
      </div>
    </div>
    <!-- 分享弹窗 -->
    <div class="model full" v-show="showmodel">
      <div class="main bgc">
        <div class="text-c position">
          <div class="flex-jc-center">
            <div class="s_title border-b fsz">分享</div>
          </div>
          <div class="flex-jc-around border-b" style="padding:15px 0">
            <div class="text-c">
              <div>
                <img class="img_fx" src="../../assets/tab/my.png" alt>
              </div>
              <div class="grey_12">朋友圈</div>
            </div>
            <div class="text-c">
              <div>
                <img class="img_fx" src="../../assets/tab/my.png" alt>
              </div>
              <div class="grey_12">微信</div>
            </div>
            <div class="text-c">
              <div>
                <img class="img_fx" src="../../assets/tab/my.png" alt>
              </div>
              <div class="grey_12">微博</div>
            </div>
          </div>
          <div class="close" @click="showmodel = false">取消</div>
        </div>
      </div>
    </div>

    <!-- 优惠活动弹窗 -->
    <div class="model full" v-show="discountmodel">
      <div class="main bgc">
        <div class="position">
          <div class="flex-jc-center">
            <div class="s_title border-b fsz text-c">优惠活动</div>
          </div>
          <div class="flexbox" v-for="(item,index) in discountlist">
            <div class="lineheight pd-lr-15 border-b">
              <span class="dis_clasify">[新用户]</span>
              <span class="grey_12">新人下单立减50元</span>
            </div>
          </div>

          <div class="close text-c" @click="discountmodel = false">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg"
      ],
      imglist: [
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg"
      ],
      wordlist: [{}, {}],
      discountlist: [{}, {}],
      value: 5,
      showmodel: false,
      discountmodel: false
    };
  },
  methods: {
    //口碑
    toMouthw() {
      this.$router.push({ path: "/WordMouth" });
    }
  }
};
</script>

<style scoped>
.fsize13 {
  font-size: 13px;
}
.grey_12 {
  font-size: 12px;
  color: #979797;
}
.banner_box {
  width: 100%;
  padding-top: 10px;
}
.banner {
  width: 92%;
  height: 230px;
  box-shadow: 0px 1px 7px 1px rgba(233, 235, 237, 1);
}
.banner img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}

.product {
  width: 92%;
  height: 100%;
  padding-top: 10px;
}
.product_title {
  font-size: 17px;
  font-weight: 500;
}
.img_sc {
  width: 19px;
  height: 20px;
}
.price_box {
  padding: 15px 0;
}
.price {
  color: #f21e1e;
  font-size: 18px;
}
.suggest {
  width: 100%;
  background-color: rgba(255, 245, 229, 1);
  font-size: 12px;
  color: #e97e00;
  padding: 5px 0;
}
.suggest_tip {
  width: 92%;
  font-size: 12px;
}
.lab {
  background: #fc3434;
  color: #fff;
  padding: 2px 5px;
}
.rule {
  padding: 15px 0 12px 10px;
  font-size: 15px;
  font-weight: 600;
}

.img_xdlc {
  width: 35px;
  height: 35px;
}
.duo_mian,
.word_num {
  height: 36px;
  line-height: 36px;
}
.img_zq {
  width: 13px;
  height: 16px;
  margin-right: 10px;
}
.img_myj {
  width: 17px;
  height: 17px;
  margin-right: 10px;
}
.process {
  margin-top: 10px;
}
.process_det {
  padding-bottom: 15px;
}
.grey_line1 {
  position: absolute;
  width: 50px;
  border-bottom: 2px #aeaeae dashed;
  height: 2px;
  top: 15px;
  left: 80px;
}
.grey_line2 {
  position: absolute;
  width: 50px;
  border-bottom: 2px #aeaeae dashed;
  height: 2px;
  top: 15px;
  left: 190px;
}

.word_mouth_box {
  margin-top: 10px;
  padding: 10px 0;
}
.word_mouth {
  width: 92%;
  height: 100%;
}
.head_name,
.com_det {
  padding: 5px 0;
}
.head_img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.com_det {
  padding-top: 5px;
}
.img_r {
  width: 7px;
  height: 11px;
}
.imglist {
  display: inline-block;
  padding: 10px 0;
}
.itemimg {
  width: 88px;
  height: 89px;
  border-radius: 5px;
  margin-right: 10px;
}
.product_det {
  width: 92%;
  height: 100%;
}
.dettail {
  font-size: 15px;
  font-weight: 600;
  padding: 13px 0;
}
.weight {
  padding: 10px 0;
}
.pro_img {
  width: 100%;
  height: 450px;
  border-radius: 5px;
  padding: 10px 0;
}
.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
}
.btn {
  height: 32px;
  line-height: 32px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  border-radius: 20px;
}
.bcolor {
  background: #b49a7a;
}
.bcol {
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
}

.img_kf {
  width: 18px;
  height: 18px;
}
.f10_col {
  font-size: 10px;
  color: #030303;
}
.padding_lr {
  padding: 0 15px;
}
.margin_left {
  margin-left: 10px;
}

.model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.model .main {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.s_title {
  width: 92%;
  height: 40px;
  line-height: 40px;
}
.img_fx {
  width: 50px;
  height: 50px;
}

.close,
.lineheight {
  height: 50px;
  line-height: 50px;
  width: 100%;
}

.dis_clasify {
  font-size: 12px;
  color: #fc3434;
}
</style>

