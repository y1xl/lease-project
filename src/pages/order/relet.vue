<template>
    <div>
        <div class="bgc mar-b-10">
            <div class="border-b flex-jc-between">
                <span>选择续租的时间</span>
                <div class="time">
                    <div class="border text-line" @click="isshow = true">{{timetext}}</div>
                    <div class="border">
                        <input type="text">
                    </div>
                </div>
            </div>
            <div>租金:<span class="fc-red">¥100.00</span></div>
        </div>

        <div class="bgc">
            <div class="border-b">请选择支付方式</div>
            <van-radio-group v-model="radio">
                <div class="flex-jc-between border-b" @click="radio = '1'">
                    <div>微信</div>
                    <van-radio name="1" checked-color="#2DBBF1"></van-radio>
                </div>
                <div class="flex-jc-between border-b" @click="radio = '2'">
                    <div>支付宝</div>
                    <van-radio name="2" checked-color="#2DBBF1"></van-radio>
                </div>
                <div class="flex-jc-between " @click="radio = '3'">
                    <div>余额<span class="fc-red">¥2.00</span></div>
                    <van-radio name="3" checked-color="#2DBBF1"></van-radio>
                </div>
            </van-radio-group>
        </div>

        <div style="padding:0 10px"><div class="btn text-c">提交</div></div>

        <div v-show="isshow" class="model full">
            <div class="main"><van-picker :columns="columns" show-toolbar @confirm="onConfirm" @cancel="isshow = false"/></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            radio:1,
            isshow: false,
            columns: ['天', '小时', '分钟', '测试', '测试'],
            timetext: '请选择'
        }
    },
    methods:{
        onConfirm(value, index) {
            console.log(`当前值：${value}, 当前索引：${index}`);
            this.timetext = value
            this.isshow = false
        },
    }
}
</script>

<style scoped>
.time > div{
    display: inline-block;
    width: 82px;
    height: 29px;
    line-height: 29px;
    border-radius: 5px;
    overflow: hidden;
    text-align: center;
}
.time input {
    width: 100%;
    text-align: center;
}

.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}

.model {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
}
.main {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>
