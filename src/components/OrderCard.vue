<template>
<div>
    <div class="bgc card pd-15 ">
        <router-link v-bind="{to: '/orderDetail'}">
            <div class="flex-jc-between border-b mar-b-10" style="padding-bottom:10px"><span>订单号:11901910265079</span><span class="fc-blue">待确认</span></div>
            <div class="flexbox">
                <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt="" class="goodsimg bgc-grey">
                <div class="flex-1 right">
                    <div class="mar-b-10">日本 instax拍立得</div>
                    <div class="spec mar-b-10"><span>1件</span><span>黑色</span></div>
                    <div class="mar-b-10" style="font-size:13px"><span style="margin-right:15px">租金:￥123</span><span>押金:￥123</span></div>
                    <div>实付总额:<span class="fc-red">￥123</span></div>
                </div>
            </div>
            <div class="fc-red text-c overdue">
                <!-- 超期 -->
                <!-- <span>您的订单已超期2天!</span> -->
                <!-- 已预订 -->
                <span>要支付完剩余费用后才能发货哦!</span>
            </div>
        </router-link>
        <div class="tools ">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
    .card {
        border-radius: 8px
    }
    .card .goodsimg {
        width: 80px;
        height: 80px;
    }
    .card .right{
        padding-left: 10px;
    }
    .card .spec > span{
        display: inline-block;
        background-color: #F2F1F1;
        font-size: 12px;
        padding: 1px 5px;
        box-sizing: border-box;
        border-radius: 3px;
        margin-right: 8px;
    }
    .card .tools{
        padding-top: 15px;
        display: flex;
        justify-content: flex-end;
    }
    .card .tools > div{
        /* display: inline-block; */
        height: 25px;
        min-width: 70px;
        border-radius: 20px;
        box-sizing: border-box;
        margin-left: 10px;
        font-size: 13px;
    }
    .overdue{
        height: 30px;
        line-height: 30px;
        background-color: #FFE5E5;
        margin-top: 10px;
        border-radius: 2px;
        font-size: 12px;
    }
</style>
