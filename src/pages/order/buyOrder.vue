<template>
    <div>
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

        <div class="list">
            <div class="ordernull"  v-if="list.length==0">
                <img src="../../assets/order-null.png" alt="" class="mar-b-10">
                <div class="text-c fc-grey">暂无订单</div>
            </div>

            <!-- <OrderCard status="待发货"></OrderCard> 
            <OrderCard status="待付款">
                <div class="flex-center border" @click="onshowmodel">取消订单</div>
                <div class="flex-center border-blue fc-blue">支付</div>
            </OrderCard>
            <OrderCard status="待评价">
                <div class="flex-center border-blue fc-blue">
                <router-link v-bind="{to: '/comments'}">去评价</router-link>
                </div>
            </OrderCard> 
            <OrderCard status="待收货">
                <div class="flex-center border">朋友代取</div>
                <div class="flex-center border" @click="getcode">取货码</div>
                <div class="flex-center border-blue fc-blue" >确认收货</div>
            </OrderCard>
            <OrderCard status="已完成"></OrderCard>  -->
        </div>
    </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";
import { Toast,Dialog } from "vant";

export default {
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
        }
    },
    beforeCreate(){
        Dialog.close()
        if(!window.localStorage.getItem("userinfo")){
        this.$router.replace({ path: "/login" })
        }
    },
    methods:{
        ontag(index, title) {
            console.log(index, title);
            this.active = index;
        },
    }
}
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

.tag .dot{
  position: absolute;
  top:1px;
  right:0;
}

.list {
  padding: 14px;
}
</style>
