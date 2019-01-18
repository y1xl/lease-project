<template>
    <div>
        <div class="bgc">选择退租方式</div>
        <div class="nav bgc">
            <div :class="{ 'fc-blue selected': selected==0 }" @click="selected=0">自还</div>
            <div :class="{ 'fc-blue selected': selected==1 }" @click="selected=1">快递</div>
            <div :class="{ 'fc-blue selected': selected==2 }" @click="selected=2">配送</div>
        </div>

        <div v-show="selected==0">
            <div class="choose bgc flex-jc-around">
                <div class="border" :class="{ 'fc-blue border-blue': typenum==0 }" @click="typenum=0">本人</div>
                <div class="border" :class="{ 'fc-blue border-blue': typenum==1 }" @click="typenum=1">朋友代还</div>
            </div>
            <div style="font-size:12px" class="text-c">温馨提示:选择朋友代还您需要发送给朋友小程序打开才能还</div>

            <div style="padding:0 10px"><div class="btn text-c">确定</div></div>
        </div>

        <div v-show="selected==1">
            <van-cell title="选择退租时间" is-link center :value="datetext"></van-cell>    
            <div class="bgc">
                <span>快递单号</span>
                <input type="text" placeholder="请输入" >
            </div>

            <div style="font-size:12px" class="text-c">温馨提示:如果未经平台预约寄送,请直接填写快递单号</div>
            <div style="padding:0 10px"><div class="btn1 text-c">快捷预约顺丰上门取件入口</div></div>
            <div style="padding:0 10px"><div class="btn text-c">确定</div></div>
        </div>

        <div v-show="selected==2">
            <van-cell title="选择退租时间" is-link center :value="datetext"></van-cell>  
            <van-cell is-link center to="" >
                <template slot="title">
                    <div>收货地址</div>
                    <div>曾小姐  18822815757 <span>默认</span></div>
                    <div>深圳市龙华新区龙华街道九方A座1001号</div>
                </template>
            </van-cell>
            <div style="padding:0 10px"><div class="btn text-c">提交</div></div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            selected:0,
            typenum:0,
            datetext:''
        }
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
.nav > div {
  width: 103px;
  height: 37px;
  line-height: 37px;
  /* color: #666; */
  display: inline-block;
  box-shadow: 0 1px 7px 1px #E8E9EA;
  margin-left: 10px;
  border-radius: 20px;
  text-align: center;
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
