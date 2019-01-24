<template>
    <div>
        <div class="header bgc mar-b-10 box-sizing">
            <div class="text-c">您的额度(元)</div>
            <div class="text-c num">0</div>
            <div class="text-c marb30"><router-link class="lines" to="/certification">提升额度</router-link></div>
            <div class="text-c">您的免押额度为0元,仍需支付<span class="fc-red"> ¥1170.00</span></div>
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
                    <div><img src="../../assets/balance.png" alt="余额" class="payimg">余额<span class="fc-red"> ¥2.00</span></div>
                    <van-radio name="3" checked-color="#2DBBF1"></van-radio>
                </div>
            </van-radio-group>
        </div>

        <div class="pd-t-50"><div class="btn text-c">支付</div></div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            radio:'1',
        }
    },
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
