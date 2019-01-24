<template>
    <div>
        <div class="pd-15 bgc border-b">
            <span>收货人</span>
            <input type="text">
        </div>
        <div class="pd-15 bgc border-b">
            <span>手机号</span>
            <input type="text" maxlength="11" >
        </div>
        <div class="pd-15 flex-jc-between bgc border-b" @click="showarea=true">
            <span>所在地区</span>
            <div class="fc-grey flex-align-items">
                <span>{{areaval==''?'':areaval[0].name+areaval[1].name+areaval[2].name}}</span>
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="pd-15 bgc mar-b-10">
            <div>街道、小区门牌等详情地址</div>
            <div><input type="text" ></div>
        </div>
        <div class="pd-15 bgc flex-jc-between flex-align-items">
            <span>设为默认地址</span>
            <van-switch v-model="checked" size="20px"/>
        </div>

        <div class="pd-t-50"><div class="btn text-c">保存</div></div>

        <van-popup v-model="showarea" position="bottom" :close-on-click-overlay="false">
            <van-area :area-list="areaList" @cancel="showarea=false" @confirm="onconfirm"/>
        </van-popup>
    </div>
</template>

<script>
import area from '@/utils/area.js'
export default {
    data(){
        return{
            checked: false,
            showarea:false,
            areaval:'',
            areaList: area
        }
    },
    methods:{
        onconfirm(val){
            console.log(val);
            this.areaval = val
            this.showarea = false
        },
    }
}
</script>

<style scoped>
.pd-t-50{
    padding: 0 15px;
    padding-top: 50px;
}
.btn{
    height: 42px;
    line-height: 42px;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #2DBBF1 0%, #4EA9F9 100%);
}
</style>
