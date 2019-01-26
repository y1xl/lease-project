<template>
    <div>
        <div class="mar-b-10">
            <van-cell title="选择退租时间" is-link center :value="datetext" @click="go('/calendar/appointmentExpress')"></van-cell>  
            <van-cell title="时间段" is-link center :value="timequantumtext" @click="showtimequantum=true"></van-cell>  
        </div>

        <div class="address bgc flex-align-items pd-15" @click="go('/addresslist/appointmentExpress')">
            <div class="left bgc-brown flex-center">寄</div>
            <div class="flex-1 right">
                <div v-show="getaddress==''" class="fc-grey">请选择</div>
                <div class="mar-b-10">{{getaddress.name}} {{getaddress.phone}}</div>
                <div>{{getaddress.address}}</div>
            </div>
            <div><van-icon name="arrow" /></div>
        </div>

        <div class="address bgc flex-align-items pd-15">
            <div class="left bgc-blue flex-center">收</div>
            <div class="flex-1">
                <div class="mar-b-10">曾小姐 18822815757</div>
                <div>深圳市龙华新区龙华街道九方A座1001号</div>
            </div>
        </div>

        <div class="pd-t-100"><div class="btn text-c">提交</div></div>

        <van-popup v-model="showtimequantum" position="bottom" :close-on-click-overlay="false">
            <van-picker :columns="timequantumarr" show-toolbar @cancel="showtimequantum = false" @confirm="onConfirmTimequantum"/>
        </van-popup>
    </div>
</template>

<script>
export default {
    data(){
        return{
            datetext:'',
            getaddress:'',
            timequantumtext:'', //时间段
            showtimequantum: false, //时间段
            timequantumarr:['13:00-14:00','测试'] //时间段
        }
    },
    created() {
        let appointmentExpress = JSON.parse(window.sessionStorage.getItem("appointmentExpress"));
        if(appointmentExpress){
            this.datetext = appointmentExpress.date
            this.timequantumtext = appointmentExpress.timequantumtext
            this.getaddress = appointmentExpress.getaddress
        }
        //取缓存 end
    },
    methods:{
        go(url){
            let appointmentExpress = {
                date: this.datetext,
                timequantumtext: this.timequantumtext,
                getaddress:this.getaddress,
            }
            window.sessionStorage.setItem("appointmentExpress", JSON.stringify(appointmentExpress));
            this.$router.push({ path: url });
        },
        onConfirmTimequantum(value,index){
            console.log(`当前值：${value}, 当前索引：${index}`);
            this.timequantumtext = value
            this.showtimequantum = false
        },
    }
}
</script>

<style scoped>
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}

.pd-t-100{
    padding: 0 15px;
    padding-top: 100px;
}

.address .left{
    width: 32px;
    height: 32px;
    color: #fff;
    border-radius: 50%;
    margin-right: 15px;
}

</style>
