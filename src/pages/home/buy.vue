<template>
    <div>
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
                <van-cell is-link center to="/calendar">
                    <template slot="title">
                        <div>自取时间</div>
                        <div>{{datechoose}}</div>
                    </template>
                </van-cell>
                <van-cell is-link center to="/people">
                    <template slot="title">
                        <div>自取联系人</div>
                        <div>{{people.name}}  {{people.phone}}</div>
                    </template>
                </van-cell>
            </template>
        </div>

        <div class="pd-15 bgc">
            <div class="goods flexbox">
                <img src="http://img0.imgtn.bdimg.com/it/u=2486649772,2680843008&fm=26&gp=0.jpg" alt="">
                <div class="flex-1">
                    <div class="mar-b-10">日本 instax拍立得</div>
                    <div>黑色</div>
                </div>
            </div>
        </div>

        <div class="mar-b-10">
            <van-cell title="租期" center >
                <div class="time">
                    <div class="border text-line flex-center" @click="showweek = true">{{weektext}}</div>
                    <div class="border flex-center">
                        <input type="text">
                    </div>
                </div>
            </van-cell>
            <van-cell title="期望收到的日期" is-link center v-show="typenum==0"></van-cell>
            <van-cell is-link center v-show="typenum==1||typenum==2">
                <template slot="title">
                    <div>期望收到的日期</div>
                    <div style="font-size:12px" class="fc-grey">收到货的次日起算租金</div>
                </template>
            </van-cell>
            <!-- 预租 -->
            <van-cell is-link center v-show="typenum==1||typenum==2">
                <template slot="title">
                    <div>预约期望档期</div>
                    <div style="font-size:12px" class="fc-grey">收到货的次日起算租金</div>
                </template>
            </van-cell>
            <van-cell title="配送时间段" center value="" is-link v-show="typenum==2" to="/timeQuantum"></van-cell>
            <van-cell title="时间点" is-link center @click="onshowtime" :value="timetext" v-show="typenum==0"></van-cell>
        </div>

        <div class="mar-b-10">
            <van-cell title="运费" center value="￥13" v-show="typenum==1"></van-cell>
            <van-cell title="配送运费" center value="￥13" v-show="typenum==2"></van-cell>
            <van-cell title="优惠券" is-link center :value="couponstext"></van-cell>
            <van-cell title="保险费 ￥20" center>
                <div class="flex-align-items" style="justify-content: flex-end"><van-switch v-model="checked" size="20px"/></div>
            </van-cell>
            <van-cell title="享受优惠" is-link center :value="activitytext"></van-cell>
            <van-cell center v-show="typenum==2">
                <div slot="title">
                    <span>特殊需求备注</span>
                    <input type="text" placeholder="请输入">
                </div>       
            </van-cell>
        </div>

        <div class="mar-b-10">
            <van-cell title="押金" center value="￥1000"></van-cell>
            <van-cell title="租金" center value="￥1000"></van-cell>
            <van-cell title="应付总金额" center value="">
                <span class="fc-red">￥1000</span>
            </van-cell>
        </div>
        <!-- 预租 有库存-->
        <div class="mar-b-10">
            <van-cell title="应付定金" center value="">
                <span class="fc-red">￥1000</span>
            </van-cell>
        </div>

        <div class="bgc pd-15">
            <div class="mar-b-10">
                <van-checkbox checked-color="#2DBBF1" v-model="isconsent">同意租赁协议</van-checkbox>
            </div>
            <div><div class="btn text-c">信用免押支付</div></div>
        </div>

        <!-- 弹框 -->
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

        <div v-show="showweek" class="model full">
            <div class="main"><van-picker :columns="columns" show-toolbar @confirm="onConfirmWeek" @cancel="showweek = false"/></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            typenum:0,
            showtime:false,
            timetext:'',
            datechoose: '',
            people:'',
            couponstext:'无可用',//优惠券
            activitytext:'',//优惠
            showweek: false,
            columns: ['天', '小时', '分钟', '测试', '测试'],
            weektext: '请选择',
            checked: false,
            isconsent:true
        }
    },
    methods:{
        onshowtime(){
            if(this.showtime){
                // document.documentElement.style.position = 'static';
                document.body.style.overflow = ''; //出现滚动条
                this.showtime = false
            }else{
                // document.documentElement.style.position = 'fixed';
                document.documentElement.style.width = '100%';
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
        onConfirmWeek(value,index){
            console.log(`当前值：${value}, 当前索引：${index}`);
            this.weektext = value
            this.showweek = false
        }
    }
}
</script>

<style scoped>
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

.time {
    display: flex;
}
.time > div{
    width: 70px;
    height: 25px;
    border-radius: 5px;
    overflow: hidden;
    /* font-size: 12px; */
}
.time > div:nth-of-type(1){
    margin-right: 5px;
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
.model .main {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}

</style>
