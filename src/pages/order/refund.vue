<template>
    <div>
        <div class="bgc">选择退租方式</div>
        <div class="nav bgc">
            <div :class="{ 'fc-blue selected': selected==0 }" @click="selected=0">自还</div>
            <div :class="{ 'fc-blue selected': selected==1 }" @click="selected=1">快递</div>
            <div :class="{ 'fc-blue selected': selected==2 }" @click="selected=2">配送</div>
        </div>

        <div v-show="selected==0">
            <!-- <div class="nav bgc">
                <div :class="{ 'fc-blue selected': selected==0 }" @click="selected=0">自还</div>
                <div :class="{ 'fc-blue selected': selected==1 }" @click="selected=1">快递</div>
                <div :class="{ 'fc-blue selected': selected==2 }" @click="selected=2">配送</div>
            </div> -->
            <div>温馨提示:选择朋友代还您需要发送给朋友小程序打开才能还</div>
        </div>

        <div v-show="selected==1">
            1
        </div>

        <div v-show="selected==2">
            2
        </div>

        <div style="padding:0 10px"><div class="btn text-c">确定</div></div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            selected:0,
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
</style>
