<template>
    <div>
        <header class="header bgc mar-b-10 box-sizing">
            <div class="text-c">您的可用额度(元)</div>
            <div class="text-c num">{{info.users_money||'0'}}</div>
            <div class="text-c marb20"><router-link class="lines" to="/certification">提升额度</router-link></div>
            <div class="text-c mar-b-10 fsz12">保险费{{info.order_safe||'-'}}元，总租金{{info.order_rental||'-'}}元，总押金{{info.order_total_rent||'-'}}元</div>
            <div class="text-c">您需支付<span class="fc-red"> ¥{{info.total_price||'-'}}</span></div>
        </header>

        <div class="bgc">
            <div class="border-b pd-15">请选择支付方式</div>
            <van-radio-group v-model="radio">
                <div class="flex-jc-between border-b pd-15" @click="radio = '1'">
                    <div><img src="../../assets/weixin.png" alt="微信" class="payimg">微信</div>
                    <van-radio name="1" checked-color="#2DBBF1"></van-radio>
                </div>
                <div class="flex-jc-between border-b pd-15" @click="radio = '2'">
                    <div><img src="../../assets/ali.png" alt="支付宝" class="payimg">支付宝</div>
                    <van-radio name="2" checked-color="#2DBBF1"></van-radio>
                </div>
                <div class="flex-jc-between pd-15" @click="radio = '3'">
                    <div><img src="../../assets/balance.png" alt="余额" class="payimg">余额<span class="fc-red"> ¥{{info.users_balance}}</span></div>
                    <van-radio name="3" checked-color="#2DBBF1"></van-radio>
                </div>
            </van-radio-group>
        </div>

        <div class="pd15"><button class="btn text-c" @click="submit">支付</button></div>

        <van-popup v-model="showWXpay" :close-on-click-overlay='false'>
            <div class="wxbox">
                <p class="text-c border-b">请确认微信支付是否完成</p>
                <p class="text-c fc-red border-b"><router-link to='/order'>已完成支付</router-link></p>
                <p class="text-c fc-grey" @click="showWXpay = false">支付遇到问题，重新支付</p>
            </div>
        </van-popup>

    </div>
</template>

<script>
import { Toast,Dialog } from "vant";
import { isWeiXin } from "@/utils/util.js";
export default {
    data(){
        return{
            radio:'3',
            info:'',
            showWXpay:false
        }
    },
    created(){
        let wxpaySession = JSON.parse(window.sessionStorage.getItem("wxpaySession"))
        if(wxpaySession){
            if(wxpaySession.orderid==this.$route.params.orderid){
                this.showWXpay = wxpaySession.state
            }
        }
        this.getfaceRes() 
    },
    mounted(){
        this.getinfo()
    },
    methods:{ 
        getfaceRes() {
            let postData = {
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
            };
            this.axios.post("api/Order/CheckFace", postData)
            .then(res => {
                console.log(res.data, "getfaceRes");
                let resdata = res.data;
                if (resdata.code == 200) {
                    
                } else {
                    Dialog.alert({
                        message: resdata.message
                    }).then((e) => {
                        this.$router.replace({ path: "/face/"+this.$route.params.orderid })
                    });
                }
            })
            .catch(error => {
                Toast('网络出错')
            });
        },

        getinfo() {
            Toast.loading({ mask: true, message: "加载中..." });
            let postData = {
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                order_id : this.$route.params.orderid
            };
            this.axios.post("api/Order/GetPayData", postData)
            .then(res => {
                console.log(res.data, "info");
                let resdata = res.data;
                if (resdata.code == 200) {
                    Toast.clear();
                    this.info = resdata.data;
                } else {
                    Toast.clear();
                    Toast(resdata.message);
                }
            })
            .catch(error => {
                Toast.clear();
                Toast('网络出错')
            });
        },
        submit(){
            if(this.radio==1){
                // Toast('微信功能未开通')
                Toast.loading({ mask: true,message: '加载中...',duration:0})
                let postData = {
                    users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                    order_id : this.$route.params.orderid,
                    pay_way: this.radio
                };
                this.axios.post("api/Order/GetPay", postData)
                .then(res => {
                    console.log(res.data, "wxpay");
                    let resdata = res.data
                    if (resdata.code == 200) {
                        Toast.clear()
                        let wxpaySession = {
                            orderid:this.$route.params.orderid,
                            state: true
                        }
                        window.sessionStorage.setItem("wxpaySession", JSON.stringify(wxpaySession))
                        window.location.href = resdata.data
                    } else {
                        Toast.clear()
                        Toast(resdata.message);
                    }
                })
                .catch(error => {
                    Toast.clear()
                    Toast('网络出错')
                });
            }
            if(this.radio==2){
                // Toast('支付宝功能未开通')
                if(isWeiXin()){
                    Dialog.alert({
                        message: '请在浏览器中打开网页完成支付'
                    }).then((e) => {

                    });
                    return
                }
                
                Toast.loading({ mask: true,message: '加载中...',duration:0})
                let postData = {
                    users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                    order_id : this.$route.params.orderid,
                    pay_way: this.radio
                };
                this.axios.post("api/Order/GetPay", postData)
                .then(res => {
                    console.log(res.data, "alipay");
                    window.sessionStorage.removeItem("wxpaySession");
                    Toast.clear()
                    
                    const form = res.data;
                    const div = document.createElement('div');
                    div.id = 'alipay';
                    div.style.opacity='0'
                    div.innerHTML = form;
                    document.body.appendChild(div);
                    document.querySelector('#alipay').children[0].submit(); 
                    // this.$router.replace({
                    //     path: '/applyText',
                    //     query: {html: res.data}
                    // })
                })
                .catch(error => {
                    Toast.clear()
                    Toast('网络出错')
                });
            }
            if(this.radio==3){
                Toast.loading({ mask: true,message: '加载中...',duration:0})
                let postData = {
                    users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                    order_id : this.$route.params.orderid,
                    pay_way: this.radio
                };
                this.axios.post("api/Order/GetPay", postData)
                .then(res => {
                    console.log(res.data, "submit");
                    let resdata = res.data;
                    if (resdata.code == 200) {
                        Toast.clear()
                        Dialog.alert({
                            message: '支付成功'
                        }).then((e) => {
                            this.$router.replace({ path: "/order" })
                        });
                    } else {
                        Toast.clear()
                        Toast(resdata.message||'操作失败');
                    }
                })
                .catch(error => {
                    Toast.clear()
                    Toast('网络出错')
                });
            }
        }
    }
}
</script>

<style scoped>
.fsz12{
    font-size: 12px
}
.payimg{
    width: 20px;
    height: 20px;
    padding-right: 10px;
    vertical-align: middle;
}
.marb20{
    margin-bottom: 20px;
}
.header {
    padding-top: 10px;
    padding-bottom:10px;
}
.header .num {
    font-size: 40px;
    color: #2ebbf1;
    margin: 15px 0;
}
.header .lines {
    color: #FC8502;
    width: 90px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    box-shadow: 0px 1px 7px 1px #DAD7D7;
    border-radius: 5px;
    font-size: 12px
}

.btn{
    width: 100%;
    display:block;
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
.pd15{
    padding:15px;
}

.wxbox {
    width: 200px;
}
.wxbox > p {
    padding: 10px 0;
}
</style>
