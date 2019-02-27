<template>
  <div>
    <div class="bgc" style="padding-bottom:10px;">
      <div class="flex-jc-center banner_box position">
        <div class="caricon fc-red" @click="showinfocar=true">
          <van-icon name="shopping-cart"/>
        </div>
        <div class="banner bgc" id="goodsbanner">
          <van-swipe :autoplay="autoplay" @change="onChange">
            <van-swipe-item v-if="detail.goods_video">
              <div class="img_box" style="background: #000">
                <!-- <video 
                id="video" 
                ref="video"
                :src="detail.goods_video" 
                controls preload muted 
                playsinline="true"
                x-webkit-airplay="true" 
                x5-playsinline="true"
                webkit-playsinline="true" 
                x5-video-player-type="h5"
                style="width:100%;height:100%;object-fit:fill" 
                >
                </video> -->
                <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)">
                </video-player>
              </div>
            </van-swipe-item>
            <van-swipe-item v-for="(item, index) in detail.gd_img" :key="index">
              <div class="img_box">
                <img :src="item" >
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="flex-jc-center">
        <div class="product bgc">
          <div class="flex-jc-between">
            <div class="flex-1">
              <div class="product_title">{{detail.goods_name}}</div>
            </div>
            <div class="flexbox">
              <div class="text-c" @click="oncollection">
                <div>
                  <img v-if="iscollection" class="img_sc" src="../../assets/shoucang-red.png" alt>
                  <img v-else class="img_sc" src="../../assets/shoucang.png" alt>
                </div>
                <div class="grey_12">收藏</div>
              </div>
              <div class="text-c fenxiang_l" @click="showmodel = true">
                <div>
                  <img class="img_fen" src="../../assets/fenxiang.png" alt>
                </div>
                <div class="grey_12">分享</div>
              </div>
            </div>
          </div>

          <div class="flex-jc-between price_box flex-align-items">
            <div>
              <span class="product_title">低至</span>
              <span class="fc-red">¥</span>
              <span class="price">{{detail.hire_price?detail.hire_price.price:'-'}}</span>
              <span class="fsize13">/{{detail.hire_price?detail.hire_price.unt:'-'}}</span>
            </div>
            <div class="fsize13">押金: ¥{{detail.gd_deposit}}</div>
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
          <img class="img_zq" src="../../assets/ziti.png" alt>多门店自取
        </div>
        <div class="grey_12 flex-align-items">
          <img class="img_myj" src="../../assets/tuikuan.png" alt>免押金
        </div>
      </div>
    </div>

    <div class="bgc process">
      <div class="rule">租赁流程和规则</div>

      <div class="flex-jc-around position process_det">
        <div class="text-c">
          <div>
            <img class="img_xdlc" src="../../assets/chenggong.png" alt>
          </div>
          <div class="fsize13">下单</div>
        </div>
        <div class="grey_line1"></div>
        <div class="text-c">
          <div>
            <img class="img_xdlc" src="../../assets/chenggong_c.png" alt>
          </div>
          <div class="fsize13">送货</div>
        </div>
        <div class="grey_line2"></div>
        <div class="text-c">
          <div>
            <img class="img_xdlc" src="../../assets/chenggong_copy.png" alt>
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
            <!-- <span>(0)</span> -->
          </div>
          <div class="flex-align-items">
            <!-- <span>97.6%</span> -->
            <img class="img_r" src="../../assets/right.png" alt>
          </div>
        </div>
        <div class="wordlist_box" v-for="(item,index ) in wordlist" :key="index">
          <div class="flex-align-items head_name">
            <img class="head_img" src="../../assets/my.png" alt>
            <span>李***莉</span>
            <span>
              <van-rate disabled disabled-color="#FFB10E" size="12"/>
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
          <div class="imglist" v-for="(item,index) in imglist" :key="index">
            <img class="itemimg" :src="item">
          </div>
        </div>
      </div>
    </div>
    <div class="bgc flex-jc-center" style="margin-top:10px">
      <div class="product_det">
        <div class="dettail">产品详情</div>
        <div v-html="detail.gd_desc"></div>
      </div>
    </div>

    <div class="height"></div>
    <div class="bgc footer flex-align-items border-t">
      <div class="flex-jc-between">
        <div class="text-c margin_left">
          <div>
            <img class="img_kf" src="../../assets/kefu.png" alt>
          </div>
          <div class="f10_col">在线客服</div>
        </div>
        <div class="text-c margin_left">
          <div>
            <a :href="`tel:${tel}`">
            <img class="img_kf" src="../../assets/tel.png" alt>
            </a>
          </div>
          <div class="f10_col">
            电话客服
          </div>
        </div>
        <div class="btn bcolor padding_lr margin_left">给朋友送礼</div>
        <div class="btn bcol padding_lr margin_left" @click="showinfo=true">立即租赁</div>
      </div>
    </div>
    <!-- 分享弹窗 -->
    <van-popup v-model="showmodel" position="bottom" :close-on-click-overlay="false">
      <div class="text-c position">
        <div class="flex-jc-center">
          <div class="s_title border-b fsz">分享</div>
        </div>
        <div class="flex-jc-around border-b" style="padding:15px 0">
          <div class="text-c">
            <div>
              <img class="img_fx" src="../../assets/f_friend.png" alt>
            </div>
            <div class="grey_12">朋友圈</div>
          </div>
          <div class="text-c">
            <div>
              <img class="img_fx" src="../../assets/f_weixin.png" alt>
            </div>
            <div class="grey_12">微信</div>
          </div>
          <div class="text-c">
            <div>
              <img class="img_fx" src="../../assets/f_weibo.png" alt>
            </div>
            <div class="grey_12">微博</div>
          </div>
        </div>
        <div class="close" @click="showmodel = false">取消</div>
      </div>
    </van-popup>
    <!-- 优惠活动弹窗 -->
    <van-popup v-model="discountmodel" position="bottom" :close-on-click-overlay="false">
      <div class="position">
        <div class="flex-jc-center">
          <div class="s_title border-b fsz text-c">优惠活动</div>
        </div>
        <div class="flexbox" v-for="(item,index) in discountlist" :key="index">
          <div class="lineheight pd-lr-15 border-b">
            <span class="dis_clasify">[新用户]</span>
            <span class="grey_12">新人下单立减50元</span>
          </div>
        </div>

        <div class="close text-c" @click="discountmodel = false">取消</div>
      </div>
    </van-popup>
    <!-- 选择规格 -->
    <div class="model full" v-show="showinfo||showinfocar">
      <div class="main bgc">
        <div class="goods1 flexbox pd-15">
          <img :src="detail.gd_img[0]" alt style="object-fit:contain">
          <div class="flex-1">
            <div class="mar-b-10 position title">{{detail.goods_name}}
              <div class="closeicon" @click="showinfo=false,showinfocar=false">
                <van-icon name="close"/>
              </div>
            </div>
            <div class="mar-b-10">
              <span class="fc-red">¥{{detail.hire_price.price||'-'}}</span>
              <span class="fsz10">/{{detail.hire_price.unt||'-'}}</span>
            </div>
            <div class="fsz10">请选择规格属性</div>
          </div>
        </div>
        <div class="pd-lr-15">
          <div v-for="(item,index) in speclist" :key="index">
            <div class="mar-b-10 fsz12" >{{item.spec_name}}</div>
            <div class="items mar-b-10" >
              <div :class="items.checked?'border-blue fc-blue':'border'" v-for="(items,indexs) in item.spec" :key="indexs" @click="onchooseguige(index,indexs)">{{items.attr_name}}</div>
            </div>
          </div>

          <!-- <div class="mar-b-10 fsz12">数量</div>
          <div>
            <van-stepper v-model="numval"/>
          </div>-->
        </div>
        <div class="pd-15" v-show="showinfo">
          <div class="gbtn text-c" @click="gobuy">开始下单</div>
        </div>
        <div class="pd-15" v-show="showinfocar">
          <div class="gbtn text-c" @click="addcart">加入购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    videoPlayer,
  },
  data() {
    return {
      autoplay:3000,
      imglist: [
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" 
      ],
      wordlist: [],
      discountlist: [],
      showmodel: false,
      discountmodel: false,
      numval: "",
      showinfo: false,
      showinfocar: false,
      iscollection: false,
      detail:'',
      speclist: [],
      playerOptions: {
        autoplay: false, 
        muted: false,
        loop: false, 
        preload: 'auto',
        aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，它将按比例缩放以适应其容器。
        sources: [],
        poster: "", 
        notSupportedMessage: '此视频暂无法播放，请稍后重试',
      },
      tel:''
    };
  },
  beforeCreate(){
    if (!window.localStorage.getItem("userinfo")) {
      this.$router.replace({ path: "/login" });
    }
  },
  created(){
    this.getdetail()
  },
  mounted(){
    this.gettel()
    this.getguige()
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    gettel() {
      this.axios.post(this.API + "api/Order/GetServiceTel").then(res => {
        console.log(res.data, "tel");
        let resdata = res.data;
        if (resdata.code == 200) {
          this.tel = resdata.data
        } else {
          Toast(resdata.message);
        }
      });
    },
    onChange(index) {
      if(index!=0){
        this.autoplay = 3000
        this.$refs.videoPlayer.player.pause() //暂停
      }
      // console.log(this.player,index);
    },
    onPlayerPlay(player) {
      console.log("play");
      this.autoplay = 0
    },
    onPlayerPause(player){
      console.log("pause");
      this.autoplay = 3000
    },
    
    getdetail(){
      Toast.loading({ mask: true,message: '加载中...'})
      let postData = this.$qs.stringify({
            goods_id:this.$route.params.id
        })
      this.axios.post(this.API + "api/Lease/Goods_Detail",postData)
      .then(res => {
        console.log(res.data, "Goods_Detail")
        let resdata = res.data
        if (resdata.code == 200) {
          Toast.clear()
          this.detail = resdata.data
          this.playerOptions.sources = [{src:resdata.data.goods_video}]
        } else {
          Toast.clear()
          Toast(resdata.message)
        }
        
      })
      .catch(error => {
        Toast('网络出错')
      });
    },
    getguige(){
      let postData = this.$qs.stringify({
            goods_id:this.$route.params.id
        })
      this.axios.post(this.API + "api/Lease/Goods_spec",postData)
      .then(res => {
        console.log(res.data, "getguige")
        let resdata = res.data
        if (resdata.code == 200) {
          this.speclist = resdata.data;
        } else {
          // Toast(resdata.message)
        }
      });
    },
    //选择规格
    onchooseguige(index,indexs){
      let speclist = this.speclist
      for(let [k,v] of speclist.entries()){
        if(k == index){
          for(let [k1,v1] of v.spec.entries()){
            if(k1 == indexs){
              v1.checked = true
              console.log(v1)
            }else {
              v1.checked = false
            }
          }
        }
      }
      this.speclist = [...speclist]
    },
    // 收藏
    oncollection() {
      this.iscollection = !this.iscollection;
    },
    //口碑
    toMouthw() {
      this.$router.push({ path: "/WordMouth" });
    },

    gobuy() {
      let arr = []
      for(let v of this.speclist){
        for (let v1 of v.spec){
          if (v1.checked){
            arr.push(v1)
          }
        }
      }
      if(this.speclist.length==0){
        window.sessionStorage.removeItem("buySession");
        this.$router.push({
            path: '/buy',
            query: {
              id: this.$route.params.id,
              // guige: ''
            }
        })
        return
      }
      if(arr.length == this.speclist.length){
        window.sessionStorage.removeItem("buySession");
        this.$router.push({
            path: '/buy',
            query: {
              id: this.$route.params.id,
              guige: encodeURI(JSON.stringify(arr))
            }
        })
      }else{
        Toast('请先选择规格')
      }
    },
    addcart(){
      let arr = []
      let attr_ids = []
      let attr_names = []
      for(let v of this.speclist){
        for (let v1 of v.spec){
          if (v1.checked){
            arr.push(v1)
            attr_ids.push(v1.guigezhi_id)
            attr_names.push(v1.attr_name)
          }
        }
      }

      if(this.speclist.length==0){
        let postData = this.$qs.stringify({
            gd_id:this.$route.params.id,
            users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
            cart_num:1,
            cart_price:this.detail.hire_price.price,
            attr_ids: attr_ids.length==0 ? '' : attr_ids.join(','),
            attr_names: attr_names.length==0 ? '' : attr_names.join(','),
        })
        this.axios.post(this.API + "api/Lease/Add_cart",postData)
        .then(res => {
          console.log(res.data, "addcart")
          let resdata = res.data
          if (resdata.code == 200) {
            Toast('添加成功')
          } else {
            Toast(resdata.message)
          }
        });
        return
      }
      if(arr.length == this.speclist.length){

        let postData = this.$qs.stringify({
            gd_id:this.$route.params.id,
            users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
            cart_num:1,
            cart_price:this.detail.hire_price.price,
            attr_ids: attr_ids.length==0 ? '' : attr_ids.join(','),
            attr_names: attr_names.length==0 ? '' : attr_names.join(','),
        })
        this.axios.post(this.API + "api/Lease/Add_cart",postData)
        .then(res => {
          console.log(res.data, "addcart")
          let resdata = res.data
          if (resdata.code == 200) {
            Toast('添加成功')
          } else {
            Toast(resdata.message)
          }
        });

      }else{
        Toast('请先选择规格')
      }
    }
  }
};
</script>

