<template>
    <div>
        <div class="bgc pd-15">选择购买产品</div>
        <div class="nav bgc pd-lr-15">
            <div :class="{ 'fc-blue selected': selected==0 }" @click="selected=0">全新正品</div>
            <div :class="{ 'fc-blue selected': selected==1 }" @click="selected=1">本机</div>
        </div>
        <div class="pd-lr-15 bgc mar-b-10">
            <div class="goods flexbox">
                <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt="">
                <div class="flex-1">
                    <div class="mar-b-10">日本 instax拍立得</div>
                    <div v-if="selected==0">该新品官方价格 ¥6000.00</div>
                    <div v-if="selected==1">本机原价 ¥6000.00</div>
                </div>
            </div>
            <div class="price">目前销售价格<span class="fc-red">¥6000.00</span></div>
        </div>

        <template v-if="selected==0">
            <van-cell title="选择规格参数" is-link value="黑色,1件" />

            <div class="bgc">
                <div class="pd-15">取货方式</div>
                <div class="nav bgc pd-lr-15">
                    <div :class="{ 'fc-blue selected': typenum==0 }" @click="typenum=0">自取</div>
                    <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">快递</div>
                    <div :class="{ 'fc-blue selected': typenum==2 }" @click="typenum=2">配送</div>
                </div>
            </div>

            <div class="mar-b-10 main">
                <van-cell is-link center to="" v-show="typenum==1||typenum==2">
                    <div slot="title">
                        <div>收货地址</div>
                        <div>曾小姐  18822815757 <van-tag plain>默认</van-tag></div>
                        <div>深圳市龙华新区龙华街道九方A座1001号</div>
                    </div>
                </van-cell>
                <template v-if="typenum==0">
                    <van-cell is-link center to="/locationList">
                        <template slot="title">
                            <div>自取地点</div>
                            <div>深圳龙华九方店</div>
                            <div>深圳市龙华新区龙华街道九方A座1001号</div>
                        </template>
                    </van-cell>
                    <van-cell is-link center to="">
                        <template slot="title">
                            <div>自取时间</div>
                            <div>2019年1月9日</div>
                        </template>
                    </van-cell>
                    <van-cell title="时间点" is-link center @click="onshowtime" :value="timetext"></van-cell>
                    <van-cell is-link center to="/people">
                        <template slot="title">
                            <div>自取联系人</div>
                            <div>{{people.name}}  {{people.phone}}</div>
                        </template>
                    </van-cell>
                </template>
            </div>
        </template>

        <div class="bgc mar-b-10">
            <template v-if="selected==0">
            <div class="flex-jc-between border-b pd-15"><span>租金可抵消费额度</span><span>¥3000.00</span></div>
            <div class="flex-jc-between border-b pd-15"><span>可拿到货时间</span><span>1-3天</span></div>
            <div class="flex-jc-between border-b pd-15"><span>享受优惠</span><span>-¥50.00</span></div>
            </template>
            <div class="flex-jc-between border-b pd-15" v-show="selected==1"><span>租金可抵消费额度</span><span>¥2050.00</span></div>
            <div class="flex-jc-between border-b pd-15"><span>应付总额</span><span class="fc-red">¥2050.00</span></div>
        </div>

        <div class="bgc">
            <div class="border-b pd-15">请选择支付方式</div>
            <van-radio-group v-model="radio">
                <div class="flex-jc-between border-b pd-15" @click="radio = '1'">
                    <div>微信</div>
                    <van-radio name="1" checked-color="#2DBBF1"></van-radio>
                </div>
                <div class="flex-jc-between border-b pd-15" @click="radio = '2'">
                    <div>支付宝</div>
                    <van-radio name="2" checked-color="#2DBBF1"></van-radio>
                </div>
                <div class="flex-jc-between pd-15" @click="radio = '3'">
                    <div>余额<span class="fc-red">¥2.00</span></div>
                    <van-radio name="3" checked-color="#2DBBF1"></van-radio>
                </div>
            </van-radio-group>
        </div>

        <div class="pd-15"><div class="btn text-c">支付</div></div>

        <div v-show="showtime" class="model full">
            <div class="main">
            <van-datetime-picker
            type="time"
            show-toolbar
            @cancel="onshowtime"
            @confirm="onConfirm"
            />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            radio:1,
            selected:0,
            typenum:0,
            showtime:false,
            timetext:'',
            people:''
        }
    },
    created(){
        this.people = JSON.parse(window.sessionStorage.getItem("people"))||''
    },
    methods:{
        onshowtime(){
            if(this.showtime){
                document.documentElement.style.position = 'static';
                document.body.style.overflow = ''; //出现滚动条
                this.showtime = false
            }else{
                document.documentElement.style.position = 'fixed';
                document.body.style.overflow = 'hidden'; //隐藏滚动条
                this.showtime = true
            } 
        },
        onConfirm(value) {
            console.log(`当前值：${value}`);
            this.timetext = value
            document.documentElement.style.position = 'static';
            document.body.style.overflow = ''; //出现滚动条
            this.showtime = false
        },
    }
}
</script>

<style scoped>
.fsz14{
    font-size: 14px
}
.nav {
    /* padding: 15px; */
    padding-bottom: 20px;
}
.nav > div {
  width: 80px;
  height: 30px;
  line-height: 30px;
  /* color: #666; */
  display: inline-block;
  box-shadow: 0 1px 7px 1px #E8E9EA;
  /* margin-left: 10px; */
  border-radius: 20px;
  text-align: center;
  box-sizing: border-box;
  font-size: 13px;
  margin-right: 10px;
}
.nav .selected {
    box-shadow: 0 1px 7px 1px #DEF4FD;
}
.goods {
    background-color: #f6f6f6;
    padding: 10px;
}
.goods img {
    width: 66px;
    height: 66px;
    background-color: #fff;
    margin-right: 10px;
}
.price {
    padding: 10px 0;
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
.model .main {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>
