<template>
  <div>
    <div class="bgc pd-15">选择购买产品</div>
    <div class="nav bgc pd-lr-15">
      <div :class="{ 'fc-blue selected': selected==0 }" @click="selected=0">全新正品</div>
      <div :class="{ 'fc-blue selected': selected==1 }" @click="selected=1">本机</div>
    </div>
    <div class="pd-lr-15 bgc mar-b-10">
      <div class="goods flexbox">
        <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt>
        <div class="flex-1">
          <div class="mar-b-10">日本 instax拍立得</div>
          <div v-if="selected==0">该新品官方价格 ¥6000.00</div>
          <div v-if="selected==1">本机原价 ¥6000.00</div>
        </div>
      </div>
      <div class="price">目前销售价格
        <span class="fc-red">¥6000.00</span>
      </div>
    </div>

    <template v-if="selected==0">
      <div class="flex-jc-between pd-15 bgc border-b flex-align-items" @click="showinfo=true">
        <span>选择规格参数</span>
        <span class="flex-align-items fc-grey fsz12">黑色,1件
          <van-icon name="arrow"/>
        </span>
      </div>

      <div class="bgc">
        <div class="pd-15">取货方式</div>
        <div class="nav bgc pd-lr-15">
          <div :class="{ 'fc-blue selected': typenum==0 }" @click="typenum=0">自取</div>
          <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">快递</div>
          <div :class="{ 'fc-blue selected': typenum==2 }" @click="typenum=2">配送</div>
        </div>
      </div>

      <div class="mar-b-10 main">
        <div
          class="flex-jc-between flex-align-items pd-15 bgc"
          v-show="typenum==1||typenum==2"
          @click="go(`/addresslist/shopping`)"
        >
          <div>
            <div>收货地址</div>
            <div class="fsz12">{{getaddress.name}} {{getaddress.phone}}
              <van-tag plain v-if="getaddress.default">默认</van-tag>
            </div>
            <div class="fsz12">{{getaddress.address}}</div>
          </div>
          <span class="fc-grey fsz12">
            <van-icon name="arrow"/>
          </span>
        </div>

        <template v-if="typenum==0">
          <div
            class="flex-jc-between flex-align-items pd-15 bgc border-b"
            @click="go(`/locationList/shopping`)"
          >
            <div>
              <div>自取地点</div>
              <div class="fsz12">{{getlocation.title}}</div>
              <div class="fsz12">{{getlocation.address}}</div>
            </div>
            <span class="fc-grey fsz12">
              <van-icon name="arrow"/>
            </span>
          </div>
          <div class="flex-jc-between pd-15 bgc border-b flex-align-items" @click="go('/calendar/shopping')">
            <span>自取时间</span>
            <span class="flex-align-items fc-grey fsz12">
              {{datechoose}}
              <van-icon name="arrow"/>
            </span>
          </div>
          <div class="flex-jc-between pd-15 bgc border-b flex-align-items" @click="showtime=true">
            <span>时间点</span>
            <span class="flex-align-items fc-grey fsz12">
              {{timetext}}
              <van-icon name="arrow"/>
            </span>
          </div>
          <div class="flex-jc-between flex-align-items pd-15 bgc" @click="go('/people/shopping')">
            <div>
              <div>自取联系人</div>
              <div class="fsz12">{{people.name}} {{people.phone}}</div>
            </div>
            <span class="fc-grey fsz12">
              <van-icon name="arrow"/>
            </span>
          </div>
        </template>
      </div>
    </template>

    <div class="bgc mar-b-10">
      <template v-if="selected==0">
        <div class="flex-jc-between border-b pd-15">
          <span>租金抵扣</span>
          <span>¥3000.00</span>
        </div>
        <div class="flex-jc-between border-b pd-15">
          <span>到货时间</span>
          <span>1-3天</span>
        </div>
        <div class="flex-jc-between border-b pd-15">
          <span>享受优惠</span>
          <span>-¥50.00</span>
        </div>
      </template>
      <div class="flex-jc-between border-b pd-15" v-show="selected==1">
        <span>租金抵扣</span>
        <span>¥2050.00</span>
      </div>
      <div class="flex-jc-between pd-15">
        <span>应付总额</span>
        <span class="fc-red">¥2050.00</span>
      </div>
    </div>

    <div class="bgc">
      <div class="border-b pd-15">请选择支付方式</div>
      <van-radio-group v-model="radio">
        <div class="flex-jc-between border-b pd-15" @click="radio = '1'">
          <div>
            <img src="../../assets/weixin.png" alt="微信" class="payimg">微信
          </div>
          <van-radio name="1" checked-color="#2DBBF1"></van-radio>
        </div>
        <div class="flex-jc-between border-b pd-15" @click="radio = '2'">
          <div>
            <img src="../../assets/ali.png" alt="支付宝" class="payimg">支付宝
          </div>
          <van-radio name="2" checked-color="#2DBBF1"></van-radio>
        </div>
        <div class="flex-jc-between pd-15" @click="radio = '3'">
          <div>
            <img src="../../assets/balance.png" alt="余额" class="payimg">余额
            <span class="fc-red">¥2.00</span>
          </div>
          <van-radio name="3" checked-color="#2DBBF1"></van-radio>
        </div>
      </van-radio-group>
    </div>

    <div class="pd-15">
      <div class="btn text-c">支付</div>
    </div>

    <van-popup v-model="showtime" position="bottom" :close-on-click-overlay="false">
      <van-datetime-picker type="time" show-toolbar @cancel="showtime=false" @confirm="onConfirm"/>
    </van-popup>

    <van-popup v-model="showinfo" position="bottom" :close-on-click-overlay="false">
      <div class="model">
        <div class="goods1 flexbox pd-15">
          <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt>
          <div class="flex-1">
            <div class="mar-b-10 position title">日本 instax拍立得日本 instax拍立得
              <div class="closeicon" @click="showinfo=false">
                <van-icon name="close"/>
              </div>
            </div>
            <div class="mar-b-10">
              <span class="fc-red">¥1.08</span>
              <span class="fsz10">/日</span>
            </div>
            <div class="fsz10">请选择规格属性</div>
          </div>
        </div>
        <div class="pd-lr-15">
          <div class="mar-b-10 fsz12">颜色</div>
          <div class="items mar-b-10">
            <div class="border-blue fc-blue">黑色</div>
            <div class="border">褐色</div>
          </div>

          <div class="mar-b-10 fsz12">型号</div>
          <div class="items mar-b-10">
            <div class="border">型号1</div>
            <div class="border">型号2</div>
          </div>

          <div class="mar-b-10 fsz12">数量</div>
          <div>
            <van-stepper v-model="numval"/>
          </div>
        </div>
        <div class="pd-15">
          <div class="btn text-c">确认</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio:'1',
      selected: 0,
      typenum: 0,
      showtime: false,
      timetext: "",
      people: "",
      numval: "",
      showinfo: false,
      datechoose: "",
      getlocation:'',
      getaddress: ''
    };
  },

  created() {
    let shoppingSession = JSON.parse(window.sessionStorage.getItem("shoppingSession"));
    if(shoppingSession){
      this.typenum = shoppingSession.gettype
      this.datechoose = shoppingSession.getdate
      this.timetext = shoppingSession.gettime
      this.people = shoppingSession.getpeople
      this.getlocation = shoppingSession.getlocation
      this.getaddress = shoppingSession.getaddress
    }
    //取缓存 end
  },

  methods: {
    go(url){
      let shoppingSession = {
        gettype: String(this.typenum), //取货方式
        getlocation: this.getlocation, //自取地点
        getdate: this.datechoose,
        gettime: this.timetext,
        getpeople: this.people,
        getaddress:this.getaddress
      }
      window.sessionStorage.setItem("shoppingSession", JSON.stringify(shoppingSession));
      this.$router.push({ path: url });
    },
    onConfirm(value) {
      console.log(`当前值：${value}`);
      this.timetext = value;
      this.showtime = false;
    }
  }
};
</script>

<style scoped>
.payimg {
  width: 20px;
  height: 20px;
  padding-right: 10px;
  vertical-align: middle;
}
.fsz14 {
  font-size: 14px;
}
.fsz12 {
  font-size: 12px;
}
.fsz10 {
  font-size: 10px;
}
.nav {
  /* padding: 15px; */
  padding-bottom: 20px;
}
.nav > div {
  width: 80px;
  height: 30px;
  line-height: 30px;
  /* color: #666; */
  display: inline-block;
  box-shadow: 0 1px 7px 1px #e8e9ea;
  /* margin-left: 10px; */
  border-radius: 20px;
  text-align: center;
  box-sizing: border-box;
  font-size: 13px;
  margin-right: 10px;
}
.nav .selected {
  box-shadow: 0 1px 7px 1px #def4fd;
}
.goods {
  background-color: #f6f6f6;
  padding: 10px;
}
.goods img {
  width: 66px;
  height: 66px;
  background-color: #fff;
  margin-right: 10px;
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
.price {
  padding: 10px 0;
}

.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}

.model .main {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
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
</style>
