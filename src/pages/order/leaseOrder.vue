<template>
  <div>
    <!-- <div class="nav bgc border-b flex-jc-center">
      <div :class="{ selected: selected==0 }" @click="nav(0)">租赁单</div>
      <div :class="{ selected: selected==1 }" @click="nav(1)">租转售</div>
    </div> -->

    <div id="ordernav">
      <van-tabs @click="ontag" v-model="active">
        <van-tab :title="item.name" v-for="(item,index) in navarr" :key="index">
          <div slot="title" class="position tag">
            <div class="dot" v-if="item.count!=0"><van-tag plain round color="#4EA9F9">{{item.count}}</van-tag></div>
            {{item.name}}
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <div class="list" >
      <div class="ordernull"  v-if="list.length==0">
        <img src="../../assets/order-null.png" alt="" class="mar-b-10">
        <div class="text-c fc-grey">暂无订单</div>
      </div>

      <OrderCard v-for="(item,index) in list" :key="index" :data="item" :active="active">
        <div class="flex-center border" @click="onshowmodel(item.order_id)" v-if="item.order_status==1">取消订单</div>
        <div class="flex-center border-blue fc-blue" v-if="item.order_status==1" @click="gopay(item.order_id)">
          支付
        </div>
        <div class="flex-center border-blue fc-blue" v-if="item.order_status==5" @click="onConfirmGoods(item.order_id)">确认收货</div>
        <div class="flex-center border" v-if="item.order_status==4" @click="del(item.order_id)">删除订单</div>
        <!-- <div class="flex-center border">朋友代还</div> -->
        <div class="flex-center border" v-if="(item.order_status==9&&item.user_validation==0)||(item.order_status==9&&!item.user_validation)">
          <router-link v-bind="{to: '/deny/'+item.order_id}">否认</router-link>
        </div>
        <div class="flex-center border-blue fc-blue" v-if="(item.order_status==9&&item.user_validation==0)||(item.order_status==9&&!item.user_validation)" @click="onConfirmsales(item.order_id)">确认</div>
        <div class="flex-center border-blue fc-blue" v-if="item.order_status==9&&item.user_validation==1&&item.maintenance_pay==0&&item.service_money&&item.service_money>0" @click="gocompensation(item.order_id)">
          维修费
        </div>
        <div class="flex-center border" @click="getcode(item.order_id,1)" v-if="item.order_status==5">取货码</div>
        <div class="flex-center border" v-if="item.order_status==6" @click="gorelet(item.order_id)">续租</div>
        <div class="flex-center border-blue fc-blue" v-if="active==5">
          <router-link v-bind="{to: `/comments/${item.order_id}/${item.goods_id}`}">评价</router-link>
        </div>
        <div class="flex-center border" v-if="item.order_status==6" @click="gorefund(item.order_id)">退租</div>
        <div class="flex-center border-blue fc-blue" v-if="item.order_status==6" @click="goshopping">购买</div> 
      </OrderCard> 

      <!-- <OrderCard status="待评价" v-show="active==5">
         <div class="flex-center border-blue fc-blue">
          <router-link v-bind="{to: '/comments'}">去评价</router-link>
        </div>
      </OrderCard> 
      <OrderCard status="已超期" v-show="active==4">
         <div class="flex-center border-blue fc-blue">
           <router-link v-bind="{to: '/shopping'}">购买</router-link>
        </div>
        <div class="flex-center border">
          <router-link v-bind="{to: '/refund'}">退租</router-link>
        </div>
        <div class="flex-center border"><router-link v-bind="{to: '/relet'}">续租</router-link></div>
      </OrderCard> 
      <OrderCard status="已结束" v-show="active==6">
        <div class="flex-center border">删除订单</div>
      </OrderCard> 
      <OrderCard status="订单关闭" v-show="active==7">
        <div class="flex-center border">删除订单</div>
      </OrderCard> 
      <OrderCard status="订单超时" v-show="active==7">
        <div class="flex-center border">删除订单</div>
        <div class="flex-center border-blue fc-blue" >重新下单</div>
      </OrderCard> 
      <OrderCard status="检测中" v-show="active==3"></OrderCard> 
      <OrderCard status="售后中" v-show="active==3"></OrderCard> 
      <OrderCard status="待确认" v-show="active==3">
        <div class="flex-center border">
          <router-link v-bind="{to: '/deny'}">否认</router-link>
        </div>
        <div class="flex-center border-blue fc-blue">确认</div>
      </OrderCard> 
      <OrderCard status="退押金中" v-show="active==3"></OrderCard> 
      <OrderCard status="待付款" v-show="active==0">
        <div class="flex-center border" @click="onshowmodel">取消订单</div>
        <div class="flex-center border-blue fc-blue">支付</div>
      </OrderCard>
      <OrderCard status="已确认" v-show="active==2">
        <div class="flex-center border-blue fc-blue" >确认收货</div>
      </OrderCard>
      <OrderCard status="已预定" v-show="active==2">
        <div class="flex-center border-blue fc-blue">支付</div>
      </OrderCard>
      <OrderCard status="待收货" v-show="active==2">
        <div class="flex-center border">朋友代取</div>
        <div class="flex-center border" @click="getcode">取货码</div>
        <div class="flex-center border-blue fc-blue" >确认收货</div>
      </OrderCard>
      <OrderCard status="预租待确认" v-show="active==1"></OrderCard> 
      <OrderCard status="租赁中" v-show="active==3">
        <div class="flex-center border-blue fc-blue">
           <router-link v-bind="{to: '/shopping'}">购买</router-link>
        </div>
        <div class="flex-center border">
          <router-link v-bind="{to: '/refund'}">退租</router-link>
        </div>
        <div class="flex-center border"><router-link v-bind="{to: '/relet'}">续租</router-link></div>
      </OrderCard>
      <OrderCard status="退租中" v-show="active==3">
        <div class="flex-center border" >朋友代还</div>
        <div class="flex-center border" @click="getcode">自还码</div>
      </OrderCard> -->
    </div>

    <div class="model full flex-column-center position" v-show="showcode">
      <div class="closeimg" @click="getcode"><van-icon name="close" color="#fff"/></div>
      <img
        :src="codeimg"
        alt="QRcode"
        class="codeimg"
      >
      <div style="color:#fff">请出示此二维码供门店扫码</div>
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
              @click="radio = index"
              v-for="(item,index) in canceltext"
              :key="index"
            >
              <span>{{index+1}}、{{item.text}}</span>
              <van-radio :name="index" checked-color="#2DBBF1"></van-radio>
            </div>
          </van-radio-group>
        </div>
        <div class="pd-15">
          <div class="btn text-c" @click="cancelOrder(orderid)">提交</div>
        </div>
    </van-popup>

  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";
