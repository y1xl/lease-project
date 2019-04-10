<template>
    <div>
        <div class="bgc pd-15 mar-b-10">
            <p style="color:#666">根据您是否购买保险</p>
            <p>实付维修费为<span class="fc-red">￥{{money||0}}</span></p>
        </div>
        <div class="bgc">
            <div class="border-b pd-15">请选择支付方式</div>
            <van-radio-group v-model="radio">
                <div class="flex-jc-between border-b pd-15" @click="radio = '1'">
                    <div class>
                        <img src="../../assets/weixin.png" alt="微信" class="payimg">
                        微信
                    </div>
                    <van-radio name="1" checked-color="#2DBBF1"></van-radio>
                </div>
                <div class="flex-jc-between border-b pd-15" @click="radio = '2'">
                <div class>
                    <img src="../../assets/ali.png" alt="支付宝" class="payimg">支付宝
                </div>
                <van-radio name="2" checked-color="#2DBBF1"></van-radio>
                </div>
                <div class="flex-jc-between pd-15" @click="radio = '3'">
                <div class>
                    <img src="../../assets/balance.png" alt="余额" class="payimg">
                    余额
                    <span class="fc-red"> ¥{{info.users_balance}}</span>
                </div>
                <van-radio name="3" checked-color="#2DBBF1"></van-radio>
                </div>
            </van-radio-group>
            </div>

        <div class="pd-t-100">
            <div class="btn text-c" @click="submit">提交</div>
        </div>

        <van-popup v-model="showWXpay" :close-on-click-overlay='false'>
            <div class="wxbox">
                <p class="text-c border-b">请确认微信支付是否完成</p>
                <p class="text-c fc-red border-b" @click="goback">已完成支付</p>
                <p class="text-c fc-grey" @click="showWXpay = false">支付遇到问题，重新支付</p>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { Toast, Dialog } from "vant";
export default {
    data(){
        return{
            radio: "3",
            info:'',
            money:'',
            showWXpay:false
        }
    },
    created(){
        let wxpayCompensationSession = JSON.parse(window.sessionStorage.getItem("wxpayCompensationSession"))
        if(wxpayCompensationSession){
            if(wxpayCompensationSession.orderid==this.$route.params.id){
                this.showWXpay = wxpayCompensationSession.state
            }
        }
        this.getinfo()
        this.getmoney()
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        getinfo() {
            let postData = this.$qs.stringify({
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                order_id : this.$route.params.id
            });
            this.axios.post(this.API + "api/Order/GetPayData", postData)
            .then(res => {
                console.log(res.data, "info");
                let resdata = res.data;
                if (resdata.code == 200) {
                    this.info = resdata.data;
                } else {
                Toast(resdata.message);
                }
            })
            .catch(error => {
                Toast('网络出错')
            });
        },
        getmoney() {
            let postData = this.$qs.stringify({
                order_id : this.$route.params.id
            });
            this.axios.post(this.API + "api/Lease_Order/getMaintenance", postData)
            .then(res => {
                console.log(res.data, "money");
                let resdata = res.data;
                if (resdata.code == 200) {
                    this.money = resdata.data.service_money
                } else {
                Toast(resdata.message);
                }
            })
            .catch(error => {
                Toast('网络出错')
            });
        },
        submit(){
            if(this.money==''||!this.money){
                return
            }

            if (this.radio == 1) {
                // Toast("微信功能未开通");
                Toast.loading({ mask: true, message: "加载中..." });
                let postData = this.$qs.stringify({
                    // users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                    order_id: this.$route.params.id,
                    pay_way: this.radio,
                });
                this.axios.post(this.API + "api/Lease_Order/maintenancePay", postData)
                .then(res => {
                    console.log(res.data, "wxpay");
                    let resdata = res.data;
                    if (resdata.code == 200) {
                        Toast.clear();
                        let wxpayCompensationSession = {
                            orderid:this.$route.params.id,
                            state: true
                        }
                        window.sessionStorage.setItem("wxpayCompensationSession", JSON.stringify(wxpayCompensationSession))
                        window.location.href = resdata.data
                    } else {
                        Toast.clear();
                        Toast(resdata.message);
                    }
                })
                .catch(error => {
                    Toast.clear()
                    Toast('网络出错')
                });
            }
            if (this.radio == 2) {
                // Toast("支付宝功能未开通");
                Toast.loading({ mask: true, message: "加载中..." });
                let postData = this.$qs.stringify({
                    // users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                    order_id: this.$route.params.id,
                    pay_way: this.radio,
                });
                this.axios.post(this.API + "api/Lease_Order/maintenancePay", postData)
                .then(res => {
                    console.log(res.data, "alipay");
                    window.sessionStorage.removeItem("wxpayCompensationSession");
                    Toast.clear()

                    const form = res.data;
                    const div = document.createElement('div');
                    div.id = 'alipay';
                    div.style.opacity='0'
                    div.innerHTML = form;
                    document.body.appendChild(div);
                    document.querySelector('#alipay').children[0].submit();
                })
                .catch(error => {
                    Toast.clear()
                    Toast('网络出错')
                });
            }
            if (this.radio == 3) {
                Toast.loading({ mask: true, message: "加载中..." });
                let postData = this.$qs.stringify({
                    // users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                    order_id: this.$route.params.id,
                    pay_way: this.radio,
                });
                this.axios.post(this.API + "api/Lease_Order/maintenancePay", postData)
                .then(res => {
                    console.log(res.data, "submit");
                    let resdata = res.data;
                    if (resdata.code == 200) {
                        Toast.clear();
                        Dialog.alert({
                            message: "支付成功"
                        }).then(e => {
                            this.$router.replace({ path: "/order" });
                        });
                    } else {
                        Toast.clear();
                        Toast(resdata.message);
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
.pd-t-100 {
  padding: 0 15px;
  padding-top: 100px;
}
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
.payimg {
  width: 20px;
  height: 20px;
  padding-right: 10px;
  vertical-align: middle;
}

.wxbox {
    width: 200px;
}
.wxbox > p {
    padding: 10px 0;
}
</style>
