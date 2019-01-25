<template>
    <div>
        <div class="bgc pd-15">选择退租方式</div>
        <div class="nav bgc">
            <div :class="{ 'fc-blue selected': selected==0 }" @click="selected=0">自还</div>
            <div :class="{ 'fc-blue selected': selected==1 }" @click="selected=1">快递</div>
            <div :class="{ 'fc-blue selected': selected==2 }" @click="selected=2">配送</div>
        </div>

        <div v-show="selected==0">
            <div class="choose bgc flex-jc-around pd-15">
                <div class="border" :class="{ 'fc-blue border-blue': typenum==0 }" @click="typenum=0">本人</div>
                <div class="border" :class="{ 'fc-blue border-blue': typenum==1 }" @click="typenum=1">朋友代还</div>
            </div>
            <div class="text-c tip">温馨提示:选择朋友代还您需要发送给朋友打开才能还</div>

            <div class="pd-t-100"><div class="btn text-c">确定</div></div>
        </div>

        <div v-show="selected==1">
            <van-cell title="选择退租时间" is-link center :value="datetext" @click="go('/calendar/refund')"></van-cell>    
            <van-cell center :border="false">
                <div class="bgc flex-align-items" slot="title">
                    <span>快递单号</span>
                    <input type="text" placeholder="请输入" class="pdl" v-model="numval">
                </div>
            </van-cell>    

            <div class="text-c tip">温馨提示:如果未经平台预约寄送,请直接填写快递单号</div>
            <div class="pd-15"><div class="btn1 text-c" @click="go('/appointmentExpress')">快捷预约顺丰上门取件入口</div></div>
            <div class="pd-15"><div class="btn text-c">确定</div></div>
        </div>

        <div v-show="selected==2">
            <van-cell title="选择退租时间" is-link center :value="datetext" @click="go('/calendar/refund')"></van-cell>  
            <van-cell title="时间点" is-link center @click="showtime=true" :value="timetext"></van-cell>  
            <van-cell is-link center :border="false" @click="go('/addresslist/refund')">
                <template slot="title">
                    <div>收货地址</div>
                    <div>{{getaddress.name}}  {{getaddress.phone}} <van-tag plain v-if="getaddress.default">默认</van-tag></div>
                    <div>{{getaddress.address}}</div>
                </template>
            </van-cell>
            <div class="pd-t-100"><div class="btn text-c">提交</div></div>
        </div>

        <van-popup v-model="showtime" position="bottom" :close-on-click-overlay="false">
            <van-datetime-picker
            type="time"
            show-toolbar
            @cancel="showtime=false"
            @confirm="onConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selected:0,
            typenum:0,
            showtime:false,
            datetext:'',
            timetext:'',
            getaddress:'',
            numval:''
        }
    },
    created() {
        let refundSession = JSON.parse(window.sessionStorage.getItem("refundSession"));
        if(refundSession){
            this.selected = refundSession.backtype
            this.datetext = refundSession.backdate
            this.timetext = refundSession.backtime
            this.getaddress = refundSession.getaddress
            this.numval = refundSession.numval
        }
        //取缓存 end
    },
    methods:{
        go(url){
            let refundSession = {
                backtype: String(this.selected),
                backdate: this.datetext,
                backtime: this.timetext,
                getaddress:this.getaddress,
                numval:this.numval
            }
            window.sessionStorage.setItem("refundSession", JSON.stringify(refundSession));
            this.$router.push({ path: url });
        },
        onConfirm(value) {
            console.log(`当前值：${value}`);
            this.timetext = value
            this.showtime = false
        },
    }
}
</script>

<style scoped>
.pdl{
    padding-left: 10px
}
.tip{
    font-size: 10px;
    color: #666;
    padding-top: 15px;
}
.pd-t-100{
    padding: 0 15px;
    padding-top: 100px;
}
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
.nav {
    padding: 15px;
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

.choose > div{
    width: 112px;
  height: 32px;
  line-height: 32px;
  /* color: #666; */
  display: inline-block;
  border-radius: 5px;
  text-align: center;
}

.btn1{
    background-color: #B49A7A;
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
}

</style>