import { Toast,Dialog } from "vant";

export default {
  components: {
    OrderCard
  },
  beforeRouteEnter(to, from, next) {
    let urlarr = ['订单详情','评价','续租','退租','否认','预约快递','维修费','自行寄回']
    if(urlarr.includes(from.meta.title)) {
        to.meta.isBack = true;
    }
    next();
  },
  data() {
    return {
      // selected: 0,
      active: 0,
      navarr: [
        {name:'待付款',count:0},
        {name:'预租中',count:0},
        {name:'已预定',count:0},
        {name:'租赁中',count:0},
        {name:'已超期',count:0},
        {name:'待评价',count:0},
        {name:'已评价',count:0},
        {name:'已取消',count:0},
      ],
      // navarr0: [
      //   {name:'待付款',count:0},
      //   {name:'预租中',count:0},
      //   {name:'已预定',count:0},
      //   {name:'租赁中',count:0},
      //   {name:'已超期',count:0},
      //   {name:'待评价',count:0},
      //   {name:'已评价',count:0},
      //   {name:'已取消',count:0},
      // ],
      // navarr1: [
      //   {name:'待付款',count:0},
      //   {name:'待发货',count:0},
      //   {name:'待收货',count:0},
      //   {name:'待评价',count:0},
      //   {name:'已完成',count:0},
      // ],
      radio: 0,
      canceltext: [{ id: 1, text: "我不想租了" },{ id: 2, text: "商品规格填错了" },{ id: 3, text: "收货地址写错了" },{ id: 4, text: "支付有问题" },{ id: 5, text: "重新下单" },{ id: 6, text: "测试下单/误下单" }, { id: 7, text: "其他" }],
      showmodel: false,
      showcode: false,
      list:[],
      orderid:'',
      codeimg:'',
    };
  },
  beforeCreate(){
    Dialog.close()
    if(!window.localStorage.getItem("userinfo")){
      this.$router.replace({ path: "/login" })
    }
  },
  created(){  
    this.isFirstEnter = true;
    this.getlist()
  },
  methods: {
    gopay(id){
      window.sessionStorage.removeItem("wxpaySession");
      this.$router.push({ path: `/pay/${id}` });
    },
    gorelet(id){
      window.sessionStorage.removeItem("wxpayReletSession");
      this.$router.push({ path: `/relet/${id}` });
    },
    gocompensation(id){
      window.sessionStorage.removeItem("wxpayCompensationSession");
      this.$router.push({ path: `/compensation/${id}` });
    },
    // nav(n) {
    //   this.selected = n;
    //   if (n == 0) {
    //     this.navarr = this.navarr0;
    //     this.active = 0
    //     this.getlist()
    //   }
    //   if (n == 1) {
    //     this.navarr = this.navarr1;
    //     this.active = 0
    //     this.list = [] //测试
    //   }
    // },
    ontag(index, title) {
      console.log(index, title);
      this.active = index;
      this.getlist()
    },
    onshowmodel(id){
      this.orderid = id
      if(this.showmodel){
          this.showmodel = false
      }else{
          this.showmodel = true
      } 
    },
    goshopping(){
      window.sessionStorage.removeItem('shoppingSession');
      this.$router.push({ path: "/shopping" });
    },
    gorefund(id){
      window.sessionStorage.removeItem('refundSession');
      this.$router.push({ path: "/refund/"+id });
    },
    //二维码
    getcode(id,type) {
      if(this.showcode){
          this.showcode = false
      }else{
        Toast.loading({ mask: true,message: '加载中...'})
        let postData = this.$qs.stringify({
          users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_id:id,
          way: type
        });
        this.axios.post(this.API + "api/Lease_Order/pickupCode", postData)
        .then(res => {
          console.log(res.data, "code");
          let resdata = res.data;
          if (resdata.code == 200) {
            Toast.clear()
            this.codeimg = resdata.data
            this.showcode = true
          } else {
            Toast.clear()
            Toast(resdata.message);
          }
        });
      } 
    },

    getlist(){  
      // if(this.selected==0){
        Toast.loading({ mask: true,message: '加载中...'})
        let postData = this.$qs.stringify({
          users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_status:this.active
        });
        this.axios.post(this.API + "api/Lease_Order/LeaseQuery", postData)
        .then(res => {
          console.log(res.data, "list");
          let resdata = res.data;
          if (resdata.code == 200) {
            Toast.clear()
            let countarr = []
            let arr = []
            for(let [k, v] of Object.entries(resdata.data)){
              if(k=='count'){
                countarr = v
              }else{
                arr.push(v)
              }
            }

            for(let [k,v] of this.navarr.entries()){
              v.count = countarr[k]
            }
            
            this.list = arr
          } else {
            Toast.clear()
            this.list = []
            Toast(resdata.message);
          }
        })
        .catch(error => {
          this.list = []
          Toast('网络出错')
        });
      // }  
    },
    //取消订单
    cancelOrder(id){
      Toast.loading({ mask: true,message: '加载中...'})
      let postData = this.$qs.stringify({
          users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_id:id,
          withouTreason: this.canceltext[this.radio].text
        });
        this.axios.post(this.API + "api/Lease_Order/cancelOrder", postData)
        .then(res => {
          console.log(res.data, "cancelOrder");
          let resdata = res.data;
          if (resdata.code == 200) {
            Toast.clear()
            this.showmodel = false
            this.getlist()
          } else {
            Toast.clear()
            Toast(resdata.message);
          }
        });
    },
    //确认收货
    onConfirmGoods(id){
      Toast.loading({ mask: true,message: '加载中...'})
      let postData = this.$qs.stringify({
          users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_id:id,
        });
        this.axios.post(this.API + "api/Lease_Order/confirmReceipt", postData)
        .then(res => {
          console.log(res.data, "onConfirmGoods");
          let resdata = res.data;
          if (resdata.code == 200) {
            Toast.clear()
            this.getlist()
          } else {
            Toast.clear()
            Toast(resdata.message);
          }
        });
    },
    //删除
    del(id){
      Toast.loading({ mask: true,message: '加载中...'})
      let postData = this.$qs.stringify({
          users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_id:id,
        });
        this.axios.post(this.API + "api/Lease_Order/delOrder", postData)
        .then(res => {
          console.log(res.data, "del");
          let resdata = res.data;
          if (resdata.code == 200) {
            Toast.clear()
            this.getlist()
          } else {
            Toast.clear()
            Toast(resdata.message);
          }
        });
    },
    //确认售后
    onConfirmsales(id){
      Toast.loading({ mask: true,message: '加载中...'})
      let postData = this.$qs.stringify({
          // users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
          order_id:id,
        });
        this.axios.post(this.API + "api/Lease_Order/afterSalesConfirmation", postData)
        .then(res => {
          console.log(res.data, "onConfirmsales");
          let resdata = res.data;
          if (resdata.code == 200) {
            Toast.clear()
            this.getlist()
          } else {
            Toast.clear()
            Toast(resdata.message);
          }
        });
    }
  },

  activated() {
     if(!this.$route.meta.isBack || this.isFirstEnter){
       this.active=0,
       this.list=[]
       this.radio=0
       this.getlist()
     }else{
       this.getlist()       
     }
     
     this.$route.meta.isBack=false
     this.isFirstEnter=false;
  },
};
</script>

<style>
#ordernav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
/* #ordernav .van-tab span {
  font-size: 8px;
} */
</style>

<style scoped>
.ordernull {
  width: 85px;
  height: 66px;
  margin: 0 auto;
  margin-top:110px;
}

/* .height{
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
} */

.tag .dot{
  position: absolute;
  top:1px;
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