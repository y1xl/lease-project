<template>
  <div>
    <div class="nav bgc border-b flex-jc-center">
      <div :class="{ selected: selected==0 }" @click="nav(0)">租赁单</div>
      <div :class="{ selected: selected==1 }" @click="nav(1)">租转售</div>
    </div>

    <div id="ordernav">
      <van-tabs @click="ontag" v-model="active">
        <!-- <van-tab :title="item" v-for="(item,index) in navarr" :key="index"></van-tab> -->
        <van-tab :title="item" v-for="(item,index) in navarr" :key="index">
          <div slot="title" class="position tag">
            <div class="dot"><van-tag plain round color="#4EA9F9">1</van-tag></div>
            {{item}}
          </div>
        </van-tab>
      </van-tabs>
    </div>

      <!-- <div class="ordernull">
        <img src="../../assets/order-null.png" alt="" class="mar-b-10">
        <div class="text-c">暂无订单</div>
      </div> -->

    <div class="list">
      <OrderCard>
        <!-- <div class="flex-center border-blue fc-blue">支付</div> -->
        <div class="flex-center border" @click="onshowmodel">取消订单</div>
        <!-- <div class="flex-center border" >重新下单</div> -->
        <!-- <div class="flex-center border-blue fc-blue" >确认收货</div> -->
        <!-- <div class="flex-center border-blue fc-blue" >支付</div> -->
        <!-- <div class="flex-center border">删除订单</div> -->
        <!-- <div class="flex-center border">朋友代还</div> -->
        <!-- <div class="flex-center border">
          <router-link v-bind="{to: '/deny'}">否认</router-link>
        </div> -->
        <!-- <div class="flex-center border-blue fc-blue">确认</div> -->
        <div class="flex-center border" @click="getcode">取货码</div>
        <!-- <div class="flex-center border" @click="getcode">自还码</div> -->
        <div class="flex-center border"><router-link v-bind="{to: '/relet'}">续租</router-link></div>
        <!-- <div class="flex-center border-blue fc-blue">
          <router-link v-bind="{to: '/comments'}">评价</router-link>
        </div> -->
        <!-- <div class="flex-center border">
          <router-link v-bind="{to: '/refund'}">退租</router-link>
        </div> -->
        <!-- <div class="flex-center border">
          <router-link v-bind="{to: '/shopping'}">购买</router-link>
        </div> -->
      </OrderCard>  
    </div>

    <div class="height"></div>

    <div class="model full flex-column-center position" v-show="showcode">
      <div class="closeimg" @click="getcode"><van-icon name="close" color="#fff"/></div>
      <img
        src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg"
        alt="QRcode"
        class="codeimg"
      >
      <div style="color:#fff">请出示此二维码供门店扫码取货</div>
    </div>

    <van-popup v-model="showmodel" position="bottom" :close-on-click-overlay="false">
        <div class="text-c position title" >
          取消订单
          <div class="closeicon"><van-icon name="close" @click="onshowmodel"/></div>
        </div>
        <div class="pd-lr-15">
          <div style="padding:20px 0">请选择取消订单的原因,帮助我们改进(必选):</div>
          <van-radio-group v-model="radio">
            <div
              class="flex-jc-between mar-b-10"
              @click="radio = item.id"
              v-for="(item,index) in canceltext"
              :key="index"
            >
              <span>{{index+1}}、{{item.text}}</span>
              <van-radio :name="item.id" checked-color="#2DBBF1"></van-radio>
            </div>
          </van-radio-group>
        </div>
        <div class="pd-15">
          <div class="btn text-c">提交</div>
        </div>
    </van-popup>

  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";
export default {
  components: {
    OrderCard
  },
  data() {
    return {
      selected: 0,
      active: 0,
      navarr: ["待付款", "预租中", "已预订", "租赁中", "已超期", "待评价"],
      navarr0: ["待付款", "预租中", "已预订", "租赁中", "已超期", "待评价"],
      navarr1: ["待付款", "待发货", "待收货", "待评价", "已完成"],
      radio: 1,
      canceltext: [{ id: 1, text: "我不想租了" }, { id: 2, text: "其他" }],
      showmodel: false,
      showcode: false
    };
  },
  methods: {
    nav(n) {
      this.selected = n;
      if (n == 0) {
        this.navarr = this.navarr0;
        this.active = 0
      }
      if (n == 1) {
        this.navarr = this.navarr1;
        this.active = 0
      }
    },
    ontag(index, title) {
      console.log(index, title);
      this.active = index;
    },
    onshowmodel(){
      if(this.showmodel){
          // document.documentElement.style.position = 'static';
          // document.body.style.overflow = ''; //出现滚动条
          this.showmodel = false
      }else{
          // document.documentElement.style.position = 'fixed';
          // document.documentElement.style.width = '100%';
          // document.body.style.overflow = 'hidden'; //隐藏滚动条
          this.showmodel = true
      } 
    },
    getcode() {
      if(this.showcode){
          // document.documentElement.style.position = 'static';
          // document.body.style.overflow = ''; //出现滚动条
          this.showcode = false
      }else{
          // document.documentElement.style.position = 'fixed';
          // document.documentElement.style.width = '100%';
          // document.body.style.overflow = 'hidden'; //隐藏滚动条
          this.showcode = true
      } 
    },
  }
};
</script>

<style>
#ordernav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
#ordernav .van-tab span {
  font-size: 8px;
}
</style>

<style scoped>
.ordernull {
  width: 85px;
  height: 66px;
  margin: 0 auto;
  margin-top:110px;
}

.height{
  height: 50px;
}
.nav {
  height: 42px;
  line-height: 42px;
}
.nav > div {
  color: #666;
  font-size: 16px;
}
.nav > div:nth-of-type(1) {
  margin-right: 50px;
}
.nav .selected {
  color: #000;
  font-weight: bold;
}

.tag .dot{
  position: absolute;
  top:0;
  right:0;
}

.list {
  padding: 14px;
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
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
.codeimg {
  width: 180px;
  height: 180px;
  margin-bottom:20px;
}
.closeimg {
  width: 34px;
  height: 34px;
  position: absolute;
  right: 20px;
  top: 100px;
  font-size:34px;
}
.title .closeicon{
  position: absolute;
  right:10px;
  top:10px;
  font-size:20px
}
.title {
  font-size:16px;
  padding-top:15px;
}
</style>