<template>
    <div>
        <div id="ordernav">
            <van-tabs @click="ontag" v-model="active">
                <van-tab :title="item.name" v-for="(item,index) in navarr" :key="index">
                <div slot="title" class="position tag">
                    <div class="dot" v-if="item.count!=0"><van-tag plain round color="#4EA9F9">{{item.count|tagOmit}}</van-tag></div>
                    {{item.name}}
                </div>
                </van-tab>
            </van-tabs>
        </div>

        <div class="list">
            <div class="ordernull"  v-if="list.length==0">
                <img src="../../assets/order-null.png" alt="" class="mar-b-10">
                <div class="text-c fc-grey">暂无订单</div>
            </div>
            <lazy-component>
            <buyOrderCard v-for="(item,index) in list" :key="index" :data="item" :active="active">
                <div class="flex-center border" @click="onshowmodel(item.buyorder_id)" v-if="item.buyorder_status==1">取消订单</div>
                <div class="flex-center border-blue fc-blue" v-if="item.buyorder_status==1" @click="gopay(item.buyorder_id)">
                支付
                </div>
                <div class="flex-center border" @click="getcode(item.buyorder_id)" v-if="item.buyorder_status==4">取货码</div>
                <div class="flex-center border-blue fc-blue" v-if="item.buyorder_status==4" @click="onConfirmGoods(item.buyorder_id)">确认收货</div>
                <div class="flex-center border-blue fc-blue" v-if="item.buyorder_status==5">
                    <router-link v-bind="{to: `/comments/${item.buyorder_id}/${item.goods_id}?type=buyorder`}">评价</router-link>
                </div>
            </buyOrderCard>
            </lazy-component>
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
import buyOrderCard from "@/components/buyOrderCard";
import { Toast,Dialog } from "vant";
import { cancelOptions } from '@/utils/selectOptions';

export default {
    components: {
        buyOrderCard
    },
    beforeRouteEnter(to, from, next) {
        let urlarr = ['订单详情','评价','支付']
        if(urlarr.includes(from.meta.title)) {
            to.meta.isBack = true;
        }
        next();
    },
    data(){
        return{
            navarr: [
                {name:'待付款',count:0},
                {name:'待发货',count:0},
                {name:'待收货',count:0},
                {name:'待评价',count:0},
                {name:'已完成',count:0},
            ],
            active: 0,
            list:[],
            canceltext: cancelOptions,
            showmodel: false,
            orderid:'',
            radio: 0,
            showcode: false,
            codeimg:'',
        }
    },
    created(){
        this.isFirstEnter = true;
        this.getlist()
    },
    methods:{
        ontag(index, title) {
            console.log(index, title);
            this.active = index;
            this.getlist()
        },

        getlist(){
            Toast.loading({ mask: true,message: '加载中...'})
            let postData = {
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                status:this.active
            };
            this.axios.post("api/Buy_Order/LeaseQuery", postData)
            .then(res => {
                console.log(res.data, "buylist");
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
        },

        gopay(id){
            window.sessionStorage.removeItem("wxbuypaySession");
            this.$router.push({ path: `/buypay/${id}` });
        },
        onshowmodel(id){
        this.orderid = id
        if(this.showmodel){
            this.showmodel = false
        }else{
            this.showmodel = true
        } 
        },

        //确认收货
        onConfirmGoods(id){
            Toast.loading({ mask: true,message: '加载中...'})
            let postData = {
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                buyorder_id:id,
            };
            this.axios.post("api/Buy_Order/confirmReceipt", postData)
            .then(res => {
                console.log(res.data, "onConfirmGoods");
                let resdata = res.data;
                if (resdata.code == 200) {
                    Toast.clear()
                    this.getlist()
                } else {
                    Toast.clear()
                    Toast(resdata.message||'操作失败');
                }
            });
        },
        //二维码
        getcode(id) {
            if(this.showcode){
                this.showcode = false
            }else{
                Toast.loading({ mask: true,message: '加载中...'})
                let postData = {
                    buyorder_id:id
                };
                this.axios.post("api/Buy_Order/createCode", postData)
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
        //取消订单
        cancelOrder(id){
            Toast.loading({ mask: true,message: '加载中...'})
            let postData = {
            users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
            buyorder_id:id,
            withouTreason: this.canceltext[this.radio].text
            };
            this.axios.post("api/Buy_Order/cancelOrder", postData)
            .then(res => {
            console.log(res.data, "cancelOrder");
            let resdata = res.data;
            if (resdata.code == 200) {
                Toast.clear()
                this.showmodel = false
                this.getlist()
            } else {
                Toast.clear()
                Toast(resdata.message||'操作失败');
            }
            });
        },
    },
    activated() {
        Dialog.close()
        if(this.isFirstEnter){
        
        }else
        if(!this.$route.meta.isBack || this.isFirstEnter){
            this.active=0
            this.radio= 0
            this.list = []
            this.getlist()
        }else{
            this.getlist()
        }
        this.$route.meta.isBack=false
        this.isFirstEnter=false;
    },
}
</script>

<style>
/* #ordernav .van-tab span {
  font-size: 8px;
} */
</style>

<style scoped>
#ordernav >>> .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #6c76ed 0%, #74d2ff 100%);
}
.ordernull {
  width: 85px;
  height: 66px;
  margin: 0 auto;
  margin-top:110px;
}

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