<style>
video {
  object-fit:fill;
}
</style>


<style scoped>
.height {
  height: 50px;
}
.fsize13 {
  font-size: 13px;
}
.grey_12 {
  font-size: 12px;
  color: #979797;
}
.banner_box {
  width: 100%;
  padding-top: 15px;
}
.banner {
  width: 290px;
  height: 230px;
  box-shadow: 0px 1px 7px 1px rgba(233, 235, 237, 1);
  overflow: hidden;
}
.img_box {
  /* width: 290px; */
  height: 230px;
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
.camera {
  line-height: 20px;
}
.img_sc {
  width: 20px;
  height: 19px;
}
.img_fen {
  width: 19px;
  height: 19px;
}
.price_box {
  padding: 10px 0;
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
  font-size: 10px;
  background: #fc3434;
  border-radius: 10px;
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
}
.word_mouth {
  width: 92%;
  height: 100%;
}
.wordlist_box {
  border-bottom: 1px solid #f0f0f0;
}
.word_mouth :last-child {
  border-bottom: 1px solid #fff;
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
  height: 13px;
  margin-left: 10px;
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
  width: 100%;
  height: 100%;
  padding: 10px;
}
.dettail {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
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
  bottom: 48px;
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
.fenxiang_l {
  height: 35px;
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid #b7b7b7;
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

.caricon {
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 24px;
  z-index: 100;
}
/* 选择规格 */
.fsz12 {
  font-size: 12px;
}
.fsz10 {
  font-size: 10px;
}
.model .items > div {
  padding: 2px 10px;
  display: inline-block;
  border-radius: 2px;
  margin-right: 10px;
}
.model .closeicon {
  position: absolute;
  right: -5px;
  top: -5px;
  font-size: 18px;
}
.goods1 img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
  background-color: #f6f6f6;
}
.goods1 .title {
  padding-right: 10px;
}
.gbtn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
</style>

