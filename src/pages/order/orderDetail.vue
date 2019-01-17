<template>
    <div>
        <div class="header text-c">
            <div>待付款</div>
            <div>29分钟36秒的支付时间</div>
        </div>

        <div style="padding:0 15px">
        <div class="bgc">
            <div class="goods flexbox">
                <div class="flex-1">
                    <div>日本 instax拍立得</div>
                </div>
                <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt="">
            </div>
            <div>
                <div class="title">租赁信息</div>
                <div class="info">
                    <div class="flexbox">
                        <span>订单号</span>
                        <span class="flex-1">11901910265079</span>
                    </div>
                    <div class="flexbox">
                        <span>下单时间</span>
                        <span class="flex-1">2018.05.12 15:26:36</span>
                    </div>
                    <div class="flexbox">
                        <span>租期</span>
                        <span class="flex-1">6个小时</span>
                    </div>
                    <div class="flexbox">
                        <span>期望收到的日期</span>
                        <span class="flex-1">2018.5.15</span>
                    </div>
                    <div class="flexbox">
                        <span>取货方式</span>
                        <span class="flex-1">自取;本人</span>
                    </div>
                    <div class="flexbox">
                        <span>自取地点</span>
                        <span class="flex-1">深圳市龙华新区龙华街道九方A座
1001号</span>
                    </div>
                    <div class="flexbox">
                        <span>自取时间</span>
                        <span class="flex-1">2018.05.14</span>
                    </div>
                    <div class="flexbox">
                        <span>时间点</span>
                        <span class="flex-1">09:00-11:00  </span>
                    </div>
                    <div class="flexbox">
                        <span>自取联系人</span>
                        <span class="flex-1">曾小姐 </span>
                    </div>
                    <div class="flexbox">
                        <span>自取手机号码</span>
                        <span class="flex-1">18822815757</span>
                    </div>
                </div>
            </div>
            <div>
                <div class="title flex-jc-between"><span>应付总金额</span><span class="fc-red">¥1170.00</span></div>
                <div class="info">
                    <div class="flexbox">
                        <span>押金</span>
                        <span class="flex-1">¥1000.00</span>
                    </div>
                    <div class="flexbox">
                        <span>租金</span>
                        <span class="flex-1">¥1000.00</span>
                    </div>
                    <div class="flexbox">
                        <span>享受优惠</span>
                        <span class="flex-1">-¥50.00</span>
                    </div>
                    <div class="flexbox">
                        <span>保险费</span>
                        <span class="flex-1">¥1000.00</span>
                    </div>
                    <div class="flexbox">
                        <span>优惠券</span>
                        <span class="flex-1">-¥50.00</span>
                    </div>
                    <div class="flexbox">
                        <span>免押额度</span>
                        <span class="flex-1">-¥50.00</span>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="tools bgc">
            <div class="text-c border-blue fc-blue"><router-link v-bind="{to: '/comments'}">评价</router-link></div>
            <div class="text-c border"><router-link v-bind="{to: '/shopping'}">购买</router-link></div>
            <div class="text-c border"><router-link v-bind="{to: '/refund'}">退租</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.goods img {
    width: 72px;
    height: 72px;
}

.info div > span:nth-of-type(1) {
    width: 110px;
}
.tools > div{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        min-width: 82px;
        border-radius: 20px;
    }
</style>
