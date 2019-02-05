<template>
    <div>
        <div class="header bgc mar-b-10 box-sizing">
            <div class="text-c">您的额度(元)</div>
            <div class="text-c num">{{info.users_money}}</div>
            <div class="text-c marb30"><router-link class="lines" to="/certification">提升额度</router-link></div>
            <div class="text-c">您的押金为{{info.order_credit_rent}}元,仍需支付<span class="fc-red"> ¥{{info.order_rent}}</span></div>
        </div>

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

        <div class="pd-t-50"><div class="btn text-c" @click="submit">支付</div></div>

    </div>
</template>

<script>
import { Toast,Dialog } from "vant";
export default {
    data(){
        return{
            radio:'1',
            info:''
        }
    },
    created(){
        this.getinfo()
        // this.getfaceRes()
    },
    methods:{
        getfaceRes() {
            this.axios.get("https://api.megvii.com/faceid/lite/get_result?api_key=7WdSJGAzhmEuggj4EvL1RIC0Y9SzOS5n&&api_secret=CRSZvoqeeSWt1mM-hyt1BFgX67FOUOmF&&biz_id="+'1549183251,3472bf65-56e0-4057-8a98-ecd1a49b7f15')
            .then(res => {
                console.log(res.data, "getfaceRes");
                let resdata = res.data;
                if(resdata.status!='OK'){
                    Dialog.alert({
                        message: '请进行人脸识别认证'
                    }).then((e) => {
                        this.$router.replace({ path: "/face/33" })
                    });
                }
            });
        },   
        getinfo() {
            let postData = this.$qs.stringify({
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                order_id : this.$route.params.orderid
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
            });
        },
        submit(){
            if(this.radio==1){
                Toast('微信功能未开通')
            }
            if(this.radio==2){
                // Toast('支付宝功能未开通')
                Toast.loading({ mask: true,message: '加载中...'})
                let postData = this.$qs.stringify({
                    users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                    order_id : this.$route.params.orderid,
                    pay_way: this.radio
                });
                this.axios.post(this.API + "api/Order/GetPay", postData)
                .then(res => {
                    console.log(res.data, "alipay");
                    let resdata = res.data;

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
                });
            }
            if(this.radio==3){
                Toast.loading({ mask: true,message: '加载中...'})
                let postData = this.$qs.stringify({
                    users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
                    order_id : this.$route.params.orderid,
                    pay_way: this.radio
                });
                this.axios.post(this.API + "api/Order/GetPay", postData)
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
                        Toast(resdata.message);
                    }
                    
                });
            }
        }
    }
}
</script>

<style scoped>
.payimg{
    width: 20px;
    height: 20px;
    padding-right: 10px;
    vertical-align: middle;
}
.marb30{
    margin-bottom: 30px;
}
.header {
    height: 235px;
    padding-top: 30px;
}
.header .num {
    font-size: 40px;
    color: #2ebbf1;
    margin: 20px 0;
}
.header .lines {
    color: #FC8502;
    width: 100px;
    height: 35px;
    display: inline-block;
    text-align: center;
    line-height: 35px;
    box-shadow: 0px 1px 7px 1px #DAD7D7;
    border-radius: 5px;
}

.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
.pd-t-50{
    padding: 0 15px;
    padding-top: 50px;
    padding-bottom:15px;
}
</style>
