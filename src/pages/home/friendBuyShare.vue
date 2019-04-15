<template>
    <div>
        <div class="bgc">
            <div class="pd-15">选择取货方式</div>
            <div class="nav bgc pd-lr-15">
                <div :class="{ 'fc-blue selected': typenum==0 }" @click="typenum=0">自取</div>
                <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">快递</div>
                <div :class="{ 'fc-blue selected': typenum==2 }" @click="typenum=2">配送</div>
            </div>
        </div>

        <div class="main">
            <van-cell is-link center @click="go('/calendar/friendBuyShare')">
                <template slot="title">
                    <div>起租时间</div>
                    <div>{{date}}</div>
                </template>
            </van-cell>

            <van-cell center>
                <div slot="title" class="flex-align-items">
                <span>特殊需求备注</span>
                <input type="text" placeholder="请输入" v-model="remarkval" class="pdl10">
                </div>
            </van-cell>
        </div>

        <div class="pd-15">
            <div class="btn text-c" >确认</div>
        </div>
        <p class="fsz-12 text-c fc-grey">说明:确认完并发送给送礼人，由送礼人完成支付</p>
    </div>
</template>

<script>
import { Toast,Dialog } from "vant";
export default {
    data(){
        return {
            typenum: 0,
            date:'',
            remarkval:''
        }
    },
    beforeCreate(){
        if (!window.localStorage.getItem("userinfo")) {
            Dialog.alert({
                message: '请先登录'
            }).then((e) => {
                this.$router.push({ path: "/login?friendBuyShare=1" });
            });
            return
        }
    },
    created() {
        let friendBuyShare = JSON.parse(window.sessionStorage.getItem("friendBuyShare"));
        if(friendBuyShare){
            this.typenum = friendBuyShare.typenum
            this.date = friendBuyShare.date
            this.remarkval = friendBuyShare.remarkval
        }
    },
    methods:{
        go(url){
            let friendBuyShare = {
                date: this.date,
                typenum: this.typenum,
                remarkval:this.remarkval,
            }
            window.sessionStorage.setItem("friendBuyShare", JSON.stringify(friendBuyShare));
            this.$router.push({ path: url });
        },
    }
}
</script>

<style scoped>
.pdl10 {
  padding-left: 10px;
}
.nav {
  padding-bottom: 20px;
}
.nav > div {
  width: 80px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  box-shadow: 0 1px 7px 1px #e8e9ea;
  border-radius: 20px;
  text-align: center;
  box-sizing: border-box;
  font-size: 13px;
  margin-right: 10px;
}
.nav .selected {
  box-shadow: 0 1px 7px 1px #def4fd;
}

.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
</style>
